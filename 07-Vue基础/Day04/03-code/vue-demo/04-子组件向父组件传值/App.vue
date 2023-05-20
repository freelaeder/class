<template>
  <div class="app" style="border: 3px solid #000; margin: 10px">
    我是APP组件 --- {{ myTitle }}
    <Son @changeTitle="change" :title="myTitle"></Son>
  </div>
</template>

<script>
/**
 * 父向子传数据:
 *  1. 在 App.vue 中, 给子组件添加自定义属性
 *  2. 在 Son.vue 中, 使用 props 来接收自定义属性传递过来的数据
 * 
 * 子向父传数据:
 *  1. 在 Son.vue 中, 使用 $emit 传递数据
 *  2. 在 App.vue 中, 使用自定义事件来接收数据
 */
import Son from './components/Son.vue'
export default {
  name: 'App',
  data() {
    return {
      myTitle: '学前端，就来黑马程序员',
    }
  },
  methods: {
    change(val) {
      // console.log('事件触发了, 接收的数据:', val)
      this.myTitle = val
    }
  },
  components: {
    Son,
  },
}
</script>

<style>
</style>