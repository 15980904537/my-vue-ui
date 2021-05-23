<template>
  <div class="content">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-content",
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
.content {
  flex-grow: 1;
  background-color: #eee;
}
</style>