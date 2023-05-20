<template>
  <div class="app-container">
    <h1>App 根组件</h1>
    <hr>

    <div class="count-box">
      <my-left></my-left>
      <my-right></my-right>
    </div>
  </div>
</template>

<script>
// 导入组件
import MyLeft from '@/components/Left.vue'
import MyRight from '@/components/Right.vue'

export default {
  name: 'App',
  // 注册组件
  components: {
    MyLeft,
    MyRight
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 20px;
}

.count-box {
  display: flex;
  > div {
    &:nth-child(1) {
      margin-right: 30px;
    }
    width: 50%;
    border: 1px solid #cfcfcf;
    margin: 20px 0;
    padding: 20px;
    border-radius: 6px;
  }
}
</style>
