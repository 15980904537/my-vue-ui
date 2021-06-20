 <template>
  <div>
    <gButton>默认按钮</gButton>
    <gButton type="success">默认按钮</gButton>
    <gButton type="danger">默认按钮</gButton>
    <gButton type="info">默认按钮</gButton>
    <gButton type="warning">默认按钮</gButton>
    <gButton type="primary">默认按钮</gButton>
    <pre>
         <code>
             {{content}}
         </code>
     </pre>
  </div>
</template>

 <script>
import button from "../../../src/packages/Button";
export default {
  name: "",
  props: [""],
  data() {
    return {
      content: `
    <gButton>默认按钮</gButton>
    <gButton type="success">默认按钮</gButton>
    <gButton type="danger">默认按钮</gButton>
    <gButton type="info">默认按钮</gButton>
    <gButton type="warning">默认按钮</gButton>
    <gButton type="primary">默认按钮</gButton>`,
    };
  },

  components: {
    gButton: button,
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  methods: {},

  watch: {},
};
</script>
<style lang="" scoped></style>
