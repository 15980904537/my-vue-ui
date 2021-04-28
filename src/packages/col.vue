<template>
  <div
    class="col"
    :class="[`col-${span}`, offset && `offset-${offset}`]"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div style="border: 1px solid green; height: 100px">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-col",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.col {
  /* height: 100px; */
  width: 50%;
  /* border: 1px solid red; */
  /* background: grey; */

  $class: col-;
  $class-offset: offset-;
  @for $n from 1 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  @for $n from 1 through 24 {
    &.#{$class-offset}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }

  /* &:not(:first-child) {
    margin-left: -1px;
  } */
}
</style>