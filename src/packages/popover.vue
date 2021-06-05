<template>
  <div class="popover">
    <div v-if="show" @click.stop class="content-wrapper" ref="content">
      {{ content }}
    </div>
    <div @click.stop="onClick" ref="trigger">
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
    //监听document的事件
    handleEvent() {
      this.show = false;
      document.removeEventListener("click", this.handleEvent);
    },
    onClick() {
      this.show = !this.show;
      let {
        width,
        height,
        top,
        left,
      } = this.$refs.trigger.getBoundingClientRect();
      if (this.show) {
        this.$nextTick(() => {
          document.body.appendChild(this.$refs.content);
          this.$refs.content.style.top = top + window.scrollY + "px";
          this.$refs.content.style.left = left + window.scrollX + "px";
          document.addEventListener("click", this.handleEvent);
        });
      }
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
}
.content-wrapper {
  position: absolute;
  border: 1px solid red;
  box-shadow: 0 0 3px rgba(0, 0, 0, 0.5);
  transform: translateY(-120%);
}
</style>