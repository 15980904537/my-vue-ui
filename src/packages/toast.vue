<template>
  <div class="toast" ref="toast" :class="positionClass">
    <div class="message">
      <div v-html="this.$slots.default[0]" v-if="enableHtml"></div>
      <slot v-else></slot>
    </div>

    <div class="bd" ref="line"></div>
    <span class="close" @click="closeButtonEvent" v-if="closeButton">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "my-toast",
  data() {
    return {};
  },
  props: {
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "middle", "bottom"].includes(value);
      },
    },
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
  computed: {
    positionClass() {
      return { [`position-${this.position}`]: true };
    },
  },
  mounted() {
    this.pageAutoplay();
    this.updatHeight();
  },
  methods: {
    pageAutoplay() {
      if (this.autoplay) {
        setTimeout(() => {
          this.close();
        }, this.autoTime * 1000);
      }
    },
    updatHeight() {
      this.$nextTick(() => {
        this.$refs.line.style.height = `${
          this.$refs.toast.getBoundingClientRect().height
        }px`;
      });
    },
    close() {
      //解决关闭时组件没销毁的问题
      this.$emit("close");
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
  left: 50%;
  @keyframes fade-in {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
  @keyframes slide-up {
    0% {
      transform: translate(-50%, 100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  @keyframes slide-down {
    0% {
      transform: translate(-50%, -100%);
    }
    100% {
      transform: translate(-50%, 0);
    }
  }
  &.position-top {
    animation: slide-down 1s;
    top: 0;
    transform: translateX(-50%);
  }
  &.position-middle {
    animation: fade-in 1s;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  &.position-bottom {
    animation: slide-up 1s;
    bottom: 0;
    transform: translateX(-50%);
  }
  .message {
    padding: 8px 0;
  }
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