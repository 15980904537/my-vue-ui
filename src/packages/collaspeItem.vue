<template>
  <div class="collaspe-item">
    <div class="title" @click="onClick">{{ title }}</div>
    <div class="content" v-if="visible">
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
    return {
      visible: true,
    };
  },

  components: {},

  computed: {},
  methods: {
    onClick() {
      this.visible = !this.visible;
    },
  },
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
    margin-top: -1px;
    padding: 0.5em 1em;
    display: flex;
    align-items: center;
    cursor: pointer;
  }
  .content {
    display: flex;
    align-items: center;
    min-height: $height;
    padding: 0.5em 1em;
  }
  &:first-child {
    .title {
      border-top-left-radius: 4px;
      border-top-right-radius: 4px;
    }
  }
  &:last-child {
    .title {
      margin-bottom: -1px;
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
}
</style>