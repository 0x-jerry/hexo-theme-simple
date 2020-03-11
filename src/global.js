import throttle from 'lodash/throttle'

$(document).ready(() => {
  $(window).scroll(
    throttle(() => {
      const top = $(window).scrollTop()
      if (top < 5) {
        $('nav').removeClass('active')
      } else {
        $('nav').addClass('active')
      }
    }, 100)
  )

  $('.excerpt-link').click(function() {
    document.location.href = $(this).attr('href')
  })
})
