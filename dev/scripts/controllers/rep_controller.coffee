TBB.RepController = Em.ObjectController.extend
  needs: ['application']
  sharedContent: [
    Ember.Object.create
      title: 'The U.Fund College Investing Plan Performance'
      graph: 'images/graph_1.png'
      isSelected: true
      timeShared: moment().format('MMMM DD,YYYY, hh:mma') + ' PST'

    Ember.Object.create
      title: 'UNIQUE College Investing Plan Performance'
      graph: 'images/graph_2.png'
      isSelected: false
      timeShared: null
  ]

  firstMeeting:(->
    @get('meetings')[0]
  ).property('meetings')

  meetings: [
    {
      title: 'Portfolio Review 2015'
      rep:
        id: 'Scott'
        name: 'Scott'
      time: moment('01:30pm', 'hh:mma')#+new Date()
      isToday: true
    }
    {
      title: 'Investment Tips Session'
      rep:
        id: 'Scott'
        name: 'Scott'
      time: (new Date()).getTime() + 3600000
    }
    {
      title: '401k Updates'
      rep: {
        id: 'Scott'
        name: 'Scott'
      }
      time: (new Date()).getTime() + 5100000
    }
  ]

  archives: [
    {
      title: "401k Update"
      time: (new Date()).getTime() - 10340000
      url: "https://www.youtube.com/embed/rDmZwsMGqRE?autoplay=1"
      type: "youtube"
      duration: 1339000
    }
    {
      title: "Portfolio Review"
      time: (new Date()).getTime() - 74120000
      url: "https://www.youtube.com/embed/rDmZwsMGqRE?autoplay=1"
      type: "youtube"
      duration: 754000
    }
    {
      title: "Portfolio Updates"
      time: (new Date()).getTime() - 202340000
      url: "https://www.youtube.com/embed/rDmZwsMGqRE?autoplay=1"
      type: "youtube"
      duration: 552000
    }
  ]

  selectedFund: 0
  selectedFundObserver:(->
    #funds = @get 'sharedContent'

    selectedItem = @get 'selectedFund'

    @get('sharedContent').forEach (item, i) =>
        item.set('isSelected', i == selectedItem)
        item

    ).observes('selectedFund')
  selectedFundUrl:(->
    index = @get('selectedFund')

    @get('sharedContent')[index].graph
  ).property('selectedFund')
  selectedFundTitle:(->
    index = @get('selectedFund')
    @get('sharedContent')[index].title
  ).property('selectedFund')
  sharedFundIndex: 0
  sharedFund:(->
      index = @get 'sharedFundIndex'
      @get('sharedContent')[index]
    ).property('sharedFundIndex')
  times:( ->
    times = [7..18]
    times.map (num) -> moment().hour(num).format 'ha'
  ).property()
  selectedTime: null
  meetingTitle: null
  isScheduleOpen: true
  isPreviewSessionOpen: true
  isAccountOverviewOpen: true
  isRecommendedFundsOpen: true
  setOTCSF: (->

    window.OTCSF = {}
    window.OTCSF.addAdvisors = (advisorArray) =>
      console.log('adding advisors')

    window.OTCSF.inviteAdvisor = (advisor) =>
      console.log('inviting advisor ' + advisor)

    window.OTCSF.sendSharedContent = (contentModels) =>
      if window.OTCSF.otcs and window.OTCSF.otcs.sharedData
        console.log "sending data"
        window.OTCSF.otcs.sharedData.set('sharedContent', contentModels)
      console.log 'models ready to be sent:', contentModels
      # send an array of content models
    window.OTCSF.sendMeeting = (meetingModel) =>
      if window.OTCSF.otcs and window.OTCSF.otcs.sharedData
        console.log "sending data"
        window.OTCSF.otcs.sharedData.set('meeting', meetingModel)
      console.log 'meetings ready to be sent:', meetingModel
      # send a single object
    window.OTCSF.addArchive = (archive) =>
      archives = @get('archives').toArray()
      archives.unshiftObject archive
      @set 'archives', archives
      @set 'archivePending', true
    window.OTCSF.archiveReady = (data) =>
      archives = @get('archives').toArray()
      archive = @get('archives').objectAt(0)
      archive.url = data.url
      Em.set archive, "url", data.url
      Em.set archive, "duration", data.duration
      Em.set archive, "title", data.name
      archives[0] = archive
      @set 'archives', archives
      @set 'archivePending', false

    ).observes('model')
  archivePending: false
  actions:
    selectFund: (index) -> @set 'selectedFund', index
    openScheduleContainer: ->
      $('#scheduleContainer').collapse('show')
      @set 'isScheduleOpen', true
    hideScheduleContainer: ->
      $('#scheduleContainer').collapse('hide')
      @set 'isScheduleOpen', false
    openPreviewSessions: ->
      $('#previousSessionContainer').collapse('show')
      @set 'isPreviewSessionOpen', true
    hidePreviewSessions: ->
      $('#previousSessionContainer').collapse('hide')
      @set 'isPreviewSessionOpen', false
    openAccountOverview: ->
      $('#accountOverviewContainer').collapse('show')
      @set 'isAccountOverviewOpen', true
    hideAccountOverview: ->
      $('#accountOverviewContainer').collapse('hide')
      @set 'isAccountOverviewOpen', false
    openRecommendedFunds: ->
      $('#recommendedFundsContainer').collapse('show')
      @set 'isRecommendedFundsOpen', true
    hideRecommendedFunds: ->
      $('#recommendedFundsContainer').collapse('hide')
      @set 'isRecommendedFundsOpen', false
    selectFund: (index) ->
      @set 'selectedFund', index

    shareContent: ->
      # sharedContent = @get('sharedContent').filter (content) ->
      #   content.isSelected
      selectedContent = @get 'selectedFund'
      @set 'sharedFundIndex', selectedContent
      sharedContent = @get('sharedFund')

      time = moment().format('MMMM DD,YYYY, hh:mma') + ' PST'
      #console.log(time)
      sharedContent.set('timeShared', time)

      #window.OTCSF.sendSharedContent sharedContent
      window.OTCSF.sendSharedContent selectedContent
    scheduleMeeting: ->
      day = $('td.active').text()
      monthYear = $('.datepicker-switch')[0].innerText
      #console.log monthYear
      console.log monthYear
      if not day then dayMonthYear = moment().format('DDMMMYYYY')
      else dayMonthYear = day + moment(monthYear, 'MMMM YYYY').format('MMMYYYY')

      console.log dayMonthYear
      isMeetingToday = dayMonthYear == moment().format('DDMMMYYYY')
      #if not dayMonthYear then dayMonthYear = moment().format('DDMMMYYYY')
      # what if dayMonthYear isn't available? Make it today.
      selectedTime = @get 'selectedTime'


      selectedTime = $('.time-picker .filter-option').text()

      combined = dayMonthYear + ' ' + selectedTime
      meetingTime = +moment(combined, 'DDMMMYYYY,ha')

     # meetingTime = moment(dayMonthYear, 'DDMMMYYYY') #+ moment(selectedTime, 'ha')


      meeting =
        title: @get 'meetingTitle'
        time: meetingTime
        rep:
          id: 'Ian'
          name: 'Ian Small'
        isToday: isMeetingToday
      meetings = @get 'meetings'
      meetings.pushObject(meeting)
      sortedMeetings = quickSortTime meetings
      # do some filtering to make sure its in the right spot in the meeting stack
      @set 'meetings', sortedMeetings
      window.OTCSF.sendMeeting meeting

quickSortTime = (arr) ->
  return []  if arr.length is 0
  lesser = []
  greater = []
  head = arr[0]
  i = 1

  while i < arr.length
    if arr[i].time < head.time
      greater.push arr[i]
    else
      lesser.push arr[i]
    i++
  quickSortTime(greater).concat head, quickSortTime(lesser)
