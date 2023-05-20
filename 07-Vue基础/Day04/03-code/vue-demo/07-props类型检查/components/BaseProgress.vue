<template>
  <div class="base-progress">
    <div class="inner" :style="{ width: w + '%' }">
      <span>{{ w }}%</span>
    </div>
  </div>
</template>

<script>
export default {
  // 1.基础写法（类型校验）
  // props: {
  //   w: Number,
  // },

  // 2.完整写法（类型、默认值、非空、自定义校验）
  props: {
    w: {
      type: Number, // 类型
      // 默认值校验和必选项校验一般是互斥的
      // default: 50, // 默认值
      required: true, // 必选项, 必须传入
      // 自定义校验
      // 参数1: 传递过来的数据, 可供我们校验
      validator(val) {
        // 返回值决定校验是否通过
        if (val >= 0 && val <= 100) {
          return true
        } else {
          console.error('取值范围是 0 ~ 100')
          return false
        }
        // return val >= 0 && val <= 100
      }
    }
  }
}
</script>

<style scoped>
.base-progress {
  height: 26px;
  width: 400px;
  border-radius: 15px;
  background-color: #272425;
  border: 3px solid #272425;
  box-sizing: border-box;
  margin-bottom: 30px;
}
.inner {
  position: relative;
  background: #379bff;
  border-radius: 15px;
  height: 25px;
  box-sizing: border-box;
  left: -3px;
  top: -2px;
}
.inner span {
  position: absolute;
  right: 0;
  top: 26px;
}
</style>