<template>
  <div>
    <el-button type="success" @click="reload">重新加载</el-button>
    <el-table :data="tableData" border style="width: 100%" class="table">
      <el-table-column prop="id" label="权限id"></el-table-column>
      <el-table-column prop="name" label="权限名称"></el-table-column>
      <el-table-column prop="expression" label="权限表达式"></el-table-column>
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
import qs from "querystring";
import { getPermissions } from "@/request/httpApi";
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
    handleDelete(scope) {},
    submit() {
      const params = qs.stringify({
        name: this.form.name,
        sn: this.form.sn,
        token: localStorage.getItem("token")
      });
    },
    getInfo() {
      getPermissions({
        currentPage: 1,
        pageSize: 20,
        token: localStorage.getItem("token")
      }).then(res => {
        if (res.success) {
          this.tableData = res.data.list;
        } else {
          console.log("失败");
        }
      });
    },
    reload() {
      console.log("重新加载");
      this.getInfo();
    }
  },
  created() {
    this.getInfo();
  },
  mounted() {
    this.reload()
  }
};
</script>

<style lang="less" scoped>
</style>