(function flexible(window, document) {
  // 为什么用立即执行函数呢?
  // 为了减少全局作用域的污染

  // docEl 就是 HTML 元素
  var docEl = document.documentElement
  // 缩放倍率, 小屏幕上 1:1 还原, 如果放到大屏幕上还是 1:1 还原, 会导致文字看起来非常小
  // 获取缩放倍率, 如果没获取到就是 1
  var dpr = window.devicePixelRatio || 1

  function setBodyFontSize() {
    if (document.body) {
      // 直接设置 body 的字体大小
      document.body.style.fontSize = (12 * dpr) + 'px'
    }
    else {
      // DOM 加载完毕后执行
      document.addEventListener('DOMContentLoaded', setBodyFontSize)
    }
  }
  setBodyFontSize();

  // 将 1 rem 设置为了屏幕的 1/10
  function setRemUnit() {
    // docEl 是 HTML 元素
    // docEl.clientWidth 获取的是网页可视区的宽度
    // 把网页可视区分为了十等分
    var rem = docEl.clientWidth / 10
    docEl.style.fontSize = rem + 'px'
  }

  setRemUnit()

  // 添加事件监听, resize, 当页面可视区大小发生变化时, 动态计算 1rem 等于多少 px
  window.addEventListener('resize', setRemUnit)
  // 兼容火狐的
  window.addEventListener('pageshow', function (e) {
    if (e.persisted) {
      setRemUnit()
    }
  })

  // 对 0.5px 的支持
  // detect 0.5px supports
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
