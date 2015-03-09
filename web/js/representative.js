/* -----------------------------------------------------------------------------------------------
 * Representative Scripts
 * -----------------------------------------------------------------------------------------------*/
/* global jQuery, _, setImmediate, OT */

// Prevent leaking into global scope
!(function(exports, doc, $, _, setImmediate, setTimeout, presentAlert, validateForm, OT,
           undefined) {

  // Service Provider
  var serviceProvider = (function() {
    var $el, $publisher, $subscriber, $getCustomer, $endCall, $customerName,
        $sendButton, $messageLog, $messageText,
        session, publisher, subscriber, connected, waitingForCustomer, repName;

    var init = function(selector, representativeName) {
      $el = $(selector);
      $publisher = $el.find('.publisher');
      $subscriber = $el.find('.subscriber');
      $getCustomer = $el.find('.get-customer');
      $endCall = $el.find('.end-call');
      $customerName = $el.find('.customer-name');
      $messageLog = $el.find('.history');
      $messageText = $el.find('.message-text');
      $sendButton = $el.find('.btn-send');

      repName = representativeName;

      config = publisherConfig();
      publisher = OT.initPublisher(config.el, config.props);
      publisher.on('accessAllowed', publisherAllowed)
               .on('accessDenied', publisherDenied);

      $getCustomer.on('click', getCustomer);
      $endCall.on('click', endCall);
    };

    var start = function(pub) {
      $getCustomer.show();
      publisher.on('streamDestroyed', function(event) {
        event.preventDefault();
      });
    };

    var publisherAllowed = function() {
      console.log('well done!');
    };

    var publisherDenied = function() {
      console.log('boooo!');
    };

    var getCustomer = function() {

      $getCustomer.prop('disabled', true);

      $.post('/help/queue', dequeueData, 'json')
        .done(function(customerData, textStatus, jqXHR) {

          // When there is a customer available, begin chat
          if (jqXHR.status === 200) {
            beginCall(customerData);

          // When there isn't a customer available, poll
          } else if (jqXHR.status === 204) {
            setTimeout(getCustomer, pollingInterval);
          }
        })
        .fail(function() {
          presentAlert('Queue error. Try again later.', 'danger');
          clearCustomer();
        });
    };

    var renderCustomer = function(customerData) {
      // templating
      $customerName.text(customerData.customerName);

      $getCustomer.hide();
      $endCall.show();
    };

    var clearCustomer = function() {
      // cleanup templated data
      $customerName.text('');

      $getCustomer.show().prop('disabled', false);
      $endCall.hide();
    };

    var sendMessage = function(e) {
      session.signal({
        type: 'chat',
        data: {
          from: repName,
          text: $messageText.val()
        }
      }, function(error) {
        if (!error) { $messageText.val(''); }
      });
    };

    var tryToSendOnEnter = function(e) {
      if (e.keyCode == 13) sendMessage();
    };

    var beginCall = function(customerData) {
      renderCustomer(customerData);

      videoProperties.name = customerData.customerName;

      session = OT.initSession(customerData.apiKey, customerData.sessionId);
      session.on('sessionConnected', sessionConnected);
      session.on('sessionDisconnected', sessionDisconnected);
      session.on('streamCreated', streamCreated);
      session.on('streamDestroyed', streamDestroyed);
      session.on('signal:chat', messageReceived);
      session.connect(customerData.token, function(err) {
        // Handle connect failed
        if (err && err.code === 1006) {
          console.log('Connecting to the session failed. Try connecting to this session again.');
        }
      });

      $sendButton.click(sendMessage);
      $messageText.keyup(tryToSendOnEnter);
    };

    var endCall = function() {
      if (connected) {
        session.unpublish(publisher);
        session.disconnect();
      } else {
        clearCustomer();
      }
    };

    var waitForCustomerExpired = function() {
      if (waitingForCustomer) {
        waitingForCustomer = false;
        presentAlert('The customer is being skipped because he/she failed to connect in time.');
        endCall();
      }
    };

    var messageReceived = function(event) {
      var mine = event.from.connectionId === session.connection.connectionId;
      var data = event.data;
      var template = '<p>' + (mine ? 'You' : data.from) + ': ' + data.text + '</p>';
      $messageLog.append(template);
    };

    var sessionConnected = function() {
      //start a timer within which to wait for the customer's stream to be created
      waitingForCustomer = true;
      setTimeout(waitForCustomerExpired, customerWaitExpirationInterval);

      connected = true;

      session.publish(publisher, function(err) {
        // Handle publisher failing to connect
        if (err && err.code === 1013) {
          console.log('The publisher failed to connect.');
          endCall();
        }
      });
    };

    var sessionDisconnected = function() {
      connected = false;
      subscriber = undefined;
      session.off();
      session = undefined;
      clearCustomer();
    };

    var streamCreated = function(event) {
      if (!subscriber) {
        waitingForCustomer = false;
        subscriber = session.subscribe(event.stream, $subscriber[0], videoProperties,
                                       function(err) {
          // Handle subscriber error
          if (err && err.code === 1600) {
            console.log('An internal error occurred. Try subscribing to this stream again.');
          }
        });
      }
    };

    var streamDestroyed = function(event) {
      if (subscriber && event.stream === subscriber.stream) {
        endCall();
      }
    };

    var publisherConfig = function() {
      return {
        el: $publisher[0],
        props: {
          insertMode: 'append',
          width: '100%',
          height: '100%',
          name: repName + ', Financial Advisor',
          style: {
            buttonDisplayMode: 'off',
            nameDisplayMode: 'off',
          }
        }
      };
    };

    var videoProperties = {
      insertMode: 'append',
      width: '100%',
      height: '100%',
      style: {
        buttonDisplayMode: 'auto',
        nameDisplayMode: 'on',
        audioLevelDisplayMode: 'off'
      }
    };

    var pollingInterval = 5000;
    var customerWaitExpirationInterval = 5000;

    var dequeueData = '_METHOD=DELETE';

    return {
      init: init,
      publisherConfig: publisherConfig,
      start: start
    };
  }());


  $(doc).ready(function() {
    serviceProvider.init('#service-provider', 'Arin');
    serviceProvider.start();
  });

}(window, window.document, jQuery, _, setImmediate, window.setTimeout, window.presentAlert,
  window.validateForm, OT));
