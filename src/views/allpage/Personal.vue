<template>
  <div class="container">
    <div class="headerBox">
      <van-icon name="arrow-left" class="left" />
      <van-icon name="cluster-o" class="fen" />
      <div class="center">
        <div class="tu">
          <van-icon name="good-job" class="zan" />&nbsp;
          <span>0</span>
          <van-icon name="smile" class="smile" />&nbsp;
          <span>0</span>
        </div>
        <div class="tou">
          <div class="xiang">
            <img :src='icon'/>
          </div>
          <span class="id">ID:{{userId}}</span>
          <h3 v-text="username"></h3>
          <span class="biao">礼 仪</span>
          <span class="jian" v-text="jianjie"></span>
        </div>
        <ul class="ul">
          <li>
            0
            <br />
            <span>粉丝</span>
          </li>
          <li>
            1
            <br />
            <span>关注</span>
          </li>
          <li>
            0
            <br />
            <span>收藏</span>
          </li>
        </ul>
        <div class="xiu">修改资料</div>
        <div class="tui" @click="tui">退出登录</div>
      </div>
      <div class="wan">
        <p>玩过</p>
        <div class="you"></div>
      </div>
    </div>
    <div class="footerBox">
      <van-tabs v-model="activeName">
        <van-tab title="心愿单" name="a">内容 1</van-tab>
        <van-tab title="仓库" name="b">内容 2</van-tab>
        <van-tab title="签到" name="c">
          <van-circle
            v-model="currentRate"
            :rate="rate"
            :speed="100"
            :color="gradientColor"
            :text="text"
            @click="qian"
          />
          <div class="qiandao" @click="qian">签 到</div>
        </van-tab>
      </van-tabs>
    </div>
  </div>
</template>

<script>
import {userInfo} from "../../api/user.js";
export default {
  data() {
    return {
      icon:'',
      username: "",
      userId: "",
      jianjie: "",
      rate: 0,
      activeName: "a",
      currentRate: 0,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      }
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    }
  },
  methods: {
    //退出登录
    tui() {
      location.href = location.origin;
    },
    //签到
    qian() {
      if (this.rate >= 100) {
        this.rate = 0;
        this.currentRate = 0;
        return;
      }
      this.rate += 20;
    }
  },
  mounted(){
    userInfo().then(result=>{
      if (parseInt(result.code) === 0) {
        let data =  result.data;
          window.console.log(data);
          let {name,id,introduce,icon} =data;
          this.username=name;
          this.userId = id;
          this.jianjie = introduce;
          this.icon=icon;
          }
    })
  },

};
</script>

<style lang="less" scoped>
.container {
  .headerBox {
    width: 100%;
    height: 3rem;
    background: rgba(0, 176, 191);
    color: #fff;
    font-size: 0.5rem;
    .left {
      margin-top: 0.4rem;
      margin-left: 0.2rem;
    }
    .fen {
      margin-left: 6rem;
    }
    .center {
      position: relative;
      width: 90%;
      height: 5rem;
      background: #fff;
      border-radius: 0.1rem;
      margin: 0 auto;
      margin-top: 1.5rem;
      box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.1);
      .tu {
        position: absolute;
        top: -0.6rem;
        right: 0;
        width: 25%;
        height: 0.5rem;
        .zan {
          font-size: 0.3rem;
        }
        span {
          font-size: 0.3rem;
          font-weight: 100;
        }
        .smile {
          margin-left: 0.3rem;
          font-size: 0.3rem;
        }
      }
      .tou {
        margin-left: 0.3rem;
        width: 90%;
        height: 2rem;
        border-bottom: 0.01rem solid #eee;
        color: #000;
        .xiang {
          position: absolute;
          top: -0.5rem;
          border-radius: 50%;
          width: 2rem;
          height: 2rem;
          background: pink;
        }
        .id {
          position: absolute;
          top: 1.6rem;
          left: 0.5rem;
          font-size: 0.16rem;
          color: darkgray;
        }
        h3 {
          position: absolute;
          left: 2.6rem;
          top: 0.2rem;
          font-size: 0.4rem;
        }
        .biao {
          position: absolute;
          left: 2.6rem;
          top: 1rem;
          box-sizing: border-box;
          padding: 0.02rem;
          border: 0.01rem solid darkgray;
          border-radius: 0.1rem;
          color: darkgray;
          font-size: 0.2rem;
        }
        .jian {
          position: absolute;
          top: 1.55rem;
          left: 2.6rem;
          font-size: 0.16rem;
          color: darkgray;
        }
      }
      .ul {
        display: flex;
        width: 90%;
        height: 1.5rem;
        margin: 0.3rem auto 0;
        color: #000;
        li {
          width: 33%;
          text-align: center;
          font-size: 0.4rem;
          span {
            color: gray;
            font-size: 0.2rem;
          }
        }
      }
      .xiu,
      .tui {
        display: inline-block;
        width: 38%;
        height: 0.8rem;
        border: 0.01rem solid rgba(0, 176, 191);
        border-radius: 0.15rem;
        color: rgba(0, 176, 191);
        text-align: center;
        font-size: 0.3rem;
        line-height: 0.8rem;
        font-weight: 700;
      }
      .xiu {
        margin-left: 0.5rem;
      }
      .tui {
        margin-left: 0.6rem;
      }
    }
    .wan {
      width: 100%;
      height: 2rem;
      margin-top: 0.4rem;
      margin-left: 0.4rem;
      color: #000;
      font-size: 0.4rem;
      font-weight: 700;
      .you {
        width: 1rem;
        height: 1rem;
        background: pink;
        border-radius: 0.1rem;
        margin-top: 0.1rem;
      }
    }
  }
  .van-tabs__line {
    background-color: rgba(0, 176, 191) !important;
  }
  .footerBox {
    margin-top: 7rem;
    background: #eeeeee;
    height: 10rem;
    .van-tabs {
      box-sizing: border-box;
      padding-top: 0.2rem;
    }
    .van-circle {
      display: inline-block;
      margin-top: 0.5rem;
      margin-left: 1rem;
    }
    .qiandao {
      box-sizing: border-box;
      position: relative;
      top: -0.8rem;
      left: 2rem;
      padding: 0.1rem;
      width: 2rem;
      text-align: center;
      font-size: 0.5rem;
      color: rgba(0, 176, 191);
      display: inline-block;
      border: 0.01rem solid gray;
      border-radius: 0.5rem;
    }
  }
}
</style>