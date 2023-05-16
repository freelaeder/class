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
    { path: '/detail/:id', component: ArticleDetail }
  ]
})

export default router