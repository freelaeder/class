<template>
  <div class="son" style="border:3px solid #000;margin:10px">
    我是Son组件
    <!-- 使用和 data 没有区别 -->
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'Son-Child',
  props: ['title']
}
</script>

<style>

</style>