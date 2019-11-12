<template>
  <div>
    <van-tabs
      @click="onClick"
      class="titleNav"
      background="#FCFCFC"
      color="#14b9c8"
      title-active-color="#14b9c8"
    >
      <van-tab title="评分榜">
        <div class="ListBox" v-for="(item, index) in allGameList" :key="index" @click="tiaozhuan(item.id)">
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
          <div class="button">下载</div>
        </div>
      </van-tab>
      <van-tab title="热玩榜">
        <div class="ListBox" v-for="(item, index) in allGameList" :key="index" @click="tiaozhuan(item.id)">
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
          <div class="button">下载</div>
        </div>
      </van-tab>
      <van-tab title="热卖榜">
        <div class="ListBox" v-for="(item, index) in allGameList" :key="index" @click="tiaozhuan(item.id)">
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
          <div class="button">下载</div>
        </div>
      </van-tab>
      <van-tab title="新品榜">
        <div class="ListBox" v-for="(item, index) in allGameList" :key="index" @click="tiaozhuan(item.id)">
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
          <div class="button">下载</div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { gameList } from "../../api/findData";
export default {
  data() {
    return {
      allGameList: [],
      active: 0
    };
  },
  methods: {
    //跳转
    tiaozhuan(id){
      let obj = {
        href: location.href,
        lx:id
      };
      localStorage.setItem("obj", JSON.stringify(obj));
      location.href = location.origin + `/allpage.html#/Details`;
    },
    onClick(event) {
      //评分榜
      if (event === 0) {
        gameList().then(result => {
          result.data.sort((a, b) => {
            return b.score - a.score;
          });
          this.allGameList = result.data;
        });
      }
      //热玩榜
      if (event === 1) {
        gameList().then(result => {
          result.data.sort((a, b) => {
            return b.scorenumber - a.scorenumber;
          });
          this.allGameList = result.data;
        });
      }
      //热卖榜
      if (event === 2) {
        gameList().then(result => {
          result.data.sort((a, b) => {
            return b.hotsale - a.hotsale;
          });
          this.allGameList = result.data;
        });
      }
      //新品榜
      if(event===3){
        gameList().then(result=>{
          result.data.sort((a,b)=>{
            return b.id-a.id;
          });
          this.allGameList = result.data;
        })
      }
    }
  },
  created() {
    gameList().then(result => {
      result.data.sort((a, b) => {
        return b.score - a.score;
      });
      this.allGameList = result.data;
    });
  }
};
</script>

<style lang="less" scoped>
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