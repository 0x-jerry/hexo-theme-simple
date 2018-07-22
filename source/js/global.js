$(document).ready(()=> {
  $('#mobile-nav').click(() => {
    $('.simple-layout-nav').toggleClass('active')
    $('#mobile-nav').toggleClass('active')
  })

  $('.excerpt-link').click(function () {
    document.location.href = $(this).attr('href');
  })
})
