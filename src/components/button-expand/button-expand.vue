<template>
  <div class="button-expand d-flex j-a-center">
    <i :class="['iconfont', iconName]"></i>
    {{ content }}
  </div>
</template>

<script>
export default {
  name: 'button-expand',
  props: {
    content: {
      type: String,
      required: true,
      default: '更多'
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";
  .button-expand {
    font-size: @font-size-small-l;
    color: @font-size-default;
  }
</style>