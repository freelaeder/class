import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// // 全局注册指令
// // v-model v-if v-for: model if for 才是指令名, 所有的指令会自动加上 v- 前缀
// // Vue.directive('指令名', 配置对象)
// // 我希望的指令: v-focus
// Vue.directive('focus', {
//   // insert: 插入
//   // inserted: 已经插入了
//   // 这个方法会在 当前指令绑定的元素 被插入到 DOM 上时自动执行
//   // 1. 指令一定会用在标签上, 所以必然会有绑定的标签
//   // 2. 绑定的标签元素被渲染到 DOM 时会自动触发这个函数的执行
//   // 这类函数我们都叫它: 钩子函数
//   // 参数1: 被绑定的元素对象, DOM 对象
//   inserted(el) {
//     // console.log(el, '被渲染到页面了')
//     el.focus()
//   }
// })

new Vue({
  render: h => h(App),
}).$mount('#app')
