<template>
  <div class="albums-list">
    <base-title-bar>
      <template #start>
        <div class="albums-list__title-double">
          <span
            :class="['title-double-item', {cur: !cur}]"
            @click="_handleTitleChange(0)"
          >新碟</span>
          <span
            :class="['title-double-item', {cur}]"
            @click="_handleTitleChange(1)"
          >新歌</span>
        </div>
      </template>
      <template #end>
        <ShowMore label="更多新碟" />
      </template>
    </base-title-bar>
    <base-list-view>
      <SongSheet
        v-for="(item, index) in curList"
        :id="item.id"
        :key="index"
        :name="item.name"
        :pic-url="item.picUrl || item.song.album.picUrl || ''"
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
  name: 'albums-list',
  components: {
    BaseTitleBar,
    BaseListView,
    SongSheet,
    ShowMore
  },
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cur: 0,
      curList: []
    }
  },
  watch: {
    data(val) {
      this.curList = val.albumsList
    }
  },
  methods: {
    _handleTitleChange(i) {
      this.cur = i
      this.curList = !i ? this.data.albumsList : this.data.songList
    }
  }
}
</script>

<style lang="less" scoped>
@import "~common/less/variables.less";
@import "~common/less/mixin.less";
.albums-list {
  .container;
  &__title-double {
    position: relative;

    .title-double-item {
      font-size: @font-size-small;
      color: #777;

      &.cur {
        font-size: @font-size-medium;
        font-weight: 500;
        color: @color-text-black;
      }

      &:first-child {
        margin-right: 8px;
      }

      &:last-child {
        margin-left: 8px;
      }
    }

    &::before {
      content: "|";
      position: absolute;
      top: 0;
      left: 50%;
      color: #777;
    }
  }
}
</style>