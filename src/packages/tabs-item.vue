<template>
  <div class="tabe-item" @click="xxx" :class="classes">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabs-item",
  props: {
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
    });
  },
  data() {
    return {
      active: false,
    };
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
  computed: {
    classes() {
      return {
        active: this.active,
      };
    },
  },
};
</script>
<style lang='scss' scoped>
.tabe-item {
  display: flex;
  align-items: center;
  padding: 0 3em;
  &.active {
    background: red;
  }
}
</style>