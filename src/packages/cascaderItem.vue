<template>
  <div
    class="popoverItem"
    :style="{
      height: height + 'px',
    }"
  >
    <div class="left">
      <div
        class="label"
        v-for="(itemarr, index1) in item"
        :key="index1"
        @click="clickLabel(itemarr)"
      >
        <span class="name">
          {{ itemarr.name }}
        </span>
        <template v-if="loadItem.name === itemarr.name">
          <my-icon class="loading" icon="loading1"></my-icon>
        </template>
        <template v-else>
          <my-icon
            v-if="arrowVisible(itemarr)"
            icon="jiantou"
            class="arrow"
          ></my-icon>
        </template>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <my-cascader-item
        :item="rightItem"
        :height="height"
        :level="level + 1"
        :selected="selected"
        :loadData="loadData"
        @update:selected="onUpdateSelected"
        :loadItem="loadItem"
      ></my-cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-cascader-item",
  props: {
    item: {
      type: Array,
    },
    height: {
      type: Number,
    },
    selected: {
      type: Array,
    },
    level: {
      type: Number,
      default: 0,
    },
    loadData: {
      type: Function,
    },
    loadItem: {
      type: Object,
    },
  },
  data() {
    return {
      selectItem: null,
      copy: [],
    };
  },

  components: {},
  created() {
    console.log(this.item);
  },
  computed: {
    rightItem() {
      if (this.selected[this.level]) {
        let item = this.item.filter(
          (item) => item.name === this.selected[this.level].name
        );
        if (item && item[0].children && item[0].children.length > 0) {
          return item[0].children;
        }
      }
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {
    clickLabel(item) {
      this.copy = JSON.parse(JSON.stringify(this.selected));
      this.copy[this.level] = item;
      this.copy.splice(this.level + 1);
      this.$emit("update:selected", this.copy);
    },
    onUpdateSelected(newSelect) {
      this.$emit("update:selected", newSelect);
    },
    arrowVisible(itemarr) {
      return this.loadData ? !itemarr.isLeaf : itemarr.children;
    },
  },

  watch: {},
};
</script>
<style lang="scss" scoped>
@import "./_var.scss";
.popoverItem {
  display: flex;
  .left {
    padding: 0.3em 0;
    overflow: auto;
    /* @include box-shadow2; */
  }
  .right {
    /* border: 1px solid red; */
    border-left: 1px solid #eee;
    margin-top: -1px;
  }
  .label {
    display: flex;
    align-items: center;
    padding: 0.3em 1em;
    white-space: nowrap;
    .name {
      margin-right: 1em;
    }
    .arrow {
      width: 12px;
      height: 12px;
      margin-left: auto;
    }
    .loading {
      color: #eee;
      width: 12px;
      height: 12px;
      margin-left: auto;
      animation: spin 1s infinite linear;
    }
    @keyframes spin {
      0% {
        transform: rotate(0deg);
      }
      100% {
        transform: rotate(360deg);
      }
    }
  }
}
</style>
