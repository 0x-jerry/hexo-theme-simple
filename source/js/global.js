$(document).ready(()=> {
  $(window).scroll(_.debounce( () => {
    const top = $(window).scrollTop();
    if (top < 50) {
      $('nav').removeClass('active');
    } else {
      $('nav').addClass('active');
    }
  }))

  $('.excerpt-link').click(function () {
    document.location.href = $(this).attr('href');
  })
})
