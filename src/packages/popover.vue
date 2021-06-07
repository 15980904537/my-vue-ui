<template>
  <div class="popover" ref="popover">
    <div v-if="show" class="content-wrapper" ref="content" :class="classes">
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
    position: {
      type: String,
      default: "top",
      validator(value) {
        return ["top", "bottom", "left", "right"].includes(value);
      },
    },
    trigger: {
      type: String,
      default: "click",
      validator(value) {
        return ["click", "hover"].includes(value);
      },
    },
  },
  data() {
    return {
      show: false,
    };
  },
  mounted() {
    if (this.trigger === "click") {
      this.$refs.popover.addEventListener("click", this.onClick);
    } else {
      this.$refs.popover.addEventListener("mouseenter", this.open);
      this.$refs.popover.addEventListener("mouseleave", this.close);
    }
  },
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
        bottom,
      } = this.$refs.trigger.getBoundingClientRect();
      let { height: height2 } = this.$refs.content.getBoundingClientRect();
      let distant = (height - height2) / 2;
      let x = {
        top: {
          top: top + window.scrollY,
          left: left + window.scrollX,
        },
        left: {
          top: top + distant + window.scrollY,
          left: left + window.scrollX,
        },
        bottom: {
          top: top + height + window.scrollY,
          left: left + window.scrollX,
        },
        right: {
          top: top + distant + window.scrollY,
          left: left + width + window.scrollX,
        },
      };
      this.$refs.content.style.top = x[this.position].top + "px";
      this.$refs.content.style.left = x[this.position].left + "px";
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
  computed: {
    classes() {
      return {
        [`position-${this.position}`]: true,
      };
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
  margin-top: 200px;
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

  &.position-bottom {
    margin-top: 10px;

    &::before {
      bottom: 100%;
      border-bottom-color: $border-color;
    }
    &::after {
      border-bottom-color: #fff;
      bottom: calc(100% - 1px);
    }
  }
  &.position-top {
    transform: translateY(-100%);
    margin-top: -10px;

    &::before {
      top: 100%;
      border-top-color: $border-color;
    }
    &::after {
      border-top-color: #fff;
      top: calc(100% - 1px);
    }
  }
  &.position-left {
    transform: translateX(-100%);
    &::before {
      left: 100%;
      top: 50%;
      transform: translateY(-50%);
      border-left-color: $border-color;
    }
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-left-color: #fff;
      left: calc(100% - 1px);
    }
  }
  &.position-right {
    &::before {
      top: 50%;
      transform: translateY(-50%);
      left: -5%;
      border-right-color: $border-color;
    }
    &::after {
      top: 50%;
      transform: translateY(-50%);
      border-right-color: #fff;
      left: calc(-5% + 1px);
    }
  }
}
</style>