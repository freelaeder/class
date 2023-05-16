90 期 WebAPI 考试答案

一、单选题：C B D A C D D A A C



二、简答题：

1、什么是事件委托？以及事件委托的优点和事件委托的原理？ 

> 评分标准：未回答优点不扣分，未回答原理是事件冒泡扣 2 分，未回答什么是事件委托扣 2 分

事件委托是指原本需要注册在子元素的事件委托给父元素，让父元素担当事件监听的职务。

利用的原理是事件冒泡机制。

优点：

1. 同时给多个元素注册事件，需要利用循环多次注册事件；
2. 动态渲染的元素事件会丢失，事件委托是委托给父元素，所以不会丢失。



2、如何将 JSON 字符串转换为 JS 对象、如何将 JS 对象转换为 JSON 字符串？ 

> 评分标准：写错单词不扣分，写反了扣 2 分

对象转字符串：JSON.stringify()

字符串转对象：JSON.parse()



3、事件的三要素是什么？

> 评分标准：答错一个扣 2 分

事件源、事件类型、事件处理函数



 4、什么是事件对象以及如何获取事件对象？

> 评分标准：未答出如何获取事件对象扣 2 分，未回答什么是事件对象扣 1 分

是一个对象，该对象里有事件触发时的相关信息，包含属性和方法。

注册事件时，事件处理函数第一个参数就是事件对象。



 5、写一个判断是否是手机号的正则表达式？

> 评分标准：/^\d{11}$/ 扣 1 分

/^1\d{10}$/



 6、setInterval 和 setTimeout 的区别？

> 评分标准：记反了扣 2 分，未回答间歇定时器会重复执行而延时定时器只执行一次扣 1 分

setInterval() 是间歇定时器，每隔指定时间会自动执行一次函数，会重复执行

setTimeout() 是延时定时器，延时指定时间后执行一次函数，只会执行一次



 7、为什么要移除事件监听？如何移除事件监听？

> 评分标准：未回答为什么要移除事件监听不扣分，未回答 removeEventListener() 扣 2 分，写错单词不扣分

元素被移除前，可以把不需要的事件移除掉

事件源.removeEventListener(事件类型, 事件处理函数)



 8、如何在父元素内部添加子节点的？

> 评分标准：单词写错不扣分，写反了扣 2 分

在后面添加：append()

在前面添加：prepend()



三、代码题

> 评分标准：实现单击全选所有都勾选的功能 +25 分，实现小选框勾选影响全选框 +5 分，未实现小选勾选影响全选但使用了假设法 +3 分

```js
const checkAll = document.querySelector('#checkAll')
const cks = document.querySelectorAll('.ck')
checkAll.addEventListener('click', function () {
  cks.forEach(function(item) {
    item.checked = checkAll.checked
  })
})

cks.forEach(function(ck) {
  ck.addEventListener('click', function() {
    let isAll = true
    cks.forEach(function(item) {
      if (!item.checked) {
        isAll = false
      }
    })
    checkAll.checked = isAll
  })
})
```

