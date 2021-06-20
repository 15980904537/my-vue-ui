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
        @click="selectItem = itemarr"
      >
        {{ itemarr.name }}
        <my-icon v-if="itemarr.children" icon="jiantou" class="arrow"></my-icon>
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <my-cascader-item :item="rightItem" :height="height"></my-cascader-item>
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
  },
  data() {
    return {
      selectItem: null,
    };
  },

  components: {},

  computed: {
    rightItem() {
      if (this.selectItem && this.selectItem.children) {
        return this.selectItem.children;
      } else {
        return null;
      }
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang="scss" scoped>
@import "./_var.scss";
.popoverItem {
  display: flex;
  .left {
    padding: 0.3em 0;
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
    .arrow {
      width: 12px;
      height: 12px;
      margin-left: 8px;
    }
  }
}
</style>
