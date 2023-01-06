<template>
  <div :id="uid" :style="{ width: chartWidth, height: chartHeight }"></div>
</template>
<script>
/** 1.准备dom:组件自动生成 2.准备实例:组件自动生成 3.组织options:用户传参 */
import * as echarts from "echarts";
const getUid = () => {
  return new Date().getTime();
};
export default {
  data() {
    return {
      uid: null,
      myChart: null,
    };
  },
  props: {
    chartWidth: {
      type: String,
      default: "",
    },
    chartHeight: {
      type: String,
      default: "",
    },
    options: {
      type: Object,
      default: null,
    },
  },
  created() {
    this.uid = getUid();
  },
  computed: {},
  methods: {},
  mounted() {
    // 准备实例
    this.myChart = echarts.init(document.getElementById(this.uid));
    // 组织配置项
    this.myChart.setOption(this.options);
  },
};
</script>
<style lang="scss" scoped></style>

