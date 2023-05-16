<template>
  <table class="my-table">
    <thead>
      <tr>
        <th>编号</th>
        <th>名称</th>
        <th>图片</th>
        <th width="100px">标签</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>1</td>
        <td>梨皮朱泥三绝清代小品壶经典款紫砂壶</td>
        <td>
          <img
            src="https://yanxuan-item.nosdn.127.net/f8c37ffa41ab1eb84bff499e1f6acfc7.jpg"
          />
        </td>
        <td>
          标签组件
        </td>
      </tr>
      <tr>
        <td>2</td>
        <td>全防水HABU旋钮牛皮户外徒步鞋山宁泰抗菌</td>
        <td>
          <img
            src="https://yanxuan-item.nosdn.127.net/221317c85274a188174352474b859d7b.jpg"
          />
        </td>
        <td>
          标签组件
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>

.my-table {
  width: 100%;
  border-spacing: 0;
  img {
    width: 100px;
    height: 100px;
    object-fit: contain;
    vertical-align: middle;
  }
  th {
    background: #f5f5f5;
    border-bottom: 2px solid #069;
  }
  td {
    border-bottom: 1px dashed #ccc;
  }
  td,
  th {
    text-align: center;
    padding: 10px;
    transition: all .5s;
    &.red {
      color: red;
    }
  }
  .none {
    height: 100px;
    line-height: 100px;
    color: #999;
  }
}

</style>