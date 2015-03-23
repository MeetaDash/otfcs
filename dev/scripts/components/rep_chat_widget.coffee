class RepServicePanel extends EventEmitter2

  constructor: (panel, representativeName) ->
    super()
    @videoProperties =
      insertMode: 'append',
      width: '100%',
      height: '100%',
      style:
        buttonDisplayMode: 'auto',
        nameDisplayMode: 'on',
        audioLevelDisplayMode: 'off'

    @connected = false
    @onCallTime = 0
    @pollingInterval = 5000
    @customerWaitExpirationInterval = 5000

    @$panel = $(panel)
    @$publisher = @$panel.find ".publisher"
    @$subscriber = @$panel.find ".subscriber"
    @$endCall = @$panel.find ".end-call"
    @$startArchive = @$panel.find ".btn-record"
    @$stopArchive = @$panel.find ".btn-record-stop"
    @$customerName = @$panel.find ".customer-name"
    @$dragChat = @$panel.find "#chat-collapse"
    @$textChat = @$panel.find ".text-chat"
    @$messageLog = @$panel.find ".messages"
    @$messageText = @$panel.find ".message-text"
    @$sendButton = @$panel.find ".btn-send"
    @$btnChat = @$panel.find ".btn-chat"
    @$chatWrap = @$panel.find "#chat-opts"

    @repName = representativeName

    @dequeueData = '_METHOD=DELETE'
    config = @publisherConfig()
    @publisher = OT.initPublisher(config.el, config.props)
    @publisher.on('accessAllowed', this.publisherAllowed, this)
      .on('accessDenied', this.publisherDenied, this)

    @$endCall.on "click", this.endCall
    @$startArchive.on "click", this.startArchive
    @$stopArchive.on "click", this.stopArchive

    console.log 'RepServicePanel constructor called'

  start: =>
    console.log 'RepServicePanel starting'
    @publisher.on 'streamDestroyed', (event) ->
      event.preventDefault()

  publisherConfig: =>
    el: @$publisher[0],
    props:
      insertMode: 'append'
      width: '100%'
      height: '100%'
      name: "#{@repName}, Financial Advisor"
      style:
        buttonDisplayMode: 'off'
        nameDisplayMode: 'off'
        audioLevelDisplayMode: 'off'

  getCustomer: =>
    $.post('/help/queue', @dequeueData, 'json')
      .done (customerData, textStatus, jqXHR) =>
        if jqXHR.status == 200
          @beginCall(customerData)
        else if jqXHR.status == 204
          setTimeout(@getCustomer, @pollingInterval)
      .fail () ->
        @clearCustomer()

  beginCall: (customerData) =>
    console.log 'Beginning Call'
    @renderCustomer customerData

    @videoProperties.name = customerData.customerName

    @session = OT.initSession customerData.apiKey, customerData.sessionId
    @session.on "sessionConnected", @sessionConnected
    @session.on "sessionDisconnected", @sessionDisconnected
    @session.on "streamCreated", @streamCreated
    @session.on "streamDestroyed", @streamDestroyed
    @session.on 'signal:chat', @messageReceived
    @session.on "signal:archiveAdded", this._archiveAdded, this
    @session.on "signal:archiveReady", this._archiveReady, this
    @session.connect customerData.token, (err) ->
      if err && err.code == 1006
        console.log 'Connecting to the session failed. Try connecting to this session again.'

    @$sendButton.on 'click', @sendMessage
    @$messageText.on 'keyup', @sendMessageOnEnter
    @$startArchive.show()
    @$stopArchive.hide()
    @enableTextChat()

  enableTextChat: =>
    @$textChat.show()
    @$dragChat.draggable
      snap: '.container'
      snapMode: 'inner'
      snapTolerance: 10

  startArchive: =>
    @$startArchive.hide()
    $.get "/archive/start", { session_id: @session.sessionId, name: "Portfolio Review" }, (archive) =>
      @archive = archive
      @$stopArchive.show()
      window.OTCSF.addArchive archive
      @signalArchiveMessage archive, "archiveAdded"

  stopArchive: =>
    @$stopArchive.hide()
    archiveId = @archive.id
    $.get "/archive/stop/#{archiveId}", (response) =>
      @$startArchive.show()
      setTimeout @askArchiveReady, 3000

  askArchiveReady: =>
    $.get "/archive/#{@archive.id}", (archive) =>
      console.log archive
      @archive = undefined
      window.OTCSF.archiveReady archive
      @signalArchiveMessage archive, "archiveReady"

  signalArchiveMessage: (archive, type) =>
    @session.signal {
      type: type
      data:
        archive: archive
    }, (error) ->
      if error
        console.log "Error signaling #{type}", error


  renderCustomer: (customerData) =>
    @$customerName.text customerData.customerName
    @$endCall.show()

  sessionConnected: =>
    @waitingForCustomer = true
    setTimeout @waitForCustomerExpired, @customerWaitExpirationInterval

    @connected = true

    @session.publish @publisher, (err) ->
      if err && err.code == 1013
        console.log 'The publisher failed to connect.'
        @endCall()

  sessionDisconnected: =>
    @connected = false
    @subscriber = undefined
    @session.off()
    @session = undefined
    @clearCustomer()

    setTimeout(@getCustomer, 10000)

  streamCreated: (event) =>
    if not @subscriber
      @waitingForCustomer = false
      @subscriber = @session.subscribe event.stream, @$subscriber[0], @videoProperties, (err) ->
        if err && err.code == 1600
          console.log 'An internal error occurred. Try subscribing to this stream again.'
      @startCallTimer()
    @$chatWrap.show();

  streamDestroyed: (event) =>
    console.log 'Stream Destroyed'
    if @subscriber && event.stream == @subscriber.stream
      @endCall()
    @getCustomer()

  startCallTimer: =>
    increaseTimer = =>
      @onCallTime += 1
      $('#callTime').html(moment().hour(0).minute(0).second(@onCallTime).format('mm:ss'))
    @timerId = setInterval(increaseTimer, 1000)

  stopTimer: =>
    @onCallTime = 0
    clearInterval(@timerId)

  sendMessage: =>
    self = this
    text = this.$messageText.val()
    return unless !!text
    @session.signal {
      type: 'chat'
      data:
        from: @repName
        text: text
    }, (error) ->
      if !error
        self.$messageText.val ''
      return
    return

  sendMessageOnEnter: (e) =>
    if e.keyCode == 13
      @sendMessage()
    return

  messageReceived: (event) =>
    mine = @_eventMine(event)
    @_renderNewMessage event.data, mine
    @$textChat.scrollTop @$textChat[0].scrollHeight
    if @$textChat.is(":visible")
      @$btnChat.removeAttr("ios-counter")
    else
      count = parseInt(@$btnChat.attr("ios-counter")) || 0
      @$btnChat.attr("ios-counter", count + 1)
    return

  waitForCustomerExpired: =>
    if @waitingForCustomer
      @waitingForCustomer = false
      @endCall()

  clearCustomer: =>
    @$customerName.text('')
    @$chatWrap.hide()

    @$endCall.hide()
    @$textChat.hide()

    @$sendButton.off "click"
    @$messageText.off "keyup"
    @$messageLog.html ""

  endCall: =>
    if @connected
      @session.unpublish @publisher
      @session.disconnect()
    else
      @clearCustomer()
    @stopTimer()
    @stopArchive()

  publisherAllowed: =>
    @getCustomer()

  publisherDenied: =>
    return

  _eventMine: (event) =>
    event.from.connectionId == @session.connection.connectionId

  _archiveAdded: (event) =>
    return if @_eventMine(event)
    @archive = event.data.archive
    @$startArchive.hide()
    window.OTCSF.addArchive @archive

  _archiveReady: (event) =>
    return if @_eventMine(event)
    @archive = event.data.archive
    @$startArchive.show()
    window.OTCSF.archiveReady @archive

  _renderNewMessage: (data, mine) ->
    from = if mine then 'You' else data.from
    klass = if mine then 'from-me' else 'from-others'
    template = '<li class="' + klass + '"><label>' + from + ':</label><p>' + data.text + '</p></li>'
    @$messageLog.append template
    return

TBB.RepChatWidgetComponent = Ember.Component.extend
  didInsertElement: ->
    createdArchive = false
    repName = "Scott"
    serviceProvider = new RepServicePanel('#service-provider', repName)
    serviceProvider.start()
  actions:
    toggleChat: =>
      $(".btn-chat").toggleClass("pressed")
      if $(".btn-chat").hasClass("pressed")
        $("#chat-collapse").show().find("input").focus()
        $(".btn-chat").removeAttr("ios-counter")
      else
        $("#chat-collapse").hide()
