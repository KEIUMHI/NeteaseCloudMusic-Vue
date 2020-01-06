<template>
  <div class="login">

    <img
      class="login__logo"
      alt="logo"
      :src="require('assets/NeteaseCloudMusicIcon.png')"
    />

    <div class="login__main">
      <div
        class="login__btn login__btn-phone"
        @click="jump('checking')"
      >手机号登录</div>
      <div
        class="login__btn login__btn-exp"
        @click="jump('index')"
      >立即体验</div>

      <div
        ref="loginTreaty"
        class="login__treaty"
      >
        <input
          id="login__checkbox"
          class="login__treaty-checkbox"
          type="checkbox"
        >
        <label for="login__checkbox"></label>
        <span>同意</span><a
          class="login__treaty-link"
          href="#"
        >《用户协议》</a><span>和</span><a
          class="login__treaty-link"
          href="#"
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
  methods: {
    jump(name) {
      const el = this.$refs.loginTreaty
      const checkbox = el.getElementsByClassName('login__treaty-checkbox')
      const checked = checkbox[0].checked
      if (!checked) {
        alert('请先勾选同意《用户协议》和《隐私政策》')
        return
      }
      this.$router.push({ name })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";

.login {
  display: flex;
  flex-flow: column;
  justify-content: flex-end;
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
    display: flex;
    flex-flow: column;
    align-items: center;
    width: 100vw;
  }

  &__btn {
    width: 70%;
    margin: 0 auto 24px;
    padding: 10px;
    border: 1px solid #fff;
    border-radius: 25px;
    font-size: @font-size-medium;

    &-phone {
      margin-bottom: 14px;
      border: none;
      color: @color-primary;
      background-color: #fff;
      &:active {
        background-color: hsl(0, 0%, 90%);
      }
    }

    &-exp {
      color: #fff;
      background: transparent;
      &:active {
        background-color: hsla(0, 0%, 100%, 0.3);
      }
    }
  }

  &__treaty {
    display: flex;
    align-items: center;
    margin-bottom: 12px;
    font-size: @font-size-small;
    color: @color-text-gray-seat;

    &-checkbox {
      visibility: hidden;
    }

    &-checkbox + label {
      width: 11px;
      height: 11px;
      margin-right: 5px;
      border: 1px solid #ccc;
      border-radius: 2px;
      background-color: transparent;
    }

    &-checkbox:checked + label::before {
      content: "\2714";
    }

    &-link {
      color: #fff;
    }
  }
}
</style>