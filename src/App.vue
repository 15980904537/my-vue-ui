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

    <my-popover
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
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "hahha",
      selectedTab: "sport",
    };
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
  },
};
</script>

<style lang="scss"></style>
