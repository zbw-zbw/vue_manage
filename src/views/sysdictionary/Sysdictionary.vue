<template>
  <div>
    <el-table :data="tableData" border style="width: 100%" class="table">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="sn" label="编码"></el-table-column>
      <el-table-column prop="title" label="标题"></el-table-column>
      <el-table-column prop="intro" label="简介"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope)">编辑</el-button>
          <el-button type="success" size="mini" @click="add()">添加明细</el-button>
        </template>
      </el-table-column>
    </el-table>
    <my-dialog :title="dialog_title" :form="form" :visible="dialogFormVisible" @close="handleClose"></my-dialog>
    <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[5, 10, 20, 100]"
        :page-size="pageSize"
        layout="total, sizes, prev, pager, next"
        :total="total"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
import MyDialog from "./children/Dialog";
import {
  getSysdictionary
} from "@/request/httpApi";

export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "70px",
      dialog_title: "",
      currentPage: 1,
      pageSize: 10,
      total: 0
    };
  },
  components: {
    MyDialog
  },
  methods: {
    handleClose(reload) {
      this.dialogFormVisible = false;
      if (reload == "reload") {
        this.fetchData();
      }
    },
    fetchData() {
      getSysdictionary({
        currentPage: this.currentPage,
        pageSize: this.pageSize
      }).then(res => {
        if (res.success) {
          this.tableData = res.data.list;
          this.total = res.data.total;
        } else {
          console.log("失败");
        }
      });
    },
    handleSizeChange(size) {
      this.pageSize = size;
      this.fetchData();
    },
    handleCurrentChange(page) {
      this.currentPage = page;
      this.fetchData();
    },
    toolFn(res, msg) {
      if (res.success) {
        this.$message({
          message: msg + "数据字典成功" || res.msg,
          type: "success"
        });
      } else {
        this.$message({
          message: res.msg || msg + "数据字典失败",
          type: "error"
        });
      }
    },
    handleEdit(scope) {
      this.dialogFormVisible = true;
      this.dialog_title = "数据字典编辑";
      this.form = JSON.parse(JSON.stringify(scope.row));
    },
    add() {
      this.dialogFormVisible = true;
      this.form = {};
      this.dialog_title = "数据字典添加";
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="less" scoped>
</style>