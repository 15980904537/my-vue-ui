<template>
  <div>
    <div class="trigger">
      <slot></slot>
    </div>
    <div class="popover">
      <my-cascader-item :item="source"></my-cascader-item>
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
  },
  data() {
    return {};
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
$height: 32px;
.trigger {
  width: 16em;
  border: 1px solid #ddd;
  height: $height;
}
.popover {
  border: 1px solid red;
}
</style>
