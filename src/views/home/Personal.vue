<template>
  <div class="container" v-if="flag">
    <div class="headerBox">
      <!-- <van-icon name="arrow-left" class="left" /> -->
      <van-icon name class />
      <div class="center">
        <div class="tu" :style="{color:obj.color}">
          <van-icon name="good-job" class="zan" @click="zan1" />&nbsp;
          <span class="one" v-text="zanNum"></span>
          <van-icon name="smile" class="smile" @click="smile1" />&nbsp;
          <span class="two" v-text="smileNum"></span>
        </div>
        <div class="tou">
          <div class="xiang">
            <img :src="icon" />
          </div>
          <span class="id">ID:{{userId}}</span>
          <h3 v-text="username"></h3>
          <span class="biao">礼 仪</span>
          <span class="jian" v-text="jianjie"></span>
        </div>
        <ul class="ul">
          <li>
            1000
            <br />
            <span>粉丝</span>
          </li>
          <li>
            100
            <br />
            <span>关注</span>
          </li>
          <li>
            200
            <br />
            <span>收藏</span>
          </li>
        </ul>
        <div class="xiu" @click="xiu">修改资料</div>
        <div class="tui" @click="tui" v-text="haha"></div>
      </div>
    </div>
    <div class="footerBox">
      <van-tabs v-model="activeName" color="rgb(20, 185, 200)">
        <van-tab title="心愿单" name="a">
          <div class="ListBox" v-for="(item, index) in wishData" :key="index">
            <span v-html="index+1"></span>
            <div class="imgBox">
              <img :src="item.icon" />
            </div>
            <div class="message">
              <div class="name" v-html="item.name"></div>
              <div class="bottom">
                <van-icon name="star" color="#14b9c8" />
                <span class="score" v-html="`&nbsp;`+item.score"></span>
                <!-- <span class="describe">删档测试</span> -->
              </div>
            </div>
            <div class="button" @click="pay(item.id)">购买</div>
          </div>
        </van-tab>
        <van-tab title="仓库" name="b">
          <div class="ListBox" v-for="(item, index) in wareHouseData" :key="index">
            <span v-html="index+1"></span>
            <div class="imgBox">
              <img :src="item.icon" />
            </div>
            <div class="message">
              <div class="name" v-html="item.name"></div>
              <div class="bottom">
                <van-icon name="star" color="#14b9c8" />
                <span class="score" v-html="`&nbsp;`+item.score"></span>
              </div>
            </div>
            <div class="button">已购买</div>
          </div>
        </van-tab>
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
    <van-dialog
      v-model="show"
      :showConfirmButton="false"
      :showCancelButton="false"
      title="输入支付密码"
      show-cancel-button
      :overlay="false"
    >
      <van-icon name="arrow-left" size=".5rem" @click="close" />
      <van-password-input :value="value" :focused="showKeyboard" @focus="showKeyboard = true" />
    </van-dialog>

    <div class="payword">
      <!-- 数字键盘 -->
      <van-number-keyboard
        :show="showKeyboard"
        @input="onInput"
        @delete="onDelete"
        @blur="showKeyboard = false"
      />
    </div>
  </div>
</template>

<script>
import {
  userInfo,
  wishList,
  addWareHouse,
  wareHouse,
  out,
  jiance
} from "../../api/user.js";
import Vue from "vue";
import { Notify } from "vant";

Vue.use(Notify);
export default {
  data() {
    return {
      flag: true,
      value: "",
      showKeyboard: false,
      wishData: null,
      wareHouseData: null,
      show: false,
      smileNum: 0,
      zanNum: 0,
      icon: "",
      username: "",
      userId: "",
      jianjie: "",
      rate: 0,
      activeName: "a",
      currentRate: 0,
      gradientColor: {
        "0%": "#3fecff",
        "100%": "#6149f6"
      },
      haha: "退出登录",
      gameId: ""
    };
  },
  computed: {
    text() {
      return this.currentRate.toFixed(0) + "%";
    },
    obj:function(){
      return this.$store.state.obj
    }
  },
  methods: {
    pay(id) {
      this.show = true;
      this.gameId = id;
    },
    onInput(key) {
      this.value = (this.value + key).slice(0, 6);
      if (this.value.length == 6 && this.value == 123456) {
        Notify({ type: "danger", message: "密码错误，请重试" });
      }
      if (parseInt(this.value) === 123456) {
        addWareHouse(this.gameId, this.userId)
          .then(result => {
            if (result.code == 0) {
              Notify({ type: "success", message: "购买成功" });
              this.show = false;
              this.gameId = null;
              this.showKeyboard = false;
              this.value = "";
              wareHouse(this.userId).then(result => {
                this.wareHouseData = result;
              });
            }
            return Promise.reject();
          })
          .catch(() => {
            Notify({ type: "danger", message: "购买重复" });
            this.show = false;
            this.gameId = null;
            this.showKeyboard = false;
            this.value = "";
          });
      }
    },
    onDelete() {
      this.value = this.value.slice(0, this.value.length - 1);
    },
    close() {
      this.value = "";
      this.show = false;
    },
    //修改资料
    xiu() {
      location.href = location.origin + "/allpage.html#/Change";
    },
    //退出登录
    tui() {
      out().then(result => {
        if (parseInt(result.code) === 0) {
          this.$toast("退出成功，即将跳往首页！");
          location.href = location.origin;
          localStorage.removeItem("id");
          localStorage.removeItem("name");
        }
      });
    },
    //签到
    qian() {
      if (this.rate >= 100) {
        this.rate = 0;
        this.currentRate = 0;
        return;
      }
      this.rate += 20;
    },
    zan1() {
      this.zanNum += 1;
    },
    smile1() {
      this.smileNum += 1;
    }
  },
  created() {
    //检测是否登录
    jiance().then(result => {
      if (parseInt(result.code) !== 0) {
        this.flag = false;
        this.$toast("很抱歉，您还未登录，即将跳往登录页！");
        setTimeout(() => {
          location.href = location.origin + "/allpage.html#/Login";
        }, 1000);
        return;
      }
    });
    userInfo()
      .then(result => {
        if (parseInt(result.code) === 0) {
          let info = result.data;
          let [{ name, id, introduce, icon }] = info;
          this.username = name;
          this.userId = id;
          this.jianjie = introduce;
          this.icon = icon;
          localStorage.setItem("id", id);
          localStorage.setItem("name", name);
          return id;
        }
      })
      .then(userid => {
        wishList(userid).then(result => {
          this.wishData = result;
        });
        return userid;
      })
      .then(userid => {
        wareHouse(userid).then(result => {
          this.wareHouseData = result;
          if (parseInt(result.code) === 0) {
            this.xinNum = result.data.id;
            this.xinName = result.data.name;
            this.xinIcon = result.data.icon;
            this.xinFen = result.data.score;
          }
        });
      });
  }
};
</script>

<style lang="less" scoped>
.container {
  .van-dialog {
    background: #d5d8d8;
    height: 3rem;
    .van-icon {
      color: #fff;
      margin: -2rem 0.2rem;
    }
  }
  .headerBox {
    width: 100%;
    height: 3rem;
    // background: rgba(0, 176, 191);
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
      box-shadow: 12px 25px 5px 0 rgba(255, 245, 245, 0.1);
      .tu {
        position: absolute;
        top: -0.6rem;
        right: 0;
        width: 29%;
        height: 0.5rem;
        .zan {
          font-size: 0.3rem;
        }
        .one {
          font-size: 0.3rem;
          font-weight: 100;
        }
        .two {
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
          background: none;
          img {
            width: 100%;
            height: 100%;
            border-radius: 50%;
          }
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
      .deng {
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
  }
  .van-tabs__line {
    background-color: rgba(0, 176, 191) !important;
  }
  .footerBox {
    margin-top: 5rem;
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
    .ListBox {
      position: relative;
      padding-left: 0.2rem;
      font-size: 0.42rem;
      display: flex;
      height: 1.6rem;
      line-height: 1.6rem;
      background: white;
      overflow: hidden;
      border-bottom: 0.02rem solid gainsboro;
      .imgBox {
        position: absolute;
        top: 10%;
        left: 0.7rem;
        width: 1.3rem;
        height: 1.3rem;
        border-radius: 15%;
        overflow: hidden;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .message {
        position: absolute;
        left: 2.2rem;
        height: 100%;
        font-size: 0.38rem;
        .name {
          position: relative;
          top: 0.5rem;
          font-size: 0.35rem;
          line-height: 0;
        }
        .bottom {
          position: relative;
          top: 0.35rem;
          font-size: 0.33rem;
          .describe {
            font-size: 0.29rem;
            margin-left: 0.2rem;
          }
        }
      }
      .button {
        position: absolute;
        top: 30%;
        right: 0.2rem;
        font-size: 0.3rem;
        width: 1.5rem;
        height: 0.6rem;
        line-height: 0.6rem;
        border-radius: 10%;
        text-align: center;
        background: #14b9c8;
        color: white;
      }
    }
    .xin1 {
      display: flex;
      width: 95%;
      height: 1.5rem;
      border: 0.01rem solid gray;
      margin: 0 auto;
      margin-top: 0.1rem;
      border-radius: 0.3rem;
      .left {
        height: 100%;
        width: 35%;
        span {
          display: inline-block;
          margin-top: 0.6rem;
          margin-left: 0.6rem;
        }
        .img {
          display: inline-block;
          height: 80%;
          width: 50%;
          margin-top: 0.1rem;
          margin-left: 0.25rem;
          vertical-align: top;
          border-radius: 0.3rem;
          background: pink;
        }
      }
      .center {
        box-sizing: border-box;
        padding-top: 0.1rem;
        width: 50%;
        height: 100%;
        .fen {
          width: 0.3rem;
          height: 0.3rem;
          background: rgba(0, 176, 191);
          border-radius: 50%;
          margin-top: 0.1rem;
          margin-bottom: 0.1rem;
          .wu {
            color: #fff;
            margin-left: 0.03rem;
          }
        }
        span {
          padding: 0.05rem;
          border: 0.01rem solid rgba(0, 176, 191);
          border-radius: 0.1rem;
        }
      }
      .right {
        .button {
          box-sizing: border-box;
          margin-top: 0.5rem;
          width: 1rem;
          height: 0.5rem;
          background: rgba(0, 176, 191);
          text-align: center;
          padding: 0.05rem;
          color: #fff;
          font-size: 0.18rem;
        }
      }
    }
  }
}
</style>