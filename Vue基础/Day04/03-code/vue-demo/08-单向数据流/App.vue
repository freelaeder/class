<template>
  <div class="app">
    <BaseCount @change="hChange" :count="count"></BaseCount>
  </div>
</template>

<script>
import BaseCount from './components/BaseCount.vue'
export default {
  components:{
    BaseCount
  },
  data(){
    return {
      count: 100
    }
  },
  methods: {
    hChange(count) {
      this.count = count
    }
  }
}
</script>

<style>

</style>