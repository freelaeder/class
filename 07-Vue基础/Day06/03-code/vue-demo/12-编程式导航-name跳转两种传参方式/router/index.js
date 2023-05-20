import Home from '@/views/Home'
import Search from '@/views/Search'
import Vue from 'vue'
import VueRouter from 'vue-router'
import NotFound from '@/views/NotFound'
Vue.use(VueRouter)

const router = new VueRouter({
  // history: 链接没有 #, 但需要后端支持
  // https://v3.router.vuejs.org/zh/guide/essentials/history-mode.html
  // 开发阶段无所谓用哪个模式, 项目上线前记得与后端工程师沟通好, 修改为 history 模式
  mode: 'history',
  routes: [
    // path: 匹配用户访问的路径
    // redirect: 重定向到指定的路径
    { path: '/', redirect: '/home' },
    { path: '/home', component: Home },
    // ? 表示可选参数, 传不传参数都可以匹配到这条路由规则
    { name: 'search', path: '/search/:words?', component: Search },
    // 路由配置末尾添加 * 来设置 404 页面组件
    { path: '*', component: NotFound }
  ]
})

export default router