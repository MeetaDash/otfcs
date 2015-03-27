TBB.ApplicationController = Em.ObjectController.extend
  archiveVideoUrl: null
  stocks: [
      {
        title: 'Dow'
        price: '15,821.63'
        change: '+70.96'
        percentage: '0.45%'
      }
      {
        title: 'Nasdaq'
        price: '3,965.58'
        change: '+45.66'
        percentage: '1.16%'
      }
      {
        title: 'S&P 500'
        price: '1,782.00'
        change: '+14.31'
        percentage: '0.81%'
      }
  ]
  actions:
    showArchiveEntry: (entry) ->
      $('#myModal').modal('show')
      @set 'archiveVideoUrl', entry.url
      $('#myModal').find('video').attr('src', entry.url)
  cashTransactions:(->
    currentCash = @get 'totalCash'
    lastCash = null
    equity = 120000
    fixed = 160000
    retirement = 190000

    cashTransactions = [1..5].map (num, i) =>
      date = moment().subtract('days', (i*i)).format('MM/DD/YYYY')

      # randomInt4 = getRandomInt 1, 4
      # randomInt = getRandomInt 0, 1

      # switch randomInt4
      #   when 1
      #     info = creditInfo.num[randomInt] + ' '+getRandomInt 100, 400
      #     amount = getRandomInt(5000, 10000)
      #   when 2
      #     info = debtInfo.num[randomInt] + ' '+getRandomInt 100, 400
      #     amount = getRandomInt(100, 5000)
      #   when 3
      #     info = creditInfo.address[randomInt]
      #     amount = getRandomInt(100, 300)
      #   when 4
      #     info = debtInfo.address[randomInt]
      #     amount = getRandomInt(100, 500)

      # if randomInt4 % 2
      #   debt = false
      # else
      #   debt = true

     # Hardcoded value
      switch i
        when 0
          info = 'Check deposit #844'
          debt = false
          amount = '1,543.50'
          currentCash = '127,559.33'
          date = '11/14/2015'
        when 1
          info = 'VISA 1234'
          debt = true
          amount = '2,457.87'
          currentCash = '126,015.83'
          date = '11/13/2015'
        when 2
          info = 'Cash deposit ATM'
          debt = false
          amount = '1,000.00'
          currentCash = '128,473.70'
          date = '11/10/2015'
        when 3
          info = 'Withdrawal'
          debt = true
          amount = '200.00'
          currentCash = '127,473.70'
          date = '11/05/2015'
        when 4
          info = 'Check deposit #843'
          debt = false
          amount = '2,150.00'
          currentCash = '127,673.70'
          date = '10/29/2015'


      # if lastCash then currentCash = lastCash
      # if debt then lastCash = currentCash + amount
      # else lastCash = currentCash - amount

      date: date
      info: info
      debt: debt
      amount: amount
      total: currentCash
  ).property()
  equityTransactions: ( ->
    transactions = [
      {
        subtext: 'Reinvestment'
        info: 'Vanguard Russell 2000 ETF (VTWO)'
        date: '11/14/2015'
        debt: true
        amount: '4,794.00'
        total: '141,112.96'
      }
      {
        subtext: 'Dividend received'
        info: 'SPDR S&P 600 Small Cap ETF (SLY)'
        date: '11/13/2015'
        debt: false
        amount: '6,335.00'
        total: '145,906.96'
      }
      {
        subtext: 'Long-term cap gain'
        info: 'T. Rowe Price Institutional Large Cap Growth Fund (TRLGX)'
        date: '11/10/2015'
        debt: false
        amount: '8,392.12'
        total: '139,571.96'
      }
      {
        subtext: 'Long-term cap gain'
        info: 'Fidelity Focused Stock Fund (FTQGX)'
        date: '11/05/2015'
        debt: false
        amount: '10,832.00'
        total: '131,179.84'
      }
    ]
  ).property()
  fixedTransactions: ( ->
    transactions = [
      {
        info: 'Peritus High Yield ETF (HYLD)'
        date: '11/19/2015'
        debt: false
        amount: '3,155.00'
        total: '164,832.31'
      }
      {
        info: 'ProShares UltraPro Sht 20+ Yr Treas (TTT)'
        date: '11/14/2015'
        debt: false
        amount: '8,765.10'
        total: '161,677.21'
      }
      {
        info: 'Guggenhm BltShs 2015 HY Corp Bd ETF (BSJF)'
        date: '11/10/2015'
        debt: false
        amount: '1,100.00'
        total: '152,912.21'
      }
      {
        info: 'PIMCO 0-5 Year Hi Yield Corp Bd Idx (HYS)'
        date: '11/05/2015'
        debt: false
        amount: '2,342.17'
        total: '151,812.21'
      }

    ]
  ).property()
  retirementTransactions: ( ->
    #TODO add graphs
    transactions = [
      {
        info: 'TIAA-CREF Lifecycle Retirement Income Fund (TLRIX)'
      }
      {
        info: 'Vanguard Target Retirement Income (VTINX)'
      }
    ]
  ).property()

getRandomInt = (min, max) -> Math.floor(Math.random() * (max - min + 1)) + min

creditInfo =
  address: [
    'Cash deposit ATM'
    'Cash deposit teller'
  ]
  num: [
    'Check deposit'
    'Electronic transfer'
  ]
debtInfo =
  address: [
    'Withdrawal ATM'
    'Withdrawal Teller'
  ]
  num: [
    'VISA'
    'MasterCard'
  ]
