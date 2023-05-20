<template>
  <!-- 主体区域 -->
  <section id="app">
    <todo-header @add="hAdd"></todo-header>
    <todo-main @del="hDel" :list="list"></todo-main>
    <todo-footer @clear="hClear" :list="list"></todo-footer>
  </section>
</template>

<script>
/**
 * 目标1: 拆分组件
 * 1.1 新建三个组件文件: TodoHeader.vue / TodoMain.vue / TodoFooter.vue
 * 1.2 分别将三个组件的结构复制过去
 * 1.3 在 App.vue 引入 / 注册 / 使用
 * 
 * 目标2: 渲染数据
 * 2.1 明确数据定义在 App.vue 中
 * 2.2 父向子传值(TodoMain), 设置自定义属性
 * 2.3 子组件使用 props 来接收数据 (类型校验)
 * 2.4 子组件中使用 v-for 渲染数据
 * 
 * 目标3: 添加任务
 * 3.1 在子组件(TodoHeader)中使用 v-model 双向绑定输入框
 * 3.2 给添加按钮绑定点击事件
 * 3.3 当用户添加时, 将用户输入的内容, 通过 $emit 子传父给父组件 App
 * 3.4 父组件收到数据后, 将数据添加到数组中
 * 3.5 在子组件中还需要做非空校验和清空文本框
 * 
 * 目标4: 删除任务
 * 4.1 在子组件(TodoMain)中绑定点击事件, 传入 id
 * 4.2 将 id 传递给父组件 App
 * 4.3 父组件收到数据后, 根据 id 删除数据
 * 
 * 目标5: 底部合集和清空功能
 * 5.1 在父组件中将 list 传递给子组件(TodoFooter)
 * 5.2 在子组件中使用 props 接收到数据后渲染
 * 5.3 给清空按钮绑定点击事件, 使用 $emit() 触发父组件绑定的自定义事件
 * 5.4 父组件中清空所有数据
 * 
 * 目标6: 持久化存储
 * 6.1 在 App 组件中监视 list 变化
 * 6.2 数据变化就存储到 localStorage
 * 6.3 初始化时去 localStorage 中取出数据
 */

import TodoFooter from './components/TodoFooter.vue'
import TodoHeader from './components/TodoHeader.vue'
import TodoMain from './components/TodoMain.vue'
export default {
  components: { TodoHeader, TodoMain, TodoFooter },
  data () {
    return {
      list: JSON.parse(localStorage.getItem('list')) || []
      // list: [
      //   { id: 1, name: '跑步十公里' },
      //   { id: 2, name: '打球一整天' },
      //   { id: 3, name: '吃饭一公斤' },
      // ]
    }
  },
  methods: {
    hAdd(taskname) {
      // console.log('老父亲接收到的数据:', taskname)
      this.list.unshift({
        id: +new Date(),
        name: taskname
      })
    },
    hDel(id) {
      // console.log('父亲收到的id:', id)
      this.list = this.list.filter(item => item.id !== id)
    },
    hClear() {
      this.list = []
    }
  },
  watch: {
    list: {
      deep: true,
      handler() {
        localStorage.setItem('list', JSON.stringify(this.list))
      }
    }
  }
}
</script>

<style>

</style>
