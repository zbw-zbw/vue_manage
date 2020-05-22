<template>
  <div>
    <header>
      <h3>欧文客户管理系统</h3>
      <i class="el-icon-menu"></i>
      <p class="user">
        <el-dropdown trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            下拉菜单
            <i class="el-icon-arrow-down el-icon--right"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item command="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </p>
    </header>
  </div>
</template>

<script>
export default {
  methods: {
    handleCommand(command) {
      // console.log(command)
      if (command == "logout") {
        this.$router.replace("/login");
      }
    }
  }
};
</script>

<style lang="less" scoped>
header {
  background-color: #409eff;
  height: 70px;
  line-height: 70px;
  color: #fff;
  h3 {
    padding: 0 20px;
    font-size: 24px;
    display: inline-block;
  }
  .el-icon-menu {
    font-size: 22px;
  }
  .user {
    float: right;
    padding-right: 20px;
    .el-dropdown-link {
      cursor: pointer;
      color: #fff;
    }
    .el-icon-arrow-down {
      font-size: 12px;
    }
  }
}
</style>