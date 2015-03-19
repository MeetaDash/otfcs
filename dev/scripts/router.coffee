TBB.Router.map ->
  startView = if /rep/g.exec( window.location.pathname ) then "rep" else "home"
  @route startView, path: '/'
  @route 'account', path: '/account'
  @route 'rep', path: '/rep'
  @route 'about', path: '/about'
