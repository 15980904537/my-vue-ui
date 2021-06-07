<template>
  <div class="collaspe-item">
    <div class="title">{{ title }}</div>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-collaspe-item",
  props: {
    title: {
      type: String,
    },
    name: {
      type: String,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},
};
</script>
<style lang='scss' scoped>
$border-color: #999;
$height: 32px;
.collaspe-item {
  .title {
    border: 1px solid $border-color;
    min-height: $height;
    margin-left: -1px;
    margin-right: -1px;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    &:first-child {
      margin-top: -1px;
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  .content {
    display: flex;
    align-items: center;
    min-height: $height;
    padding: 0.5em 1em;
  }
}
</style>