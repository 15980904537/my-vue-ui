<template>
  <div class="wrapper" :class="{ error: error }">
    <input
      type="text"
      class="my-input"
      :value="value"
      :disabled="disabled"
      :readonly="readonly"
      @change="$emit('change', $event.target.value)"
      @input="$emit('input', $event.target.value)"
      @focus="$emit('focus', $event.target.value)"
      @blur="$emit('blur', $event.target.value)"
    />
    <template v-if="error">
      <my-icon icon="add" class="icon-error"></my-icon>
      <span class="error-message">{{ error }}</span>
    </template>
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    value: {
      type: String,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    readonly: {
      type: Boolean,
      default: false,
    },
    error: {
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
<style lang="scss" scoped>
@import "../style/common.scss";
$height: 32px;
$font-size: 16px;
$color: #606266;
$border-color: #dcdfe6;
$background: #ecf5ff;
$active-color: #3a8ee6;
$border-color-hover: #999;
$border-color-focus: #666;
$box-shadow-color: rgba(0, 0, 0, 0.5);
$error-color: red;
.wrapper {
  display: inline-flex;
  margin-top: 20px;
  margin-right: 20px;
  align-items: center;
  .my-input {
    height: $height;
    border-radius: 4px;
    border: 1px solid $border-color;
    text-indent: 1em;
    font-size: 14px;
    color: $color;

    &:hover {
      border-color: $border-color-hover;
    }
    &:focus {
      box-shadow: inset 0 1px 3px $box-shadow-color;
      outline: none;
    }
    &[disabled] {
      border-color: #aaa;
      color: #aaa;
      cursor: not-allowed;
    }
    &[readonly] {
      border-color: #aaa;
      color: #aaa;
    }
  }
  .icon-error {
    width: 20px;
    height: 20px;
    vertical-align: middle;
    fill: $error-color;
  }
  .error-message {
    font-size: 14px;
    color: $error-color;
  }
  &.error {
    .my-input {
      border-color: $error-color;
    }
  }
}
</style>
