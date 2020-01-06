<template>
  <div class="recommend-list">
    <base-title-bar>
      <template #start>
        <div class="recommend-list__title">推荐歌单</div>
      </template>
      <template #end>
        <ShowMore label="歌单广场" />
      </template>
    </base-title-bar>
    <base-list-view>
      <SongSheet
        v-for="item in data"
        :id="item.id"
        :key="item.id"
        :name="item.name"
        :pic-url="item.picUrl"
        :count="item.playCount"
      />
    </base-list-view>
  </div>
</template>

<script>
import BaseTitleBar from 'base/base-title-bar'
import BaseListView from 'base/base-list-view'
import SongSheet from 'components/song-sheet'
import ShowMore from 'components/show-more'

export default {
  name: 'recommend-list',
  components: { BaseTitleBar, BaseListView, SongSheet, ShowMore },
  props: {
    data: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";
@import "~common/less/mixin.less";

.recommend-list {
  .container;
}
</style>