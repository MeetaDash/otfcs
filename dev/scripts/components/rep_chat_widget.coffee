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
    @session.on 'sessionConnected', @sessionConnected
    @session.on 'sessionDisconnected', @sessionDisconnected
    @session.on 'streamCreated', @streamCreated
    @session.on 'streamDestroyed', @streamDestroyed
    @session.on 'signal:chat', @messageReceived
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
    console.log('send...')
    self = this
    @session.signal {
      type: 'chat'
      data:
        from: @repName
        text: self.$messageText.val()
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
    mine = event.from.connectionId == @session.connection.connectionId
    @_renderNewMessage event.data, mine
    @$textChat.scrollTop @$textChat[0].scrollHeight
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

  _renderNewMessage: (data, mine) ->
    from = if mine then 'You' else data.from
    klass = if mine then 'from-me' else 'from-others'
    template = '<li class="' + klass + '"><label>' + data.from + ':</label><p>' + data.text + '</p></li>'
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
        $("#chat-collapse").show()
      else
        $("#chat-collapse").hide()
