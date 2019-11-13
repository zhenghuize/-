<template>
  <div class="find" :style="{backgroundColor:objState.xqbj,minHeight:H+'px'}">
    <!-- 顶部导航 -->
    <div class="nav" :style="{backgroundColor:objState.xqbj}">
      <div @click="tuichu" :style="{color:objState.color}">
        <van-icon name="down" size="0.35rem" class="fanhui" />
      </div>
      <div
        :class="{div:n==0}"
        @click="Details"
        :style="{color:objState.color,borderColor:objState.color}"
      >Details</div>
      <div
        :class="{div:n==1}"
        @click="Comment"
        :style="{color:objState.color,borderColor:objState.color}"
      >Comment</div>
      <div @click="tiao" :style="{color:objState.color,borderColor:objState.color}">
        TapTap
      </div>
    </div>
    <!-- 内容 -->
    <div class="xiangqing" v-if="flag==1">
      <div v-if="mydata!==null">
        <div class="tubox">
          <img :src="mydata.pic" alt />
        </div>
        <div class="textbox">
          <div class="txtbox">
            <img :src="mydata.icon" alt />
            <div>
              <p class="p1">{{mydata.name}}</p>
              <p class="p3">￥{{mydata.money}}</p>
              <p>{{mydata.firm}}</p>
              <p class="p4">{{mydata.score}}</p>
            </div>
          </div>
          <!-- <button class=""></button> -->
          <!-- <div class="button">dawdwad</div> -->
          <div class="text">{{mydata.introduce}}</div>
          <!-- <van-button :loading='true' size='mini' type="info" loading-text="加载中..." /> -->
          <div class="btn" @click="sub">加入心愿单</div>
        </div>
      </div>
    </div>
    <!-- 评论区 -->
    <div class="warp" v-if="flag==2">
      <div class="ping" :style="{color:objState.color}">-评论区-</div>
      <div v-if="Ct.length==0" class="tishi">还没人评论，快来抢沙发</div>
      <div v-if="Ct.length!==0">
        <div class="commentTxt" v-for="item in Ct" :key="item.key">
          <img :src="item.icon" alt />
          <div>
            <p class="children">{{item.username}}</p>
            <van-rate class="children" v-model="item.score" readonly />
            <p class="ct">{{item.comment}}</p>
          </div>
        </div>
      </div>
      <div class="btnTxt" @click="comments">
        <van-icon name="edit" />
      </div>
      <van-popup class="from" v-model="show" @closed="closed">
        <van-cell-group>
          <van-field
            v-model="message"
            autosize
            type="textarea"
            maxlength="70"
            placeholder="请输入内容"
            show-word-limit
            size="large"
          />
        </van-cell-group>
        <van-rate v-model="value" class="xing" />
        <div class="frombtn" @click="frombtn">提交</div>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("detailsx");
import { Dialog } from "vant";
export default {
  data() {
    return {
      n: 0,
      flag: 1,
      show: false,
      message: "",
      value: 0,
      lx: "",
      href: "",
      H: document.documentElement.clientHeight,
      id: 0,
      name: ""
    };
  },
  computed: {
    ...mapState(["mydata", "Ct"])
  },
  methods: {
    ...mapActions(["queryData", "queryCt", "addCt", "isLogin", "addW"]),
    tiao(){
      location.href='http://localhost:8080/#/Home';
    },
    jianche() {
      return new Promise(ress => {
        this.isLogin().then(res => {
          if (res.code == 1) {
            Dialog.confirm({
              title: "通知",
              message: "您还没得登录，是否前往登录"
            })
              .then(() => {
                location.href = location.origin + `/allpage.html#/Login`;
              })
              .catch(() => {});
          } else if (res.code == 0) {
            ress(res.code);
          }
        });
      });
    },
    //加入心愿单
    sub() {
      this.jianche()
        .then(res => {
          res;
          //加入心愿单
          this.addW({ id: this.lx, userid: this.id }).then(res => {
            if (res.code == 0) {
              Dialog.confirm({
                title: "通知",
                message: "添加成功，是否前往心愿单"
              })
                .then(() => {
                  location.href ="http://localhost:8080/#/Personal?lx=157";
                })
                .catch(() => {});
            }
            Dialog.alert({
                title: "通知",
                message: "请勿重复加入心愿单~~~"
              })
          });
        })
        .catch(ret => {
          ret;
        });
    },
    //评论
    comments() {
      this.jianche().then(res => {
        res;
        this.show = !this.show;
      });
    },
    tuichu() {
      location.href = this.href;
    },
    frombtn() {
      this.addCt({
        id: this.lx,
        userid: this.id,
        username: this.name,
        comment: this.message,
        score: this.value
      }).then(res => {
        if (res.code == 0) {
          this.show = false;
          this.queryCt(this.lx);
        }
      });
    },
    closed() {
      this.message = "";
      this.value = 0;
    },
    btnTxt() {},
    Details() {
      this.n = 0;
      this.flag = 1;
    },
    Comment() {
      this.n = 1;
      this.flag = 2;
    }
  },
  computaed: {
    objState: null
  },
  created() {
    this.objState = JSON.parse(localStorage.getItem("objState"));
    this.id = JSON.parse(localStorage.getItem("id"));
    this.name = localStorage.getItem("name");
    /* 获取数据 */
    let obj = JSON.parse(localStorage.getItem("obj"));
    this.lx = obj.lx;
    this.href = obj.href;
    this.queryData(this.lx).then(() => {
      if (this.mydata == null) {
        Dialog.alert({
          message: "哦吼,获取数据失败了"
        });
      }
    });
    //获取评论
    this.queryCt(this.lx);
  }
};
</script>

<style scoped lang="less">
.commentTxt {
  background: white;
  border-radius: 8px;
  box-shadow: 1px 8px 45px #978d8d;
  font-size: 0.3rem;
  height: 1.4rem;
  margin: 0.44rem auto;
  padding: 0.5rem 0.1rem;
  display: flex;
  // align-content: space-around;
  justify-content: space-around;
  img {
    width: 1.3rem;
    height: 1.3rem;
    border-radius: 10px;
  }
  div {
    width: 4.2rem;
    display: flex;
    flex-wrap: wrap;
    align-content: space-around;
    justify-content: space-between;
    p {
      margin: 0 0;
    }
    div {
      width: 60%;
    }
    .ct {
      margin-top: 0.1rem;
      overflow-x: hidden;
      overflow-y: scroll;
      width: 100%;
      height: 1.2rem;
      word-wrap: break-word;
      text-overflow: ellipsis;
    }
    .ct::-webkit-scrollbar {
      display: none;
    }
  }
}
.tishi {
  width: 4.4rem;
  color: darkcyan;
  margin: 0.3rem auto;
  font-size: 0.38rem;
  font-weight: 600;
}
.xiangqing {
  padding: 1.2rem 0;
}
.from {
  width: 80%;
  margin: 0 auto;
  border-radius: 14px;
  height: 4.8rem;
  font-size: 0.6rem;
  font-weight: 700;
  div {
    width: 5.5rem;
    margin: 0.2rem auto;
  }
  .xing {
    width: 2.8rem;
    margin-left: 1.8rem;
  }
  .inp {
    height: 3rem;
    font-size: 0.3rem;
    width: 80%;
    margin: 0 auto;
    border-radius: 20px;
  }
  .frombtn {
    width: 2.8rem;
    height: 0.65rem;
    text-align: center;
    font-size: 0.32rem;
    font-weight: 400;
    color: #826faf;
    border: #826faf 0.03rem solid;
    border-radius: 24px;
    line-height: 0.65rem;
    background: transparent;
  }
}
.btnTxt {
  position: fixed;
  right: 0.5rem;
  bottom: 1.5rem;
  background: darkcyan;
  width: 1.3rem;
  height: 1.3rem;
  border-radius: 50%;
  color: white;
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.3rem;
}
.ping {
  width: 1.95rem;
  font-size: 0.5rem;
  margin: 0 auto;
}
.warp {
  width: 88%;
  // position: absolute;
  // top: 0.5rem;
  padding-top: 1.5rem;
  margin: 0 auto;
  // float: left;
  // position: relative;
  // top: 0;
  // margin-top: 5.3rem;
}
.btn {
  width: 2.8rem;
  height: 0.65rem;
  overflow: hidden;
  text-align: center;
  font-size: 0.32rem;
  font-weight: 400;
  color: #826faf;
  border: #826faf 0.03rem solid;
  border-radius: 24px;
  line-height: 0.65rem;
  background: transparent;
  margin: 0.19rem auto;
  // position: relative;
  // bottom: 1.2rem;
}
.text {
  width: 5rem;
  height: 2rem;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  overflow: hidden;
  font-size: 0.3rem;
  font-weight: 600;
  margin: 0 auto;
  margin-top: 4.8rem;
  color: #826faf;
}
p {
  margin: 0 0;
}
.textbox {
  // width: 322px;
  // height: 454px;
  margin: -4.8rem auto;
  // position: absolute;
  width: 6.3rem;
  height: 9.2rem;
  background: white;
  z-index: -1;
  border-radius: 8px;
  box-shadow: 1px 20px 94px #a19c9c;
  .txtbox {
    width: 5.2rem;
    height: 1.1rem;
    margin: 0rem auto;
    transform: translateY(4.4rem);
    font-size: 0.28rem;
    display: flex;
    justify-content: space-between;
    align-content: center;
    div {
      width: 3.8rem;
      height: 1rem;
      display: flex;
      align-content: space-between;
      flex-wrap: wrap;
      p {
        width: 50%;
        &:nth-of-type(3) {
          width: 1.5rem;
          height: 0.4rem;
          text-overflow: ellipsis;
          overflow: hidden;
          padding: 0.03rem 0rem;
        }
      }
      .p1 {
        font-weight: 900;
        font-size: 0.3rem;
        width: 1.5rem;
        height: 0.4rem;
        text-overflow: ellipsis;
        overflow: hidden;
      }
      .p3 {
        font-weight: 600;
        color: darkcyan;
        text-align: right;
      }
      .p4 {
        font-weight: 600;
        color: white;
        width: 0.4rem;
        padding: 0.03rem 0.2rem;
        background: #826faf;
        border-radius: 10px;
        margin-left: 1.1rem;
      }
    }
    img {
      width: 1.1rem;
      height: 1.1rem;
    }
  }
}
.tubox {
  box-shadow: 1px 19px 35px #888888;
  width: 5.2rem;
  height: 5.2rem;
  border-radius: 8px;
  margin: 0.9rem auto;
  overflow: hidden;
  position: relative;
  img {
    width: 250%;
    height: 100%;
    position: absolute;
    left: -75%;
    // margin: 0 auto;
  }
}
.fanhui {
  transform: rotate(90deg);
}
.nav {
  width: 100%;
  padding-top: 0.4rem;
  z-index: 9999;
  position: fixed;
  display: flex;
  justify-content: space-around;
  font-size: 0.26rem;
  font-weight: 600;
  div {
    padding: 0 0.2rem;
  }
  .div {
    padding-bottom: 0.2rem;
    box-shadow: 1px 50px 200px #d4cccc;
    height: 0.3rem;
    border-bottom: #826faf solid 0.05rem;
  }
}
.find {
  // padding-bottom: 0.5rem;
  position: relative;
  // min-height: 15rem;
}
</style>
