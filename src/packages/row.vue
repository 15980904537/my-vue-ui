<template>
  <div
    class="row"
    :style="{ marginRight: -gutter / 2 + 'px', marginLeft: -gutter / 2 + 'px' }"
  >
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-row",
  props: {
    gutter: {
      type: [String, Number],
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    this.$children.forEach((vm) => {
      vm.gutter = this.gutter;
    });
  },

  methods: {},

  watch: {},
};
</script>
<style lang="scss" scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.row {
  display: flex;
  flex-wrap: wrap;
}
</style>
