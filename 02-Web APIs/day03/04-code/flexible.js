(function flexible(window, document) {
  // 获取 HTML 元素
  var docEl = document.documentElement
  // 设备屏幕分辨率的缩放倍率
  var dpr = window.devicePixelRatio || 1

  function setBodyFontSize() {
    if (document.body) {
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      // 页面加载事件, 页面加载完成后再执行 setBodyFontSize
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // set 1rem = viewWidth / 10
  // 它将可视区分成了 10 等分, 1rem 就是可视区宽度的 10%
  function setRemUnit() {
    // docEl.clientWidth 网页的可视区宽度
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // reset rem unit on page resize
  // resize 可视区大小发生变化时触发, 重新设置 HTML 的字体大小
  window.addEventListener('resize', setRemUnit)
  // 下面是针对于火狐浏览器
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // detect 0.5px supports  修改移动端关于 0.5px的问题
  if (dpr >= 2) {
    var fakeBody = document.createElement('body')
    var testElement = document.createElement('div')
    testElement.style.border = '.5px solid transparent'
    fakeBody.appendChild(testElement)
    docEl.appendChild(fakeBody)
    if (testElement.offsetHeight === 1) {
      docEl.classList.add('hairlines')
    }
    docEl.removeChild(fakeBody)
  }
}(window, document))
