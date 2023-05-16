// 1. 引入 Vue 构造函数
import Vue from 'vue'
// 2. 引入 App.vue 文件
// .vue 结尾的文件都可以被称为组件
import App from './App.vue'

// 3. 设置生产环境时的提示, 不显示
Vue.config.productionTip = false

// 4. 创建 Vue 实例对象
new Vue({
  // el: '#app',
  // 5. 根据 App 组件来创建 DOM 元素并挂载到指定的容器中
  render: h => h(App),
  // render(createElement) {
  //   // 调用 createElement 函数来创建对象
  //   // 根据 App.vue 组件来创建
  //   return createElement(App)
  // }
}).$mount('#app')

// $mount() 完全等同于设置 el
