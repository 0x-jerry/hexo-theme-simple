$(document).ready(()=> {
  let pageName = location.pathname.match(/[a-z]+/)
  if (!pageName) pageName = 'home'
  else pageName = pageName.pop()
  $('.nav-menu .' + pageName).addClass('active')

})