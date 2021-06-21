<template>
  <div class="cascader" ref="cascader" v-clickOutside="close">
    <div class="trigger" @click="cascaderVisible">
      <slot>{{ result || "&nbsp" }} </slot>
    </div>
    <div class="popover-wrapper" v-if="popoverVisible">
      <my-cascader-item
        :item="source"
        class="popover"
        :height="height"
        :selected="selected"
        @update:selected="onUpdateSelected"
        :loadData="loadData"
      ></my-cascader-item>
    </div>
  </div>
</template>

<script>
import myCascaderItem from "./cascaderItem";
export default {
  name: "my-cascader",
  props: {
    source: {
      type: Array,
    },
    height: {
      type: Number,
    },
    selected: {
      type: Array,
    },
    loadData: {
      type: Function,
    },
  },
  data() {
    return {
      popoverVisible: false,
    };
  },

  components: { myCascaderItem },

  computed: {
    result() {
      return this.selected.map((item) => item.name).join("/");
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {
    onUpdateSelected(newSelect) {
      this.$emit("update:selected", newSelect);
      let lastItem = newSelect[newSelect.length - 1];
      const simplest = (children, id) => {
        return children.filter((item) => item.ID === id)[0];
      };
      const complex = (children, id) => {
        let noChildren = [],
          hasChildren = [];
        children.forEach((item) => {
          if (item.children) {
            hasChildren.push(item);
          } else {
            console.log("没有children");
            noChildren.push(item);
          }
        });
        let found = simplest(noChildren, id);
        console.log(found);
        if (found) {
          console.log("有found");
          return found;
        } else {
          found = simplest(hasChildren, id);
          if (found) {
            return found;
          } else {
            for (let i = 0; i < hasChildren.length; i++) {
              found = complex(hasChildren[i].children, id);
              if (found) {
                return found;
              }
            }
            return undefined;
          }
        }
      };
      const updateSource = (result) => {
        console.log(lastItem);
        let copy = JSON.parse(JSON.stringify(this.source));
        let toUpdate = complex(copy, lastItem.ID);
        toUpdate.children = result;
        this.$emit("update:source", copy);
        // this.$set(toUpdate, "children", result);
      };
      //加载数据
      if (!lastItem.isLeaf) {
        this.loadData && this.loadData(lastItem, updateSource);
      }
    },
    clickDocument(e) {
      if (
        e.target === this.$refs.cascaderVisible ||
        this.$refs.cascader.contains(e.target)
      ) {
        return;
      }
      this.close();
    },
    close() {
      this.popoverVisible = false;
      document.removeEventListener("click", this.clickDocument);
    },
    show() {
      this.popoverVisible = true;
      document.addEventListener("click", this.clickDocument);
    },
    cascaderVisible() {
      this.popoverVisible = !this.popoverVisible;
      // if (this.popoverVisible === true) {
      //   this.close();
      // } else {
      //   this.show();
      // }
    },
  },
};
</script>
<style lang="scss" scoped>
@import "./_var.scss";
$height: 32px;
.cascader {
  position: relative;
  display: inline-block;
  .trigger {
    display: inline-flex;
    align-items: center;
    width: 16em;
    border: 1px solid #ddd;
    height: $height;
    padding: 0 0.8em;
  }
  .popover-wrapper {
    position: absolute;
    @extend .box-shadow;

    top: 100%;
    background: white;
  }
}
</style>
