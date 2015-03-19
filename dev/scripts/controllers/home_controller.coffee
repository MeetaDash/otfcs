TBB.HomeController = Em.ObjectController.extend
  needs: ['application']
  password: 'abc1234'
  passwordError: false
  email: 'ian@company.com'
  emailError: false
  actions:
    login: ->
      email = @get('email')
      password = @get('password')

      if not email or not password

        if not email
          $('#emailInputHolder').popover()
          $('#emailInputHolder').popover('show')
        else
          $('#emailInputHolder').popover('hide')

        if not password
          $('#passwordInputHolder').popover()
          $('#passwordInputHolder').popover('show')
          console.log('no password')
        else
          $('#passwordInputHolder').popover('hide')
      # else if email.toLowerCase() == 'sarah@email.com' and
      #   @transitionToRoute 'account'
      # else if email.toLowerCase() == 'ian@nab.com' and password == 'opentok'
      #   @transitionToRoute 'rep'
      else
        $('#emailInputHolder').popover('hide')
        $('#passwordInputHolder').popover('hide')

        @transitionToRoute 'account'
