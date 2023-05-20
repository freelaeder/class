<template>
  <div class="app">
    <input type="text" v-model="msg1" />
    <br />
    <!-- 
      v-model 本质是一个语法糖, 它内部实现了两个功能:
      1. 使用 v-bind 绑定 value 属性
      2. 使用 v-on 监听了 input 事件, 将最新的 value 赋值给变量
     -->
    <input type="text" :value="msg2" @input="msg2 = $event.target.value" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg1: '',
      msg2: '李四',
    }
  },
  // methods: {
  //   hInput(e) {
  //     // this.msg2 = ?
  //     // console.log(e.target.value)
  //     this.msg2 = e.target.value
  //   }
  // }
}
</script>

<style>
</style>