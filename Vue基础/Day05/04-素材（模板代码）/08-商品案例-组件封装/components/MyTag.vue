<template>
  <div class="my-tag">
    <input
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
    />
    <div class="text">
      茶壶
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.my-tag {
  cursor: pointer;
  .input {
    appearance: none;
    outline: none;
    border: 1px solid #ccc;
    width: 100px;
    height: 40px;
    box-sizing: border-box;
    padding: 10px;
    color: #666;
    &::placeholder {
      color: #666;
    }
  }
}
</style>