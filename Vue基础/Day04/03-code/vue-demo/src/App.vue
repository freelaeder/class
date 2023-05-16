<template>
  <div class="app">
    <div v-if="isShowEdit">
      <input type="text" v-model="editValue" ref="inp" />
      <button>确认</button>
    </div>
    <div v-else>
      <span>{{ title }}</span>
      <button @click="editFn">编辑</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '大标题',
      isShowEdit: false,
      editValue: '',
    }
  },
  methods: {
    editFn() {
      // 1.显示文本框
      this.isShowEdit = true

      // 在 Vue 中数据变化视图会更新, 关键点: 视图的更新是异步任务
      // DOM 更新是异步的, 是为了性能优化

      // 2.让文本框聚焦 -> $nextTick()
      // setTimeout(() => {
      //   this.$refs.inp.focus()
      // }, 0)
      this.$nextTick(() => {
        // 这个回调函数就是在 DOM 更新后才执行
        this.$refs.inp.focus()
      })
    },
  },
}
</script>

<style>
</style>