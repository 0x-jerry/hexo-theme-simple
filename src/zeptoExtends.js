;(($) => {
  $.fn.fancyImg = function () {
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

  $.message = function (message, buttons) {
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
      $btn.click((e) => btn.click(e, $tool))
    }

    $btnsBox.append($btn)
  }

  $(document.body).append($msg)

  $tool.show()
}

function createFancyBox($img) {
  const $box = $('<div class="z-fancy-box"> </div>')

  const hideBox = () => {
    $box.hide()
    $box.remove()
  }

  $box.click((e) => e.target !== $img[0] && hideBox())

  $($img).addClass('z-fancy-img')

  drag($img, (dx, dy) => {
    const top = $container.scrollTop() - dy
    const left = $container.scrollLeft() - dx

    $container.scrollLeft(left)
    $container.scrollTop(top)
  })

  const $container = $(`<div class="z-fancy-container"></div>`)
  $container.on('scroll', (e) => e.preventDefault())

  let factor = 1
  const unit = -0.001
  const scale = Scale($img)

  $container.on('wheel', (e) => {
    e.preventDefault()
    const raw = e.deltaY + e.deltaX

    factor += unit * raw

    if (factor < 0.1) {
      factor = 0.1
    } else if (factor > 1) {
      factor = 1
    }

    scale(factor)
  })

  $img.dblclick(() => {
    factor = 1
    scale(factor)
  })

  $container.append($img)

  $box.append($container)
  return $box
}

/**
 *
 * @param {Element} el
 * @param {(dx:number, dy:number) => void} move
 */
function drag(el, move) {
  const $el = $(el)
  let dragging = false
  $el.mousedown(() => (dragging = true))
  $el.mouseup(() => (dragging = false))
  $el.mousemove((e) => dragging && move(e.movementX, e.movementY))
}

/**
 *
 * @param {Element} el
 */
function Scale(el) {
  const $el = $(el)
  const originSize = {
    width: $el.width(),
    height: $el.height()
  }

  return (factor) => {
    if (originSize.width === undefined) {
      originSize.width = $el.width()
      originSize.height = $el.height()
    }

    $el.width(originSize.width * factor)
    $el.height(originSize.height * factor)
  }
}
