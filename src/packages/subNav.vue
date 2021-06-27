<template>
  <div class="my-sub-nav" v-clickOutside="close">
    <span class="my-sub-nav-title" @click="onClick">
      <slot name="title"></slot>
      <span class="my-sub-nav-icon" :class="{ open }">
        <my-icon icon="right"></my-icon>
      </span>
    </span>
    <div class="my-sub-nav-popover" v-show="open">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "my-sub-nav",
  inject: ["root"],
  props: {
    item: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      open: false,
    };
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {
    // console.log(this.$children);
  },

  methods: {
    onClick() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    },
    updateNamePath() {
      this.root.namepath.unshift(this.item);
      if (this.$parent.updateNamePath) {
        this.$parent.updateNamePath();
      } else {
      }
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
@import "./_var.scss";
.my-sub-nav {
  position: relative;
  .my-sub-nav-title {
    padding: 10px 10px;
    display: inline-flex;
    vertical-align: top;
    align-items: center;
  }
  &-icon {
    display: none;
  }
  .my-sub-nav-popover {
    position: absolute;
    top: 100%;
    left: 0;
    margin: 10px;

    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
    /* border: 1px solid red; */
  }
}
.my-sub-nav .my-sub-nav {
  position: relative;
  .my-sub-nav-title {
    display: flex;
    align-items: center;
    /* justify-content: space-between; */
    .my-sub-nav-icon {
      transition: transform 0.5s;
      display: inline-flex;
      margin-left: 1em;
      /* margin-left: auto; */
      svg {
        fill: $light-color;
        width: 16px;
        height: 16px;
      }

      &.open {
        transform: rotate(180deg);
      }
    }
  }

  .my-sub-nav-popover {
    position: absolute;
    top: 0;
    left: 100%;
    margin: 0 10px;
    white-space: nowrap;
    box-shadow: 0 0 3px fade_out(black, 0.8);
    border-radius: $border-radius;
    font-size: $font-size;
    color: $light-color;
    min-width: 8em;
    /* border: 1px solid red; */
  }
}
</style>