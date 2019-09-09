<template>
  <div
    class="banner-title"
    :style="{background: typeColor}">
    {{ title }}
  </div>
</template>

<script>
export default {
  name: 'banner-title',
  props: {
    title: {
      type: String,
      default: '独家'
    },
    typeColor: {
      type: String,
      default: 'red' // 十六进制、rgba、colorName
    }
  }
}
</script>

<style lang="less" scoped>
  @import "~@/assets/style/variables.less";

  .banner-title {
    padding: 4px;
    border-top-left-radius: 4px;
    border-bottom-right-radius: 5px;
    font-size: 10px;
    color: #fff;
    opacity: .8;
  }
</style>