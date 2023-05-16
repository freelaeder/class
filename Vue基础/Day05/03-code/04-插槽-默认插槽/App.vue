<template>
  <div>
    <MyDialog>
      <!-- 这里就是传入结构的地方 -->
      你真的要退出吗?
    </MyDialog>
    <MyDialog>
      你确定要删除吗?
    </MyDialog>
    <MyDialog>
      用户名: <input type="text">
      <br>
      密码: <input type="password">
    </MyDialog>
  </div>
</template>

<script>
/**
 * 父向子传值只能解决数据动态变化的问题, 无法解决结构自定义的问题
 * 使用插槽可以让子组件内部的结构都支持自定义:
 * 1. 在子组件内, 使用 <slot></slot> 占位
 * 2. 在父组件中, 使用子组件时, 标签中间传入自定义结构
 * 
 */

import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>