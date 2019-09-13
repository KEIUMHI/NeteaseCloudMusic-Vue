<template>
  <div class="find-container">
    <Banner />

    <div class="wrap">
      <Labels />
    </div>

    <hr style="margin: 0; border: .5px solid #eee;" />

    <Recommend />
  </div>
</template>

<script>
import { getVideoLales } from '@/api/find'
// COMPONENTS
import Banner from '@/components/banner/banner'
import Labels from './components/labels/labels'
import Recommend from './components/recommend/recommend'

export default {
  name: 'find',
  data () {
    return {
    }
  },
  beforeMount () {
    this._getVideoLabels()
  },
  methods: {
    _getVideoLabels () {
      getVideoLales().then(res => {
        console.log('videoLabesRes:', res)
      })
    }
  },
  components: {
    Banner,
    Labels,
    Recommend
  }
}
</script>

<style lang="less" scoped>

</style>