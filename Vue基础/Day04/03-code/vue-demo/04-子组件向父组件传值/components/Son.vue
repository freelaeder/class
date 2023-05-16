<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    <button @click="change">修改 title</button>
    我是Son组件
    <!-- 使用和 data 没有区别 -->
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  props: ['title'],
  methods: {
    change() {
      // 父组件通过 props 传递过来的数据, 子组件无法直接修改
      // this.title = '学前端, 就来武汉黑马找道长'
      // this.$emit('自定义事件名', '数据1', '数据2'...)
      this.$emit('changeTitle', '学前端, 就来武汉黑马找道长')
    }
  }
}
</script>

<style>

</style>