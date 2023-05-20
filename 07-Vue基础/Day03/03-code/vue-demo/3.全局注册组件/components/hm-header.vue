<template>
  <!-- 
    命名风格:
      Camel-Case 驼峰命名法 HmHeader
      Kebab-Case 烤串命名法 hm-header
   -->
   <div class="hm-header">
    我是头部组件
    <hm-button></hm-button>
   </div>
</template>

<script>
export default {

}
</script>

<style>
.hm-header {
  height: 80px;
  line-height: 80px;
  color: white;
  font-size: 30px;
  text-align: center;
  background-color: #8064a2;
}
</style>