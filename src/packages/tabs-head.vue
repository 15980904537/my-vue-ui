<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-tabs-head",
  props: {},
  inject: ["eventBus"],
  created() {},
  data() {
    return {};
  },
};
</script>
<style lang='scss' scoped>
.tabs-head {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .actions {
    margin-left: auto;
  }
}
</style>