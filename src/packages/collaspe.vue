<template>
  <div class="collaspe">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-collaspe",
  props: {
    selected: {
      type: String,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

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