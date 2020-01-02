<template>
  <div class="box-show-head d-flex">
    <div
      v-if="!buttonSwitch"
      class="title"
    >{{ title }}</div>
    <ButtonSwitch
      v-else
      :name-main="switchNameMain"
      :name-secondary="switchNameSed"
      @change="_change"
    />
    <ButtonExpand
      v-if="more"
      :content="more"
    />
  </div>
</template>

<script>
import ButtonExpand from '../button-expand/button-expand'
import ButtonSwitch from './components/button-switch/button-switch'

export default {
  name: 'box-show-head',
  components: {
    ButtonExpand,
    ButtonSwitch
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
@import "~@/assets/style/variables.less";
.title {
  font-size: @font-size-medium-x;
  font-weight: 500;
  color: @color-text-black;
}

.box-show-head {
  margin: 12px 0;
  justify-content: space-between;
  align-items: center;
}
</style>