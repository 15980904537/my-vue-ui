<template>
  <div id="app">
    <!-- <my-button>默认按钮</my-button>
    <my-button type="success">默认按钮</my-button>
    <my-button type="danger">默认按钮</my-button>
    <my-button type="info">默认按钮</my-button>
    <my-button type="warning">默认按钮</my-button>
    <my-button type="primary">默认按钮</my-button>
    <my-icon icon="add"></my-icon>
    <my-button type="success" icon="add" icon-position="right">添加</my-button>
    <my-button type="info" loading>加载中</my-button>
    <my-button type="info" @click="fn">触发事件</my-button> -->

    <!-- <my-grounp-button>
      <my-button type="success">上一页</my-button>
      <my-button type="success">中间</my-button>
      <my-button type="success">下一页</my-button>
    </my-grounp-button> -->

    <!-- <my-input value="hahha" disabled></my-input>
    <my-input value="000" readonly></my-input>
    <my-input value="adasdsa" error="姓名不能少于两个字"></my-input>
    <my-input value="adasdsa" @input="func" v-model="message"></my-input>
    <p>{{ message }}</p>

    <br /> -->

    <!-- <my-row>
      <my-col
        :span="12"
        :ipad="{ span: 10 }"
        :narrowPc="{ span: 8 }"
        :pc="{ span: 6 }"
        :widthPc="{ span: 4 }"
        >1</my-col
      >
      <my-col
        :span="10"
        :offset="2"
        :ipad="{ span: 12 }"
        :narrowPc="{ span: 14 }"
        :pc="{ span: 16 }"
        :widthPc="{ span: 18 }"
        >2</my-col
      >
    </my-row> -->

    <!-- <my-row :gutter="20">
      <my-col :span="8">1</my-col>
      <my-col :span="6" :offset="2">2</my-col>
      <my-col :span="8">3</my-col>
    </my-row> -->

    <!-- 第一种页面布局 -->
    <!-- <my-layout>
      <my-header>header</my-header>
      <my-content>content</my-content>
      <my-footer>footer</my-footer>
    </my-layout> -->
    <!-- 第二种页面布局 -->
    <!-- <my-layout>
      <my-header>header</my-header>
      <my-layout>
        <my-slide>slide</my-slide>
        <my-content>content</my-content>
      </my-layout>
      <my-footer>footer</my-footer>
    </my-layout> -->
    <!-- 第三种页面布局 -->
    <!-- <my-layout>
      <my-header>header</my-header>
      <my-layout>
        <my-content>content</my-content>
        <my-slide>slide</my-slide>
      </my-layout>
      <my-footer>footer</my-footer>
    </my-layout> -->
    <!-- 第四种页面布局 -->
    <!-- <my-layout>
      <my-slide>slide</my-slide>
      <my-layout>
        <my-header>header</my-header>
        <my-content>content</my-content>
        <my-footer>footer</my-footer>
      </my-layout>
    </my-layout> -->

    <!-- <my-button @click="showToast">点击我</my-button> -->
    <!-- <my-tabs-head
      selected="selectedTab"
      @update:selected="selectedTab = $event"
    ></my-tabs-head> -->

    <!-- <my-tabs :selected.sync="selectedTab" direction="horizontal">
      <my-tabs-head>
        <my-tabs-item name="sport" disabled>
          <my-icon icon="add"></my-icon>
          体育
        </my-tabs-item>
        <my-tabs-item name="image">图片</my-tabs-item>
        <my-tabs-item name="music">音乐</my-tabs-item>
        <template slot="actions">
          <button>+ 创建新项目</button>
        </template>
      </my-tabs-head>
      <my-tabs-body>
        <my-tabs-pane name="sport">体育资讯</my-tabs-pane>
        <my-tabs-pane name="image">图片资讯</my-tabs-pane>
        <my-tabs-pane name="music">音乐资讯</my-tabs-pane>
      </my-tabs-body>
    </my-tabs> -->

    <!-- <my-popover
      content="这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!"
      @click="yyy"
      position="top"
    >
      <my-button>点我呀</my-button>
    </my-popover>
    <my-popover
      content="zuoqwuewqwerty这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是"
      position="bottom"
    >
      <my-button>点我呀</my-button>
    </my-popover>
    <my-popover
      content="zuoqwuewqwerty这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是"
      position="left"
    >
      <my-button>点我呀</my-button>
    </my-popover>
    <my-popover
      content="zuoqwuewqwerty这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是"
      position="right"
    >
      <my-button>点我呀</my-button>
    </my-popover>

    <my-popover
      content="zuoqwuewqwerty这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是"
      position="right"
      trigger="hover"
    >
      <my-button>点我呀</my-button>
    </my-popover>
    <my-popover
      content="这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!这是一段文字!"
      @click="yyy"
      position="top"
      trigger="hover"
    >
      <my-button>点我呀</my-button>
    </my-popover>
    <my-popover
      content="zuoqwuewqwerty这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是"
      position="bottom"
      trigger="hover"
    >
      <my-button>点我呀</my-button>
    </my-popover>
    <my-popover
      content="zuoqwuewqwerty这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是这是一段文字!这是一段文字!这是一段文字!这是"
      position="left"
      trigger="hover"
    >
      <my-button>点我呀</my-button>
    </my-popover> -->
    <!-- <my-collaspe :selected.sync="selectTab">
      <my-collaspe-item title="标题一" name="1">内容一</my-collaspe-item>
      <my-collaspe-item title="标题二" name="2">内容二</my-collaspe-item>
      <my-collaspe-item title="标题三" name="3">内容三</my-collaspe-item>
    </my-collaspe> -->
    <!-- {{ selectTab }} -->

    <!-- <my-cascader
      :source.sync="source"
      :height="200"
      :selected.sync="selected"
      :loadData="loadData"
    >
    </my-cascader> -->

    <!-- <my-slider :selected.sync="selected" autoPlay>
      <my-slider-item name="1">
        <div class="box">1</div>
      </my-slider-item>
      <my-slider-item name="2">
        <div class="box">2</div>
      </my-slider-item>
      <my-slider-item name="3">
        <div class="box">3</div>
      </my-slider-item>
    </my-slider> -->

    <!-- <my-nav :selected.sync="selectedName">
      <my-nav-item item="1">option1</my-nav-item>
      <my-sub-nav item="option2">
        <template slot="title">option2</template>
        <my-nav-item item="2">option2-1</my-nav-item>
        <my-nav-item item="3">option2-2</my-nav-item>
        <my-sub-nav item="option3">
          <template slot="title">option2-3</template>
          <my-nav-item item="4">option2-3-1</my-nav-item>
          <my-nav-item item="5">option2-3-2</my-nav-item>
          <my-sub-nav item="option4">
            <template slot="title">option3-3</template>
            <my-nav-item item="6">option3-3-1</my-nav-item>
            <my-nav-item item="7">option3-3-2</my-nav-item>
            <my-nav-item item="8">option2-3-3</my-nav-item>
          </my-sub-nav>
          <my-nav-item item="9">option2-3-3</my-nav-item>
        </my-sub-nav>
      </my-sub-nav>
      <my-nav-item item="10">option3</my-nav-item>
      <my-nav-item item="11">option4</my-nav-item>
    </my-nav> -->

    <!-- <my-pager
      :current.sync="number"
      :totalPage="15"
      :hideOnSinglePage="false"
    ></my-pager> -->
    <my-table
      :selectItems.sync="selectItems"
      :dataSource="dataSource"
      :columns="columns"
      striped
      border
    ></my-table>
    {{ selectItems }}
  </div>
</template>

<script>
import db from "./packages/db";
// function ajax(default_id = 0) {
//   return db.filter((item) => {
//     return item.TopID === default_id;
//   });
// }

//异步的ajax
function ajax(default_id = 0) {
  return new Promise((success, fail) => {
    let result;
    setTimeout(() => {
      result = db.filter((item) => {
        return item.TopID === default_id;
      });
      result.forEach((node) => {
        if (db.filter((item) => item.TopID === node.ID).length > 0) {
          node.isLeaf = false;
        } else {
          node.isLeaf = true;
        }
      });
      success(result);
    }, 1000);
  });
}

export default {
  name: "App",
  data() {
    return {
      message: "hahha",
      selectedTab: "sport",
      selectTab: ["1"],
      source: [],
      selected: "1",
      selectedName: ["1"],
      number: 7,
      selectItems: [],
      dataSource: [
        { id: 1, name: "张三", score: 99 },
        { id: 2, name: "张四", score: 98 },
        { id: 3, name: "张五", score: 97 },
        { id: 4, name: "张三", score: 99 },
        { id: 5, name: "张四", score: 98 },
        { id: 6, name: "张五", score: 97 },
        { id: 7, name: "张三", score: 99 },
        { id: 8, name: "张四", score: 98 },
        { id: 9, name: "张五", score: 97 },
        { id: 10, name: "张三", score: 99 },
        { id: 11, name: "张四", score: 98 },
        { id: 12, name: "张五", score: 97 },
      ],
      columns: [
        { text: "姓名", field: "name" },
        { text: "成绩", field: "score" },
      ],
    };
  },
  created() {
    // let n = 1;
    // const run = () => {
    //   if (n > 3) {
    //     n = 1;
    //   }
    //   this.selected = n.toString();
    //   console.log(n);
    //   n++;
    //   setTimeout(() => {
    //     run();
    //   }, 3000);
    // };
    // run();
  },
  methods: {
    yyy() {
      console.log("用户自己定义的");
    },
    fn() {
      console.log("12");
    },
    func(e) {
      console.log(e);
    },
    showToast() {
      this.$toast("这是用户关闭的!<h2>关闭</h2>", {
        position: "bottom",
        enableHtml: false,
        closeButton: {
          text: "关闭",
          callback: () => {
            console.log("这是用户关闭的");
          },
        },
      });
    },
    loadData(lastItem, callback) {
      let { ID } = lastItem;
      ajax(ID).then((result) => {
        console.log(result);
        callback(result);
      });
    },
    // xxx() {
    //   ajax(this.selected[0].ID).then((result) => {
    //     let lastLevelSelected = this.source.filter(
    //       (item) => item.ID === this.selected[0].ID
    //     )[0];
    //     this.$set(lastLevelSelected, "children", result);
    //     // lastLevelSelected.children = result;
    //     // console.log(lastLevelSelected);
    //     // console.log(result);
    //   });
    // },
  },
};
</script>

<style lang="scss" scope>
.box {
  width: 100%;
  height: 250px;
  text-align: center;
  line-height: 250px;
  background: #eee;
}
</style>
