<template>
  <!-- v-if="article.id" 等数据加载完成后再渲染 -->
  <div v-if="article.id" class="article-detail-page">
    <!-- $router.back() 返回上一级 -->
    <nav class="nav"> <span @click="$router.back()" class="back">&lt;</span> 面经详情</nav>
    <header class="header">
      <h1>{{ article.stem }}</h1>
      <p>{{ article.createdAt }} | {{ article.views }} 浏览量 | {{ article.likeCount }} 点赞数</p>
      <p>
        <img :src="article.creatorAvatar" alt=""> 
        <span>{{ article.creatorName }}</span> 
      </p>
    </header>
    <main class="body">  
      {{ article.content }}
    </main>
  </div>
</template>

<script>
import axios from 'axios'
/**
 * 接口信息
 * 请求地址: https://mock.boxuegu.com/mock/3083/articles/:id
 * 请求方式: get
 */
export default {
  name: 'ArticleDetailPage',
  data() {
    return {
      article: {}
    }
  },
  async created() {
    // console.log(this.$route.query.id)
    // console.log(this.$route.params.id)
    const res = await axios.get(`https://mock.boxuegu.com/mock/3083/articles/${this.$route.params.id}`)
    // console.log(res.data.result)
    this.article = res.data.result
  }
};
</script>

<style lang="less" scoped>
.article-detail-page {
  .nav {
    height: 44px;
    border-bottom: 1px solid #e4e4e4;
    line-height: 44px;
    text-align: center;
    .back {
      font-size: 18px;
      color: #666;
      position: absolute;
      left: 10px;
      top: 0;
      transform: scale(1, 1.5);
    }
  }
  .header {
     padding: 0 15px;
     p {
       color: #999;
       font-size: 12px;
       display: flex;
       align-items: center;
     }
     img {
       width: 40px;
       height: 40px;
       border-radius: 50%;
       overflow: hidden;
     }
  }
  .body {
     padding: 0 15px;
  }
}
</style>