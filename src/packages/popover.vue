<template>
  <div class="popover" @click="onClick">
    <div v-if="show" class="content-wrapper" ref="content">
      {{ content }}
    </div>
    <div ref="trigger">
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
  mounted() {},
  methods: {
    handleEvent(e) {
      if (this.$refs.content && this.$refs.content.contains(e.target)) return;
      this.close();
    },
    positionContent() {
      document.body.appendChild(this.$refs.content);
      let {
        width,
        height,
        top,
        left,
      } = this.$refs.trigger.getBoundingClientRect();
      this.$refs.content.style.top = top + window.scrollY + "px";
      this.$refs.content.style.left = left + window.scrollX + "px";
    },
    listenToDocument() {
      document.addEventListener("click", this.handleEvent);
    },
    open() {
      this.show = true;
      setTimeout(() => {
        this.positionContent();
        this.listenToDocument();
      }, 0);
    },
    //统一关闭（优化）
    close() {
      this.show = false;
      document.removeEventListener("click", this.handleEvent);
    },
    //监听document的事件
    onClick(event) {
      if (this.$refs.trigger.contains(event.target)) {
        if (this.show === true) {
          this.close();
        } else {
          this.open();
        }
      } else {
        console.log("上面");
      }
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
$border-color: #999;
$border-radius: 4px;
$font-size: 18px;
.popover {
  position: relative;
  display: inline-block;
  vertical-align: top;
  margin-top: 500px;
}
.content-wrapper {
  position: absolute;
  max-width: 20em;
  border: 1px solid $border-color;
  padding: 0.5em 1em;
  border-radius: $border-radius;
  font-size: $font-size;
  /* box-shadow: 0 0 3px rgba(0, 0, 0, 0.5); */
  filter: drop-shadow(0 0 2px rgba(0, 0, 0, 0.5));
  transform: translateY(-100%);
  margin-top: -10px;
  word-break: break-all;
  background-color: white;
  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 10px;
    width: 0;
    height: 0;
    border: 10px solid transparent;
  }
  &::before {
    top: 100%;
    border-top-color: $border-color;
  }
  &::after {
    border-top-color: #fff;
    top: calc(100% - 1px);
  }
}
</style>