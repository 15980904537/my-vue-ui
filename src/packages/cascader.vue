<template>
  <div class="cascader">
    <div class="trigger" @click="popoverVisible = !popoverVisible">
      <slot>{{ result || "&nbsp" }} </slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <my-cascader-item
        :item="source"
        class="popover"
        :height="height"
        :selected="selected"
        @update:selected="onUpdateSelected"
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
    selected: {
      type: Array,
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },

  components: { myCascaderItem },

  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/");
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {
    onUpdateSelected(newSelect) {
      this.$emit("update:selected", newSelect);
    },
  },

  watch: {},
};
</script>
<style lang="scss" scoped>
@import "./_var.scss";
$height: 32px;
.cascader {
  position: relative;

  .trigger {
    display: inline-flex;
    align-items: center;
    width: 16em;
    border: 1px solid #ddd;
    height: $height;
    padding: 0 0.8em;
  }
  .popover-wrapper {
    position: absolute;
    @extend .box-shadow;

    top: 100%;
    background: white;
  }
}
</style>
