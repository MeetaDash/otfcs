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
    @$customerName = @$panel.find ".customer-name"
    @$messageLog = @$panel.find ".history"
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
    @$messageLog.scrollTop @$messageLog[0].scrollHeight
    return

  waitForCustomerExpired: =>
    if @waitingForCustomer
      @waitingForCustomer = false
      @endCall()

  clearCustomer: =>
    @$customerName.text('')
    @$chatWrap.hide()

    @$endCall.hide()

  endCall: =>
    if @connected
      @session.unpublish @publisher
      @session.disconnect()
    else
      @clearCustomer()
    @stopTimer()

  publisherAllowed: =>
    @getCustomer()

  publisherDenied: =>
    return

  _renderNewMessage: (data, mine) ->
    from = if mine then 'You' else data.from
    template = '<div class="message"><div class="from">' + from + '</div><div class="msg-body">' + data.text + '</div></div>'
    @$messageLog.append template
    return

TBB.RepChatWidgetComponent = Ember.Component.extend
  didInsertElement: ->
    createdArchive = false
    repName = "Scott"
    serviceProvider = new RepServicePanel('#service-provider', repName)
    serviceProvider.start()
