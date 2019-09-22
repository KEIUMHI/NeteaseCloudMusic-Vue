<template>
  <div class="login">
    <img
      class="logo"
      alt="neteasecloudmusic_logo"
      :src="imgs.neteaseCloudMusicLogo"
    />
    <div class="main">
      <router-link
        tag="div"
        :to="{ name: 'phone-password' }"
        :class="['btn', 'login_phone']">手机号登录</router-link>
      <router-link
        tag="div"
        :to="{ name: 'app-main' }"
        class="btn experience_immediate">立即体验</router-link>
      <div class="icon-container">
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
        <div class="icon"></div>
      </div>
      <div class="Treaty d-flex j-a-center">
        <input type="checkbox"><span>同意</span><a class="link" href="">《用户协议》</a><span>和</span><a class="link" href="">《隐私政策》</a>
      </div>
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
      },
      phoneActive: false,
      experienceActive: false
    }
  },
  methods: {
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .login {
    height: 100vh;
    text-align: center;
    background: @color-theme-default;
  }

  .logo {
    position: absolute;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    top: 24%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .main {
    position: absolute;
    bottom: 0;
    width: 100vw;

    .btn,
    .icon-container {
      width: calc(100vw - 100px);
    }

    .btn {
      margin: 0 auto 24px;
      padding: 10px;
      border: 0.5px solid #fff;
      border-radius: 25px;
      font-size: @font-size-medium;

      &.login_phone {
        margin-bottom: 14px;
        color: @color-theme-default;
        background: #fff;

        &.acitve {
          background: @color-theme-default;
          opacity: .3;
        }

        &.router-link-active {
          background: #000;
        }
      }

      &.experience_immediate {
        color: #fff;
        background: transparent;
      }
    }

    .icon-container {
      display: flex;
      justify-content: space-around;
      margin: 0 auto;

      .icon {
        display: inline-block;
        border-radius: 50%;
        width: 30px;
        height: 30px;
        border: 0.5px solid #fff;
      }
    }

    span {
      font-size: @font-size-small-b;
    }

    .link {
      font-size: @font-size-small-l;
      text-decoration: none;
    }

    .Treaty {
      margin: 12px 0;
    }
  }
</style>