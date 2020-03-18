import throttle from 'lodash/throttle'
import { configs } from './config'

window.addEventListener('load', () => {
  console.log(
    `${configs.debug ? 'Development' : 'Production'} ${configs.version}`
  )

  $(window).scroll(
    throttle(() => {
      const top = $(window).scrollTop()
      if (top < 5) {
        $('nav').removeClass('active')
      } else {
        $('nav').addClass('active')
      }
    }, 100)
  )

  $('.excerpt-link').click(function() {
    document.location.href = $(this).attr('href')
  })

  const mediaQuery = queryDarkMode()
  switchTheme(mediaQuery.matches)

  mediaQuery.addEventListener('change', e => {
    switchTheme(e.matches)
  })
})

/**
 * @returns {MediaQueryList}
 */
function queryDarkMode() {
  const r =
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)')

  return r || {}
}

function createCss(isDark = false) {
  const hljsCss = isDark
    ? 'https://cdn.bootcss.com/highlight.js/9.18.1/styles/atom-one-dark.min.css'
    : 'https://cdn.bootcss.com/highlight.js/9.18.1/styles/atom-one-light.min.css'

  const $link = document.createElement('link')
  $link.rel = 'stylesheet'
  $link.type = 'text/css'
  $link.href = hljsCss
  $link.media = 'all'

  $('head').append($link)
}

function switchTheme(isDark = false) {
  createCss(isDark)

  document.documentElement.setAttribute('theme', isDark ? 'dark' : 'light')
}
