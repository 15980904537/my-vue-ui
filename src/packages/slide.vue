<template>
  <transition name="fade">
    <div class="slide" v-if="showSlide">
      <slot></slot>
      <button @click="showSlide = false">close</button>
    </div>
  </transition>
</template>

<script>
export default {
  name: "my-slide",
  props: [""],
  data() {
    return {
      showSlide: true,
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
.slide {
  width: 200px;
  background-color: #ccc;
  position: relative;
  button {
    position: absolute;
    top: 0;
    right: 0;
  }
  .fade-enter-active,
  .fade-leave-active {
    transition: all 0.5s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    margin-left: -200px;
    /* transform: translateX(-200px); */
  }
}
</style>