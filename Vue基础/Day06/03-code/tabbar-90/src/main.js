import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import 'normalize.css'
import '@/assets/fonts/iconfont.css'
// 引入 bootstrap 的样式
import 'bootstrap/dist/css/bootstrap.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
  router
}).$mount('#app')
