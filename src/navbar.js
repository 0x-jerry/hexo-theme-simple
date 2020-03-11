$(document).ready(() => {
  const pathname = window.location.pathname

  switch (pathname) {
    case '/':
      $('.menu')
        .find('.home, .home a')
        .addClass('hover')
        .remove('hover')
      break
    case '/archives/':
      $('.menu')
        .find('.archives, .archives a')
        .addClass('hover')
        .remove('hover')
      break
    case '/tags/':
      $('.menu')
        .find('.tags, .tags a')
        .addClass('hover')
        .remove('hover')
      break

    default:
      break
  }
})
