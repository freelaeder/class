<template>
  <div>
    <h1>自定义指令</h1>
    <!-- 需求: 页面加载自动聚焦 -->
    <!-- 1. autofocus: 自动聚焦, 有兼容性问题, 不太推荐使用 -->
    <!-- <input autofocus ref="inp" type="text"> -->
    <!-- 2. 在 mounted 钩子中获取焦点, 如果有多个页面需要使用, 不太方便 -->
    <!-- <input ref="inp" type="text"> -->
    <!--
      3. 封装一个自定义指令, 指令中自动帮我们聚焦
        自定义指令也是一种封装思想的体现, 将一段 DOM 操作封装到自定义指令中
     -->
    <input v-focus ref="inp" type="text">

  </div>
</template>

<script>
export default {
  // 局部注册指令:
  directives: {
    // 指令名: 配置对象
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  }
  // mounted() {
  //   this.$refs.inp.focus()
  // }
}
</script>

<style>

</style>