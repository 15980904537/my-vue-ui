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
    autoPlay: {
      type: Boolean,
      default: true,
    },
    reverse: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  mounted() {
    this.updatedChildren();
    if (this.autoPlay) {
      this.playAutomatically();
    }
  },
  updated() {
    this.updatedChildren();
  },
  methods: {
    playAutomatically() {
      let names = this.$children.map((vm) => vm.name);
      let index = names.indexOf(this.getSelected());
      const run = () => {
        if (index === names.length) {
          index = 0;
        }
        if (index === -1) {
          index = names.length - 1;
        }
        this.$emit("update:selected", names[index]);
        this.reverse ? index-- : index++;
        setTimeout(() => {
          run();
        }, 3000);
      };
      run();
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    updatedChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        vm.selected = selected;
        let names = this.$children.map((vm) => vm.name);

        let oldindex = names.indexOf(vm.name);
        let newIndex = names.indexOf(selected);
        vm.reverse = oldindex > newIndex ? true : false;
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