<template>
  <div class="collaspe">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "my-collaspe",
  props: {
    selected: {
      type: String,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
    };
  },

  mounted() {
    this.eventBus.$emit("updated:selected", this.selected);
  },

  methods: {},

  watch: {},
};
</script>
<style lang='scss' scoped>
$border-color: #999;
$border-radius: 4px;
$width: 50%;
.collaspe {
  min-width: $width;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  /* 不推荐用overflow */
  /* overflow: hidden; */
}
</style>