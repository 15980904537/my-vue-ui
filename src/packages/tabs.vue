<template>
  <div>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabs",
  props: {
    selected: {
      type: String,
      requried: true,
    },
    direction: {
      type: String,
      default: "horizontal",
      validator(val) {
        return ["horizontal", "vertical"].includes(val);
      },
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