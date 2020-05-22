<template>
  <div>
    <el-dialog :title="title" :visible.sync="visible" :before-close="close">
      <el-form :model="form">
        <el-form-item label="数据字典标题" :label-width="formLabelWidth">
          <el-input v-model="form.title" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据字典编号" :label-width="formLabelWidth">
          <el-input v-model="form.sn" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="数据字典简介" :label-width="formLabelWidth">
          <el-input v-model="form.intro" autocomplete="off"></el-input>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="close">取 消</el-button>
        <el-button type="primary" @click="submit()">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import {
  addSystemDictionaries,
  editSystemDictionaries
} from "@/request/httpApi";
export default {
  data() {
    return {
      formLabelWidth: "120px"
    };
  },
  props: ["title", "form", "visible"],
  methods: {
    close(reload) {
      this.$emit("close", reload);
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
    submit() {
      const params = {
        title: this.form.title,
        sn: this.form.sn,
        intro: this.form.intro,
        id: this.form.id
      };
      if (this.form.id) {
        editSystemDictionaries(params, this.form.id).then(res => {
          this.toolFn(res, "编辑");
        });
        this.close("reload");
      } else {
        addSystemDictionaries(params).then(res => {
          this.toolFn(res, "添加");
        });
        this.close("reload");
      }
    }
  }
};
</script>

<style lang="less" scoped>
</style>