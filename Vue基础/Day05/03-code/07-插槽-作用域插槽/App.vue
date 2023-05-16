<template>
  <div>
    <MyTable :data="list">
      <!-- 默认插槽的名字是 default -->
      <template v-slot:default="obj">
        <!-- {{ obj }} -->
        <!-- { item: {}, index: 0 } -->
        <button @click="del(obj.item.id)">删除</button>
      </template>
    </MyTable>
    
    <MyTable :data="list2">
      <template #default="{ item }">
        <button @click="show(item)">查看</button>
      </template>
    </MyTable>
  </div>
</template>

<script>
/**
 * 作用域插槽:
 * 在父组件中需要使用子组件数据时, 可以通过插槽携带过来
 * 
 * 1. 在子组件的 slot 上添加自定义属性
 *  - 就是将数据绑定在一个对象中, 可以传递多个数据, 都会放到一个对象中统一带过去'
 *  - <slot :index="index" :item="item"></slot>  ===>  { item: {}, index: 0 }
 * 2. 在父组件中使用 template 配合 v-slot 接收传递过来的数据
 */

import MyTable from './components/MyTable.vue'
export default {
  data () {
    return {
      list: [
        { id: 1, name: '张小花', age: 18 },
        { id: 2, name: '孙大明', age: 19 },
        { id: 3, name: '刘德忠', age: 17 },
      ],
      list2: [
        { id: 1, name: '赵小云', age: 18 },
        { id: 2, name: '刘蓓蓓', age: 19 },
        { id: 3, name: '姜肖泰', age: 17 },
      ]
    }
  },
  methods: {
    del(id) {
      this.list = this.list.filter(item => item.id !== id)
    },
    show(item) {
      alert(`姓名: ${item.name}, 年龄: ${item.age}`)
    }
  },
  components: {
    MyTable
  }
}
</script>
