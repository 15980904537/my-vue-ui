<template>
  <div>
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
};
</script>
<style lang='' scoped>
</style>