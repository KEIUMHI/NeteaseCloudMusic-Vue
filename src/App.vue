<template>
  <div id="app">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
</script>

<style lang="less">
@import "~@/assets/style/reset.less";
@import "~@/assets/style/variables.less";

#app {
  margin: 0;
  padding: 0;
}
</style>
