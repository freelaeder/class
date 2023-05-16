<template>
  <div class="h5-wrapper">
    <!-- 一级路由的出口, 它用于切换 首页 和 面经详情 -->
    <!-- 
      组件缓存: 在切换组件的 router-view 处包裹一个标签: <keep-alive></keep-alive>
      所有在 keep-alive 组件内切换的组件, 都会被缓存起来, 不会销毁
      组件缓存虽好, 但不是所有组件都需要缓存的, 以我们现在案例为例: Layout 组件需要缓存, ArticleDetail 不需要缓存
      所以, 组件提供选择缓存组件的属性:
        include (包含): 填写组件名数组, 如果设置该属性, 则表示只缓存设置的组件
        exclude (排除): 填写组件名数组, 如果设置该属性, 则表示只排除设置的组件

        include 和 exclude 只会设置一个
     -->
    <keep-alive :include="['LayoutPage']">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'h5-wrapper'
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
</style>
<style lang="less" scoped>
.h5-wrapper {
  .content {
    margin-bottom: 51px;
  }
  .tabbar {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 50px;
    line-height: 50px;
    text-align: center;
    display: flex;
    background: #fff;
    border-top: 1px solid #e4e4e4;
    a {
      flex: 1;
      text-decoration: none;
      font-size: 14px;
      color: #333;
      -webkit-tap-highlight-color: transparent;
    }
  }
}
</style>