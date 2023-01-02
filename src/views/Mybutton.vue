<template>
  <div class="flex" style="justify-content: space-around">
    <my-button :loading="flag" :before-change="asyncFunction"
      >默认按钮
    </my-button>
    <my-button type="primary" round border>主要按钮 </my-button>
    <my-button type="success" border>成功按钮 </my-button>
    <my-button type="warning" round>警告按钮 </my-button>
    <my-button type="danger">危险按钮 </my-button>
  </div>
</template>
<script>
import Mybutton from "@/components/button";
export default {
  name: "Mybutton",
  components: {
    "my-button": Mybutton,
  },
  data() {
    return {
      flag: false,
    };
  },
  created() {},
  computed: {},
  methods: {
    asyncFunction() {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve();
          reject();
        }, 3000);
      });
    },
  },
};
</script>
<style lang="scss" scoped>
a {
  justify-content: center;
}
</style>
