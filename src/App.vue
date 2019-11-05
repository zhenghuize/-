<template>
  <div id="app">
    <!-- 顶部 -->
    <div class="top">
      <div class="left"></div>
      <div class="auto">TOPTOP</div>
      <div class="right">
        <van-icon name="search" />
      </div>
    </div>

    <!-- 各页面 -->
    <router-view  class="boxs"/>

    <!-- 底部导航 -->
    <van-tabbar v-model="active" class="btn">
      <van-tabbar-item name="home" icon="home-o" @click="router('Home')"></van-tabbar-item>

      <van-tabbar-item name="search" icon="search" @click="router('Find')"></van-tabbar-item>

      <van-tabbar-item name="friends" icon="friends-o" @click="router('Ranking')"></van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" @click="router('Personal')"></van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: ""
    }
  },
  methods:{
    router(lx){
      this.$router.push({ path: lx, query: { lx: "157" } });
    }
  }
};
</script>
<style  lang="less">
.boxs{
  margin-top: 1rem;
}
.btn {
  width: 100%;
  position: fixed;
  bottom: 0;
}
.top {
  background: #f7f5fa;
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  z-index: 999;
  // display: flex;
  // justify-content: baseline;
  
  .left {
    width: 1rem;
    height: 100%;
    background: red;
    float: left;
  }
  .auto {
    float: left;
    font-size: 0.5rem;
    width: 2rem;
    margin: 0 auto;
  }
  .right {
    float: right;
    width: 1rem;
    height: 100%;
  }
}
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #f7f5fa;
}
</style>
