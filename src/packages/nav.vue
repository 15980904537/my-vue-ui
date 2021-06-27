<template>
  <div class="my-nav">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "my-nav",
  props: {
    selected: {
      type: Array,
      default: () => [],
    },
    mutiple: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },

  components: {},

  computed: {
    items() {
      return this.$children.filter(
        (item) => item.$options.name === "my-nav-item"
      );
    },
  },

  mounted() {
    this.updateChildren();
    this.listentoChildren();
  },
  updated() {
    this.updateChildren();
  },
  methods: {
    updateChildren() {
      this.items.forEach((vm) => {
        console.log(vm);
        if (this.selected.indexOf(vm.item) >= 0) {
          vm.active = true;
        } else {
          vm.active = false;
        }
      });
    },
    listentoChildren() {
      this.items.forEach((vm) => {
        vm.$on("add:selected", (name) => {
          if (this.mutiple) {
            if (this.selected.indexOf(vm.item) < 0) {
              this.selected.push(name);
              let copy = JSON.parse(JSON.stringify(this.selected));
              this.$emit("update:selected", copy);
            }
          } else {
            this.$emit("update:selected", [name]);
          }
        });
      });
    },
  },
};
</script>
<style lang='scss' scoped>
.my-nav {
  display: flex;
  border: 1px solid red;
}
</style>