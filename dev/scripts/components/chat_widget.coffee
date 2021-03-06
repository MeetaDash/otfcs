class ServicePanel extends EventEmitter2
  constructor: (panel, sessionData, customerName) ->
    super()
    @customerName = customerName
    @apiKey = sessionData.apiKey
    @sessionId = sessionData.sessionId
    @token = sessionData.token
    @_videoProperties =
      insertMode: 'append',
      width: '100%',
      height: '100%',
      style:
        buttonDisplayMode: 'auto',
        nameDisplayMode: 'on',
        audioLevelDisplayMode: 'off'

    @connected = false

    @$parent = $(panel)
    @$panel = @$parent.find "#service-panel"
    @dragChat = @$panel.find "#text-panel"
    @$textChat = @$panel.find ".text-chat"
    @$actionsBar = @$panel.find ".cw-actions"
    @$publisher = @$panel.find(".publisher")
    @$subscriber = @$panel.find('.subscriber')
    @$waitingHardwareAccess = @$panel.find('.waiting .hardware-access')
    @$waitingRepresentative = @$panel.find('.waiting .representative')
    @$closeButton = @$panel.find('.close-button')
    @$endButton = @$panel.find ".end-call"
    @$btnChat = @$panel.find ".btn-chat"
    @$messageText = @dragChat.find('.message-text')
    @$sendButton = @dragChat.find('.btn-send')
    @$messageLog = @dragChat.find('.messages')

    @$startArchive = @$panel.find ".btn-record"
    @$stopArchive = @$panel.find ".btn-record-stop"

    setTimeout @initialize, 0

  initialize: =>
    @session = OT.initSession(@apiKey, @sessionId)
    @session.on "sessionConnected", this._sessionConnected, this
    @session.on "sessionDisconnected", this._sessionDisconnected, this
    @session.on "streamCreated", this._streamCreated, this
    @session.on "streamDestroyed", this._streamDestroyed, this
    @session.on "archiveStopped", this._archiveStopped, this
    @session.on "signal:chat", this._messageReceived, this
    @session.on "signal:sharedData", this._shareReceived, this
    @session.on "signal:archiveAdded", this._archiveAdded, this
    @session.on "signal:archiveReady", this._archiveReady, this

    @publisher = OT.initPublisher(@$publisher[0], @_videoProperties)
    @publisher.on "accessAllowed", this._publisherAllowed, this
      .on "accessDenied", this._publisherDenied, this

    @$closeButton.on 'click', @close.bind(this)
    @$endButton.on "click", @close.bind(this)
    @$panel.show()
    @$publisher.children().not(':last').remove()
    @$waitingHardwareAccess.show()
    @$sendButton.on 'click', @sendMessage.bind(this)
    @$messageText.on 'keyup', @sendMessageOnEnter.bind(this)

    @$startArchive.on "click", this.startArchive
    @$stopArchive.on "click", this.stopArchive

    @emit "open"

  sendMessage: =>
    self = this
    text = this.$messageText.val()
    return unless !!text
    @session.signal {
      type: 'chat'
      data:
        from: @customerName
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

  close: =>
    if @connected
      @session.disconnect()
    else
      @_cleanUp()

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
      if archive.url == null
        setTimeout @askArchiveReady, 3000
        return
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

  _eventMine: (event) =>
    event.from.connectionId == @session.connection.connectionId

  _archiveStopped: (event) =>
    @$stopArchive.hide()

  _archiveAdded: (event) =>
    return if @_eventMine(event)
    @archive = event.data.archive
    @$startArchive.hide()
    @$stopArchive.show()
    window.OTCSF.addArchive @archive

  _archiveReady: (event) =>
    return if @_eventMine(event)
    @archive = event.data.archive
    @$startArchive.show()
    window.OTCSF.archiveReady @archive

  _sessionConnected: =>
    console.log 'Session Connected'
    @connected = true
    @session.publish @publisher, (err) =>
      if err && err.code == 1013
        @close()
    $.post('/help/queue', { 'session_id' : this.sessionId }, 'json')
      .done (data) =>
        @queueId = data.queueId
        window.onbeforeunload = @_dequeue.bind(@)

  _sessionDisconnected: =>
    @connected = false
    @_cleanUp()
    return

  _streamCreated: (event) =>
    # The representative joins the session
    if not @subscriber
      @subscriber = @session.subscribe(event.stream, @$subscriber[0], @_videoProperties, (err) ->
        # Handle subscriber error
        if err and err.code == 1600
          console.log 'An internal error occurred. Try subscribing to this stream again.'
        return
      )
      @$closeButton.hide()
      @$actionsBar.show()
      @$waitingRepresentative.hide()
      @$panel.removeClass 'on-queue'
      @$publisher.show()
      @$startArchive.show()
      # Invalidate queueId because if the representative arrived,
      # that means customer has been dequeued
      @queueId = undefined
      window.onbeforeunload = undefined
    return

  _streamDestroyed: (event) =>
    # If the representative leaves, the call is done
    if @subscriber and event.stream == @subscriber.stream
      @close()
    return

  _messageReceived: (event) =>
    mine = event.from.connectionId == @session.connection.connectionId
    @_renderNewMessage event.data, mine
    @$textChat.scrollTop @$textChat[0].scrollHeight
    if @$textChat.is(":visible")
      @$btnChat.removeAttr("ios-counter")
    else
      count =parseInt(@$btnChat.attr("ios-counter")) || 0
      @$btnChat.attr("ios-counter", count + 1)
    return

  _shareReceived: (event) =>
    if event.data.type == 'sharedContent'
      window.OTCSF.addSharedContent(event.data.data)
    else if event.data.type == 'meeting'
      window.OTCSF.showNewMeeting(event.data.data)
    return

  _renderNewMessage: (data, mine) ->
    from = if mine then 'You' else data.from
    klass = if mine then 'from-me' else 'from-others'
    template = '<li class="' + klass + '"><label>' + from + ':</label><p>' + data.text + '</p></li>'
    @$messageLog.append template
    return

  _publisherAllowed: =>
    @$waitingHardwareAccess.hide()
    @$waitingRepresentative.show()
    @session.connect @token, (err) ->
      # Handle connect failed
      if err and err.code == 1006
        console.log 'Connecting to the session failed. Try connecting to this session again.'
      return
    return

  _publisherDenied: =>
    @close()

  _cleanUp: =>
    @$waitingHardwareAccess.hide()
    @$waitingRepresentative.hide()
    @dragChat.hide()
    @$messageLog.html ''
    @$closeButton.off().text 'Cancel call'
    @session.off()
    @publisher.off()
    @$closeButton.off "click"
    @$endButton.off "click"
    @$sendButton.off "click"
    @$messageText.off "keyup"
    @$startArchive.off "click"
    @$stopArchive.off "click"
    @$messageLog.html ""
    if @queueId
      @_dequeue()
    @$panel.hide()
    window.OTCSF.startChat(false)
    @emit 'close'

  _dequeue: =>
    $.ajax(
      type: 'POST'
      url: '/help/queue/' + @queueId
      data: '_METHOD': 'DELETE'
      async: false
    ).done((data) ->
      console.log data
    ).always ->
      console.log 'dequeue request completed'
      return
    window.onbeforeunload = undefined

window.ServicePanel = ServicePanel

TBB.ChatWidgetComponent = Ember.Component.extend
  yOffset: window.pageYOffset
  setYOffset: ->
    @set 'yOffset', window.pageYOffset
  shouldChatStick: (->
    @get('yOffset') > 75
  ).property('yOffset')
  initialize: () =>
    @$panel = $("#service-panel")
    @$publisher = @panel.find(".publisher")
    @$subscriber = @panel.find(".subscriber")
  didInsertElement: =>
    # Add scroll listener
    $(window).on('scroll', $.proxy(this.setYOffset, this))
    customerName = 'Ian'
    $.post('/help/session', { customer_name: customerName }, 'json')
      .done (config) =>
        servicePanel = new ServicePanel("#main-panel", config, customerName)
        servicePanel.on "close", ->
          servicePanel.removeAllListeners()
          servicePanel = undefined

    config =
      snap: '.container'
      snapMode: 'inner'
      snapTolerance: 10
    $('#text-panel').draggable config

  actions:
    toggleChat: =>
      $(".btn-chat").toggleClass("pressed")
      if $(".btn-chat").hasClass("pressed")
        $("#text-panel").show().find("input").focus()
        $(".btn-chat").removeAttr("ios-counter")
      else
        $("#text-panel").hide()
