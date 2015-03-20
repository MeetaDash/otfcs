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

    @$panel = $(panel)
    @$publisher = @$panel.find(".publisher")
    @$subscriber = @$panel.find('.subscriber')
    @$textChat = @$panel.find('.text-chat')
    @$waitingHardwareAccess = @$panel.find('.waiting .hardware-access')
    @$waitingRepresentative = @$panel.find('.waiting .representative')
    @$closeButton = @$panel.find('.close-button')
    @$messageText = @$textChat.find('.message-text')
    @$sendButton = @$textChat.find('.btn-send')
    @$messageLog = @$textChat.find('.history')

    setTimeout @initialize, 0

  initialize: =>
    @session = OT.initSession(@apiKey, @sessionId)
    @session.on "sessionConnected", this._sessionConnected, this
    @session.on "sessionDisconnected", this._sessionDisconnected, this
    @session.on "streamCreated", this._streamCreated, this
    @session.on "streamDestroyed", this._streamDestroyed, this
    @session.on "signal:chat", this._messageReceived, this
    @session.on "signal:archiveAdded", this._archiveAdded, this
    @session.on "signal:archiveReady", this._archiveReady, this

    @publisher = OT.initPublisher(@$publisher[0], @_videoProperties)
    @publisher.on "accessAllowed", this._publisherAllowed, this
      .on "accessDenied", this._publisherDenied, this

    @$closeButton.on 'click', @close.bind(this)
    @$panel.show()
    @$publisher.children().not(':last').remove()
    @$waitingHardwareAccess.show()
    @$sendButton.on 'click', @sendMessage.bind(this)
    @$messageText.on 'keyup', @sendMessageOnEnter.bind(this)

    @emit "open"

  sendMessage: =>
    self = this
    @session.signal {
      type: 'chat'
      data:
        from: @customerName
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

  close: =>
    if @connected
      @session.disconnect()
    else
      @_cleanUp()

  _archiveAdded: (event) =>
    @archive = event.data.archive
    window.OTCSF.addArchive @archive

  _archiveReady: (event) =>
    @archive = event.data.archive
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
    console.log 'Rep joins!!'
    if not @subscriber
      @subscriber = @session.subscribe(event.stream, @$subscriber[0], @_videoProperties, (err) ->
        # Handle subscriber error
        if err and err.code == 1600
          console.log 'An internal error occurred. Try subscribing to this stream again.'
        return
      )
      @$closeButton.text 'End call'
      @$waitingRepresentative.hide()
      @$panel.removeClass 'on-queue'
      @$publisher.show()
      @$textChat.show()
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
    @$messageLog.scrollTop @$messageLog[0].scrollHeight
    return

  _renderNewMessage: (data, mine) ->
    from = if mine then 'You' else data.from
    template = '<div class="message"><div class="from">' + from + '</div><div class="msg-body">' + data.text + '</div></div>'
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
    @$textChat.hide()
    @$messageLog.html ''
    @$closeButton.off().text 'Cancel call'
    @session.off()
    @publisher.off()
    if @queueId
      @_dequeue()
    @$panel.hide()
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
        servicePanel = new ServicePanel("#service-panel", config, customerName)
        servicePanel.on "close", ->
          servicePanel.removeAllListeners()
          servicePanel = undefined

    $('.chat-widget').draggable
      snap: '.container'
      snapMode: 'inner'
      snapTolerance: 10
