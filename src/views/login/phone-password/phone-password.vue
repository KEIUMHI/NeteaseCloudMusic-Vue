<template>
  <div class="phone-password">
    <div class="back">
      <div
        class="btn-back"
        @click="_handleBack">back</div>
      <div class="tip_back">手机号登录</div>
    </div>
    <div class="mian-ctn">
      <div
        v-if="currentPage"
        class="tip_phone">未注册手机号登录后将自动创建账号</div>
      <div class="input-wrapper">
        <div
          v-if="currentPage"
          class="input-phone-wrapper">
          <div
            class="countrycode"
            :style="phone ? '' : { color: '#999'}">+86</div>
          <input
            v-model="phone"
            type="text"
            class="input"
            placeholder="请输入手机号" />
          <div
            v-if="phone"
            class="clear"
            @click="phone = ''">x</div>
        </div>

        <div
          v-else
          class="input-pw-wrapper">
          <input
            v-model="password"
            type="password"
            class="input"
            placeholder="请输入密码" />
          <a
            class="link link-forget-pw"
            href="">忘记密码？</a>
        </div>
      </div>
      <div class="btn-next" @click="_handleClick">{{ currentPage ? '下一步' : '登录' }}</div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'
// import { setCookies } from '@/utils/auth'

export default {
  name: 'phone-password',
  data() {
    return {
      phone: '',
      password: null,
      currentPage: 1 // 1 === phone； 0 === password
    }
  },
  methods: {
    _handleBack () {
      if (this.currentPage) {
        this.$router.go(-1)
      } else {
        this.currentPage = 1
      }
    },
    _handleClick () {
      if (this.currentPage && this.phone) {
        this.currentPage = 0
      } else if (!this.currentPage) {
        this._login()
      }
      console.log(this.phone, this.password)
    },
    _login () {
      const account = {
        // countrycode: 86,
        phone: this.phone,
        password: this.password
      }
      login(account).then(res => {
        console.log('login-success-res:', res)
        this.$router.push('/app-main')
      }).catch(err => {
        console.log(err)
      })
    }
  },
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .phone-password {}

  .back {
    display: flex;
  }

  .mian-ctn {
    margin: 0 auto;
    width: 90%;

    .tip_phone {
      margin: 30px 0;
      font-size: @font-size-small-l;
      color: @color-font-secondary;
    }

    .input {
      border: none;
      outline: 0;
      width: 100%;
    }

    .btn-next {
      border-radius: 25px;
      margin-top: 30px;
      padding: 8px 0;
      width: 100%;
      font-size: @font-size-medium-x;
      font-weight: 200;
      text-align: center;
      color: #fff;
      background: @color-theme-default;
    }
  }

  .input-phone-wrapper,
  .input-pw-wrapper {
    position: relative;
    border-bottom: 0.5px solid #000;
  }

  .input-phone-wrapper {
    padding: 5px 35px;

    .countrycode,
    .clear {
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
      color: @color-font-secondary;
    }

    .countrycode {
      left: 0;
    }

    .clear {
      right: 3px;
      font-size: @font-size-large-m;
      font-weight: 300;
    }
  }

  .link {
    text-decoration: none;
  }

  .input-pw-wrapper {
    padding-right: 72px;

    .link-forget-pw {
      position: absolute;
      top: 50%;
      right: 3px;
      transform: translateY(-50%);
      font-size: @font-size-small-l;
    }
  }
</style>