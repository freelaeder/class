<template>
  <div class="base-count">
    <button @click="count--">-</button>
    <span>{{ count }}</span>
    <button @click="count++">+</button>
  </div>
</template>

<script>
export default {
  data() {
    // console.log('data 函数执行了')
    return {
      count: 100
    }
  }
  // 面试题: 组件内的 data 为什么是一个函数?
  // 为了保证组件多次复用时, 相互独立, 互不影响
  
  // 组件内的 data 必须是一个函数
  // data: {
  //   count: 100
  // }
}
</script>

<style>
.base-count {
  margin: 20px;
}
</style>