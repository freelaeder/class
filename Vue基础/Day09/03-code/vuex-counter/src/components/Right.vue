<template>
  <div class="right-container">
    <h3>Right 组件</h3>
    <hr>

    <p>count 值：{{ count }}</p>
    <p>title 值：{{ title }}</p>
    <button @click="subCount(1)" class="btn btn-warning">-1</button>
    <button @click="subCount(5)" class="btn btn-warning">-5</button>
    <button @click="subCount(10)" class="btn btn-warning">-10</button>
    <button @click="setCountAsync(999)" class="btn btn-warning">2秒后修改成999</button>

    <hr>
    <p>list: {{ list }}</p>
    <p>filterList: {{ filterList }}</p>
  </div>
</template>

<script>
// 如果多次使用, 肯定是辅助函数更方便
// 如果只用一次, 可以选择不用辅助函数
import { mapState, mapMutations, mapActions, mapGetters } from 'vuex'
// 1. mapState 的返回值是对象, 对象中会有一些函数
// 2. mapState 的参数必须要传, 只能是数组或对象, 一般用数组, 数组中要传入想映射过来的数据属性字符串
// 大白话理解辅助函数: 就是 vuex 帮我们写好了计算属性, 放到对象中返回给我们了, 我们拿到之后只需要将其在 computed 中展开即可使用
// const result = mapState(['count'])
// console.log(result)

// 希望将 result 里的成员放到 obj 里面, 怎么做?
// const obj = {
//   name: 'obj',
//   // ...result
//   ...mapState(['count']) // 调用函数, 将函数的返回值给展开
// }
// console.log(obj)

export default {
  name: 'MyRight',
  methods: {
    ...mapActions(['setCountAsync']),
    ...mapMutations(['subCount'])
    // 原理如下:
    // subCount (n) {
    //   this.$store.commit('subCount', n)
    // },
    // hClick (n) {
    //   // this.$store.commit('subCount', n)
    //   this.subCount(n)
    // }
  },
  // computed: mapState(['count', 'title']) // 这样写将会导致组件无法使用其他的计算属性
  computed: {
    ...mapGetters(['filterList']),
    ...mapState(['count', 'title', 'list'])
    // total () {
    //   return 1
    // },
    // count () {
    //   return this.$store.state.count
    // },
    // title () {
    //   return this.$store.state.title
    // }
  }
}
</script>

<style>
</style>
