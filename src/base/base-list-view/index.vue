<template>
  <div class="list-view">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: 'list-view'
}
</script>

<style lang="less" scoped>
.list-view {
  display: flex;
  flex-flow: wrap;
  justify-content: space-between;
}
</style>
