<template>
  <div>
    {{ item.name }}
    <div v-for="(item1, index1) in item.children" :key="index1">
      <my-cascader-item :item="item1" v-if="item.children"></my-cascader-item>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-cascader-item",
  props: {
    item: {
      type: Object,
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
<style lang="" scoped></style>
