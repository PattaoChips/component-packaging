<template>
  <div>
    <my-table :columns="columns" checkbox border url="/api/fruit">
      <template v-slot:operation="slot">
        <my-button type="primary" @click="edit(slot.data)">编辑</my-button>
        <my-button type="danger">删除</my-button>
      </template>
    </my-table>
  </div>
</template>
<script>
import Mytable from "@/components/table";
import Mybutton from "@/components/button";
export default {
  name: "Mytable",
  components: { "my-table": Mytable, "my-button": Mybutton },
  data() {
    return {
      columns: [
        {
          type: "function",
          label: "日期",
          prop: "date",
          width: "120",
          callback: (data) => {
            console.log(data);
            return data.sex;
          },
        },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
        {
          type: "slot",
          label: "操作",
          prop: "operation",
          slotName: "operation",
        },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {
    edit(data) {
      // 获取当前行所在的一条数据
      console.log(data);
    },
  },
};
</script>
<style lang="scss" scoped></style>
