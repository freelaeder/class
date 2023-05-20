import VueRouter from 'vue-router'
import Vue from 'vue'
import MyGoodsList from '@/views/MyGoodsList'
import MyGoodsSearch from '@/views/MyGoodsSearch'
import MyUserInfo from '@/views/MyUserInfo'

// 装插件
Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    { path: '/list', component: MyGoodsList },
    { path: '/search', component: MyGoodsSearch },
    { path: '/info', component: MyUserInfo },
  ]
})

// 最终目标: 导出一个 router 对象
export default router