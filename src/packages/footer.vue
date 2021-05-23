<template>
  <div class="footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-footer",
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
.footer {
  height: 100px;
  background-color: #555;
}
</style>