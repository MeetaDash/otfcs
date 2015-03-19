TBB.AccountRoute = Em.Route.extend
  model: ->
    # This is just so that the model can be observed in the controller
    oneWeekAgo: moment().subtract('days', 7)

TBB.RepRoute = Em.Route.extend
  model: ->
    # This is just so that the model can be observed in the controller
    oneWeekAgo: moment().subtract('days', 7)