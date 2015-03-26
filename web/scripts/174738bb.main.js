(function() {
  var TBB;

  TBB = window.TBB = Ember.Application.create();


(function() {
  var ServicePanel,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    _this = this;

  ServicePanel = (function(_super) {
    __extends(ServicePanel, _super);

    function ServicePanel(panel, sessionData, customerName) {
      this._dequeue = __bind(this._dequeue, this);
      this._cleanUp = __bind(this._cleanUp, this);
      this._publisherDenied = __bind(this._publisherDenied, this);
      this._publisherAllowed = __bind(this._publisherAllowed, this);
      this._messageReceived = __bind(this._messageReceived, this);
      this._streamDestroyed = __bind(this._streamDestroyed, this);
      this._streamCreated = __bind(this._streamCreated, this);
      this._sessionDisconnected = __bind(this._sessionDisconnected, this);
      this._sessionConnected = __bind(this._sessionConnected, this);
      this._archiveReady = __bind(this._archiveReady, this);
      this._archiveAdded = __bind(this._archiveAdded, this);
      this._eventMine = __bind(this._eventMine, this);
      this.signalArchiveMessage = __bind(this.signalArchiveMessage, this);
      this.askArchiveReady = __bind(this.askArchiveReady, this);
      this.stopArchive = __bind(this.stopArchive, this);
      this.startArchive = __bind(this.startArchive, this);
      this.close = __bind(this.close, this);
      this.sendMessageOnEnter = __bind(this.sendMessageOnEnter, this);
      this.sendMessage = __bind(this.sendMessage, this);
      this.initialize = __bind(this.initialize, this);
      ServicePanel.__super__.constructor.call(this);
      this.customerName = customerName;
      this.apiKey = sessionData.apiKey;
      this.sessionId = sessionData.sessionId;
      this.token = sessionData.token;
      this._videoProperties = {
        insertMode: 'append',
        width: '100%',
        height: '100%',
        style: {
          buttonDisplayMode: 'auto',
          nameDisplayMode: 'on',
          audioLevelDisplayMode: 'off'
        }
      };
      this.connected = false;
      this.$parent = $(panel);
      this.$panel = this.$parent.find("#service-panel");
      this.dragChat = this.$panel.find("#text-panel");
      this.$textChat = this.$panel.find(".text-chat");
      this.$actionsBar = this.$panel.find(".cw-actions");
      this.$publisher = this.$panel.find(".publisher");
      this.$subscriber = this.$panel.find('.subscriber');
      this.$waitingHardwareAccess = this.$panel.find('.waiting .hardware-access');
      this.$waitingRepresentative = this.$panel.find('.waiting .representative');
      this.$closeButton = this.$panel.find('.close-button');
      this.$endButton = this.$panel.find(".end-call");
      this.$btnChat = this.$panel.find(".btn-chat");
      this.$messageText = this.dragChat.find('.message-text');
      this.$sendButton = this.dragChat.find('.btn-send');
      this.$messageLog = this.dragChat.find('.messages');
      this.$startArchive = this.$panel.find(".btn-record");
      this.$stopArchive = this.$panel.find(".btn-record-stop");
      setTimeout(this.initialize, 0);
    }

    ServicePanel.prototype.initialize = function() {
      this.session = OT.initSession(this.apiKey, this.sessionId);
      this.session.on("sessionConnected", this._sessionConnected, this);
      this.session.on("sessionDisconnected", this._sessionDisconnected, this);
      this.session.on("streamCreated", this._streamCreated, this);
      this.session.on("streamDestroyed", this._streamDestroyed, this);
      this.session.on("signal:chat", this._messageReceived, this);
      this.session.on("signal:archiveAdded", this._archiveAdded, this);
      this.session.on("signal:archiveReady", this._archiveReady, this);
      this.publisher = OT.initPublisher(this.$publisher[0], this._videoProperties);
      this.publisher.on("accessAllowed", this._publisherAllowed, this.on("accessDenied", this._publisherDenied, this));
      this.$closeButton.on('click', this.close.bind(this));
      this.$endButton.on("click", this.close.bind(this));
      this.$panel.show();
      this.$publisher.children().not(':last').remove();
      this.$waitingHardwareAccess.show();
      this.$sendButton.on('click', this.sendMessage.bind(this));
      this.$messageText.on('keyup', this.sendMessageOnEnter.bind(this));
      this.$startArchive.on("click", this.startArchive);
      this.$stopArchive.on("click", this.stopArchive);
      return this.emit("open");
    };

    ServicePanel.prototype.sendMessage = function() {
      var self, text;
      self = this;
      text = this.$messageText.val();
      if (!text) {
        return;
      }
      this.session.signal({
        type: 'chat',
        data: {
          from: this.customerName,
          text: text
        }
      }, function(error) {
        if (!error) {
          self.$messageText.val('');
        }
      });
    };

    ServicePanel.prototype.sendMessageOnEnter = function(e) {
      if (e.keyCode === 13) {
        this.sendMessage();
      }
    };

    ServicePanel.prototype.close = function() {
      if (this.connected) {
        return this.session.disconnect();
      } else {
        return this._cleanUp();
      }
    };

    ServicePanel.prototype.startArchive = function() {
      var _this = this;
      this.$startArchive.hide();
      return $.get("/archive/start", {
        session_id: this.session.sessionId,
        name: "Portfolio Review"
      }, function(archive) {
        _this.archive = archive;
        _this.$stopArchive.show();
        window.OTCSF.addArchive(archive);
        return _this.signalArchiveMessage(archive, "archiveAdded");
      });
    };

    ServicePanel.prototype.stopArchive = function() {
      var archiveId,
        _this = this;
      this.$stopArchive.hide();
      archiveId = this.archive.id;
      return $.get("/archive/stop/" + archiveId, function(response) {
        _this.$startArchive.show();
        return setTimeout(_this.askArchiveReady, 3000);
      });
    };

    ServicePanel.prototype.askArchiveReady = function() {
      var _this = this;
      return $.get("/archive/" + this.archive.id, function(archive) {
        console.log(archive);
        _this.archive = void 0;
        window.OTCSF.archiveReady(archive);
        return _this.signalArchiveMessage(archive, "archiveReady");
      });
    };

    ServicePanel.prototype.signalArchiveMessage = function(archive, type) {
      return this.session.signal({
        type: type,
        data: {
          archive: archive
        }
      }, function(error) {
        if (error) {
          return console.log("Error signaling " + type, error);
        }
      });
    };

    ServicePanel.prototype._eventMine = function(event) {
      return event.from.connectionId === this.session.connection.connectionId;
    };

    ServicePanel.prototype._archiveAdded = function(event) {
      if (this._eventMine(event)) {
        return;
      }
      this.archive = event.data.archive;
      this.$startArchive.hide();
      return window.OTCSF.addArchive(this.archive);
    };

    ServicePanel.prototype._archiveReady = function(event) {
      if (this._eventMine(event)) {
        return;
      }
      this.archive = event.data.archive;
      this.$startArchive.show();
      return window.OTCSF.archiveReady(this.archive);
    };

    ServicePanel.prototype._sessionConnected = function() {
      var _this = this;
      console.log('Session Connected');
      this.connected = true;
      this.session.publish(this.publisher, function(err) {
        if (err && err.code === 1013) {
          return _this.close();
        }
      });
      return $.post('/help/queue', {
        'session_id': this.sessionId
      }, 'json').done(function(data) {
        _this.queueId = data.queueId;
        return window.onbeforeunload = _this._dequeue.bind(_this);
      });
    };

    ServicePanel.prototype._sessionDisconnected = function() {
      this.connected = false;
      this._cleanUp();
    };

    ServicePanel.prototype._streamCreated = function(event) {
      if (!this.subscriber) {
        this.subscriber = this.session.subscribe(event.stream, this.$subscriber[0], this._videoProperties, function(err) {
          if (err && err.code === 1600) {
            console.log('An internal error occurred. Try subscribing to this stream again.');
          }
        });
        this.$closeButton.hide();
        this.$actionsBar.show();
        this.$waitingRepresentative.hide();
        this.$panel.removeClass('on-queue');
        this.$publisher.show();
        this.$startArchive.show();
        this.queueId = void 0;
        window.onbeforeunload = void 0;
      }
    };

    ServicePanel.prototype._streamDestroyed = function(event) {
      if (this.subscriber && event.stream === this.subscriber.stream) {
        this.close();
      }
    };

    ServicePanel.prototype._messageReceived = function(event) {
      var count, mine;
      mine = event.from.connectionId === this.session.connection.connectionId;
      this._renderNewMessage(event.data, mine);
      this.$textChat.scrollTop(this.$textChat[0].scrollHeight);
      if (this.$textChat.is(":visible")) {
        this.$btnChat.removeAttr("ios-counter");
      } else {
        count = parseInt(this.$btnChat.attr("ios-counter")) || 0;
        this.$btnChat.attr("ios-counter", count + 1);
      }
    };

    ServicePanel.prototype._renderNewMessage = function(data, mine) {
      var from, klass, template;
      from = mine ? 'You' : data.from;
      klass = mine ? 'from-me' : 'from-others';
      template = '<li class="' + klass + '"><label>' + from + ':</label><p>' + data.text + '</p></li>';
      this.$messageLog.append(template);
    };

    ServicePanel.prototype._publisherAllowed = function() {
      this.$waitingHardwareAccess.hide();
      this.$waitingRepresentative.show();
      this.session.connect(this.token, function(err) {
        if (err && err.code === 1006) {
          console.log('Connecting to the session failed. Try connecting to this session again.');
        }
      });
    };

    ServicePanel.prototype._publisherDenied = function() {
      return this.close();
    };

    ServicePanel.prototype._cleanUp = function() {
      this.$waitingHardwareAccess.hide();
      this.$waitingRepresentative.hide();
      this.dragChat.hide();
      this.$messageLog.html('');
      this.$closeButton.off().text('Cancel call');
      this.session.off();
      this.publisher.off();
      this.$closeButton.off("click");
      this.$endButton.off("click");
      this.$sendButton.off("click");
      this.$messageText.off("keyup");
      this.$startArchive.off("click");
      this.$stopArchive.off("click");
      this.$messageLog.html("");
      if (this.queueId) {
        this._dequeue();
      }
      this.$panel.hide();
      window.OTCSF.startChat(false);
      return this.emit('close');
    };

    ServicePanel.prototype._dequeue = function() {
      $.ajax({
        type: 'POST',
        url: '/help/queue/' + this.queueId,
        data: {
          '_METHOD': 'DELETE'
        },
        async: false
      }).done(function(data) {
        return console.log(data);
      }).always(function() {
        console.log('dequeue request completed');
      });
      return window.onbeforeunload = void 0;
    };

    return ServicePanel;

  })(EventEmitter2);

  window.ServicePanel = ServicePanel;

  TBB.ChatWidgetComponent = Ember.Component.extend({
    yOffset: window.pageYOffset,
    setYOffset: function() {
      return this.set('yOffset', window.pageYOffset);
    },
    shouldChatStick: (function() {
      return this.get('yOffset') > 75;
    }).property('yOffset'),
    initialize: function() {
      _this.$panel = $("#service-panel");
      _this.$publisher = _this.panel.find(".publisher");
      return _this.$subscriber = _this.panel.find(".subscriber");
    },
    didInsertElement: function() {
      var config, customerName;
      $(window).on('scroll', $.proxy(_this.setYOffset, _this));
      customerName = 'Ian';
      $.post('/help/session', {
        customer_name: customerName
      }, 'json').done(function(config) {
        var servicePanel;
        servicePanel = new ServicePanel("#main-panel", config, customerName);
        return servicePanel.on("close", function() {
          servicePanel.removeAllListeners();
          return servicePanel = void 0;
        });
      });
      config = {
        snap: '.container',
        snapMode: 'inner',
        snapTolerance: 10
      };
      return $('#text-panel').draggable(config);
    },
    actions: {
      toggleChat: function() {
        $(".btn-chat").toggleClass("pressed");
        if ($(".btn-chat").hasClass("pressed")) {
          $("#text-panel").show().find("input").focus();
          return $(".btn-chat").removeAttr("ios-counter");
        } else {
          return $("#text-panel").hide();
        }
      }
    }
  });

}).call(this);


(function() {
  var hideDaysNotInMonth, highlightMeetings, highlightToday, removeActiveClass;

  TBB.DatePickerComponent = Ember.Component.extend({
    didInsertElement: function(params) {
      var datepicker, daysOfWeekDisabled,
        _this = this;
      if (this.enablePicking) {
        daysOfWeekDisabled = null;
      } else {
        daysOfWeekDisabled = "0,1,2,3,4,5,6";
      }
      datepicker = this.$('.date-picker').datepicker({
        keyboardNavigation: false,
        daysOfWeekDisabled: daysOfWeekDisabled
      });
      highlightMeetings(this.meetings);
      datepicker.on('changeMonth', function() {
        return setTimeout((function() {
          return highlightMeetings(_this.meetings, _this.ignoreToday);
        }), 50);
      });
      return datepicker.on('click', function() {
        return setTimeout((function() {
          return highlightMeetings(_this.meetings, true);
        }), 1);
      });
    },
    observeMeetings: (function() {
      return highlightMeetings(this.meetings, this.ignoreToday);
    }).observes('meetings.@each')
  });

  highlightMeetings = function(meetings, ignoreToday) {
    hideDaysNotInMonth();
    if (!ignoreToday) {
      highlightToday();
    }
    return meetings.forEach(function(meeting) {
      var meetingDay, monthYear;
      monthYear = moment(meeting.time).format('MMMM YYYY');
      if (monthYear === $($('.datepicker-switch')[0]).text()) {
        meetingDay = moment(meeting.time).format('DD');
        return $(".day:not(.new):not(.old)").each(function(i, calendarDay) {
          if ($(calendarDay).text() === meetingDay) {
            return $(calendarDay).addClass('meeting');
          }
        });
      }
    });
  };

  removeActiveClass = function() {
    return $('.datepicker .active').removeClass('active');
  };

  hideDaysNotInMonth = function() {};

  highlightToday = function() {
    var meetingDay, monthYear;
    monthYear = moment().format('MMMM YYYY');
    if (monthYear === $($('.datepicker-switch')[0]).text()) {
      meetingDay = moment().format('DD');
      return $(".day:not(.new):not(.old)").each(function(i, calendarDay) {
        if (parseInt($(calendarDay).text()) === parseInt(meetingDay)) {
          return $(calendarDay).addClass('active');
        }
      });
    }
  };

}).call(this);


(function() {
  var RepServicePanel,
    __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; },
    _this = this;

  RepServicePanel = (function(_super) {
    __extends(RepServicePanel, _super);

    function RepServicePanel(panel, representativeName) {
      this._archiveReady = __bind(this._archiveReady, this);
      this._archiveAdded = __bind(this._archiveAdded, this);
      this._eventMine = __bind(this._eventMine, this);
      this.publisherDenied = __bind(this.publisherDenied, this);
      this.publisherAllowed = __bind(this.publisherAllowed, this);
      this.endCall = __bind(this.endCall, this);
      this.clearCustomer = __bind(this.clearCustomer, this);
      this.waitForCustomerExpired = __bind(this.waitForCustomerExpired, this);
      this.messageReceived = __bind(this.messageReceived, this);
      this.sendMessageOnEnter = __bind(this.sendMessageOnEnter, this);
      this.sendMessage = __bind(this.sendMessage, this);
      this.stopTimer = __bind(this.stopTimer, this);
      this.startCallTimer = __bind(this.startCallTimer, this);
      this.streamDestroyed = __bind(this.streamDestroyed, this);
      this.streamCreated = __bind(this.streamCreated, this);
      this.sessionDisconnected = __bind(this.sessionDisconnected, this);
      this.sessionConnected = __bind(this.sessionConnected, this);
      this.renderCustomer = __bind(this.renderCustomer, this);
      this.signalArchiveMessage = __bind(this.signalArchiveMessage, this);
      this.askArchiveReady = __bind(this.askArchiveReady, this);
      this.stopArchive = __bind(this.stopArchive, this);
      this.startArchive = __bind(this.startArchive, this);
      this.enableTextChat = __bind(this.enableTextChat, this);
      this.beginCall = __bind(this.beginCall, this);
      this.getCustomer = __bind(this.getCustomer, this);
      this.publisherConfig = __bind(this.publisherConfig, this);
      this.start = __bind(this.start, this);
      var config;
      RepServicePanel.__super__.constructor.call(this);
      this.videoProperties = {
        insertMode: 'append',
        width: '100%',
        height: '100%',
        style: {
          buttonDisplayMode: 'auto',
          nameDisplayMode: 'on',
          audioLevelDisplayMode: 'off'
        }
      };
      this.connected = false;
      this.onCallTime = 0;
      this.pollingInterval = 5000;
      this.customerWaitExpirationInterval = 5000;
      this.$panel = $(panel);
      this.$publisher = this.$panel.find(".publisher");
      this.$subscriber = this.$panel.find(".subscriber");
      this.$endCall = this.$panel.find(".end-call");
      this.$startArchive = this.$panel.find(".btn-record");
      this.$stopArchive = this.$panel.find(".btn-record-stop");
      this.$customerName = this.$panel.find(".customer-name");
      this.$dragChat = this.$panel.find("#chat-collapse");
      this.$textChat = this.$panel.find(".text-chat");
      this.$messageLog = this.$panel.find(".messages");
      this.$messageText = this.$panel.find(".message-text");
      this.$sendButton = this.$panel.find(".btn-send");
      this.$btnChat = this.$panel.find(".btn-chat");
      this.$chatWrap = this.$panel.find("#chat-opts");
      this.repName = representativeName;
      this.dequeueData = '_METHOD=DELETE';
      config = this.publisherConfig();
      this.publisher = OT.initPublisher(config.el, config.props);
      this.publisher.on('accessAllowed', this.publisherAllowed, this).on('accessDenied', this.publisherDenied, this);
      this.$endCall.on("click", this.endCall);
      this.$startArchive.on("click", this.startArchive);
      this.$stopArchive.on("click", this.stopArchive);
      console.log('RepServicePanel constructor called');
    }

    RepServicePanel.prototype.start = function() {
      console.log('RepServicePanel starting');
      return this.publisher.on('streamDestroyed', function(event) {
        return event.preventDefault();
      });
    };

    RepServicePanel.prototype.publisherConfig = function() {
      return {
        el: this.$publisher[0],
        props: {
          insertMode: 'append',
          width: '100%',
          height: '100%',
          name: "" + this.repName + ", Financial Advisor",
          style: {
            buttonDisplayMode: 'off',
            nameDisplayMode: 'off',
            audioLevelDisplayMode: 'off'
          }
        }
      };
    };

    RepServicePanel.prototype.getCustomer = function() {
      var _this = this;
      return $.post('/help/queue', this.dequeueData, 'json').done(function(customerData, textStatus, jqXHR) {
        if (jqXHR.status === 200) {
          return _this.beginCall(customerData);
        } else if (jqXHR.status === 204) {
          return setTimeout(_this.getCustomer, _this.pollingInterval);
        }
      }).fail(function() {
        return this.clearCustomer();
      });
    };

    RepServicePanel.prototype.beginCall = function(customerData) {
      console.log('Beginning Call');
      this.renderCustomer(customerData);
      this.videoProperties.name = customerData.customerName;
      this.session = OT.initSession(customerData.apiKey, customerData.sessionId);
      this.session.on("sessionConnected", this.sessionConnected);
      this.session.on("sessionDisconnected", this.sessionDisconnected);
      this.session.on("streamCreated", this.streamCreated);
      this.session.on("streamDestroyed", this.streamDestroyed);
      this.session.on('signal:chat', this.messageReceived);
      this.session.on("signal:archiveAdded", this._archiveAdded, this);
      this.session.on("signal:archiveReady", this._archiveReady, this);
      this.session.connect(customerData.token, function(err) {
        if (err && err.code === 1006) {
          return console.log('Connecting to the session failed. Try connecting to this session again.');
        }
      });
      this.$sendButton.on('click', this.sendMessage);
      this.$messageText.on('keyup', this.sendMessageOnEnter);
      this.$startArchive.show();
      this.$stopArchive.hide();
      return this.enableTextChat();
    };

    RepServicePanel.prototype.enableTextChat = function() {
      this.$textChat.show();
      return this.$dragChat.draggable({
        snap: '.container',
        snapMode: 'inner',
        snapTolerance: 10
      });
    };

    RepServicePanel.prototype.startArchive = function() {
      var _this = this;
      this.$startArchive.hide();
      return $.get("/archive/start", {
        session_id: this.session.sessionId,
        name: "Portfolio Review"
      }, function(archive) {
        _this.archive = archive;
        _this.$stopArchive.show();
        window.OTCSF.addArchive(archive);
        return _this.signalArchiveMessage(archive, "archiveAdded");
      });
    };

    RepServicePanel.prototype.stopArchive = function() {
      var archiveId,
        _this = this;
      this.$stopArchive.hide();
      archiveId = this.archive.id;
      return $.get("/archive/stop/" + archiveId, function(response) {
        _this.$startArchive.show();
        return setTimeout(_this.askArchiveReady, 3000);
      });
    };

    RepServicePanel.prototype.askArchiveReady = function() {
      var _this = this;
      return $.get("/archive/" + this.archive.id, function(archive) {
        console.log(archive);
        _this.archive = void 0;
        window.OTCSF.archiveReady(archive);
        return _this.signalArchiveMessage(archive, "archiveReady");
      });
    };

    RepServicePanel.prototype.signalArchiveMessage = function(archive, type) {
      return this.session.signal({
        type: type,
        data: {
          archive: archive
        }
      }, function(error) {
        if (error) {
          return console.log("Error signaling " + type, error);
        }
      });
    };

    RepServicePanel.prototype.renderCustomer = function(customerData) {
      this.$customerName.text(customerData.customerName);
      return this.$endCall.show();
    };

    RepServicePanel.prototype.sessionConnected = function() {
      this.waitingForCustomer = true;
      setTimeout(this.waitForCustomerExpired, this.customerWaitExpirationInterval);
      this.connected = true;
      return this.session.publish(this.publisher, function(err) {
        if (err && err.code === 1013) {
          console.log('The publisher failed to connect.');
          return this.endCall();
        }
      });
    };

    RepServicePanel.prototype.sessionDisconnected = function() {
      this.connected = false;
      this.subscriber = void 0;
      this.session.off();
      this.session = void 0;
      this.clearCustomer();
      return setTimeout(this.getCustomer, 10000);
    };

    RepServicePanel.prototype.streamCreated = function(event) {
      if (!this.subscriber) {
        this.waitingForCustomer = false;
        this.subscriber = this.session.subscribe(event.stream, this.$subscriber[0], this.videoProperties, function(err) {
          if (err && err.code === 1600) {
            return console.log('An internal error occurred. Try subscribing to this stream again.');
          }
        });
        this.startCallTimer();
      }
      return this.$chatWrap.show();
    };

    RepServicePanel.prototype.streamDestroyed = function(event) {
      console.log('Stream Destroyed');
      if (this.subscriber && event.stream === this.subscriber.stream) {
        this.endCall();
      }
      return this.getCustomer();
    };

    RepServicePanel.prototype.startCallTimer = function() {
      var increaseTimer,
        _this = this;
      increaseTimer = function() {
        _this.onCallTime += 1;
        return $('#callTime').html(moment().hour(0).minute(0).second(_this.onCallTime).format('mm:ss'));
      };
      return this.timerId = setInterval(increaseTimer, 1000);
    };

    RepServicePanel.prototype.stopTimer = function() {
      this.onCallTime = 0;
      return clearInterval(this.timerId);
    };

    RepServicePanel.prototype.sendMessage = function() {
      var self, text;
      self = this;
      text = this.$messageText.val();
      if (!text) {
        return;
      }
      this.session.signal({
        type: 'chat',
        data: {
          from: this.repName,
          text: text
        }
      }, function(error) {
        if (!error) {
          self.$messageText.val('');
        }
      });
    };

    RepServicePanel.prototype.sendMessageOnEnter = function(e) {
      if (e.keyCode === 13) {
        this.sendMessage();
      }
    };

    RepServicePanel.prototype.messageReceived = function(event) {
      var count, mine;
      mine = this._eventMine(event);
      this._renderNewMessage(event.data, mine);
      this.$textChat.scrollTop(this.$textChat[0].scrollHeight);
      if (this.$textChat.is(":visible")) {
        this.$btnChat.removeAttr("ios-counter");
      } else {
        count = parseInt(this.$btnChat.attr("ios-counter")) || 0;
        this.$btnChat.attr("ios-counter", count + 1);
      }
    };

    RepServicePanel.prototype.waitForCustomerExpired = function() {
      if (this.waitingForCustomer) {
        this.waitingForCustomer = false;
        return this.endCall();
      }
    };

    RepServicePanel.prototype.clearCustomer = function() {
      this.$customerName.text('');
      this.$chatWrap.hide();
      this.$endCall.hide();
      this.$textChat.hide();
      this.$sendButton.off("click");
      this.$messageText.off("keyup");
      return this.$messageLog.html("");
    };

    RepServicePanel.prototype.endCall = function() {
      if (this.connected) {
        this.session.unpublish(this.publisher);
        this.session.disconnect();
      } else {
        this.clearCustomer();
      }
      this.stopTimer();
      return this.stopArchive();
    };

    RepServicePanel.prototype.publisherAllowed = function() {
      return this.getCustomer();
    };

    RepServicePanel.prototype.publisherDenied = function() {};

    RepServicePanel.prototype._eventMine = function(event) {
      return event.from.connectionId === this.session.connection.connectionId;
    };

    RepServicePanel.prototype._archiveAdded = function(event) {
      if (this._eventMine(event)) {
        return;
      }
      this.archive = event.data.archive;
      this.$startArchive.hide();
      return window.OTCSF.addArchive(this.archive);
    };

    RepServicePanel.prototype._archiveReady = function(event) {
      if (this._eventMine(event)) {
        return;
      }
      this.archive = event.data.archive;
      this.$startArchive.show();
      return window.OTCSF.archiveReady(this.archive);
    };

    RepServicePanel.prototype._renderNewMessage = function(data, mine) {
      var from, klass, template;
      from = mine ? 'You' : data.from;
      klass = mine ? 'from-me' : 'from-others';
      template = '<li class="' + klass + '"><label>' + from + ':</label><p>' + data.text + '</p></li>';
      this.$messageLog.append(template);
    };

    return RepServicePanel;

  })(EventEmitter2);

  TBB.RepChatWidgetComponent = Ember.Component.extend({
    didInsertElement: function() {
      var createdArchive, repName, serviceProvider;
      createdArchive = false;
      repName = "Scott";
      serviceProvider = new RepServicePanel('#service-provider', repName);
      return serviceProvider.start();
    },
    actions: {
      toggleChat: function() {
        $(".btn-chat").toggleClass("pressed");
        if ($(".btn-chat").hasClass("pressed")) {
          $("#chat-collapse").show().find("input").focus();
          return $(".btn-chat").removeAttr("ios-counter");
        } else {
          return $("#chat-collapse").hide();
        }
      }
    }
  });

}).call(this);


(function() {
  TBB.SelectPickerComponent = Ember.Component.extend({
    didInsertElement: function(params) {
      return $('#' + this.selectId).selectpicker();
    }
  });

}).call(this);


(function() {
  Ember.Handlebars.helper('monthDateYear', function(value, options) {
    return moment(value).format('MMMM DD, YYYY');
  });

  Ember.Handlebars.helper('hourMinuteSecond', function(value, options) {
    return moment(value).format('hh:mm:ss a');
  });

  Ember.Handlebars.helper('dayTime', function(value, options) {
    return moment(value).format('MM/DD/YYYY, hh:mma');
  });

  Ember.Handlebars.helper('minutes', function(value, options) {
    return moment(value).format('mm:ss') + ' min';
  });

  Ember.Handlebars.helper('highlight', function(value, options) {
    var escaped;
    escaped = Handlebars.Utils.escapeExpression(value);
    return new Handlebars.SafeString('<span class="highlight">' + escaped + '</span>');
  });

  Ember.Handlebars.helper('meetingTime', function(value, options) {
    if (moment(value).isSame(+new Date(), 'day')) {
      return value = 'Today, ' + moment(value).format('hh:mm') + ' PST';
    } else {
      return moment(value).format('MM/DD/YY');
    }
  });

}).call(this);


(function() {
  var creditInfo, debtInfo, getRandomInt, quickSortTime;

  TBB.AccountController = Em.ObjectController.extend({
    needs: ['application'],
    sharedContent: [],
    isSharedContentOpen: true,
    firstMeeting: (function() {
      return this.get('meetings')[0];
    }).property('meetings'),
    meetings: [
      {
        title: 'Portfolio Review 2015',
        rep: {
          id: 'Scott',
          name: 'Scott Lomond'
        },
        time: moment('01:30pm', 'hh:mma'),
        isToday: true
      }, {
        title: 'Investment Tips Session',
        rep: {
          id: 'Scott',
          name: 'Scott Lomond'
        },
        time: (new Date()).getTime() + 3600000
      }, {
        title: '401k Updates',
        rep: {
          id: 'Scott',
          name: 'Scott Lomond'
        },
        time: (new Date()).getTime() + 5100000
      }
    ],
    archives: [
      {
        title: "401k Update",
        time: (new Date()).getTime() - 10340000,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        duration: 354000
      }, {
        title: "Portfolio Review",
        time: (new Date()).getTime() - 74120000,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        duration: 754000
      }, {
        title: "Portfolio Updates",
        time: (new Date()).getTime() - 202340000,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        duration: 552000
      }
    ],
    chat: false,
    showMeeting: (function() {
      var meeting;
      meeting = this.get('newMeeting');
      if (meeting) {
        return $('#meetingModal').modal('show');
      }
    }).observes('newMeeting'),
    actions: {
      startChat: function() {
        return window.OTCSF.startChat(true);
      },
      showSharedContent: function() {
        $('#sharedContent').collapse('show');
        return this.set('isSharedContentOpen', true);
      },
      hideSharedContent: function() {
        $('#sharedContent').collapse('hide');
        return this.set('isSharedContentOpen', false);
      }
    },
    setOTCSF: (function() {
      var _this = this;
      window.OTCSF = {};
      window.OTCSF.addSharedContent = function(contentModel) {
        var contentModels;
        contentModels = [
          {
            url: 'http://i.imgur.com/YrkHK2r.png'
          }
        ];
        if (contentModel === 0) {
          contentModels = [
            {
              title: 'The U.Fund College Investing Plan Performance',
              url: 'images/graph_1.png'
            }
          ];
        } else {
          contentModels = [
            {
              title: 'UNIQUE College Investing Plan Performance',
              url: 'images/graph_2.png'
            }
          ];
        }
        return _this.set('sharedContent', contentModels);
      };
      window.OTCSF.startChat = function(boolean) {
        return _this.set('chat', boolean);
      };
      window.OTCSF.showNewMeeting = function(meeting) {
        var meetings, sortedMeetings;
        if (moment(meeting.time).format('DDMMMYYYY') === moment().format('DDMMMYYYY')) {
          meeting.isToday = true;
        } else {
          meeting.isToday = false;
        }
        meetings = _this.get('meetings');
        meetings.pushObject(meeting);
        sortedMeetings = quickSortTime(meetings);
        _this.set('meetings', sortedMeetings);
        return _this.set('newMeeting', meeting);
      };
      window.OTCSF.addArchive = function(archive) {
        var archives;
        archives = _this.get('archives').toArray();
        archives.unshiftObject(archive);
        _this.set('archives', archives);
        return _this.set('archivePending', true);
      };
      return window.OTCSF.archiveReady = function(data) {
        var archive, archives;
        archives = _this.get('archives').toArray();
        archive = _this.get('archives').objectAt(0);
        archive.url = data.url;
        Em.set(archive, "url", data.url);
        Em.set(archive, "duration", data.duration);
        Em.set(archive, "title", data.name);
        archives[0] = archive;
        _this.set('archives', archives);
        return _this.set('archivePending', false);
      };
    }).observes('model'),
    archivePending: false,
    totalCash: '127,559.33',
    totalEquity: '141,112.96',
    totalFixed: '164,832.21',
    totalRetirement: '198,451.43'
  });

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  creditInfo = {
    address: ['Cash deposit ATM', 'Cash deposit teller'],
    num: ['Check deposit', 'Electronic transfer']
  };

  debtInfo = {
    address: ['Withdrawal ATM', 'Withdrawal Teller'],
    num: ['VISA', 'MasterCard']
  };

  quickSortTime = function(arr) {
    var greater, head, i, lesser;
    if (arr.length === 0) {
      return [];
    }
    lesser = [];
    greater = [];
    head = arr[0];
    i = 1;
    while (i < arr.length) {
      if (arr[i].time < head.time) {
        greater.push(arr[i]);
      } else {
        lesser.push(arr[i]);
      }
      i++;
    }
    return quickSortTime(greater).concat(head, quickSortTime(lesser));
  };

}).call(this);


(function() {
  var creditInfo, debtInfo, getRandomInt;

  TBB.ApplicationController = Em.ObjectController.extend({
    archiveVideoUrl: null,
    stocks: [
      {
        title: 'Dow',
        price: '15,821.63',
        change: '+70.96',
        percentage: '0.45%'
      }, {
        title: 'Nasdaq',
        price: '3,965.58',
        change: '+45.66',
        percentage: '1.16%'
      }, {
        title: 'S&P 500',
        price: '1,782.00',
        change: '+14.31',
        percentage: '0.81%'
      }
    ],
    actions: {
      showArchiveEntry: function(entry) {
        $('#myModal').modal('show');
        return this.set('archiveVideoUrl', entry.url);
      }
    },
    cashTransactions: (function() {
      var cashTransactions, currentCash, equity, fixed, lastCash, retirement,
        _this = this;
      currentCash = this.get('totalCash');
      lastCash = null;
      equity = 120000;
      fixed = 160000;
      retirement = 190000;
      return cashTransactions = [1, 2, 3, 4, 5].map(function(num, i) {
        var amount, date, debt, info;
        date = moment().subtract('days', i * i).format('MM/DD/YYYY');
        switch (i) {
          case 0:
            info = 'Check deposit #844';
            debt = false;
            amount = '1,543.50';
            currentCash = '127,559.33';
            date = '11/14/2015';
            break;
          case 1:
            info = 'VISA 1234';
            debt = true;
            amount = '2,457.87';
            currentCash = '126,015.83';
            date = '11/13/2015';
            break;
          case 2:
            info = 'Cash deposit ATM';
            debt = false;
            amount = '1,000.00';
            currentCash = '128,473.70';
            date = '11/10/2015';
            break;
          case 3:
            info = 'Withdrawal';
            debt = true;
            amount = '200.00';
            currentCash = '127,473.70';
            date = '11/05/2015';
            break;
          case 4:
            info = 'Check deposit #843';
            debt = false;
            amount = '2,150.00';
            currentCash = '127,673.70';
            date = '10/29/2015';
        }
        return {
          date: date,
          info: info,
          debt: debt,
          amount: amount,
          total: currentCash
        };
      });
    }).property(),
    equityTransactions: (function() {
      var transactions;
      return transactions = [
        {
          subtext: 'Reinvestment',
          info: 'Vanguard Russell 2000 ETF (VTWO)',
          date: '11/14/2015',
          debt: true,
          amount: '4,794.00',
          total: '141,112.96'
        }, {
          subtext: 'Dividend received',
          info: 'SPDR S&P 600 Small Cap ETF (SLY)',
          date: '11/13/2015',
          debt: false,
          amount: '6,335.00',
          total: '145,906.96'
        }, {
          subtext: 'Long-term cap gain',
          info: 'T. Rowe Price Institutional Large Cap Growth Fund (TRLGX)',
          date: '11/10/2015',
          debt: false,
          amount: '8,392.12',
          total: '139,571.96'
        }, {
          subtext: 'Long-term cap gain',
          info: 'Fidelity Focused Stock Fund (FTQGX)',
          date: '11/05/2015',
          debt: false,
          amount: '10,832.00',
          total: '131,179.84'
        }
      ];
    }).property(),
    fixedTransactions: (function() {
      var transactions;
      return transactions = [
        {
          info: 'Peritus High Yield ETF (HYLD)',
          date: '11/19/2015',
          debt: false,
          amount: '3,155.00',
          total: '164,832.31'
        }, {
          info: 'ProShares UltraPro Sht 20+ Yr Treas (TTT)',
          date: '11/14/2015',
          debt: false,
          amount: '8,765.10',
          total: '161,677.21'
        }, {
          info: 'Guggenhm BltShs 2015 HY Corp Bd ETF (BSJF)',
          date: '11/10/2015',
          debt: false,
          amount: '1,100.00',
          total: '152,912.21'
        }, {
          info: 'PIMCO 0-5 Year Hi Yield Corp Bd Idx (HYS)',
          date: '11/05/2015',
          debt: false,
          amount: '2,342.17',
          total: '151,812.21'
        }
      ];
    }).property(),
    retirementTransactions: (function() {
      var transactions;
      return transactions = [
        {
          info: 'TIAA-CREF Lifecycle Retirement Income Fund (TLRIX)'
        }, {
          info: 'Vanguard Target Retirement Income (VTINX)'
        }
      ];
    }).property()
  });

  getRandomInt = function(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  creditInfo = {
    address: ['Cash deposit ATM', 'Cash deposit teller'],
    num: ['Check deposit', 'Electronic transfer']
  };

  debtInfo = {
    address: ['Withdrawal ATM', 'Withdrawal Teller'],
    num: ['VISA', 'MasterCard']
  };

}).call(this);


(function() {
  TBB.HomeController = Em.ObjectController.extend({
    needs: ['application'],
    password: 'abc1234',
    passwordError: false,
    email: 'ian@company.com',
    emailError: false,
    actions: {
      login: function() {
        var email, password;
        email = this.get('email');
        password = this.get('password');
        if (!email || !password) {
          if (!email) {
            $('#emailInputHolder').popover();
            $('#emailInputHolder').popover('show');
          } else {
            $('#emailInputHolder').popover('hide');
          }
          if (!password) {
            $('#passwordInputHolder').popover();
            $('#passwordInputHolder').popover('show');
            return console.log('no password');
          } else {
            return $('#passwordInputHolder').popover('hide');
          }
        } else {
          $('#emailInputHolder').popover('hide');
          $('#passwordInputHolder').popover('hide');
          return this.transitionToRoute('account');
        }
      }
    }
  });

}).call(this);


(function() {
  var quickSortTime;

  TBB.RepController = Em.ObjectController.extend({
    needs: ['application'],
    sharedContent: [
      Ember.Object.create({
        title: 'The U.Fund College Investing Plan Performance',
        graph: 'images/graph_1.png',
        isSelected: true,
        timeShared: moment().format('MMMM DD,YYYY, hh:mma') + ' PST'
      }), Ember.Object.create({
        title: 'UNIQUE College Investing Plan Performance',
        graph: 'images/graph_2.png',
        isSelected: false,
        timeShared: null
      })
    ],
    firstMeeting: (function() {
      return this.get('meetings')[0];
    }).property('meetings'),
    meetings: [
      {
        title: 'Portfolio Review 2015',
        rep: {
          id: 'Scott',
          name: 'Scott'
        },
        time: moment('01:30pm', 'hh:mma'),
        isToday: true
      }, {
        title: 'Investment Tips Session',
        rep: {
          id: 'Scott',
          name: 'Scott'
        },
        time: (new Date()).getTime() + 3600000
      }, {
        title: '401k Updates',
        rep: {
          id: 'Scott',
          name: 'Scott'
        },
        time: (new Date()).getTime() + 5100000
      }
    ],
    archives: [
      {
        title: "401k Update",
        time: (new Date()).getTime() - 10340000,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        duration: 1339000
      }, {
        title: "Portfolio Review",
        time: (new Date()).getTime() - 74120000,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        duration: 754000
      }, {
        title: "Portfolio Updates",
        time: (new Date()).getTime() - 202340000,
        url: "http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4",
        duration: 552000
      }
    ],
    selectedFund: 0,
    selectedFundObserver: (function() {
      var selectedItem,
        _this = this;
      selectedItem = this.get('selectedFund');
      return this.get('sharedContent').forEach(function(item, i) {
        item.set('isSelected', i === selectedItem);
        return item;
      });
    }).observes('selectedFund'),
    selectedFundUrl: (function() {
      var index;
      index = this.get('selectedFund');
      return this.get('sharedContent')[index].graph;
    }).property('selectedFund'),
    selectedFundTitle: (function() {
      var index;
      index = this.get('selectedFund');
      return this.get('sharedContent')[index].title;
    }).property('selectedFund'),
    sharedFundIndex: 0,
    sharedFund: (function() {
      var index;
      index = this.get('sharedFundIndex');
      return this.get('sharedContent')[index];
    }).property('sharedFundIndex'),
    times: (function() {
      var times;
      times = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18];
      return times.map(function(num) {
        return moment().hour(num).format('ha');
      });
    }).property(),
    selectedTime: null,
    meetingTitle: null,
    isScheduleOpen: true,
    isPreviewSessionOpen: true,
    isAccountOverviewOpen: true,
    isRecommendedFundsOpen: true,
    setOTCSF: (function() {
      var _this = this;
      window.OTCSF = {};
      window.OTCSF.addAdvisors = function(advisorArray) {
        return console.log('adding advisors');
      };
      window.OTCSF.inviteAdvisor = function(advisor) {
        return console.log('inviting advisor ' + advisor);
      };
      window.OTCSF.sendSharedContent = function(contentModels) {
        if (window.OTCSF.otcs && window.OTCSF.otcs.sharedData) {
          console.log("sending data");
          window.OTCSF.otcs.sharedData.set('sharedContent', contentModels);
        }
        return console.log('models ready to be sent:', contentModels);
      };
      window.OTCSF.sendMeeting = function(meetingModel) {
        if (window.OTCSF.otcs && window.OTCSF.otcs.sharedData) {
          console.log("sending data");
          window.OTCSF.otcs.sharedData.set('meeting', meetingModel);
        }
        return console.log('meetings ready to be sent:', meetingModel);
      };
      window.OTCSF.addArchive = function(archive) {
        var archives;
        archives = _this.get('archives').toArray();
        archives.unshiftObject(archive);
        _this.set('archives', archives);
        return _this.set('archivePending', true);
      };
      return window.OTCSF.archiveReady = function(data) {
        var archive, archives;
        archives = _this.get('archives').toArray();
        archive = _this.get('archives').objectAt(0);
        archive.url = data.url;
        Em.set(archive, "url", data.url);
        Em.set(archive, "duration", data.duration);
        Em.set(archive, "title", data.name);
        archives[0] = archive;
        _this.set('archives', archives);
        return _this.set('archivePending', false);
      };
    }).observes('model'),
    archivePending: false,
    actions: {
      selectFund: function(index) {
        return this.set('selectedFund', index);
      },
      openScheduleContainer: function() {
        $('#scheduleContainer').collapse('show');
        return this.set('isScheduleOpen', true);
      },
      hideScheduleContainer: function() {
        $('#scheduleContainer').collapse('hide');
        return this.set('isScheduleOpen', false);
      },
      openPreviewSessions: function() {
        $('#previousSessionContainer').collapse('show');
        return this.set('isPreviewSessionOpen', true);
      },
      hidePreviewSessions: function() {
        $('#previousSessionContainer').collapse('hide');
        return this.set('isPreviewSessionOpen', false);
      },
      openAccountOverview: function() {
        $('#accountOverviewContainer').collapse('show');
        return this.set('isAccountOverviewOpen', true);
      },
      hideAccountOverview: function() {
        $('#accountOverviewContainer').collapse('hide');
        return this.set('isAccountOverviewOpen', false);
      },
      openRecommendedFunds: function() {
        $('#recommendedFundsContainer').collapse('show');
        return this.set('isRecommendedFundsOpen', true);
      },
      hideRecommendedFunds: function() {
        $('#recommendedFundsContainer').collapse('hide');
        return this.set('isRecommendedFundsOpen', false);
      },
      selectFund: function(index) {
        return this.set('selectedFund', index);
      },
      shareContent: function() {
        var selectedContent, sharedContent, time;
        selectedContent = this.get('selectedFund');
        this.set('sharedFundIndex', selectedContent);
        sharedContent = this.get('sharedFund');
        time = moment().format('MMMM DD,YYYY, hh:mma') + ' PST';
        sharedContent.set('timeShared', time);
        return window.OTCSF.sendSharedContent(selectedContent);
      },
      scheduleMeeting: function() {
        var combined, day, dayMonthYear, isMeetingToday, meeting, meetingTime, meetings, monthYear, selectedTime, sortedMeetings;
        day = $('td.active').text();
        monthYear = $('.datepicker-switch')[0].innerText;
        console.log(monthYear);
        if (!day) {
          dayMonthYear = moment().format('DDMMMYYYY');
        } else {
          dayMonthYear = day + moment(monthYear, 'MMMM YYYY').format('MMMYYYY');
        }
        console.log(dayMonthYear);
        isMeetingToday = dayMonthYear === moment().format('DDMMMYYYY');
        selectedTime = this.get('selectedTime');
        selectedTime = $('.time-picker .filter-option').text();
        combined = dayMonthYear + ' ' + selectedTime;
        meetingTime = +moment(combined, 'DDMMMYYYY,ha');
        meeting = {
          title: this.get('meetingTitle'),
          time: meetingTime,
          rep: {
            id: 'Ian',
            name: 'Ian Small'
          },
          isToday: isMeetingToday
        };
        meetings = this.get('meetings');
        meetings.pushObject(meeting);
        sortedMeetings = quickSortTime(meetings);
        this.set('meetings', sortedMeetings);
        return window.OTCSF.sendMeeting(meeting);
      }
    }
  });

  quickSortTime = function(arr) {
    var greater, head, i, lesser;
    if (arr.length === 0) {
      return [];
    }
    lesser = [];
    greater = [];
    head = arr[0];
    i = 1;
    while (i < arr.length) {
      if (arr[i].time < head.time) {
        greater.push(arr[i]);
      } else {
        lesser.push(arr[i]);
      }
      i++;
    }
    return quickSortTime(greater).concat(head, quickSortTime(lesser));
  };

}).call(this);


(function() {
  TBB.Store = DS.Store.extend();

  TBB.ApplicationAdapter = DS.FixtureAdapter;

}).call(this);


(function() {
  TBB.AccountRoute = Em.Route.extend({
    model: function() {
      return {
        oneWeekAgo: moment().subtract('days', 7)
      };
    }
  });

  TBB.RepRoute = Em.Route.extend({
    model: function() {
      return {
        oneWeekAgo: moment().subtract('days', 7)
      };
    }
  });

}).call(this);


(function() {
  TBB.ApplicationView = Em.View.extend({
    didInsertElement: function() {
      var _this = this;
      console.log('insert element');
      this.$('.modal-table').on('click', function(e) {
        if (e.toElement.localName !== 'video') {
          $('#myModal').modal('hide');
          return $('#previewModalVideo')[0].pause();
        }
      });
      return $(window).resize(function() {
        return _this.$('.modal-table').height(window.innerHeight);
      });
    }
  });

}).call(this);


(function() {
  TBB.Router.map(function() {
    var startView;
    startView = /rep/g.exec(window.location.pathname) ? "rep" : "home";
    this.route(startView, {
      path: '/'
    });
    this.route('account', {
      path: '/account'
    });
    this.route('rep', {
      path: '/rep'
    });
    return this.route('about', {
      path: '/about'
    });
  });

}).call(this);


}).call(this);
