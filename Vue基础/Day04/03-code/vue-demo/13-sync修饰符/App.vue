<template>
  <div class="app">
    <button @click="openDialog">退出按钮</button>
    <!-- <BaseDialog @close="isShow = $event" :visible="isShow"></BaseDialog> -->
    <!-- visible.sync  => :visible="isShow" @update:visible="isShow=$event" -->
    <!-- 
      .sync 做了两件事:
      1. 将数据传递给子组件, :visible
      2. 监听一个事件, 事件名为 update:visible

      v-model 做了两件事:
      1. 将数据传递给子组件, 数据名 value
      2. 监听一个事件, 事件名为 input

      v-model 的局限性:
      1. 数据名必须叫 value
      2. 事件名必须叫 input
      3. 一个标签只能使用一个 v-model
     -->
    <BaseDialog :visible.sync="isShow"></BaseDialog>
  </div>
</template>

<script>
import BaseDialog from './components/BaseDialog.vue'
export default {
  data() {
    return {
      isShow: false,
    }
  },
  methods: {
    openDialog() {
      this.isShow = true
    },
  },
  components: {
    BaseDialog,
  },
}
</script>

<style>
</style>