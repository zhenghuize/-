<template>
  <div class="Search">
    <nav>
      <div class="navBox">
        <van-icon @click="returns" class="icon a" name="arrow-left" color="white" size=".5rem" />
        <input class="inp" type="text" v-model="value" placeholder="搜索游戏、用户、厂商或帖子" />
        <van-icon class="icon b" name="search" color="white" size=".5rem" />
      </div>
    </nav>
    <van-tabs
      @click="onClick"
      class="titleNav"
      background="#FCFCFC"
      color="#14b9c8"
      title-active-color="#14b9c8"
    >
      <van-tab title="游戏">
        <div class="ListBox" v-for="(item, index) in allGameList" :key="index">
          <span v-html="index+1"></span>
          <div class="imgBox">
            <img :src="item.icon" />
          </div>
          <div class="message">
            <div class="name" v-html="item.name"></div>
            <div class="bottom">
              <van-icon name="star" color="#14b9c8" />
              <span class="score" v-html="`&nbsp;`+item.score"></span>
              <span class="describe">删档测试</span>
            </div>
          </div>
          <div class="button">下载</div>
        </div>
      </van-tab>

      <van-tab title="用户">
        <span class="userSpan" v-if="user">没有相关用户信息</span>

        <div class="ListBox" v-for="(item, index) in allUser" :key="index">
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
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { searchUser } from "../../api/findData";
export default {
  data() {
    return {
      user: false,
      allGameList: [],
      allUser: [],
      //搜索框内容
      value: ""
    };
  },
  created() {
    this.value = localStorage.getItem("searchItem");
    this.allGameList = JSON.parse(localStorage.getItem("searchData"));
  },
  methods: {
    returns(){
      this.$router.go(-1)
    },
    onClick(event) {
      if (event === 1) {
        searchUser(this.value).then(result => {
          if (result.data.length === 0) {
            this.user = true;
          }
          this.allUser = result.data;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped>
.Search {
  position: relative;
  height: 200%;
  width: 100%;
  background: #f5f5f5;
  //热门搜索&热门游戏标签的标题
  .userSpan {
    text-align: center;
    font-size: .4rem;
    display: block;
    width:100%;
    height:1rem;
    line-height: 1rem;
    border-bottom: .02rem solid #D6D6D6;
  }
  .title {
    margin: 0 0 0.1rem 0;
    font-size: 0.43rem;
  }
  nav {
    width: 100%;
    height: 1rem;
    background: #14b9c8;
    .navBox {
      position: absolute;
      left: 0.4rem;
      // top: -0.4rem;
      width: 94%;
      .icon {
        top: 0.1rem;
        &.b {
          font-weight: bold;
        }
      }
      .inp {
        width: 80%;
        height: 0.6rem;
        font-size: 0.3rem;
        color: white;
        border: none;
        outline: none;
        background: none;
        margin: 0 -0.7rem 0 0.1rem;
        border-bottom: 0.02rem solid white;
      }
    }
  }
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
</style>