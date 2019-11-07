<template>
  <div id="app" :style="{backgroundColor:wayColor.AppColor}">
    <!-- 顶部 -->
    <div class="top" :style="{ backgroundColor: wayColor.topColor}">
      <img src="https://img.tapimg.com/market/images/22f1196f825298281376608459bfa7fe.png" @click="show=!show" alt />

      <div class="auto">shark top</div>
      <div class="right">
        <van-icon name="search" size="0.6rem" />
      </div>
    </div>

    <!-- 各页面 -->
    <router-view class="boxs" />

    <!-- 底部导航 -->
<<<<<<< HEAD
    <div class="btn" :style="{backgroundColor:wayColor.AppColor}">
      <van-icon name="wap-home-o" size="0.56rem" @click="router('Home')" />
      <van-icon name="tv-o" size="0.56rem" @click="router('Find')" />
      <van-icon name="bar-chart-o" size="0.56rem" @click="router('Ranking')" />
      <van-icon name="contact" size="0.56rem" @click="router('Personal')" />
    </div>
    <!-- 弹出层 -->
    <van-popup v-model="show" position="left" :style="{ width: '20%',height:'100%' }" />
=======
    <van-tabbar v-model="active" class="btn">
      <van-tabbar-item name="home" icon="home-o" @click="router('Home')"></van-tabbar-item>
      <van-tabbar-item name="search" icon="search" @click="router('Find')"></van-tabbar-item>
      <van-tabbar-item name="friends" icon="friends-o" @click="router('Ranking')"></van-tabbar-item>
      <van-tabbar-item name="setting" icon="setting-o" @click="router('Personal')"></van-tabbar-item>
    </van-tabbar>
>>>>>>> 069285dbf742aa970c3603d39f6c79403d3f6856
  </div>
</template>
<script>
export default {
  data() {
    return {
      active: "",
      show:false
    };
  },
  computed: {
    wayColor: function() {
      return this.$store.state.wayColor;
    }
  },
  methods: {
    router(lx) {
      window.console.log(this.$store.state.wayColor);
      this.$router.push({ path: lx, query: { lx: "157" } });
    }
  },
  created() {
    window.console.log(this.wayColor);
  }
};
</script>
<<<<<<< HEAD
<style scoped lang="less">
.boxs {
=======
<style scoped  lang="less">
html,body{
  width: 100%;
  overflow: hidden;
}
.boxs{
>>>>>>> 069285dbf742aa970c3603d39f6c79403d3f6856
  margin: 1rem auto;
}
.btn {
  width: 100%;
  position: fixed;
  height: 1rem;
  bottom: 0;
  // background: #513669;
  display: flex;
  justify-content: space-around;
  i {
    color: #826faf;
    line-height: 1rem;
    width: 0.6rem;
  }
}
.top {
  // background: #513669;
  position: fixed;
  top: 0;
  width: 100%;
  height: 1rem;
  z-index: 999;
  display: flex;
  justify-content: space-between;
  color: white;

  img {
    width: 0.6rem;
    height: 0.6rem;
    margin-top: 0.25rem;
    margin-left: 0.2rem;
  }

  .auto {
    font-size: 0.3rem;
    font-weight: 600;
    line-height: 1rem;
    width: 2rem;
    margin: 0 auto;
  }
  .right {
    line-height: 1rem;
    // color: #f7f5fa;
    margin-right: 0.2rem;
  }
}
#app {
<<<<<<< HEAD
  // background: #513669;
  min-height: 610px;
=======
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  background: #f7f5fa;
>>>>>>> 069285dbf742aa970c3603d39f6c79403d3f6856
}
</style>
