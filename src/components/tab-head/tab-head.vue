<template>
  <div class="wrap">
    <div class="tab-head">
      <div><i class="iconfont iconMenu"></i></div>
      <div class="options">
        <!-- <router-link
          tag="a"
          to="/mine"
          class="tab-item">我的</router-link>
        <router-link
          tag="a"
          to="/find"
          class="tab-item">发现</router-link>
        <router-link
          tag="a"
          to="/cloud"
          class="tab-item">云村</router-link>
        <router-link
          tag="a"
          to="/videos"
          class="tab-item">视频</router-link> -->
        <div
          id="nav"
          class="swiper-container swiper-no-swiping">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <span>我的</span></div>
            <div class="swiper-slide">
              <span style="font-size: 16px; font-weight: bold; color:rgba(51,51,51,1);">发现</span></div>
            <div class="swiper-slide">
              <span>云村</span></div>
            <div class="swiper-slide">
              <span>视频</span></div>
            <!-- <div class="bar">
              <div class="color"></div>
            </div> -->
          </div>
        </div>
      </div>
      <div><i class="iconfont iconsearch"></i></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-head'
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";

  .tab-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .more,
  .search {
    width: 20%;
  }

  .options {
    display: flex;
    justify-content: space-around;
    width: 60%;
    
    // .tab-item {
    //   width: 25%;
    //   font-size: @font-size-medium;
    //   text-align: center;
    //   text-decoration: none;
    //   color: #999;

    //   &.router-link-active {
    //     font-size: @font-size-medium-x;
    //     font-weight: bold;
    //     color: #333;
    //   }
    // }

    #nav {
      width: 100%;

      .swiper-wrapper {
        width: 100%;
        display: flex;
        justify-content: space-around;
      }

      .swiper-slide {
        display: flex;
        justify-content: center;
        align-items: center;
        // margin: 0 2px;
        width: 25%;
        font-size: @font-size-medium;
        text-align: center;
        color: #999;
      }
    }
  }
</style>