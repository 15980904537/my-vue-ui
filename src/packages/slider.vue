<template>
  <div class="my-slider" @mouseenter="onmouseenter" @mouseleave="onmouseleave">
    <div class="my-slider-window">
      <div class="my-slider-wrapper">
        <slot></slot>
      </div>
      <div class="my-slider-dots">
        <span
          v-for="(item, index) in childrenlength"
          :key="index"
          @click="select(index)"
          >{{ index }}</span
        >
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
    };
  },
  mounted() {
    console.log(this.reverse);
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
        if (newIndex === this.names.length) {
          newIndex = 0;
        }
        if (newIndex === -1) {
          newIndex = this.names.length - 1;
        }
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
    select(index) {
      this.lastSelectedIndex = this.selectedIndex;
      this.$emit("update:selected", this.names[index]);
    },

    updatedChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        let reverse =
          this.lastSelectedIndex > this.selectedIndex ? true : false;
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
  border: 1px solid red;
  overflow: hidden;

  .my-slider-window {
  }
  .my-slider-wrapper {
    position: relative;
    display: flex;
  }
}
</style>