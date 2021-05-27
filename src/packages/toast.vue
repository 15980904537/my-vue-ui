<template>
  <div class="toast">
    <slot></slot>
    <span class="bd"></span>
    <span class="close" @click="closeButtonEvent" v-if="closeButton">{{
      closeButton.text
    }}</span>
  </div>
</template>

<script>
export default {
  name: "",
  props: {
    autoplay: {
      type: Boolean,
      default: true,
    },
    autoTime: {
      type: Number,
      default: 3,
    },
    closeButton: {
      type: Object,
      default() {
        return {
          text: "关闭",
          callback: undefined,
        };
      },
    },
  },
  data() {
    return {};
  },
  created() {
    if (this.autoplay) {
      setTimeout(() => {
        this.close();
      }, this.autoTime * 1000);
    }
  },
  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {
    close() {
      this.$el.remove();
      this.$destroy();
    },
    closeButtonEvent() {
      this.close();
      if (this.closeButton && typeof this.closeButton.callback === "function") {
        this.closeButton.callback(this);
      }
    },
  },

  watch: {},
};
</script>
<style lang='scss' scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.toast {
  position: fixed;
  width: 200px;
  min-height: 40px;
  display: flex;
  font-size: 14px;
  text-align: center;
  padding: 0 16px;
  border-radius: 4px;
  box-shadow: 0 0 3px 0 rgba(0, 0, 0, 0.5);
  background: rgba(0, 0, 0, 0.75);
  color: #fff;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  .bd {
    border-left: 1px solid #fff;
    height: 100%;
    margin-left: 16px;
  }
  .close {
    /* border: 1px solid red; */
    padding-left: 16px;
    cursor: pointer;
  }
}
</style>