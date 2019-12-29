<template>
  <div class="button-switch d-flex">
    <div :class="['name', 'name_main', {current: isCurrent === 0}]"
         @click="_handleClick">{{ nameMain }}</div>
    <div class="dividing-line"></div>
    <div :class="['name', 'name_secondary', {current: isCurrent === 1}]"
         @click="_handleClick">{{ nameSecondary }}</div>
  </div>
</template>

<script>
export default {
  name: 'button-switch',
  props: {
    nameMain: {
      type: String,
      default: '主要'
    },
    nameSecondary: {
      type: String,
      default: '次要'
    }
  },
  data() {
    return {
      isCurrent: 0
    }
  },
  methods: {
    _handleClick(e) {
      let name = e.target.textContent
      switch (name) {
        case this.nameMain:
          this.isCurrent = 0
          break
        case this.nameSecondary:
          this.isCurrent = 1
          break
        default:
          console.log('Has no one can be compelet about this name.')
          break
      }
      this.$emit('change', this.isCurrent)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~@/assets/style/variables.less";

.button-switch {
  justify-content: center;
  align-items: center;
}

.name {
  font-size: @font-size-small;
  color: #777;

  &.current {
    font-size: @font-size-medium;
    font-weight: 500;
    color: @color-text-black;
  }

  &:first-child {
    margin-right: 8px;
  }

  &:last-child {
    margin-left: 8px;
  }
}

.dividing-line {
  border: 0.5px solid #eee;
  height: 14px;
}
</style>