<template>
  <div class="left-container">
    <h3>Left 组件</h3>
    <hr>

    <p>count 值：{{ $store.state.count }}</p>
    <!-- <button @click="$store.state.count++" class="btn btn-primary">+1</button> -->
    <button @click="hClick(1)" class="btn btn-primary">+1</button>
    <button @click="hClick(5)" class="btn btn-primary">+5</button>
    <button @click="hClick(10)" class="btn btn-primary">+10</button>
    <button @click="hClickAsync" class="btn btn-primary">2秒后改为666</button>

    <hr>

    <p>list: {{ $store.state.list }}</p>
    <p>filterList: {{ $store.getters.filterList }}</p>

  </div>
</template>

<script>
export default {
  name: 'MyLeft',
  methods: {
    hClickAsync () {
      // 调用 actions 的函数来异步修改 count
      // dispatch 和 commit 用法一样, 区别就是 commit 调用的是 mutations 的函数, dispatch 调用的是 actions 的函数
      this.$store.dispatch('setCountAsync', 666)
    },
    hClick (n) {
      // 调用 mutations 的函数操作 count
      this.$store.commit('addCount', n)
    }
    // hClickFive () {
    //   this.$store.commit('addCountFive')
    // }
  }
}
</script>

<style>
</style>
