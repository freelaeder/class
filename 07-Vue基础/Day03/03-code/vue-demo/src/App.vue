<template>
  <div class="app">
    <!-- 快捷链接 -->
    <xtx-short-cut></xtx-short-cut>
    <!-- 顶部导航 -->
    <xtx-header-nav></xtx-header-nav>
    <!-- 轮播区域 -->
    <xtx-banner></xtx-banner>
    <!-- 新鲜好物 -->
    <xtx-new-goods></xtx-new-goods>
    <!-- 热门品牌 -->
    <xtx-hot-brand></xtx-hot-brand>
    <!-- 最新专题 -->
    <xtx-topic></xtx-topic>
    <!-- 版权底部 -->
    <xtx-footer></xtx-footer>
  </div>
</template>

<script>
import XtxBanner from './components/XtxBanner.vue'
import XtxFooter from './components/XtxFooter.vue'
import XtxHeaderNav from './components/XtxHeaderNav.vue'
import XtxHotBrand from './components/XtxHotBrand.vue'
import XtxNewGoods from './components/XtxNewGoods.vue'
import XtxShortCut from './components/XtxShortCut.vue'
import XtxTopic from './components/XtxTopic.vue'
export default {
  components: { XtxShortCut, XtxHeaderNav, XtxBanner, XtxNewGoods, XtxHotBrand, XtxTopic, XtxFooter },

}
</script>

<style>

</style>