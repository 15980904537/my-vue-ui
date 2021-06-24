<template>
  <div
    class="my-slider"
    @mouseenter="onmouseenter"
    @mouseleave="onmouseleave"
    @touchstart="ontouchStart"
    @touchmove="ontouchMove"
    @touchend="ontouchEnd"
  >
    <div class="my-slider-window">
      <div class="my-slider-wrapper">
        <slot></slot>
      </div>
      <div class="my-slider-dots">
        <span @click="select(selectedIndex - 1)"><</span>
        <span
          v-for="(item, index) in childrenlength"
          :key="index"
          @click="select(index)"
          :class="{ active: index === selectedIndex }"
          >{{ item }}</span
        >
        <span @click="select(selectedIndex + 1)">></span>
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
    autoPlay: {
      type: Boolean,
      default: false,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      lastSelectedIndex: undefined,
      childrenlength: 0,
      timeId: undefined,
      touchStart: undefined,
      flag: false,
    };
  },
  mounted() {
    this.updatedChildren();
    if (this.autoPlay) {
      this.playAutomatically();
    }
    this.childrenlength = this.$children.length;
  },
  updated() {
    this.updatedChildren();
  },
  computed: {
    selectedIndex() {
      return this.names.indexOf(this.selected) || 0;
    },
    names() {
      return this.$children.map((vm) => vm.name);
    },
  },
  methods: {
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    playAutomatically() {
      // console.log(index);
      if (this.timeId) {
        return;
      }
      const run = () => {
        let index = this.names.indexOf(this.getSelected());
        let newIndex = this.reverse ? index - 1 : index + 1;

        this.select(newIndex);
        this.timeId = setTimeout(run, 3000);
      };
      this.timeId = setTimeout(run, 3000);
    },
    pause() {
      window.clearTimeout(this.timeId);
      this.timeId = undefined;
    },
    onmouseenter() {
      this.pause();
    },
    onmouseleave() {
      this.playAutomatically();
    },
    ontouchStart(e) {
      this.flag = false;
      this.pause();
      this.touchStart = e.touches[0];
    },
    ontouchMove() {},
    ontouchEnd(e) {
      let touchEnd = e.changedTouches[0];
      let { clientX: x1, clientY: y1 } = this.touchStart;
      let { clientX: x2, clientY: y2 } = touchEnd;
      let distant = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      let detalY = Math.abs(y2 - y1);
      let rate = distant / detalY;
      this.flag = true;
      if (rate > 2) {
        if (x2 - x1 > 0) {
          this.select(this.selectedIndex - 1);
        } else {
          this.select(this.selectedIndex + 1);
        }
        // this.flag = false;
      }
      // console.log("触摸结束");
      this.$nextTick(() => {
        this.playAutomatically();
      });
    },
    select(index) {
      if (index === this.names.length) {
        index = 0;
      }
      if (index === -1) {
        index = this.names.length - 1;
      }
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },

    updatedChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        let reverse =
          this.lastSelectedIndex > this.selectedIndex ? true : false;
        if (this.timeId || this.flag) {
          console.log("flag", this.flag);
          if (
            this.lastSelectedIndex === this.$children.length - 1 &&
            this.selectedIndex === 0
          ) {
            reverse = false;
          }
          if (
            this.lastSelectedIndex === 0 &&
            this.selectedIndex === this.$children.length - 1
          ) {
            reverse = true;
          }
        }

        vm.reverse = reverse;
        this.$nextTick(() => {
          vm.selected = selected;
        });
      });
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
.my-slider {
  /* display: inline-block; */
  /* border: 1px solid red; */
  overflow: hidden;

  .my-slider-window {
    .my-slider-wrapper {
      position: relative;
      display: flex;
      cursor: default;
    }
    .my-slider-dots {
      display: flex;
      justify-content: center;
      align-items: center;
      span {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background: #ddd;
        color: #fff;
        font-size: 12px;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        margin: 10px;
        &:hover {
          cursor: pointer;
        }
        &.active {
          background: #000;
          cursor: default;
        }
      }
    }
  }
}
</style>