<template>
  <div>
    <el-menu
      :default-active="activeRoute"
      class="menu"
      background-color="#324157"
      text-color="#bfcbd9"
      active-text-color="#20a0ff"
      unique-opened
      router
    >
      <el-submenu :index="index+''" v-for="(menu, index) in menuConfig" :key="index">
        <template slot="title">
          <i :class="menu.icon"></i>
          <span>{{menu.title}}</span>
        </template>
        <el-menu-item
          :index="submenu.index"
          v-for="(submenu, index) in menu.subs"
          :key="index"
        >{{submenu.title}}</el-menu-item>
      </el-submenu>
    </el-menu>
  </div>
</template>

<script>
import { menuConfig } from "@/config/config.js";

export default {
  computed: {
    activeRoute() {
      return this.$route.path;
    }
  },
  data() {
    return {
      menuConfig
    };
  }
};
</script>

<style lang="less" scoped>
.menu {
  position: absolute;
  left: 0;
  top: 70px;
  bottom: 0;
  width: 250px;
  background-color: #324157;
  color: #bfcbd9;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0;
  }
}
</style>