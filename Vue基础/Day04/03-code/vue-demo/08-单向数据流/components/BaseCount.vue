<template>
  <div class="base-count">
    <button @click="handleSub">-</button>
    <span>{{ count }}</span>
    <button @click="handleAdd">+</button>
  </div>
</template>

<script>
export default {
  // 1.自己的数据随便修改  （谁的数据 谁负责）
  // data () {
  //   return {
  //     count: 100,
  //   }
  // },
  // 2.外部传过来的数据 不能随便修改
  props: {
    count: {
      type: Number,
    },
  },
  methods: {
    handleSub() {
      // props 的单向数据流:
      // 数据更新必须是由父组件到子组件这一个流向, 不允许由子组件直接修改 props 的数据, 避免后期数据管理混乱
      // 如果子组件非要修改 props 传递过来的数据, 请使用 $emit 子传父, 交给父组件修改
      // this.count-- vs this.count - 1
      // this.count--  this.count = this.count - 1
      this.$emit('change', this.count - 1)
    },
    handleAdd() {
      // this.count++
      this.$emit('change', this.count + 1)
    },
  },
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>