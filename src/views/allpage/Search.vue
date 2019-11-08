<template>
  <div class="Search">
    <nav>
      <div class="navBox">
        <van-icon class="icon a" name="arrow-left" color="white" size=".5rem" />
        <input class="inp" type="text" placeholder="搜索游戏、用户、厂商或帖子" />
        <van-icon class="icon b" name="search" color="white" size=".5rem" />
      </div>
    </nav>
    <!-- 搜索历史记录 -->
    <div class="history" v-if="his">
      <ul class="historyUl">
        <li class="historyLi">
          <van-icon class="historyIcon" name="underway-o" />
          <span>英雄Lia</span>
          <van-icon class="historyIcon dele" name="cross" @click="his=!his" />
        </li>
      </ul>
    </div>
    <!-- 热门搜索 -->
    <div class="hot" ref="separateAll" :style="{ overflow: hid,height:hei}">
      <h5 class="title">热门搜索</h5>
      <ul class="hotUl">
        <li class="hotLi">
          <span>1&nbsp;</span>香肠派对
        </li>
        <li class="hotLi">
          <span>2&nbsp;</span>英雄联盟
        </li>
        <li class="hotLi">
          <span>3&nbsp;</span>明日之后
        </li>
        <li class="hotLi">
          <span>4&nbsp;</span>失落城堡
        </li>
        <li class="separate" v-if="allBut" @click="separateAllBut">显示全部</li>
        <li class="hotLi">
          <span>5&nbsp;</span>狐妖小红狼
        </li>
        <li class="hotLi">
          <span>6&nbsp;</span>英雄联盟手游
        </li>
        <li class="hotLi">
          <span>7&nbsp;</span>pubg
        </li>
        <li class="hotLi">
          <span>8&nbsp;</span>光明记忆
        </li>
        <li class="hotLi">
          <span>9&nbsp;</span>不休的乌拉拉
        </li>
        <li class="hotLi">
          <span>10&nbsp;</span>剑与远征
        </li>
      </ul>
    </div>
    <!-- 热门游戏标签 -->
    <div class="hotGame">
      <h5 class="title">热门游戏标签</h5>
      <button class="hotGameBut" v-for="(item,index) in buttonCen" :key="index" v-html="item"></button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      his: true,
      hei: "3.7rem",
      activeNames: ["0"],
      hid: "hidden",
      allBut: true,
      buttonCen: [
        "单机",
        "动作",
        "卡牌",
        "模拟",
        "角色扮演",
        "策略",
        "益智",
        "生存",
        "放置",
        "TapTap独家"
      ]
    };
  },
  methods: {
    //点击显示全部
    separateAllBut() {
      this.hid = null;
      this.allBut = false;
      this.hei = "7rem";
      return;
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
      top: -0.4rem;
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
  // 搜索历史记录
  .history {
    .historyUl {
      .historyLi {
        padding: 0 0.5rem 0 0.5rem;
        font-size: 0.3rem;
        height: 1rem;
        line-height: 1rem;
        overflow: hidden;
        border-bottom: 0.02rem solid gainsboro;
        .historyIcon {
          font-size: 0.3rem;
          padding-right: 0.3rem;
          &.dele {
            position: relative;
            right: -4rem;
          }
        }
        background: white;
        .historyName {
          font-size: 0.3rem;
        }
      }
    }
  }
  //热门搜索
  .hot {
    padding-left: 0.4rem;
    margin-top: 0.2rem;
    background: white;
    transition: height 0.2s;
    .hotUl {
      position: relative;
      top: -0.4rem;
      .separate {
        padding: 0.2rem 0 0 30vw;
        color: #14b9c8;
        font-size: 0.35rem;
      }
      .hotLi {
        width: 43vw;
        display: inline-block;
        font-size: 0.38rem;
        span {
          color: #14b9c8;
        }
      }
    }
  }
  //热门游戏标签
  .hotGame {
    font-size: 0.5rem;
    margin-top: 0.26rem;
    padding-left: 0.4rem;
    margin-top: 0.2rem;
    background: white;
    .hotGameBut {
      color: #999999;
      background: #f4f4f4;
      border-radius: 10%;
      padding: 0.12rem;
      border: none;
      font-size: 0.3rem;
      margin: -0.2rem 0.2rem 0.1rem 0;
    }
  }
}
</style>