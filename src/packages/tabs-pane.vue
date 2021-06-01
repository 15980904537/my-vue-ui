<template>
  <div class="tabs-pane" v-if="active">
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
    return {
      active: false,
    };
  },
  created() {
    this.eventBus.$on("update:selected", (name) => {
      if (name === this.name) {
        this.active = true;
      } else {
        this.active = false;
      }
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