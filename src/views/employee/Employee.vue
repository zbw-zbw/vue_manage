<template>
  <div>
    <el-button type="success" @click="add()">重新加载</el-button>
    <el-table :data="tableData" border style="width: 100%" class="table">
      <el-table-column prop="id" label="编号"></el-table-column>
      <el-table-column prop="name" label="名称"></el-table-column>
      <el-table-column prop="email" label="email"></el-table-column>
      <el-table-column prop="age" label="年龄"></el-table-column>
      <el-table-column prop="password" label="密码"></el-table-column>
      <el-table-column prop="admin" label="是否超级管理员"></el-table-column>
      <el-table-column label="操作">
        <template slot-scope="scope">
          <el-button size="mini" type="danger" @click="handleDelete(scope)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-dialog :title="dialog_title" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="部门名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="部门编号" :label-width="formLabelWidth">
          <el-input v-model="form.sn" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getEmployees } from "@/request/httpApi";
export default {
  data() {
    return {
      tableData: [],
      dialogFormVisible: false,
      form: {},
      formLabelWidth: "70px",
      dialog_title: ""
    };
  },
  methods: {
    handleDelete(scope) {
      // this.tableData.splice(scope.$index, 1);
    },
    add() {
      this.dialogFormVisible = true;
      this.form = {};
      this.dialog_title = "部门添加";
    },
    submit() {
      const params = qs.stringify({
        name: this.form.name,
        sn: this.form.sn,
        token: localStorage.getItem("token")
      });
    }
  },
  created() {
    getEmployees({
      currentPage: 1,
      pageSize: 10,
      token: localStorage.getItem("token")
    }).then(res => {
      if (res.success) {
        this.tableData = res.data.list;
      } else {
        console.log("失败");
      }
    });
  }
};
</script>

<style lang="less" scoped>
</style>