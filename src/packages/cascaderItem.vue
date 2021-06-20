<template>
  <div class="popoverItem">
    <div class="left">
      <div
        v-for="(itemarr, index1) in item"
        :key="index1"
        @click="selectItem = itemarr"
      >
        {{ itemarr.name }}
      </div>
    </div>
    <div class="right" v-if="rightItem">
      <my-cascader-item :item="rightItem"></my-cascader-item>
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
.popoverItem {
  display: flex;

  .left {
  }
  .right {
    margin-top: -1px;
  }
}
</style>
