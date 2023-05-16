import Vue from 'vue'
import Vuex from 'vuex'
// 1. 装包
// 2. 新建模块文件
// 3. 安装插件
Vue.use(Vuex)
// 4. 创建 Vuex 仓库 new Vuex.Store()
const store = new Vuex.Store({
  strict: true,
  // 核心成员1: state
  // 作用: 存放数据
  // 1. data 是组件内的数据
  // 2. state 是 Vuex 的数据, 供所有组件访问
  // 访问方式:
  // 方式1: 直接访问 store 对象
  // 1.1 组件内: this.$store.state.count
  // 1.2 非组件内: 先引入当前的 store 对象, store.state.count
  // 方式2: 使用辅助函数 mapState
  // 2.1 按需导入 mapState
  // 2.2 调用 mapState 传入想映射的数据, 在 computed 中展开结果
  state: {
    count: 100,
    title: '大标题',
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // 核心成员2: mutations
  // 作用: 唯一操作 state 的途径
  // 用法: mutations 就是一个对象, 里面可以定义很多函数, 在函数内操作 state
  // 1. 定义 mutations 函数
  // 2. 在组件中使用 this.$store.commit('函数名')
  mutations: {
    // 所有的 mutations 函数第一个参数永远都是 state
    // 第二个参数永远都是 payload (载荷), commit 提交时携带的参数
    // mutations 的函数只有这两个参数, 如果需要携带多个参数怎么办? 传对象或数组
    addCount (state, n) {
      state.count += n
    },
    // addCountFive (state) {
    //   state.count += 5
    // }
    subCount (state, n) {
      state.count -= n
    },
    setCount (state, count) {
      state.count = count
    }
    // setCountAsync (state, count) {
    //   setTimeout(() => {
    //     state.count = count
    //   }, 2000)
    // }
  },
  // 核心成员3: actions
  // 作用: 专做异步任务
  actions: {
    // actions 函数的第一个参数永远都是 context 对象, 简化版的 store 对象, 它里面也有 commit 方法
    // 同样也有载荷 payload, 用法同 mutations
    setCountAsync (context, n) {
      setTimeout(() => {
        // n
        context.commit('setCount', n)
      }, 2000)
    }
  },
  // 核心成员4: getters
  // 作用: Vuex 里的计算属性, 供所有组件访问的计算属性
  getters: {
    // 所有的 getters 第一个参数永远都是 state
    // 必须要有返回值
    filterList (state) {
      return state.list.filter(item => item > 5)
    }
  }
  // 核心成员5: modules 分模块, 一样要依赖前面四个核心成员
})
// 5. 导出仓库, 在 main.js 里导入挂载
export default store
