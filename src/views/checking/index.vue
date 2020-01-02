<template>
  <div class="checking">

    <HeadBack
      label="手机号登录"
      @click="_handleBack"
    />

    <div class="checking__main">
      <div
        v-if="!status"
        class="checking__tip"
      >未注册手机号登录后将自动创建账号</div>

      <div class="checking__input">
        <div :class="['checking__input-pre', {'-active': inputValue || phone}]">+86</div>
        <input
          v-model="inputValue"
          class="checking__input-inner"
          autofocus
          :type="inputAttrType"
          :placeholder="inputAttrPlaceholder"
        >
        <div
          v-if="clearVisible"
          class="checking__input-clear"
          @click="_handleClear"
        ></div>
        <a
          v-if="status"
          class="checking__input-link"
          href="#"
        >忘记密码</a>
      </div>

      <div
        class="checking__button-next"
        @click="_handleNext"
      >{{ buttonContent }}</div>
    </div>
  </div>
</template>

<script>
import {
  login
} from '@/api/login'

import HeadBack from './components/head-back'

export default {
  name: 'checking',
  components: {
    HeadBack
  },
  data() {
    return {
      inputValue: null,
      phone: null,
      password: null,
      status: 0,
      ing: false
    }
  },
  computed: {
    inputAttrType() {
      return !this.status ? 'type' : 'password'
    },
    inputAttrPlaceholder() {
      return `请输入${!this.status ? '手机号' : '密码'}`
    },
    buttonContent() {
      return this.ing ? '登录中...' : (!this.status ? '下一步' : '登录')
    },
    clearVisible() {
      return !this.status && (this.inputValue || this.phone)
    }
  },
  methods: {
    _handleBack() {
      if (this.status) {
        this.status = 0
        this.inputValue = this.phone
        this.password = null
      } else {
        this.$router.go(-1)
        this.inputValue = null
        this.phone = null
      }
    },
    _handleNext() {
      if (this.ing) return
      const status = {
        0: () => {
          this.phone = this.inputValue
          if (this._checkPhoneNum(this.phone)) {
            this.status = 1
            this.inputValue = null
          }
        },
        1: () => {
          this.password = this.inputValue
          if (!this.password) {
            alert('您还未填写密码')
            return
          }
          this.ing = true
          this._login().then(() => {
            this.ing = false
          })
        }
      }
      status[this.status]()
    },
    _checkPhoneNum(num) {
      if (!num) {
        alert('您还未输入手机号')
        return false
      }

      if (!(/^1[3456789]\d{9}$/.test(num))) {
        alert('手机号码格式有误')
        return false
      }

      return true
    },
    _handleClear() {
      this.inputValue = null
      this.phone || (this.phone = null)
    },
    _login() {
      const account = {
        // countrycode: 86,
        phone: this.phone,
        password: this.password
      }
      return login(account).then(res => {
        console.log('login success:', res)
        const code = res.data.code
        console.log(code)
        if (code >= 500) {
          alert(res.data.msg)
        } else if (code >= 200 && code < 300) {
          this.$router.push({ name: 'index' })
        } else if (code >= 400 && code < 500) {
          alert('错误')
        }
      }).catch(err => {
        alert(err.response.data.msg)
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/variables.less";

.checking {
  height: 100vh;
  width: 100vw;

  &__main {
    margin-top: 30px;
    padding: 0 15px;
  }

  &__tip {
    margin-bottom: 30px;
    font-size: @font-size-small;
    color: #777;
  }

  &__input {
    display: inline-block;
    position: relative;
    width: 100%;
    padding: 8px 0 8px 36px;
    border-bottom: 1px solid #999;
  }

  &__input-inner {
    border: none;
    outline: 0;
    width: 100%;
  }

  &__input-pre {
    position: absolute;
    top: 50%;
    left: 0;
    color: @color-text-gray-light;
    transform: translateY(-50%);
    transition: color 0.1s;

    &.-active {
      color: @color-text-black;
    }
  }

  &__input-clear,
  &__input-link {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
  }

  &__input-clear {
    &::before {
      content: "\2717";
      color: @color-text-gray-light;
    }
  }

  &__input-link {
    font-size: @font-size-small;
    color: @color-text-gray-light;
  }

  &__button-next {
    border-radius: 25px;
    margin-top: 30px;
    padding: 10px 0;
    width: 100%;
    font-size: @font-size-medium-x;
    font-weight: 200;
    text-align: center;
    color: #fff;
    background: @color-primary;

    &:active {
      background-color: hsl(4, 76%, 46%);
    }
  }
}
</style>