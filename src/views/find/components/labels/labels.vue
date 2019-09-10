<template>
  <div class="labels">
    <div class="label-options">
        <TabFeatureItem
          v-for="tab in tabFeatureItems"
          :key="tab.id"
          :styles="sameStyle"
          :id="tab.id"
          :label="tab.label"
          :icon-class-name="tab.iconClassName"
          @tab-click="_tabClick" />
      </div>
  </div>
</template>

<script>
import TabFeatureItem from '@/components/tab-feature-item/tab-feature-item'

export default {
  name: 'labels',
  data() {
    return {
      sameStyle: {
        width: '38px',
        height: '38px',
        fontSize: '10px',
        iconFontSize: '18px',
        background: '#d44439',
        color: '#777',  
      },
      tabFeatureItems: [{
        id:1,
        label: '每日推荐',
        iconClassName: 'iconcalendar'
      }, {
        id:2,
        label: '歌单',
        iconClassName: 'iconround-queue_music'
      }, {
        id:3,
        label: '排行榜',
        iconClassName: 'iconicranking'
      }, {
        id:4,
        label: '电台',
        iconClassName: 'iconradio'
      }, {
        id:5,
        label: '直播',
        iconClassName: 'iconicon_live_hover'
      }]
    }
  },
  methods: {
    _tabClick (id) {
      console.log(`label click id: ${id}`)
    }
  },
  components: {
    TabFeatureItem
  }
}
</script>

<style lang="less" scoped>
  .label-options {
    display: flex;
    justify-content: space-between;
    padding: 18px 0;
  }
</style>