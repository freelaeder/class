<template>
  <div class="app">
    <BaseSelect @changeCity="hChange" :cityId="selectId"></BaseSelect>
  </div>
</template>

<script>
// 下拉选择框组件封装:
// 1. 通过父传子将 selectId 传递给子组件
// 2. 子组件中接收到 selectId 后, 将 select 标签的 value 值绑定
// 3. 子组件监听 select 的 change 事件, 当用户选择其他选项时, 将 id 传递给父组件
// 4. 父组件收到 id 后存入 selectId 中
import BaseSelect from './components/BaseSelect.vue'
export default {
  data() {
    return {
      selectId: '102',
    }
  },
  methods: {
    hChange(id) {
      this.selectId = id
    }
  },
  components: {
    BaseSelect,
  },
}
</script>

<style>
</style>