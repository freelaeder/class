<template>
  <div class="app-container">
    <h1>App 根组件 {{ $store.state.title }} --- {{ $store.state.count }}</h1>
    <input @input="changeCount" :value="$store.state.count" class="form-control" type="number" />
    <hr>

    <div class="count-box">
      <my-left></my-left>
      <my-right></my-right>
    </div>
  </div>
</template>

<script>
// 导入组件
import MyLeft from '@/components/Left.vue'
import MyRight from '@/components/Right.vue'

export default {
  name: 'App',
  data () {
    return {
      // list: [1, 2, 3],
      // obj: {
      //   name: 'zs'
      // }
    }
  },
  // 注册组件
  components: {
    MyLeft,
    MyRight
  },
  methods: {
    changeCount (e) {
      // console.log(+e.target.value)
      this.$store.commit('setCount', +e.target.value)
    }
  },
  created () {
    // console.log(this.$router)
    // console.log(this.$store)

    // Object.defineProperty() 数据劫持
    // Vue 不想监测数组的变化, 因为太损耗性能了
    // this.list[1] = 5
    // 7 个方法可以来让数组变化后更新视图:
    // push pop shift unshift splice sort reverse
    // this.obj.name = 'ls' // 可以监视到
    // this.obj.age = 18 // 不能监视到
    // this.obj = { // 可以监视到的
    //   name: 'ls',
    //   age: 18
    // }
  }
}
</script>

<style lang="less" scoped>
.app-container {
  padding: 20px;
}

.count-box {
  display: flex;
  > div {
    &:nth-child(1) {
      margin-right: 30px;
    }
    width: 50%;
    border: 1px solid #cfcfcf;
    margin: 20px 0;
    padding: 20px;
    border-radius: 6px;
  }
}
</style>
