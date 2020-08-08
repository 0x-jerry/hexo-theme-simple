const workbox = require('workbox-build')
const swConfig = require('./workbox-config')
const uuid = require('uuid').v4;
const rm = require('rimraf')

build();

async function build() {
  await clearSW()

  swConfig.cacheId = uuid()

  console.log('cacheId', swConfig.cacheId);

  workbox.generateSW(swConfig)
}

function clearSW() {
  return new Promise((resolve, reject) => {
    rm('source/sw', (err) => {
      if (err) {
        reject(err)
      } else {
        resolve()
      }
    })
  })
}
