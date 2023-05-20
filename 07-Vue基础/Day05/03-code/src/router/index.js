import Vue from 'vue'
// 1. 下载 v3.6.5
// 2. 引入
import VueRouter from 'vue-router'
// 引入组件对象
// @ 表示 src 的绝对路径
import Find from '@/views/Find.vue'
import Friend from '@/views/Friend.vue'
import My from '@/views/My.vue'

// 3. 安装注册 Vue.use(Vue插件)
// 注册路由的全局组件: router-link router-view
Vue.use(VueRouter)

// 4. 创建路由对象
// 规则配置: 配置路径和组件的映射关系
const router = new VueRouter({
  // 路由规则是多条, 所以 routes 是数组
  routes: [
    // 一个对象代表一条规则
    // path: 路径
    // component: 组件
    { path: '/find', component: Find },
    { path: '/friend', component: Friend },
    { path: '/my', component: My },
  ]
})

export default router
