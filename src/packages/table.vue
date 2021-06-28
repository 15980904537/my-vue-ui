<template>
  <div class="my-table-wrapper">
    <table class="my-table" :class="{ striped, border, compact }">
      <thead>
        <tr>
          <th><input type="checkbox" /></th>
          <th v-if="numberVisible">#</th>
          <th v-for="(column, index) in columns" :key="index">
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="data in dataSource" :key="data.id">
          <td><input type="checkbox" @change="changeItem" /></td>
          <td v-if="numberVisible">{{ data.id }}</td>
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
    numberVisible: {
      type: Boolean,
      default: false,
    },
    striped: {
      type: Boolean,
      default: false,
    },
    border: {
      type: Boolean,
      default: false,
    },
    compact: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    changeItem() {},
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
@import "./_var.scss";
$grey: darken($grey, 10%);
.my-table {
  width: 100%;
  border-collapse: collapse;
  border-spacing: 0;
  border-bottom: 1px solid $grey;
  tr > th,
  tr > td {
    border-bottom: 1px solid $grey;
    padding: 8px;
  }
  tr > th {
    text-align: left;
  }
  &.striped {
    tbody > tr {
      &:nth-child(even) {
        background: lighten($grey, 10%);
      }
      &:nth-child(odd) {
        background: white;
      }
    }
  }
  &.border {
    border: 1px solid $grey;
    tr > th,
    tr > td {
      border: 1px solid $grey;
    }
  }
  &.compact {
    /* border: 1px solid $grey; */
    tr > th,
    tr > td {
      padding: 4px;
    }
  }
}
</style>