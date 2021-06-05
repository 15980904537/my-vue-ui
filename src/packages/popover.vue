<template>
  <div class="popover">
    <div v-if="show" @click.stop="clickContent" class="conten-wrapper">
      {{ content }}
    </div>
    <div @click.stop="onClick">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-popover",
  props: {
    content: {
      type: String,
      require: true,
    },
  },
  data() {
    return {
      show: false,
    };
  },
  methods: {
    handleEvent() {
      this.show = false;
      document.removeEventListener("click", this.handleEvent);
    },
    onClick() {
      this.show = !this.show;
      if (this.show) {
        document.addEventListener("click", this.handleEvent);
      }
    },
    clickContent() {
      this.show = true;
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
.popover {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-top: 100px;
  .conten-wrapper {
    position: absolute;
    bottom: 100%;
    border: 1px solid red;
    left: 0;
    box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  }
}
</style>