<template>
  <div class="tabs-head">
    <slot></slot>
    <div class="actions">
      <slot name="actions"></slot>
    </div>
    <div class="line" ref="line" v-if="x"></div>
  </div>
</template>

<script>
export default {
  name: "my-tabs-head",
  props: {},
  inject: ["eventBus"],
  data() {
    return {
      x: false,
    };
  },
  mounted() {
    this.eventBus.$on("update:selected", (name, vm) => {
      this.x = true;
      this.$nextTick(() => {
        let { width, left } = vm.$el.getBoundingClientRect();
        this.$refs.line.style.width = `${width}px`;
        this.$refs.line.style.transform = `translateX(${left}px)`;
        // console.log(vm.$el.getBoundingClientRect());
      });
    });
  },
};
</script>
<style lang='scss' scoped>
$tab-height: 40px;
$blue: blue;

.tabs-head {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  height: $tab-height;
  border-bottom: 1px solid grey;
  .line {
    position: absolute;
    /* width: 100px; */
    bottom: 0;
    border-bottom: 1px solid $blue;
    text-align: center;
    transition: all 1s;
  }
  .actions {
    display: flex;
    margin-left: auto;
  }
}
</style>