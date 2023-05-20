<template>
  <!-- 输入框 -->
  <header class="header">
    <h1>小黑记事本</h1>
    <input @keydown.enter="hAdd" v-model.trim="taskname" placeholder="请输入任务" class="new-todo" />
    <button @click="hAdd" class="add">添加任务</button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      taskname: ''
    }
  },
  methods: {
    hAdd() {
      // 非空校验
      if (!this.taskname) return alert('请输入任务名称')
      // 将 taskname 传递给父组件 App.vue
      this.$emit('add', this.taskname)
      // 清空输入框
      this.taskname = ''
    }
  }
}
</script>

<style>

</style>