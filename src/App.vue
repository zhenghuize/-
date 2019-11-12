<template>
  <div id="app" :style="{backgroundColor:objState.AppbjColor}">
    <!-- 顶部 -->
    <div class="top" :style="{ backgroundColor: objState.topColor}">
      <img :src='img' @click="show=!show" alt  class="yuan"/>

      <div class="auto">shark top</div>
      <div class="right" @click="shou">
        <van-icon name="search" size="0.6rem" />
      </div>
    </div>

    <!-- 各页面 -->
    <router-view class="boxs" />

    <!-- 底部导航 :style="{ backgroundColor: objState.topColor}"-->
    <div class="btn" :style="{backgroundColor:objState.AppbjColor}">
      <van-icon name="wap-home-o" size="0.56rem" @click="router('Home')" />
      <van-icon name="tv-o" size="0.56rem" @click="router('Find')" />
      <van-icon name="bar-chart-o" size="0.56rem" @click="router('Ranking')" />
      <van-icon name="contact" size="0.56rem" @click="router('Personal')" />
    </div>
    <!-- 弹出层 -->
    <van-popup
      v-model="show"
      position="left"
      :style="{ backgroundColor: objState.topColor,width: '20%',height:'100%' }"
    >
      <img :src='img' alt class="yuan" />
      <van-icon name="balance-list-o" />
      <van-icon name="gift-o" />
      <van-icon name="play-circle-o" />
      <van-icon name="setting-o" />
      <div @click="setState" class="setState">
        <img class="img" :src="ye" alt />
      </div>
      <div @click="Logout">
        <van-icon name="upgrade" />
      </div>
    </van-popup>
  </div>
</template>
<script>
// import img from '@./assets/ri.png'
import { jiance, out } from "./api/user";
import { Dialog } from "vant";
import { Notify } from "vant";
export default {
  data() {
    return {
      active: "",
      show: false,
      ri: require("./assets/ri.png"),
      ye: require("./assets/ye.png"),
      objState: {
        flag: 1,
        AppbjColor: "#f8f6fb",
        topColor: "rgb(20, 185, 200)"
      },
      img:'http://127.0.0.1:1574/86.jpg'
    };
  },
  methods: {
    Logout() {
      jiance()
        .then(res => {
          if (res.code == 0) {
            Dialog.confirm({
              title: "通知",
              message: "确认退出登录吗？"
            })
              .then(() => {
                out();
                // location.href = location.origin + `/allpage.html#/Login`;
                Notify({ type: "success", message: "已退出" });
                location.reload(true)
              })
              .catch(() => {
                Notify({ type: "primary", message: "已取消" });
              });
          }else{
            Dialog.alert({
            message: "您还没有登录"
          });
          }
        })
    },
    shou() {
      localStorage.setItem("href", location.href);
      location.href = location.origin + `/allpage.html#/Search`;
    },
    router(lx) {
      // window.console.log(this.$store.state.wayColor);
      this.$router.push({ path: lx, query: { lx: "157" } });
    },
    setState() {
      // localStorage.removeItem("objState")
      let i = localStorage.getItem("objState"),
        obj = {};
      if (i == null) {
        obj = {
          flag: 0,
          AppbjColor: "#826faf",
          color: "white",
          topColor: "#826faf"
        };
        this.ye = require("./assets/ri.png");
      } else {
        if (JSON.parse(i).flag == 0) {
          obj = {
            flag: 1,
            AppbjColor: "#f8f6fb",
            topColor: "rgb(20, 185, 200)"
          };
          this.ye = require("./assets/ye.png");
        } else if (JSON.parse(i).flag == 1) {
          obj = {
            flag: 0,
            AppbjColor: "#826faf",
            color: "white",
            topColor: "#826faf"
          };
          this.ye = require("./assets/ri.png");
        }
      }
      localStorage.setItem("objState", JSON.stringify(obj));
      this.objState = JSON.parse(localStorage.getItem("objState"));
    }
  },
  created() {
    this.objState = JSON.parse(localStorage.getItem("objState"));
    jiance();
  }
};
</script>
<style scoped lang="less">
.yuan{
  border-radius: 50%;
}
.van-popup {
  transition: 0.5s;
  display: flex;
  flex-wrap: wrap;
  color: rgb(255, 255, 255);
  background: rgb(20, 185, 200);
  align-content: space-around;
  justify-content: center;
  font-size: 0.7rem;
  i {
    width: 100%;
    text-align: center;
  }
  div {
    width: 0.8rem;
    height: 0.8rem;
    &:nth-of-type(2) {
      font-size: 0.7rem;
    }
  }
  img {
    width: 0.8rem;
    height: 0.8rem;
  }
  .setState {
    .img {
      width: 100%;
      height: 100%;
    }
  }
}
.boxs {
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
    color: #b89dfe;
    line-height: 1rem;
    width: 0.6rem;
  }
}
.top {
  // background: #513669;
  transition: 1s;
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
  // background: #513669;
  min-height: 610px;
  transition: 1s;
}
</style>
