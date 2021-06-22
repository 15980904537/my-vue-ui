<template>
  <div class="my-slider">
    <div class="my-slider-window">
      <div class="my-slider-wrapper">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-slider",
  props: {
    selected: {
      type: String,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    console.log(this.$children);
    this.updatedChildren();
  },
  updated() {
    this.updatedChildren();
  },
  methods: {
    updatedChildren() {
      this.$children.forEach((vm) => {
        vm.selected = this.selected || this.$children[0].name;
      });
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
.my-slider {
  display: inline-block;
  border: 1px solid red;
  overflow: hidden;
  width: 200px;
  height: 150px;
  .my-slider-window {
  }
  .my-slider-wrapper {
    position: relative;
    display: flex;
  }
}
</style>