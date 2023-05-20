<template>
  <!-- 统计和清空 -->
  <footer class="footer">
    <!-- 统计 -->
    <span class="todo-count">合 计:<strong> {{ list.length }} </strong></span>
    <!-- 清空 -->
    <!-- 在模板中写代码时, 可以省略 this, 建议都省略 this -->
    <button @click="$emit('clear')" class="clear-completed">
      清空任务
    </button>
  </footer>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      required: true
    }
  },
  // methods: {
  //   hClear() {
  //     this.$emit('clear')
  //   }
  // }
}
</script>

<style>

</style>