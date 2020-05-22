<template>
  <div class="wrapper">
    <top></top>
    <my-menu></my-menu>
    <my-content></my-content>
  </div>
</template>

<script>
import Top from "./children/Header";
import MyMenu from "./children/Menu";
import MyContent from "./children/Content";
export default {
  components: {
    Top,
    MyMenu,
    MyContent
  }
};
</script>

<style lang="less" scoped>
.wrapper {
  width: 100%;
  height: 100%;
  position: relative;
  user-select: none;
}
</style>