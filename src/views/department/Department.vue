<template>
  <div>
    <el-button type="success" @click="add()">添加</el-button>
    <el-table :data="tableData" border style="width: 100%" class="table">
      <el-table-column prop="id" label="部门ID"></el-table-column>
      <el-table-column prop="name" label="部门名称"></el-table-column>
      <el-table-column prop="sn" label="部门编号"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="handleEdit(scope)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope)">删除</el-button>
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
import MyDialog from "./children/Dialog.vue";
import { getDepartments, deleteDepartments } from "@/request/httpApi";

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
      getDepartments({
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
          message: msg + "部门成功" || res.msg,
          type: "success"
        });
      } else {
        this.$message({
          message: res.msg || msg + "部门失败",
          type: "error"
        });
      }
    },
    handleEdit(scope) {
      this.dialogFormVisible = true;
      this.dialog_title = "部门编辑";
      this.form = JSON.parse(JSON.stringify(scope.row));
    },
    handleDelete(scope) {
      this.$confirm("此操作将永久删除该部门, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
        center: true
      })
        .then(() => {
          deleteDepartments(params).then(res => {
            if (res.success) {
              this.$message({
                type: "success",
                message: "删除成功!"
              });
              this.fetchData();
            }
          });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      const params = {
        id: scope.row.id
      };
    },
    add() {
      this.dialogFormVisible = true;
      this.form = {};
      this.dialog_title = "部门添加";
    }
  },
  created() {
    this.fetchData();
  }
};
</script>

<style lang="less" scoped>
</style>