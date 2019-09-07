<template>
  <div class="find-container">
    
    find

    <div class="label-options">
      <tab-feature-item
        v-for="(tab, index) in tabFeatureItemStyles"
        :key="index"
        :styles="tab.style"
        :label="tab.label" />
    </div>
  </div>
</template>

<script>
// COMPONENTS
import TabFeatureItem from '@/components/tab-feature-item/tab-feature-item'
// eslint-disable-next-line
import BoxShow from '@/components/box-show/box-show'

export default {
  name: 'find',
  data() {
    return {
      sameStyle: {
        width: '30px',
        height: '30px',
        fontSize: '10px',
        background: '#d44439',
        color: '#777',  
        iconClassName: ''
      },
      tabFeatureItemStyles: [{
        label: '每日推荐',
        style: {
          ...this.sameStyle
        }
      }, {
        label: '歌单',
        style: {
          ...this.sameStyle
        }
      }, {
        label: '排行榜',
        style: {
          ...this.sameStyle
        }
      }, {
        label: '电台',
        style: {
          ...this.sameStyle
        }
      }, {
        label: '直播',
        style: {
          ...this.sameStyle
        }
      }]
    }
  },
  methods: {
  },
  components: {
    TabFeatureItem
  }
}
</script>

<style lang="less" scoped>

  

</style>