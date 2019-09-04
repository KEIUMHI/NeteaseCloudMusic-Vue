<template>
  <div id="app">
    <tab-header>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>

<script>
import TabHeader from '@/components/tab-header'

export default {
  name: 'app',
  components: {
    TabHeader
  }
}
</script>

<style>
</style>
