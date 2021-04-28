<template>
  <svg class="my-icon" aria-hidden="true">
    <use :xlink:href="`#icon-${icon}`"></use>
  </svg>
</template>

<script>
import "../style/iconfont";
export default {
  name: "my-icon",
  props: {
    icon: {
      required: true,
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
<style lang="scss">
.my-icon {
  width: 25px;
  height: 25px;
  vertical-align: middle;
}
</style>
