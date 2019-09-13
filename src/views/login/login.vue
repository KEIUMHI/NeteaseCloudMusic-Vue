<template>
  <div class="login">
    <img src="" alt="" class="logo" />
    <div class="login_phone">手机号登录</div>
    <div class="experience_immediate">立即体验</div>
    <div class="icon-container">
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login'
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .login {
    background: @color-theme-default;
  }
</style>