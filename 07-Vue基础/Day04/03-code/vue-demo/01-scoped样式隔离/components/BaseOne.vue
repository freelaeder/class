<template>
  <div class="base-one">
    BaseOne
    <span>你好</span>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* 
  组件最终都会渲染到页面上, 在任意组件中写的标签选择器自然会选中整个网页中所有匹配的元素并应用样式

  对此, Vue 提供了解决方案: scoped

  让 style 中的样式只影响当前组件内的标签

  scoped 的原理:
    1. 给当前组件内的所有标签添加一个自定义属性: data-v-hash (网页中唯一)
    2. 应用选择器时会自动加上属性选择器
 */
div {
  border: 3px solid blue;
  margin: 30px;
}
</style>