<template>
  <div>
    <h1 v-color="color1">指令的值1测试</h1>
    <h1 v-color="color2">指令的值2测试</h1>
  </div>
</template>

<script>
export default {
  directives: {
    color: {
      // inserted 会在元素插入到 DOM 时执行
      // 参数1: 指令绑定的元素对象
      // 参数2: 指令相关的值
      inserted(el, binding) {
        // console.log(el, binding.value)
        el.style.color = binding.value
      },
      // update 会在指令的值更新时自动执行
      // 参数同 inserted
      update(el, binding) {
        // console.log('值更新了', el, binding)
        el.style.color = binding.value
      }
    }
  },
  data () {
    return {
      color1: 'red',
      color2: 'orange'
    }
  },
}
</script>

<style>

</style>