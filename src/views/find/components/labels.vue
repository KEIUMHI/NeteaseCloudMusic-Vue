<template>
  <div class="labels">
    <div class="label-options">
      <CategoryButton
        v-for="item in tabFeatureItems"
        :id="item.id"
        :key="item.id"
        :label="item.label"
        :icon-class="item.iconClass"
        @tab-click="_tabClick(item.router)"
      />
    </div>
  </div>
</template>

<script>
import CategoryButton from 'components/category-button'

export default {
  name: 'labels',
  components: {
    CategoryButton
  },
  data() {
    return {
      // sameStyle: {
      //   width: '38px',
      //   height: '38px',
      //   fontSize: '10px',
      //   iconFontSize: '18px',
      //   background: '#d44439',
      //   color: '#777'
      // },
      tabFeatureItems: [{
        id: 1,
        label: '每日推荐',
        router: '',
        iconClass: 'date'
      }, {
        id: 2,
        label: '歌单',
        router: '',
        iconClass: 'list'
      }, {
        id: 3,
        label: '排行榜',
        router: 'ranking',
        iconClass: 'ranking'
      }, {
        id: 4,
        label: '电台',
        router: '',
        iconClass: 'radio'
      }, {
        id: 5,
        label: '直播',
        router: '',
        iconClass: 'station'
      }]
    }
  },
  methods: {
    _tabClick(name) {
      this.$router.push({
        name
      })
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/mixin.less";

.labels {
  .container;
}

.label-options {
  display: flex;
  justify-content: space-between;
  padding: 18px 0;
}
</style>