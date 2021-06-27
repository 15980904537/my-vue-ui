<template>
  <div class="my-pager">
    <span
      class="my-pager-nav pre"
      @click="onClickPage(current - 1)"
      :class="{ disabled: current === 1 }"
    >
      <my-icon icon="left"></my-icon>
    </span>
    <span v-for="(page, index) in displayArray" :key="index" class="x">
      <template v-if="page === current">
        <span class="my-pager-label current">{{ page }}</span>
      </template>
      <template v-else-if="page === '...'">
        <my-icon class="my-pager-separator" icon="Dotsellipsismenu"></my-icon>
      </template>
      <template v-else>
        <span class="my-pager-label other" @click="onClickPage(page)">{{
          page
        }}</span>
      </template>
    </span>

    <span
      class="my-pager-nav next"
      :class="{ disabled: current === totalPage }"
      @click="onClickPage(current + 1)"
    >
      <my-icon icon="right"></my-icon>
    </span>
  </div>
</template>

<script>
export default {
  name: "my-pager",
  props: {
    current: {
      type: Number,
      required: true,
    },
    totalPage: {
      type: Number,
      required: true,
    },
    hideOnSinglePage: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    displayArray() {
      let page = [
        1,
        this.current - 2,
        this.current - 1,
        this.current,
        this.current + 1,
        this.current + 2,
        this.totalPage,
      ].filter((n) => n >= 1 && n <= this.totalPage);
      page = [...new Set(page)]
        .sort((a, b) => a - b)
        .reduce((pre, cur, index, array) => {
          console.log(pre);
          pre.push(cur);
          if (
            array[index + 1] !== undefined &&
            array[index + 1] - array[index] > 1
          ) {
            pre.push("...");
          }
          return pre;
        }, []);
      return page;
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {
    onClickPage(page) {
      if (page >= 1 && page <= this.totalPage) {
        this.$emit("update:current", page);
      }
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
@import "./_var.scss";
$width: 16px;
$height: 16px;
$font-size: 12px;
.my-pager {
  display: flex;
  align-items: center;
  user-select: none;
  .x {
    margin: 0 5px;
    cursor: pointer;
    .my-pager-label {
      padding: 5px 10px;
      text-align: center;
      border: 1px solid #e1e1e1;
      border-radius: $border-radius;
      font-size: 12px;
      &.current {
        border-color: $blue;
        cursor: default;
      }

      &:hover {
        background: $grey;
      }
    }
    .my-pager-separator {
      width: 12px;
      height: 12px;
    }
  }
  .my-pager-nav {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    background: $grey;
    height: $height;
    width: $width;
    border-radius: $border-radius;
    padding: 5px;
    font-size: $font-size;
    /* vertical-align: middle; */
    cursor: pointer;
    &.disabled {
      cursor: default;
      svg {
        fill: darken($grey, 30%);
      }
    }
  }
}
</style>