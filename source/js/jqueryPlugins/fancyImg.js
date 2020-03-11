;($ => {
  $.fn.fancyImg = function() {
    this.each((index, ele) => {
      const $ele = $(ele)
      if (!$ele.attr('src')) return

      $ele.click(() => {
        const $img = $ele.clone(false, false)

        const $box = getFancyBox($img)
        $('body').append($box)
        $box.fadeIn()
      })
    })

    return this
  }
})(jQuery)

function getFancyBox($img) {
  const $box = $('<div> </div>')

  const hideBox = () => {
    $box.fadeOut(() => {
      $box.remove()
    })
  }

  $box.css({
    position: 'fixed',
    display: 'none',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    zIndex: 1000
  })

  const $content = $('<div> </div>')
  $content.css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 20px',
    margin: '0 auto',
    width: 'fit-content',
    maxWidth: '80%',
    maxHeight: '80%',
    overflow: 'auto'
  })

  $box.click(e => {
    if (e.currentTarget === e.target) hideBox()
  })

  $($img).css({
    display: 'block',
    objectFit: 'contain',
    width: '100%',
    height: '100%'
  })

  $img.click(e => {
    if (e.currentTarget === e.target) hideBox()
  })

  $content.append($img)
  $box.append($content)
  return $box
}
