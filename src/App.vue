<template>
  <div id="app">
    <tab-head />
    
    <div class="swiper-container">
      <div class="swiper-wrapper">
          <!-- <div class="swiper-slide"><Mine /></div>
          <div class="swiper-slide"><Find /></div>
          <div class="swiper-slide"><Cloud /></div>
          <div class="swiper-slide"><Videos /></div> -->
          <div class="swiper-slide">
            <keep-alive>
              <router-view />
            </keep-alive>
          </div>
      </div>
      <!-- 如果需要分页器 -->
      <!-- <div class="swiper-pagination"></div> -->
      
      <!-- 如果需要导航按钮 -->
       <div class="swiper-button-prev"></div>
       <div class="swiper-button-next"></div>
      
      <!-- 如果需要滚动条 -->
      <!-- <div class="swiper-scrollbar"></div> -->
  </div>
</div>
</template>

<script>
import TabHead from '@/components/tab-head/tab-head'
import Mine from './views/mine/index'
import Find from './views/find/index'
import Cloud from './views/cloud/index'
import Videos from './views/videos/index'
import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';
export default {
  name: 'app',
  mounted () {
    var mySwiper = new Swiper('.swiper-container', {})
  },
  methods: {

  },
  components: {
    TabHead,
    Mine,
    Find,
    Cloud,
    Videos
  }
}
</script>

<style lang="less">
  @import "~@/assets/style/variables.less";
  // #app {
  //   -webkit-text-size-adjust:none;
  // }
  .swiper-container {
    width: 100vw;
    height: 100vh;
  }

</style>
