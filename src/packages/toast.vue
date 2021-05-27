<template>
  <div class="toast" ref="toast">
    <div v-html="this.$slots.default[0]" v-if="enableHtml"></div>
    <slot v-else></slot>
    <div class="bd" ref="line"></div>
    <span class="close" @click="closeButtonEvent" v-if="closeButton">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "my-toast",
  props: {
    autoplay: {
      type: Boolean,
      default: false,
    },
    autoTime: {
      type: Number,
      default: 3,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
    enableHtml: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {
    if (this.autoplay) {
      setTimeout(() => {
        this.close();
      }, this.autoTime * 1000);
    }
    this.$nextTick(() => {
      this.$refs.line.style.height = `${
        this.$refs.toast.getBoundingClientRect().height
      }px`;
    });
  },
  components: {},

  computed: {},

  beforeMount() {},
  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    closeButtonEvent() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.toast {
  position: fixed;
  display: flex;
  min-height: 40px;
  font-size: 14px;
  text-align: center;
  line-height: 1.8;
  align-items: center;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .bd {
    border-left: 1px solid #fff;
    margin-left: 16px;
  }
  .close {
    /* border: 1px solid red; */
    flex-shrink: 0;
    padding-left: 16px;
    cursor: pointer;
  }
}
</style>