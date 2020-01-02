<template>
  <div class="title-bar d-flex">
    <div
      v-if="!buttonSwitch"
      class="title"
    >{{ title }}</div>
    <TitleBarButton
      v-else
      :name-main="switchNameMain"
      :name-secondary="switchNameSed"
      @change="_change"
    />
    <ShowMore
      v-if="more"
      :content="more"
    />
  </div>
</template>

<script>
import ShowMore from '../show-more'
import TitleBarButton from './title-bar-button'

export default {
  name: 'title-bar',
  components: {
    ShowMore,
    TitleBarButton
  },
  props: {
    title: {
      type: String,
      default: '标题'
    },
    more: {
      type: String,
      default: '更多'
    },
    buttonSwitch: {
      type: Boolean,
      default: false
    },
    switchNameMain: {
      type: String,
      default: '主要'
    },
    switchNameSed: {
      type: String,
      default: '次要'
    }
  },
  methods: {
    _change(isCurrent) {
      this.$emit('change', isCurrent)
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";
.title {
  font-size: @font-size-medium-x;
  font-weight: 500;
  color: @color-text-black;
}

.title-bar {
  margin: 12px 0;
  justify-content: space-between;
  align-items: center;
}
</style>