const { max, set } = require('lodash')

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

  const scaleWithOffset = (e, factor) => {
    const target = $container[0]

    const offset = {
      x: e.clientX - target.offsetLeft,
      y: e.clientY - target.offsetTop
    }

    const before = {
      x: $container.scrollLeft() + offset.x,
      y: $container.scrollTop() + offset.y
    }

    const scrollFactor = {
      x: before.x / $img.width(),
      y: before.y / $img.height()
    }

    scale(factor)

    const scrollPos = {
      x: $img.width() * scrollFactor.x - offset.x,
      y: $img.height() * scrollFactor.y - offset.y
    }

    $container.scrollLeft(scrollPos.x)
    $container.scrollTop(scrollPos.y)
  }

  $container.on('wheel', (e) => {
    e.preventDefault()
    const raw = e.deltaY + e.deltaX

    factor += unit * raw

    if (factor < 0.1) {
      factor = 0.1
    } else if (factor > 1) {
      factor = 1
    }

    scaleWithOffset(e, factor)
  })

  $container.dblclick((e) => {
    if (factor !== 1) {
      $img._oldFactor = factor
    }

    factor = factor === 1 ? $img._oldFactor : 1

    scaleWithOffset(e, factor)
  })

  $container.append($img)

  $box.append($container)

  // update image width & height;
  setTimeout(() => {
    const maxWidth = $container.width()
    const oWidth = $img.width()

    factor = maxWidth >= oWidth ? 1 : 1 - (oWidth - maxWidth) / oWidth

    scale(factor)
  }, 10)
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
  return (factor) => {
    const originSize = {
      width: $el.prop('naturalWidth'),
      height: $el.prop('naturalHeight')
    }

    $el.width(originSize.width * factor)
    $el.height(originSize.height * factor)
  }
}
