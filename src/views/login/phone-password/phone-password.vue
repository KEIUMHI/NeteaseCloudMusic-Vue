<template>
  <div class="phone-password">
    <div class="back">
      <div class="btn-back"></div>
      <div class="tip_back">手机号登录</div>
    </div>
    <div class="mian-ctn">
      <div class="tip">未注册手机号登录后将自动创建账号</div>
      <div class="input-wrapper">
        <input
          type="text"
          class="input"
          placeholder="请输入手机号">
      </div>
      <div class="btn-next">{{ currentPage === 'phone' ? '下一步' : '登录' }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'phone-password',
  data() {
    return {
      currentPage: 'phone'
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