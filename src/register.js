import { configs } from './config'
import { getMeta } from './utils'

window.addEventListener('load', () => {
  const metadata = getMeta()

  if (configs.debug) {
    unregisterSW()
    return
  }

  if (metadata.sw === 'true') {
    registerSW()
  } else {
    unregisterSW()
  }

  if (metadata.ga) {
    registerGa(metadata.ga)
  }

  if (metadata.ba) {
    registerBa(metadata.ba)
  }
})

function appendScript(url) {
  const $el = document.createElement('script')
  $el.src = url
  $el.async = true
  const $body = document.getElementsByTagName('body')[0]
  $body.append($el)
}

function registerBa(baId) {
  var _hmt = _hmt || []
  appendScript('https://hm.baidu.com/hm.js?' + baId)
}

function registerGa(gaId) {
  appendScript('https://www.googletagmanager.com/gtag/js?' + gaId)

  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }

  gtag('js', new Date())

  gtag('config', gaId)
}

async function unregisterSW() {
  if (!navigator.serviceWorker) {
    return
  }

  const sws = await navigator.serviceWorker.getRegistrations()

  for (const sw of sws) {
    sw.unregister()
  }
}

async function registerSW() {
  if (!navigator.serviceWorker) {
    return
  }

  const worker = await navigator.serviceWorker.register('/sw/index.js')

  worker.onupdatefound = (ev) => {
    $.message('检查到更新，请刷新重新访问', [
      {
        text: '刷新',
        click(e, $tool) {
          $tool.close()
          location.reload()
        }
      },
      {
        text: '关闭',
        type: 'plain',
        click() {
          console.log('click')
        }
      }
    ])
  }
}
