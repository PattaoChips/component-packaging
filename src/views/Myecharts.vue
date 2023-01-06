<template>
  <div>
    <my-echarts
      :chartWidth="'600px'"
      :chartHeight="'400px'"
      :options="options"
    ></my-echarts>
  </div>
</template>
<script>
import options from "../options";
export default {
  name: "Myecharts",
  components: {
    "my-echarts": () => import("@/components/echarts"),
  },
  data() {
    return {
      options: options,
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
