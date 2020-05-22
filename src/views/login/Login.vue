<template>
  <div class="login-wrapper">
    <div class="login-content" @keyup.enter="login">
      <h3 class="login-title">欧文后台管理系统</h3>
      <el-form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" class="demo-ruleForm">
        <el-form-item prop="username">
          <el-input type="text" v-model="ruleForm.username" autocomplete="off" placeholder="请输入账号"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input type="password" v-model="ruleForm.pwd" autocomplete="off" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" class="el-btn" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>

import { loginApi } from "@/request/httpApi";
export default {
  data() {
    return {
      ruleForm: {},
      rules: {
        username: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        pwd: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    login() {
      this.$refs.ruleForm.validate(val => {
        if (val) {
          const params = {
            username: this.ruleForm.username,
            password: this.ruleForm.pwd
          };
          loginApi(params).then(res => {
            console.log(res);
            if (res.success) {
              this.$router.push("/department");
              localStorage.setItem("token", res.data);
            } else {
              this.$message({
                message: res.msg,
                type: "error"
              });
            }
          });
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.login-wrapper {
  width: 100%;
  height: 100%;
  background: #324057;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-title {
    color: #fff;
    font-size: 24px;
    text-align: center;
    padding-bottom: 20px;
  }
  .login-content {
    width: 330px;
    height: 210px;
    .el-btn {
      width: 100%;
    }
  }
}
</style>