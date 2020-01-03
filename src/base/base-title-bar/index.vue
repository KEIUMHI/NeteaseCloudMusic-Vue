<template>
  <div class="base-title-bar">
    <div class="base-title-bar__start">
      <slot name="start"></slot>
    </div>
    <div class="base-title-bar__end">
      <slot name="end"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'base-title-bar'
}
</script>

<style lang="less" scoped>
.base-title-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 12px 0;
}
</style>
