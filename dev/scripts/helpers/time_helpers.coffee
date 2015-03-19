Ember.Handlebars.helper('monthDateYear', (value, options) ->
  moment(value).format('MMMM DD, YYYY')
)
Ember.Handlebars.helper('hourMinuteSecond', (value, options) ->
  moment(value).format('hh:mm:ss a')
)

Ember.Handlebars.helper('dayTime', (value, options) ->
  moment(value).format('MM/DD/YYYY, hh:mma')
)


Ember.Handlebars.helper('minutes', (value, options) ->
  moment(value).format('mm:ss') + ' min'
)

Ember.Handlebars.helper('highlight', (value, options) ->
  escaped = Handlebars.Utils.escapeExpression(value);
  new Handlebars.SafeString('<span class="highlight">' + escaped + '</span>');
)

Ember.Handlebars.helper('meetingTime', (value, options) ->
  if moment(value).isSame(+new Date(), 'day')
    value = 'Today, '+ moment(value).format('hh:mm') + ' PST'
    # escaped = Handlebars.Utils.escapeExpression(value);
    # new Handlebars.SafeString('<span class="highlight">' + escaped + '</span>');
  else
    moment(value).format('MM/DD/YY')
)