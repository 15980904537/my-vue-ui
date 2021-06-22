<template>
  <transition name="slider">
    <div class="my-slider-item" v-if="visible">
      <slot></slot>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-slider-item",
  props: {
    name: {
      type: String,
    },
  },
  data() {
    return {
      selected: undefined,
    };
  },

  components: {},

  computed: {
    visible() {
      return this.name === this.selected;
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang='scss' scoped>
.my-slider-item {
}
.slider-leave-active {
  position: absolute;
  left: 0;
  top: 0;
}
.slider-enter-active,
.slider-leave-active {
  transition: all 1s;
}
.slider-enter {
  transform: translateX(100%);
}
.slider-leave-to {
  opacity: 0;
}
</style>