<template>
  <div class="app">
    <BaseCount :count="count"></BaseCount>
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
      count:100
    }
  }
}
</script>

<style>

</style>