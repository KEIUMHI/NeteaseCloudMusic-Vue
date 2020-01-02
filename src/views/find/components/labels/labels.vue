<template>
  <div class="labels">
    <div class="label-options">
      <TabFeatureItem
        v-for="tab in tabFeatureItems"
        :id="tab.id"
        :key="tab.id"
        :styles="sameStyle"
        :label="tab.label"
        :icon-name="tab.iconName"
        @tab-click="_tabClick"
      />
    </div>
  </div>
</template>

<script>
import TabFeatureItem from 'components/tab-feature-item/tab-feature-item'

export default {
  name: 'labels',
  components: {
    TabFeatureItem
  },
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
        id: 1,
        label: '每日推荐',
        iconName: 'iconcalendar'
      }, {
        id: 2,
        label: '歌单',
        iconName: 'iconround-queue_music'
      }, {
        id: 3,
        label: '排行榜',
        iconName: 'iconicranking'
      }, {
        id: 4,
        label: '电台',
        iconName: 'iconradio'
      }, {
        id: 5,
        label: '直播',
        iconName: 'iconicon_live_hover'
      }]
    }
  },
  methods: {
    _tabClick(id) {
      console.log(`label click id: ${id}`)
    }
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