<template>
  <div>
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "my-tabs-pane",
  props: {
    name: {
      type: String,
      required: true,
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
<style lang='' scoped>
</style>