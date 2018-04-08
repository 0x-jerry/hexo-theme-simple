$(document).ready(() => {
  $('.markdown-content img').fancyImg()

  let $pageNav = $('#post-nav')

  if($pageNav[0]) generateTOC($pageNav)
})

function generateTOC($pageNav) {
  const $content = $('#post-content')
  const $ul = $('<ul> </ul>')

  $content.find('h1,h2,h3,h4,h5,h6').each((index, ele) => {
    const $li = $('<li></li>')
    const $a = $('<a />')

    $li.addClass(ele.nodeName.toLowerCase())

    const text = $(ele).text()
    const id = text.split(/[\s.*+?^=!:${}()|[\]/\\]+/).filter(item => item !== '')

    $a.attr('href', `#${id.join('-')}`)
    $a.text(text)

    $li.append($a)
    $ul.append($li)
  })

  $pageNav.append($ul).addClass('active')
}
