<template>
  <div class="my-table-wrapper">
    <table class="my-table">
      <thead>
        <tr>
          <th>#</th>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataSource" :key="data.id">
          <td>{{ data.id }}</td>
          <td v-for="(column, index) in columns" :key="index">
            {{ data[column.field] }}
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "my-table",
  props: {
    columns: {
      type: Array,
      required: true,
      default: () => [],
    },
    dataSource: {
      type: Array,
      required: true,
      default: () => [],
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