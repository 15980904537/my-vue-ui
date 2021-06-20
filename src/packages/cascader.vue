<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot></slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <my-cascader-item
        :item="source"
        class="popover"
        :height="height"
      ></my-cascader-item>
    </div>
  </div>
</template>

<script>
import myCascaderItem from "./cascaderItem";
export default {
  name: "my-cascader",
  props: {
    source: {
      type: Array,
    },
    height: {
      type: Number,
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },

  components: { myCascaderItem },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang="scss" scoped>
@import "./_var.scss";
$height: 32px;
.cascader {
  position: relative;

  .trigger {
    width: 16em;
    border: 1px solid #ddd;
    height: $height;
  }
  .popover-wrapper {
    position: absolute;
    @extend .box-shadow;

    top: 100%;
    background: white;
  }
}
</style>
