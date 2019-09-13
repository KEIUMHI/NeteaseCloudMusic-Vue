<template>
  <div class="login">
    <img
      class="logo"
      alt="neteasecloudmusic_logo"
      :src="imgs.neteaseCloudMusicLogo"
    />
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
// IMG
import neteaseCloudMusicLogo from '@/assets/NeteaseCloudMusicIcon.png'
export default {
  name: 'login',
  data() {
    return {
      imgs: {
        neteaseCloudMusicLogo
      }
    }
  },
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .login {
    background: @color-theme-default;
  }
</style>