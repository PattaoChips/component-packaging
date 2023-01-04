<template>
  <div>
    <my-table :columns="columns" checkbox border></my-table>
  </div>
</template>
<script>
import Mytable from "@/components/table";
export default {
  name: "Mytable",
  components: { "my-table": Mytable },
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
            return data.date;
          },
        },
        { label: "姓名", prop: "name" },
        { label: "地址", prop: "address" },
      ],
    };
  },
  created() {},
  computed: {},
  methods: {},
};
</script>
<style lang="scss" scoped></style>
