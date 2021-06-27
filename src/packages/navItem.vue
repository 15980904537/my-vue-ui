<template>
  <div class="my-nav-item" :class="{ active }" @click="selected">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-nav-item",
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
    console.log(this.active);
  },

  methods: {
    selected() {
      //   console.log("1");
      this.$emit("add:selected", this.item);
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
.my-nav-item {
  padding: 10px 10px;
  &.active {
    background: #999;
    color: red;
  }
}
</style>