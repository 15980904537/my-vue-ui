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
      console.log("关闭");
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