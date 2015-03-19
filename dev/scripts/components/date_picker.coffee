TBB.DatePickerComponent = Ember.Component.extend
  didInsertElement: (params) ->
    # dateFormat = 'MM-DD-YYYY'
    # date = moment().format dateFormat
    # monthAfter = moment().add('month', 1).format dateFormat
    if @enablePicking then daysOfWeekDisabled = null
    else daysOfWeekDisabled = "0,1,2,3,4,5,6"
    datepicker = @$('.date-picker').datepicker
      keyboardNavigation: false
      daysOfWeekDisabled: daysOfWeekDisabled
    highlightMeetings @meetings

    datepicker.on 'changeMonth', =>
      setTimeout((=> highlightMeetings(@meetings, @ignoreToday))
      , 50)

    datepicker.on 'click', =>
      setTimeout((=> highlightMeetings(@meetings, true)), 1)

  observeMeetings:(-> highlightMeetings(@meetings, @ignoreToday)).observes('meetings.@each')

highlightMeetings = (meetings, ignoreToday) ->
  hideDaysNotInMonth()
  #removeActiveClass()

  if not ignoreToday
    highlightToday()

  meetings.forEach (meeting) ->
    monthYear = moment(meeting.time).format 'MMMM YYYY'
    if monthYear is $($('.datepicker-switch')[0]).text()
      meetingDay = moment(meeting.time).format 'DD'
      $(".day:not(.new):not(.old)").each (i, calendarDay) ->
        if $(calendarDay).text() is meetingDay
          $(calendarDay).addClass('meeting')
            
removeActiveClass = -> $('.datepicker .active').removeClass('active')
hideDaysNotInMonth = ->
  #$('.day.new').text('')
  #$('.day.old').text('')
highlightToday = ->
  monthYear = moment().format 'MMMM YYYY'

  if monthYear is $($('.datepicker-switch')[0]).text()
    meetingDay = moment().format 'DD'
    $(".day:not(.new):not(.old)").each (i, calendarDay) ->
      # Convert '#' to an int and convert '02' to an int
      if parseInt($(calendarDay).text()) is parseInt(meetingDay)
        $(calendarDay).addClass('active')

