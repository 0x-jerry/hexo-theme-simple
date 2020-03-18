import { configs } from './config'

window.addEventListener('load', () => {
  const metadata = getMeta()

  if (configs.debug) {
    return
  }

  if (metadata.sw === 'true') {
    registerSW()
  }

  if (metadata.ga) {
    registerGa(metadata.ga)
  }

  if (metadata.ba) {
    registerBa(metadata.ba)
  }
})

function getMeta() {
  const metas = document.getElementsByTagName('meta')
  const metadata = {}

  for (const meta of metas) {
    metadata[meta.name] = meta.content
  }

  return metadata
}

function registerBa(baId) {
  var _hmt = _hmt || []
  ;(function() {
    var hm = document.createElement('script')
    hm.src = 'https://hm.baidu.com/hm.js?' + baId
    var s = document.getElementsByTagName('script')[0]
    s.parentNode.insertBefore(hm, s)
  })()
}

function registerGa(gaId) {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }

  gtag('js', new Date())

  gtag('config', gaId)
}

async function registerSW() {
  if (!navigator.serviceWorker) {
    return
  }

  const worker = await navigator.serviceWorker.register('/ws.js')

  worker.onupdatefound = ev => {
    console.log('update found', ev)
  }
}
