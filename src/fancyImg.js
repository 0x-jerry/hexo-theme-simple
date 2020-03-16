;($ => {
  $.fn.fancyImg = function() {
    this.each((index, ele) => {
      const $ele = $(ele)
      if (!$ele.attr('src')) return

      $ele.click(() => {
        const $img = $ele.clone(false, false)

        const $box = getFancyBox($img)
        $('body').append($box)
        $box.show()
      })
    })

    return this
  }
})($)

function getFancyBox($img) {
  const $box = $('<div> </div>')

  $box.on('scroll', e => e.preventDefault())

  $box.on('wheel', e => e.preventDefault())

  const hideBox = () => {
    $box.hide()
    $box.remove()
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

  $box.click(e => {
    if (e.currentTarget === e.target) hideBox()
  })

  $($img).css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    padding: '0 20px',
    margin: '0 auto',
    maxWidth: '80%',
    maxHeight: '80%',
    display: 'block',
    objectFit: 'contain',
    width: 'fit-content',
    height: 'fit-content'
  })

  $box.append($img)
  return $box
}
