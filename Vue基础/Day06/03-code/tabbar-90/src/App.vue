<template>
  <div>
    <router-view></router-view>
    <my-tab-bar :tabs="tabList"></my-tab-bar>
  </div>
</template>

<script>
import MyTabBar from './components/MyTabBar.vue'
export default {
  components: { MyTabBar },
  data() {
    return {
      tabList: [
        {
          iconText: "icon-shangpinliebiao",
          text: "商品列表",
          path: "/list"
        },
        {
          iconText: "icon-sousuo",
          text: "商品搜索",
          path: "/search"
        },
        {
          iconText: "icon-user",
          text: "我的信息",
          path: "/info"
        }
      ]
    }
  }
}
</script>

<style>

</style>