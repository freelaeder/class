<template>
  <div class="table-case">
    <!-- <MyTag @input="tag1 = $event" :value="tag1"></MyTag> -->
    <!-- <MyTag v-model="tag1"></MyTag> -->
    <!-- <MyTag @input="tag2 = $event" :value="tag2"></MyTag> -->
    <!-- <MyTag v-model="tag2"></MyTag> -->
    <MyTable :data="goods">
      <template #header>
        <th>编号</th>
        <th>图片</th>
        <th>名称</th>
        <th width="100px">标签</th>
      </template>
      <template #body="{ item, index }">
        <td>{{ index + 1 }}</td>
        <td>
          <img :src="item.picture" />
        </td>
        <td>{{ item.name }}</td>
        <td>
          <MyTag v-model="item.tag"></MyTag>
        </td>
      </template>
    </MyTable>
    <MyTable :data="goods2">
      <template #header>
        <th>编号</th>
        <th>姓名</th>
        <th width="100px">标签</th>
      </template>
      <template #body="{ item, index }">
        <td>{{ index + 1 }}</td>
        <td>{{ item.name }}</td>
        <td>
          <MyTag v-model="item.tag"></MyTag>
        </td>
      </template>
    </MyTable>
  </div>
</template>

<script>
import MyTag from './components/MyTag.vue'
import MyTable from './components/MyTable.vue'
export default {
  name: 'TableCase',
  components: {
    MyTag,
    MyTable
  },
  data () {
    return {
      tag1: '茶壶',
      tag2: '牛皮鞋',
      goods: [
        { id: 101, picture: 'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg', name: '梨皮朱泥三绝清代小品壶经典款紫砂壶', tag: '茶具' },
        { id: 102, picture: 'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg', name: '全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌', tag: '男鞋' },
        { id: 103, picture: 'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png', name: '毛茸茸小熊出没，儿童羊羔绒背心73-90cm', tag: '儿童服饰' },
        { id: 104, picture: 'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg', name: '基础百搭，儿童套头针织毛衣1-9岁', tag: '儿童服饰' },
      ],
      goods2: [
        { id: 111, picture: 'https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg', name: '懂哥', tag: '纯爱战士' },
        { id: 112, picture: 'https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg', name: '兰神', tag: '男神' },
        { id: 113, picture: 'https://yanxuan-item.nosdn.127.net/cd4b840751ef4f7505c85004f0bebcb5.png', name: '门晓', tag: '门神' },
        { id: 114, picture: 'https://yanxuan-item.nosdn.127.net/56eb25a38d7a630e76a608a9360eec6b.jpg', name: '龙志豪', tag: '龙傲天' },
      ],
    }
  }
}
</script>

<style lang="less" scoped>
.table-case {
  width: 1000px;
  margin: 50px auto;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
}

</style>