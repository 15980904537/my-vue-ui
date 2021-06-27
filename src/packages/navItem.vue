<template>
  <div class="my-nav-item" :class="{ active }" @click="selected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-nav-item",
  inject: ["root"],
  props: {
    item: {
      type: String,
    },
  },
  data() {
    return {
      active: false,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.root.addItems(this);
  },

  methods: {
    selected() {
      this.$emit("add:selected", this.item);
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
@import "./_var.scss";
.my-nav-item {
  padding: 10px 10px;
  position: relative;
  &.active {
    &::after {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      border-bottom: 2px solid $blue;
      width: 100%;
    }
  }
}
</style>