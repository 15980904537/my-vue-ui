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
      console.log(names);
      let index = names.indexOf(this.getSelected());
      const run = () => {
        if (index === names.length) {
          index = 0;
        }
        this.$emit("update:selected", names[index]);
        console.log("index");
        console.log(index);
        index++;
        setTimeout(() => {
          run();
        }, 3000);
      };
      setTimeout(() => {
        run();
      }, 3000);
    },
    getSelected() {
      return this.selected || this.$children[0].name;
    },
    updatedChildren() {
      let selected = this.getSelected();
      this.$children.forEach((vm) => {
        vm.selected = selected;
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