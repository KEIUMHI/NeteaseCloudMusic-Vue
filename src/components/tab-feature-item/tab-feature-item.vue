<template>
  <div class="tab-feature-item">
    <div
      class="icon"
      :style="{
        width: styles.width,
        height: styles.height,
        background: styles.background
      }">
      <i 
        :class="['iconfont', iconClassName]"
        :style="{ fontSize: styles.iconFontSize }"></i>
    </div>
    <div
      class="label"
      :style="{
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
          width: '38px',
          height: '38px',
          fontSize: '10px',
          color: '#777',
          background: '#d44439'
        }
      }
    },
    label: {
      type: String,
      required: true,
      default: '每日推荐'
    },
    iconClassName: {
      type: String,
      required: true,
      default: 'iconcalendar'
    }
  }
}
</script>

<style lang="less" scoped>
  .tab-feature-item {
    display: inline-block;
    text-align: center;
  }

  .icon {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin: 0 auto;
    color: #fff;
  }

  .label {
    margin-top: 6px;
  }
</style>

