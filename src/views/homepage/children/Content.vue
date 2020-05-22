<template>
  <div>
    <div class="content">
      <h3>{{$route.meta.title}}</h3>
      <div class="detail_content">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.content {
  position: absolute;
  top: 70px;
  right: 0;
  left: 250px;
  bottom: 0;
  background-color: #eee;
  overflow-y: auto;
  h3 {
    margin-top: 10px;
    margin-left: 20px;
  }
  .detail_content {
    padding: 10px 20px;
  }
}
</style>