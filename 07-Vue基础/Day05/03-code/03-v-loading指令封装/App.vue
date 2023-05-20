<template>
  <div class="main">
    <!-- <div class="box" v-loading="isLoading"> -->
    <div class="box" v-loading="list.length === 0">
      <ul>
        <li v-for="item in list" :key="item.id" class="news">
          <div class="left">
            <div class="title">{{ item.title }}</div>
            <div class="info">
              <span>{{ item.source }}</span>
              <span>{{ item.time }}</span>
            </div>
          </div>

          <div class="right">
            <img :src="item.img" alt="">
          </div>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
// 安装axios =>  npm i axios
import axios from 'axios'

// 接口地址：http://hmajax.itheima.net/api/news
// 请求方式：get
export default {
  directives: {
    loading: {
      inserted(el, binding) {
        // 根据 value 值来决定是否添加蒙层
        // 添加蒙层: 添加类名
        // console.log(el, binding)
        // if (binding.value) {
        //   el.classList.add('loading')
        // } else {
        //   el.classList.remove('loading')
        // }
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      },
      update(el, binding) {
        binding.value ? el.classList.add('loading') : el.classList.remove('loading')
      }
    }
  },
  data () {
    return {
      list: [],
      // isLoading: true
    }
  },
  async created () {
    // 1. 发送请求获取数据
    const res = await axios.get('http://hmajax.itheima.net/api/news')
    
    setTimeout(() => {
      // 2. 更新到 list 中，用于页面渲染 v-for
      this.list = res.data.data
      // this.isLoading = false
    }, 2000)
  },
}
</script>

<style>
.loading:before {
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: #fff url('./loading.gif') no-repeat center;
}

.box2 {
  width: 400px;
  height: 400px;
  border: 2px solid #000;
  position: relative;
}



.box {
  width: 800px;
  min-height: 500px;
  border: 3px solid orange;
  border-radius: 5px;
  position: relative;
}
.news {
  display: flex;
  height: 120px;
  width: 600px;
  margin: 0 auto;
  padding: 20px 0;
  cursor: pointer;
}
.news .left {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 10px;
}
.news .left .title {
  font-size: 20px;
}
.news .left .info {
  color: #999999;
}
.news .left .info span {
  margin-right: 20px;
}
.news .right {
  width: 160px;
  height: 120px;
}
.news .right img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>