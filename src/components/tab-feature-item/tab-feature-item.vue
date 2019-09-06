<template>
  <div class="tab-feature-item">
    <div
      class="icon"
      :style="{ background: style.background }">

    </div>
    <div
      class="label"
      :style="{
        fontSize: style.fontSize,
        color: style.color
      }">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'tab-feature-item',
  props: {
    style: {
      type: Object,
      required: true,
      // default: {
      //   width: '30px',
      // }
    },
    label: {
      type: String,
      required: true,
      default: '每日推荐'
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-feature-item {
    display: flex;
    flex-flow: wrap;
    text-align: center;
  }

  .icon {
    border-radius: 50%;
  }
</style>

