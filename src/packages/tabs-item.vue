<template>
  <div class="tabe-item" @click="xxx">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-tabs-item",
  props: {
    name: {
      type: String,
      required: true,
    },
    disabled: {
      type: Boolean,
      default: true,
    },
  },
  inject: ["eventBus"],
  created() {
    this.eventBus.$on("update:selected", (name) => {
      console.log(name);
    });
  },
  data() {
    return {};
  },
  methods: {
    xxx() {
      this.eventBus.$emit("update:selected", this.name);
    },
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  watch: {},
};
</script>
<style lang='' scoped>
</style>