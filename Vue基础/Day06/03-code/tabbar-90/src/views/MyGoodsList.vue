<template>
  <div>
    <!-- <my-header title="商品列表页"></my-header> -->
    <my-header>商品列表页</my-header>
    <my-table :data="list">
      <template #header>
        <th>#</th>
        <th>商品名称</th>
        <th>价格</th>
        <th>标签</th>
        <th>操作</th>
      </template>

      <template #body="{ item, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ item.goods_name }}</td>
        <td>{{ item.goods_price }}</td>
        <td>
          <span style="margin-right: 10px" v-for="tag in item.tags" :key="tag" class="badge text-bg-warning">{{ tag }}</span>
        </td>
        <td><button @click="del(item.id)" class="btn btn-danger btn-sm">删除</button></td>
      </template>
    </my-table>
  </div>
</template>

<script>
import MyHeader from '@/components/MyHeader.vue'
import MyTable from '@/components/MyTable.vue'
import axios from 'axios'

export default {
  components: {
    MyHeader,
    MyTable
  },
  data() {
    return {
      list: []
    }
  },
  async created() {
    const res = await axios.get('https://www.escook.cn/api/goods')
    // console.log(res)
    this.list = res.data.data
  },
  methods: {
    del(id) {
      this.list = this.list.filter(item => item.id !== id)
    }
  }
}
</script>

<style>

</style>