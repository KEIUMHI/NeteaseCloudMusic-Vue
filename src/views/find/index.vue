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
import { getVideoLabels, getVideos } from 'api/find'
// COMPONENTS
import Banner from 'components/banner/banner'
import Labels from './components/labels/labels'
import Recommend from './components/recommend/recommend'

export default {
  name: 'find',
  components: {
    Banner,
    Labels,
    Recommend
  },
  data() {
    return {
    }
  },
  mounted() {
    this._getVideoLabels().then(() => {
      getVideos({
        id: 58106
      }).then(res => {
        console.log('videosRes:', res)
      }).catch(err => {
        console.error('getVideo', err.response)
      })
    })
  },
  methods: {
    _getVideoLabels() {
      return getVideoLabels().then(res => {
        console.log('videoLabesRes:', res)
      })
    }
  }
}
</script>

<style lang="less" scoped>
</style>