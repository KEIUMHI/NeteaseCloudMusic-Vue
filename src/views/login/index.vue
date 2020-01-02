<template>
  <div class="login">

    <img
      class="login__logo"
      alt="logo"
      :src="require('@/assets/NeteaseCloudMusicIcon.png')"
    />

    <div class="login__main">
      <router-link
        class="login__btn login__btn--phone"
        tag="div"
        :to="{ name: 'checking' }"
      >手机号登录</router-link>
      <router-link
        class="login__btn login__btn--exp"
        tag="div"
        :to="{ name: 'index' }"
      >立即体验</router-link>

      <div class="login__treaty d-flex j-a-center">
        <input type="checkbox"><span>同意</span><a
          class="link"
          href=""
        >《用户协议》</a><span>和</span><a
          class="link"
          href=""
        >《隐私政策》</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'login',
  data() {
    return {
      phoneActive: false,
      experienceActive: false
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/variables.less";

.login {
  height: 100vh;
  text-align: center;
  background: @color-primary;

  &__logo {
    position: absolute;
    border-radius: 50%;
    width: 80px;
    height: 80px;
    top: 24%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  &__main {
    position: absolute;
    bottom: 0;
    width: 100vw;
  }

  &__btn {
    width: 70%;
    margin: 0 auto 24px;
    padding: 10px;
    border: 0.5px solid #fff;
    border-radius: 25px;
    font-size: @font-size-medium;

    &--phone {
      margin-bottom: 14px;
      color: @color-primary;
      background-color: #fff;
      &:active {
        background-color: hsl(0, 0%, 90%);
      }
    }

    &--exp {
      color: #fff;
      background: transparent;
      &:active {
        background-color: hsla(0, 0%, 100%, 0.3);
      }
    }
  }

  &__treaty {
    margin: 12px 0;
    // font-size:
  }
}
</style>