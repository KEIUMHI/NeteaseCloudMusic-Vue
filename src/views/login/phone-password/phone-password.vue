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
        class="tip">未注册手机号登录后将自动创建账号</div>
      <div class="input-wrapper">
        <input
          v-if="currentPage"
          v-model="phone"
          type="text"
          class="input"
          placeholder="请输入手机号" />
        <input
          v-else
          v-model="password"
          type="password"
          class="input"
          placeholder="请输入密码" />
      </div>
      <div class="btn-next" @click="_handleClick">{{ currentPage ? '下一步' : '登录' }}</div>
    </div>
  </div>
</template>

<script>
import { login } from '@/api/login'

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
    _handleClick (e) {
      if (this.currentPage) {
        this.currentPage = 0
      } else {
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
        console.log(res)
        this.$router.push('/find')
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

  .mian-ctn {
    margin: 0 auto;
    width: 90%;

    .input {
      border: none;
      border-bottom: 0.5px solid #eee;
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

</style>