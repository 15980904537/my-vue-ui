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
    this.$children.forEach((vm) => {
      if (vm.$options.name === "my-tabs-head") {
        vm.$children.forEach((item) => {
          if (
            item.$options.name === "my-tabs-item" &&
            item.name === this.selected
          ) {
            this.eventBus.$emit("update:selected", this.selected, item);
          }
        });
      }
    });
    // this.eventBus.$emit("update:selected", this.selected);
  },
};
</script>
<style lang='scss' scoped>
</style>