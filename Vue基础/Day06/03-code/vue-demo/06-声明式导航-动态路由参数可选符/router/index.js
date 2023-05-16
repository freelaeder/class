import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/home', component: Home },
    // ? 表示可选参数, 传不传参数都可以匹配到这条路由规则
    { path: '/search/:words?', component: Search }
  ]
})

export default router