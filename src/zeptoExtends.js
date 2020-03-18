;($ => {
  $.fn.fancyImg = function() {
    this.each((index, ele) => {
      const $ele = $(ele)
      if (!$ele.attr('src')) return

      $ele.click(() => {
        const $img = $ele.clone(false, false)

        const $box = createFancyBox($img)
        $('body').append($box)
        $box.show()
      })
    })

    return this
  }

  $.message = function(message, buttons) {
    createMessage(message, buttons)
  }
})($)

function createMessage(message, buttons = []) {
  const $msg = $(`
  <div class="message">
    <div class="message-title">
    ${message}
    </div>
    <div class="message-btns">
    </div>
  </div>`)

  const $tool = {
    close() {
      $msg && $msg.removeClass('active')
      setTimeout(() => {
        $msg && $msg.remove()
      }, 600)
    },
    show() {
      setTimeout(() => {
        $msg && $msg.addClass('active')
      }, 1)
    }
  }

  const $closeBtn = $(`
    <a class="message-closeBtn">
      <i class="fa fa-times-circle fa-2x"></i>
    </a>
  `)

  $closeBtn.click(() => {
    $tool.close()
  })

  $msg.append($closeBtn)

  const $btnsBox = $msg.find('.message-btns')

  for (const btn of buttons) {
    const $btn = $(
      `<button class="message-btn message-btn-${btn.type || ''}">${
        btn.text
      }</button>`
    )

    if (btn.click) {
      $btn.click(e => btn.click(e, $tool))
    }

    $btnsBox.append($btn)
  }

  $(document.body).append($msg)

  $tool.show()
  // setTimeout(() => {
  //   $msg.remove()
  // }, 1000)
}

function createFancyBox($img) {
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
    zIndex: 1000,
    cursor: 'zoom-out'
  })

  $box.click(e => e.currentTarget === e.target && hideBox())

  $($img).css({
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
    margin: '0 auto',
    maxWidth: '80%',
    maxHeight: '80%',
    display: 'block',
    cursor: 'default'
  })

  $box.append($img)
  return $box
}
