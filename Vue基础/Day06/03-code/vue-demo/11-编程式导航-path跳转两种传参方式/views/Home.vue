<template>
  <div class="home">
    <div class="logo-box"></div>
    <div class="search-box">
      <input v-model="words" type="text">
      <button @click="toSearch">搜索一下</button>
    </div>
    <div class="hot-link">
      热门搜索：
      <!-- 
        query 传参: 查询字符串传参
        1. 传递: 路径?参数名=参数值&参数名=参数值
        2. 目标组件中接收参数: $route.query.参数名

        动态路由传参: 动态路由参数
        1. 在 router/index.js 配置动态路由参数, /search/:参数名
        2. 传递: /search/参数值
        3. 目标组件中接收参数: $route.params.参数名
       -->
      <!-- <router-link to="/search?words=黑马程序员">黑马程序员</router-link>
      <router-link to="/search?words=前端培训">前端培训</router-link>
      <router-link to="/search?words=如何成为前端大牛">如何成为前端大牛</router-link> -->
      <router-link to="/search/黑马程序员">黑马程序员</router-link>
      <router-link to="/search/前端培训">前端培训</router-link>
      <router-link to="/search/如何成为前端大牛">如何成为前端大牛</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'FindMusic',
  data() {
    return {
      words: ''
    }
  },
  methods: {
    toSearch() {
      // 编程式导航: 使用 js 进行路由跳转
      // 跳转方式: 1. 使用 path (路径)  2. 使用 name (路由名称)
      // 1. 使用 path (路径) 
      // this.$router.push('路径')  简单写法
      // this.$router.push({ path: '路径' })  完整写法
      // this.$router.push('/search')
      // 1.1 path + query 传参
      // 手动拼接, 太麻烦了, 不建议使用
      // this.$router.push('路径?参数名=参数值')
      // 官方的 api 来传参
      // this.$router.push({
      //   path: '/search',
      //   query: {
      //     words: this.words
      //   }
      // })
      // 1.2 path + 动态路由传参
      this.$router.push(`/search/${this.words}`)

      // 2. 使用 name (路由名称)
      // 先去 index.js 中配置路由的 name
      // this.$router.push({ name: '路由名' })
      // this.$router.push({
      //   name: 'search'
      // })
    }
  }
}
</script>

<style>
.logo-box {
  height: 150px;
  background: url('@/assets/logo.jpeg') no-repeat center;
}
.search-box {
  display: flex;
  justify-content: center;
}
.search-box input {
  width: 400px;
  height: 30px;
  line-height: 30px;
  border: 2px solid #c4c7ce;
  border-radius: 4px 0 0 4px;
  outline: none;
}
.search-box input:focus {
  border: 2px solid #ad2a26;
}
.search-box button {
  width: 100px;
  height: 36px;
  border: none;
  background-color: #ad2a26;
  color: #fff;
  position: relative;
  left: -2px;
  border-radius: 0 4px 4px 0;
}
.hot-link {
  width: 508px;
  height: 60px;
  line-height: 60px;
  margin: 0 auto;
}
.hot-link a {
  margin: 0 5px;
}
</style>