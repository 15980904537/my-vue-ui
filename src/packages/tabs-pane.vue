<template>
  <div class="tabs-pane">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: "my-tabs-pane",
  inject: ["eventBus"],
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
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