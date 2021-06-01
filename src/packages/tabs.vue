<template>
  <div class="tab">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "my-tabs",
  props: {
    selected: {
      type: String,
      requried: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].includes(val);
      },
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
    // this.eventBus.$emit("update:selected", this.name);
    console.log(111);
    console.log(this.selected);
    this.eventBus.$emit("update:selected", this.selected);
  },
};
</script>
<style lang='scss' scoped>
</style>