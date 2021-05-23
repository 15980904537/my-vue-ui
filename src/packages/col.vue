<template>
  <div
    class="col"
    :class="colClass"
    :style="{ paddingLeft: gutter / 2 + 'px', paddingRight: gutter / 2 + 'px' }"
  >
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
let validator = (value) => {
  console.log(value);
  let keys = Object.keys(value);
  let valid = true;
  keys.forEach((item) => {
    if (!["span", "offset"].includes(item)) {
      valid = false;
    }
  });
  return valid;
};
export default {
  name: "my-col",
  props: {
    span: {
      type: [String, Number],
    },
    offset: {
      type: [String, Number],
    },
    phone: {
      type: Object,
      validator,
    },
    ipad: {
      type: Object,
      validator,
    },
    narrowPc: {
      type: Object,
      validator,
    },
    pc: {
      type: Object,
      validator,
    },
    widthPc: {
      type: Object,
      validator,
    },
  },
  data() {
    return {
      gutter: 0,
    };
  },

  components: {},

  computed: {
    colClass() {
      let phoneClass = [],
        ipadClass = [],
        narrowPcClass = [],
        pcClass = [],
        widthPcClass = [];
      if (this.phone) {
        phoneClass = [`col-phone-${this.phone.span}`];
      }
      if (this.ipad) {
        ipadClass = [`col-ipad-${this.ipad.span}`];
      }
      if (this.narrowPc) {
        narrowPcClass = [`col-narrowPc-${this.narrowPc.span}`];
      }
      if (this.pc) {
        pcClass = [`col-pc-${this.pc.span}`];
      }
      if (this.widthPc) {
        widthPcClass = [`col-widthPc-${this.widthPc.span}`];
      }
      return [
        this.span && `col-${this.span}`,
        this.offset && `offset-${this.offset}`,
        ...phoneClass,
        ...ipadClass,
        ...narrowPcClass,
        ...pcClass,
        ...widthPcClass,
      ];
    },
  },

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang='scss' scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.col {
  /* border: 1px solid green; */
  height: 100px;
  /* height: 100px; */
  width: 50%;
  /* border: 1px solid red; */
  /* background: grey; */

  $class: col-;
  $class-offset: offset-;
  @for $n from 0 through 24 {
    &.#{$class}#{$n} {
      width: ($n/24) * 100%;
    }
  }

  @for $n from 0 through 24 {
    &.#{$class-offset}#{$n} {
      margin-left: ($n/24) * 100%;
    }
  }
  //响应式布局
  @media (max-width: 576px) {
    $class: col-phone-;
    $class-offset: offset-phone-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    @for $n from 0 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }

  @media (min-width: 577px) and (max-width: 768px) {
    $class: col-ipad-;
    $class-offset: offset-ipad-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    @for $n from 0 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 769px) and (max-width: 992px) {
    $class: col-narrowPc-;
    $class-offset: offset-narrowPc-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    @for $n from 0 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 993px) and (max-width: 1200px) {
    $class: col-pc-;
    $class-offset: offset-pc-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    @for $n from 0 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  @media (min-width: 1201px) {
    $class: col-widthPc-;
    $class-offset: offset-widthPc-;
    @for $n from 0 through 24 {
      &.#{$class}#{$n} {
        width: ($n/24) * 100%;
      }
    }

    @for $n from 0 through 24 {
      &.#{$class-offset}#{$n} {
        margin-left: ($n/24) * 100%;
      }
    }
  }
  /* &:not(:first-child) {
    margin-left: -1px;
  } */
}
</style>