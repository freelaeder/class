<template>
  <div class="my-tag">
    <input
      @blur="isEdit = false"
      v-focus
      v-if="isEdit"
      ref="inp"
      class="input"
      type="text"
      placeholder="输入标签"
      :value="value"
      @keydown.enter="confirm"
    />
    <!-- 
      提问: 双击获取焦点, 你能想到几个解决方案?
      1. autofocus (兼容性问题)
      2. 自定义指令
      3. 调用 focus()
     -->
    <div
      @dblclick="isEdit = true"
      v-else
      class="text">
      {{ value }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    }
  },
  directives: {
    focus: {
      inserted(el) {
        el.focus()
      }
    }
  },
  data() {
    return {
      // 是否处于编辑状态
      isEdit: false
    }
  },
  methods: {
    confirm(e) {
      // 子传父将最新的数据交给父组件修改
      this.$emit('input', e.target.value)
      // 将输入框隐藏
      this.isEdit = false
    }
  }
  // methods: {
  //   show() {
  //     this.isEdit = true
  //     // DOM 更新是异步的
  //     // this.$refs.inp.focus()
  //     this.$nextTick(() => {
  //       this.$refs.inp.focus()
  //     })
  //   }
  // }
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