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
          v-if="item.type === 'slot'"
          :key="item.id"
          :prop="item.prop"
          :label="item.label"
          :width="item.width"
        >
          <template slot-scope="scope">
            <slot :name="item.slotName" :data="scope.row"></slot>
          </template>
        </el-table-column>
        <el-table-column
          v-else
          :key="item.id"
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
    url: {
      type: String,
      default: "",
      require: true,
    },
    method: {
      type: String,
      default: "post",
      require: true,
    },
  },
  data() {
    return {
      tableData: [],
    };
  },
  created() {},
  beforeMount() {
    this.getTaleList();
  },
  computed: {},
  methods: {
    getTaleList() {
      const url = this.url;
      if (!url) {
        console.log("请求地址不存在");
        return false;
      }
      this.$axios({
        url: this.url,
        methods: this.method,
      }).then((res) => {
        this.tableData = res.data.data;
        console.log(res);
      });
    },
  },
};
</script>
<style lang="scss" scoped></style>
