import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/Layout.vue'
import ArticleDetail from '@/views/ArticleDetail.vue'
import Article from '@/views/Article.vue'
import Collect from '@/views/Collect.vue'
import Like from '@/views/Like.vue'
import User from '@/views/User.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    // 配置路由规则
    // 嵌套路由
    // 明确是谁的子级路由
    {
      path: '/', 
      component: Layout,
      // child 孩子  children 复数
      children: [
        { path: '/article', component: Article },
        { path: '/collect', component: Collect },
        { path: '/like', component: Like },
        { path: '/user', component: User }
      ]
    },
    // 传参分为: query (查询参数) params (动态路由参数)
    // query: 直接传递, 目标组件中直接接收, 不需要做任何额外的配置 ?参数名=参数值
    // params: 先到路由中配置动态路由参数 /detail/:id, 再传递, 目标组件接收
    { path: '/detail/:id', component: ArticleDetail }
  ]
})

export default router