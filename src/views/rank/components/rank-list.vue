<template>
  <div class="rank-list">
    <div class="rank-list__label">{{ label }}</div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'rank-list',
  props: {
    label: String
  }
}
</script>

<style lang="less" scoped>
</style>
