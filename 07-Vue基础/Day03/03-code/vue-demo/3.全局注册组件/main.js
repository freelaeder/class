import Vue from 'vue'
import App from './App.vue'

// 1. 引入组件
import HmButton from './components/hm-button.vue'
// 2. 注册组件
// Vue.component('组件名', 组件对象)
Vue.component('HmButton', HmButton)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
