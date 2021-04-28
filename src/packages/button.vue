<template>
  <button class="my-button" :class="btnclass" @click="$emit('click', $event)">
    <my-icon :icon="icon" class="icon" v-if="icon && !loading"></my-icon>
    <my-icon icon="loading" v-if="loading"></my-icon>
    <span v-if="this.$slots.default">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: "my-button",
  props: {
    type: {
      default: "",
      type: String,
      validator(type) {
        if (
          type &&
          !["success", "info", "warning", "danger", "primary"].includes(type)
        ) {
          console.error(
            "type is must be" +
              ["success", "info", "warning", "danger", "primary"].join("、")
          );
        }
        return true;
      },
    },
    icon: {
      type: String,
    },
    iconPosition: {
      type: String,
      default: "left",
      validator(type) {
        if (type && !["left", "right"].includes(type)) {
          console.error("type is must be" + ["left", "right"].join("、"));
        }
        return true;
      },
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  created() {},
  components: {},

  computed: {
    btnclass() {
      let classes = [];
      if (this.type) {
        classes.push(`my-button-${this.type}`);
      }
      if (this.iconPosition) {
        classes.push(`my-button-${this.iconPosition}`);
      }
      return classes;
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang="scss" scoped>
@import "../style/common.scss";
$height: 42px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
.my-button {
  border-radius: $border-radius;
  background: #fff;
  border: 1px solid $border-color;
  color: $color;
  padding: 12px 20px;
  cursor: pointer;
  font-size: $font-size;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin: 0 10px;
  &:hover {
    border-color: $border-color;
    background: $background;
  }
  /* &:focus,
  &:active {
    color: $active-color;
    border: 1px solid $active-color;
    background: $background;
    outline: none;
  } */

  @each $type,
    $color
      in(
        primary: $primary,
        success: $success,
        info: $info,
        warning: $warning,
        danger: $danger
      )
  {
    &-#{$type} {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  @each $type,
    $color
      in(
        primary: $primary-hover,
        success: $success-hover,
        info: $info-hover,
        warning: $warning-hover,
        danger: $danger-hover
      )
  {
    &-#{$type}:hover {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  @each $type,
    $color
      in(
        primary: $primary-active,
        success: $success-active,
        info: $info-active,
        warning: $warning-active,
        danger: $danger-active
      )
  {
    &-#{$type}:active {
      background: #{$color};
      border: 1px solid #{$color};
      color: #fff;
      fill: #fff;
    }
  }

  .icon {
    width: 16px;
    height: 16px;
    vertical-align: middle;
    margin: 0 4px;
  }
  &-left {
    svg {
      order: 1;
    }
    span {
      order: 2;
    }
  }
  &-right {
    svg {
      order: 2;
    }
    span {
      order: 1;
    }
  }
}
</style>
