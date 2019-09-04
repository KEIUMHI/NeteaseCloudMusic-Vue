<template>
  <div class="tab-header">
    <div></div>
    <div class="options">
      <router-link
        tag="a"
        to="/mine"
        class="tab_item">我的</router-link>
      <router-link
        tag="a"
        to="/find"
        class="tab_item">发现</router-link>
      <router-link
        tag="a"
        to="/cloud"
        class="tab_item">云村</router-link>
      <router-link
        tag="a"
        to="/videos"
        class="tab_item">视频</router-link>
    </div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: 'tab-header'
}
</script>

<style lang="less" scoped>
  .tab-header {
    display: flex;
    justify-content: space-around;
  }

  .more,
  .search {
    width: 15%;
  }

  .options {
    width: 70%;
  }
</style>