<template>
  <div>
    <el-table
      :data="tableData"
      style="width: 100%"
      :border="border"
      :stripe="stripe"
    >
      <el-table-column v-if="index" type="index" width="45"> </el-table-column>
      <el-table-column
        v-if="checkbox"
        type="selection"
        width="45"
      ></el-table-column>
      <template v-for="item in columns">
        <el-table-column
          v-if="item.type === 'function'"
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template slot-scope="scope">
            <div v-html="item.callback && item.callback(scope.row)"></div>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="item.prop"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
        </el-table-column>
      </template>
    </el-table>
  </div>
</template>
<script>
export default {
  name: "Table",
  props: {
    columns: {
      type: Array,
      default: () => [],
    },
    checkbox: Boolean, // 多选
    index: Boolean, // 索引号
    border: Boolean, // 带边框
    stripe: Boolean, // 带斑马纹的表格
  },
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
