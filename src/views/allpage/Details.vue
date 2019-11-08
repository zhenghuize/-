<template>
  <div class="find">
    <!-- 顶部导航 -->
    <div class="nav">
      <div @click="tuichu">
        <van-icon name="down" size="0.35rem" class="fanhui" />
      </div>
      <div :class="{div:n==0}" @click="Details">Details</div>
      <div :class="{div:n==1}" @click="Comment">Comment</div>
      <div>Action</div>
    </div>
    <!-- 内容 -->
    <div class="xiangqing" v-if="flag==1">
      <div class="tubox">
        <img :src="data.pic" alt />
      </div>
      <div class="textbox">
        <div class="txtbox">
          <img :src="data.icon" alt />
          <div>
            <p class="p1">{{data.name}}</p>
            <p class="p3">￥{{data.money}}</p>
            <p>{{data.firm}}</p>
            <p class="p4">{{data.score}}</p>
          </div>
        </div>
        <!-- <button class=""></button> -->
        <!-- <div class="button">dawdwad</div> -->
        <div class="text">{{data.introduce}}</div>
        <!-- <van-button :loading='true' size='mini' type="info" loading-text="加载中..." /> -->
        <div class="btn" @click="sub">加入心愿单</div>
      </div>
    </div>
    <!-- 评论区 -->
    <div class="warp" v-if="flag==2">
      <div class="ping">-评论区-</div>
      <div class="commentTxt" v-for="item in comment" :key="item.id">
        <img :src="item.icon" alt />
        <p class="children">{{item.username}}</p>
        <van-rate class="children" v-model="item.score" readonly />
        <p class="children">{{item.comment}}</p>
      </div>
      <div class="btnTxt" @click="show=!show">
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
      data: {
        id: 1,
        name: "道友请留步",
        introduce:
          "iOS港澳【免费榜】第一；全球注册用户破【一亿】；全新西游修仙养成卡牌手游《道友请留步》；三界萌宠跨界而来！上古仙魔为你而战，打造你的神话全明星阵容！阿里游戏 “年度最佳卡牌游戏奖”。中国好手游 “年度优秀卡牌手游奖”。游戏狗媒体“最受期待手机游戏奖”。以中国神话为背景，“修仙证道”为主题，融汇了西游记、封神榜、八仙过海等神话巨著，渲染出一幅规模宏大的东方神话世界。 ",
        firm: "极致游戏",
        score: "7.2",
        money: "12.00",
        pic:
          "https://static-tapad.tapdb.net/MzQyMTIxM0A1ZGI2YWViZjY0Nzhi.jpg?imageView2/0/w/1080/q/80/format/jpg/interlace/1/ignore-error/1",
        icon:
          "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
      },
      comment: [
        {
          id: 1,
          userid: 31651,
          username: "袋装娜条",
          comment:
            "主要的目的是来问问怎么这么多不同的人在用相同的目的（加仙盟），很奇怪，而且都要我加微信，这是诈骗的？还是这游戏中你的玩家状况这么好？",
          score: 3,
          icon:
            "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
        },
        {
          id: 2,
          userid: 31651,
          username: "袋装娜条",
          comment:
            "主要的目的是来问问怎么这么多不同的人在用相同的目的（加仙盟），很奇怪，而且都要我加微信，这是诈骗的？还是这游戏中你的玩家状况这么好？",
          score: 3,
          icon:
            "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
        },
        {
          id: 3,
          userid: 31651,
          username: "袋装娜条",
          comment:
            "主要的目的是来问问怎么这么多不同的人在用相同的目的（加仙盟），很奇怪，而且都要我加微信，这是诈骗的？还是这游戏中你的玩家状况这么好？",
          score: 3,
          icon:
            "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
        },
        {
          id: 4,
          userid: 31651,
          username: "袋装娜条",
          comment:
            "主要的目的是来问问怎么这么多不同的人在用相同的目的（加仙盟），很奇怪，而且都要我加微信，这是诈骗的？还是这游戏中你的玩家状况这么好？",
          score: 3,
          icon:
            "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
        },
        {
          id: 5,
          userid: 31651,
          username: "袋装娜条",
          comment:
            "主要的目的是来问问怎么这么多不同的人在用相同的目的（加仙盟），很奇怪，而且都要我加微信，这是诈骗的？还是这游戏中你的玩家状况这么好？",
          score: 3,
          icon:
            "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
        },
        {
          id: 6,
          userid: 31651,
          username: "袋装娜条",
          comment:
            "主要的目的是来问问怎么这么多不同的人在用相同的目的（加仙盟），很奇怪，而且都要我加微信，这是诈骗的？还是这游戏中你的玩家状况这么好？",
          score: 3,
          icon:
            "https://img.tapimg.com/market/lcs/4f99d394126466b06a2533c2168ddc57_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
        }
      ]
    };
  },
  methods: {
    tuichu() {},
    frombtn() {
      window.console.log(this.message, this.value);
    },
    closed() {
      this.message = "";
      this.value = 0;
    },
    btnTxt() {},
    sub() {
      window.console.log(this.lx);
    },
    Details() {
      this.n = 0;
      this.flag = 1;
    },
    Comment() {
      this.n = 1;
      this.flag = 2;
    }
  },
  created() {
    let obj = JSON.parse(localStorage.getItem("obj"));
    this.lx = obj.lx;
    this.href = obj.href;
  }
};
</script>

<style scoped lang="less">
.xiangqing {
  margin-top: 1.5rem;
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
.commentTxt {
  background: white;
  border-radius: 8px;
  box-shadow: 1px 20px 50px #d6cdcd;
  font-size: 0.3rem;
  // height: 2.5rem;
  min-height: 1.8rem;
  margin: 0.44rem auto;
  padding: 0.2rem 0.25rem;
  img {
    float: left;
    width: 1.3rem;
    height: 1.3rem;
    margin-top: 0.2rem;
  }
  .van-rate {
    float: right;
  }
  p {
    margin-left: 0.2rem;
    // margin-top: 0.1rem;
    font-weight: 600;
    float: left;
    &:nth-of-type(1) {
      font-size: 0.35rem;
    }
    &:nth-of-type(2) {
      // margin-top: 0.05rem;
      font-size: 0.28rem;
      color: #5f5959;
      width: 4.3rem;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 3;
      overflow: hidden;
    }
  }
}
.warp {
  width: 88%;
  margin: 1.5rem auto;
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
          padding: 0.03rem 0rem;
        }
      }
      .p1 {
        font-weight: 900;
        font-size: 0.3rem;
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
  top: 0.4rem;
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
  // min-height: 15rem;
}
</style>
