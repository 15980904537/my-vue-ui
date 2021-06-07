<template>
  <div class="collaspe">
    <slot></slot>
  </div>
</template>

<script>
import Vue from "vue";
export default {
  name: "my-collaspe",
  props: {
    selected: {
      type: Array,
    },
    single: {
      type: Boolean,
      default: false,
    },
  },
  provide() {
    return {
      eventBus: this.eventBus,
    };
  },
  data() {
    return {
      eventBus: new Vue(),
      // rececive: this.selected,
    };
  },

  mounted() {
    this.eventBus.$emit("update:selected", this.selected);
    this.eventBus.$on("addupdate:selected", (name) => {
      let selectedCopy = JSON.parse(JSON.stringify(this.selected));
      if (this.single === true) {
        selectedCopy = [name];
      } else {
        selectedCopy.push(name);
      }
      //监听外界selected的变化
      this.$emit("update:selected", selectedCopy);
      this.eventBus.$emit("update:selected", selectedCopy);
    });
    this.eventBus.$on("removeupdate:selected", (name) => {
      let index = this.selected.indexOf(name);
      this.selected.splice(index, 1);
      // this.selected.filter((item) => item == name);
      // console.log(this.selected);
      //监听外界selected的变化
      this.$emit("update:selected", this.selected);
      this.eventBus.$emit("update:selected", this.selected);
    });
  },

  methods: {},

  watch: {},
};
</script>
<style lang='scss' scoped>
$border-color: #999;
$border-radius: 4px;
$width: 50%;
.collaspe {
  min-width: $width;
  border: 1px solid $border-color;
  border-radius: $border-radius;
  /* 不推荐用overflow */
  /* overflow: hidden; */
}
</style>