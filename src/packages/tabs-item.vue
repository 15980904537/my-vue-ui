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
      this.eventBus.$emit("update:selected", this.name, this);
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
$blue: blue;
.tabe-item {
  display: flex;
  align-items: center;
  padding: 0 2em;
  cursor: pointer;
  height: 100%;
  &.active {
    color: $blue;
    font-weight: 600;
    /* border-bottom: 1px solid #ddd; */
    /* background: red; */
  }
}
</style>