<template>
  <div>
    <div class="trigger">
      <slot></slot>
    </div>
    <div v-for="(item, index) in source" :key="index">
      <my-cascader-item :item="item"></my-cascader-item>
    </div>
  </div>
</template>

<script>
import myCascaderItem from "./cascaderItem";
export default {
  name: "my-cascader",
  props: {
    source: {
      type: Array,
    },
  },
  data() {
    return {};
  },

  components: { myCascaderItem },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang="" scoped></style>
