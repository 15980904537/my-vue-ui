<template>
  <div class="layout" :class="layoutClass">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-layout",
  props: [""],
  data() {
    return {
      layoutClass: {
        hasClass: false,
      },
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.$children.forEach((vm) => {
      if (vm.$options.name === "my-slide") {
        this.layoutClass.hasClass = true;
      }
    });
  },

  methods: {},

  watch: {},
};
</script>
<style lang='scss' scoped>
.layout {
  height: 100vh;
  border: 1px solid red;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  &.hasClass {
    flex-direction: row;
  }
}
</style>