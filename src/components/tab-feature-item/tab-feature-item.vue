<template>
  <div class="tab-feature-item">
    <div
      class="icon"
      :style="{
        width: styles.width,
        height: styles.height,
        background: styles.background
      }">
      <i :class="['iconfont', styles.iconClassName]"></i>
    </div>
    <div
      class="label"
      :styles="{
        fontSize: styles.fontSize,
        color: styles.color
      }">{{ label }}</div>
  </div>
</template>

<script>
export default {
  name: 'tab-feature-item',
  props: {
    styles: {
      type: Object,
      required: true,
      default: () => {
        return {
          width: '30px',
          height: '30px',
          fontSize: '12px',
          color: '#777',
          background: '#d44439'
        }
      }
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

