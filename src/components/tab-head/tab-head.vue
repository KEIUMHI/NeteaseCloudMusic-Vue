<template>
  <div class="wrap">
    <div class="tab-head">
      <div>
        <i class="iconfont iconMenu"></i>
      </div>
      <div class="options">
        <router-link
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
          class="tab-item">视频</router-link>
      </div>
      <div></div>
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
    
    .tab-item {
      width: 25%;
      font-size: @font-size-medium;
      text-align: center;
      text-decoration: none;
      color: #999;

      &.router-link-active {
        font-size: @font-size-medium-x;
        font-weight: bold;
        color: #333;
      }
    }
  }
</style>