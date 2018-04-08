(($) => {
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
  $box.css ({
    position: 'fixed',
    display: 'none',
    top: 0,
    left: 0,
    width: '100vw',
    height: '100vh',
    overflow: 'auto',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  })

  const $content = $('<div> </div>')
  $content.css({
    position: 'relative',
    top: '50%',
    left: '50%',
    width: 'fit-content',
    margin: '20px',
    transform: 'translate(-50%, -50%)',
  })

  $box.click(e => {
    if(e.currentTarget === e.target) $box.remove()
  })

  $content.append($img)
  $box.append($content)
  return $box
}
