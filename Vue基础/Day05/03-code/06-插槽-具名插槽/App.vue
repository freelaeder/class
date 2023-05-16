<template>
  <div>
    <MyDialog>
      <template v-slot:header>
        <h3>友情提示</h3>
      </template>
      
      <!-- v-slot: 可以简写为 # -->
      <template #body>
        你确定要删除么
      </template>

      <template #footer>
        <button>取消</button>
        <button>确认</button>
      </template>
    </MyDialog>

    <MyDialog>
      <template v-slot:header>
        <h3>温馨提示</h3>
      </template>
      
      <!-- v-slot: 可以简写为 # -->
      <template #body>
        今天天气真好, 记得好好写代码哦!
      </template>

      <template #footer>
        <button>关闭</button>
      </template>
    </MyDialog>
  </div>
</template>

<script>
/**
 * 具名插槽:
 * 当子组件内有多个地方需要自定义结构时, 可以添加多个 slot 标签, 
 * 1. 给每个 slot 标签设置 name 属性
 * 2. 使用插槽时通过 template 标签结合 v-slot 指令来设置要分发的插槽
 */

import MyDialog from './components/MyDialog.vue'
export default {
  data () {
    return {

    }
  },
  components: {
    MyDialog
  }
}
</script>

<style>
body {
  background-color: #b3b3b3;
}
</style>