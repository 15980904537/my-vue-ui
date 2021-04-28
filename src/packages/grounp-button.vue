<template>
  <div class="grounp-button">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-grounp-button",
  mounted() {
    console.log(this.$el.children);
    for (let node of this.$el.children) {
      if (node.nodeName.toLowerCase() !== "button") {
        console.log("my-grounp-button的子元素必须是button类型");
      }
    }
  },

  methods: {},

  watch: {},
};
</script>
<style lang="scss" scoped>
.grounp-button {
  display: inline-flex;
  vertical-align: center;
  .my-button {
    margin: 0;
    border-radius: 0;
    &:not(:first-child) {
      border-left-color: rgba(255, 255, 255, 0.5);
    }
    &:first-child {
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    &:last-child {
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>
