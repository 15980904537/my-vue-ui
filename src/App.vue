<template>
  <div id="app">
    <my-button>默认按钮</my-button>
    <my-button type="success">默认按钮</my-button>
    <my-button type="danger">默认按钮</my-button>
    <my-button type="info">默认按钮</my-button>
    <my-button type="warning">默认按钮</my-button>
    <my-button type="primary">默认按钮</my-button>
    <my-icon icon="add"></my-icon>
    <my-button type="success" icon="add" icon-position="right">添加</my-button>
    <my-button type="info" loading>加载中</my-button>
    <my-button type="info" @click="fn">触发事件</my-button>

    <my-grounp-button>
      <my-button type="success">上一页</my-button>
      <my-button type="success">中间</my-button>
      <my-button type="success">下一页</my-button>
    </my-grounp-button>

    <my-input value="hahha" disabled></my-input>
    <my-input value="000" readonly></my-input>
    <my-input value="adasdsa" error="姓名不能少于两个字"></my-input>
    <my-input value="adasdsa" @input="func" v-model="message"></my-input>
    <p>{{ message }}</p>

    <br />

    <my-row>
      <my-col :span="2">1</my-col>
      <my-col :span="12" :offset="10">2</my-col>
    </my-row>

    <my-row :gutter="20">
      <my-col :span="8">1</my-col>
      <my-col :span="6" :offset="2">2</my-col>
      <my-col :span="8">3</my-col>
    </my-row>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      message: "hahha",
    };
  },
  methods: {
    fn() {
      console.log("12");
    },
    func(e) {
      console.log(e);
    },
  },
};
</script>

<style lang="scss"></style>
