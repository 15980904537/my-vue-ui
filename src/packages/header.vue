<template>
  <div class="header">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-header",
  props: [""],
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
.header {
  height: 100px;
  background-color: #888;
}
</style>