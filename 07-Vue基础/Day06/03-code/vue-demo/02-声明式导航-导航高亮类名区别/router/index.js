import Find from '@/views/Find'
import My from '@/views/My'
import Friend from '@/views/Friend'

import Vue from 'vue'
import VueRouter from 'vue-router'
// 其实就是注册了两个全局组件: router-view router-link
Vue.use(VueRouter)

// 创建了一个路由对象
const router = new VueRouter({
  routes: [
    { path: '/find', component: Find },
    { path: '/my', component: My },
    { path: '/friend', component: Friend },
  ]
})

export default router