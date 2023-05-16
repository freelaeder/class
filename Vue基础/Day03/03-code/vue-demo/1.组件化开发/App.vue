<template>
  <!-- template 里有且只能有一个根元素, 如果非要有多个子元素可以包在一个 div 内 -->
  <div @click="open" class="father">
    大盒子
    <div @click.stop class="son">小盒子</div>
  </div>
</template>

<script>
// 组件中的 js 默认导出一个对象, 这个对象就是组件对象
export default {
  // Vue 的核心成员
  methods: {
    open() {
      alert('你好哇')
    }
  }
}
</script>

<style lang="less">
/* 
  css 不支持嵌套, 可以通过设置 style 标签的 lang 属性
  来修改支持的预处理器, 但必须要装包
  如果最新版能用, 就用最新版:
  npm i less less-loader -D

  less-loader 如果最新版太新了, 和我们的脚手架项目不匹配, 就选择低版本:
  npm i less less-loader@5 -D
  
*/
.father {
  width: 400px;
  height: 400px;
  background-color: orange;

  .son {
    width: 200px;
    height: 200px;
    background-color: green;
  }
}
</style>