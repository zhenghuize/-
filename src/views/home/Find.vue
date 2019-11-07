<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
    <div class="findBox">
      <!-- 轮播图 -->
      <van-swipe :autoplay="3000" :height="auto">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img class="bannerImg" :src="image" />
        </van-swipe-item>
      </van-swipe>
      <!-- 滑动标签 -->
      <div class="listBox">
        <ul class="bannerList">
          <li v-for="(name, id) in listBoxData" :key="id">
            <a v-html="name"></a>
          </li>
        </ul>
      </div>
      <!-- 每日新发现 -->
      <div class="newDay slideBox">
        <!-- 头部 -->
        <div class="newDayTitle slideTitle">
          <h4>每日新发现</h4>
          <a href>查看更多</a>
        </div>
        <!-- 主体 -->
        <div class="newDayCenter">
          <ul class="newDayUi">
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 新游预约 -->
      <div class="newGame slideBox">
        <!-- 头部 -->
        <div class="newDayTitle slideTitle">
          <h4>新游预定</h4>
          <a href>查看更多</a>
        </div>
        <!-- 主体 -->
        <div class="newDayCenter">
          <ul class="newDayUi">
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- 往期专题 -->
      <div class="oldSpecial">
        <!-- 头部 -->
        <div class="oldSpecialTitle slideTitle">
          <h4>往期专题</h4>
          <a href>查看更多</a>
        </div>
        <!-- 轮播 -->
        <van-swipe @change="onChange" :width="width" :loop="false">
          <van-swipe-item
            class="oldSpecialBanner"
            v-for="(image, index) in oldSpecialImg"
            :key="index"
          >
            <img class="bannerImg" :src="image" />
          </van-swipe-item>
        </van-swipe>
      </div>
      <!-- 推荐玩家 -->
      <div class="recommendedPlayer">
        <!-- 头部 -->
        <div class="recommendedPlayerTitle slideTitle">
          <h4>推荐玩家</h4>
          <a href>查看更多</a>
        </div>
        <!-- 主体 -->
        <ul class="recommendedPlayerUl">
          <li class="recommendedPlayerLi">
            <div class="recommendedPlayerImgBox">
              <img
                src="https://img3.tapimg.com/avatars/31e7bba0b7ea1f976bef15eabda0d3b5.gif?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
              />
            </div>
            <span class="name">会纯阳</span>
            <div>
              <img
                class="icon"
                src="https://img.tapimg.com/market/images/e3f67d658224613a4935ad23df4205c6.png"
              />
              <span class="role">TapTap玩赏家</span>
            </div>
            <van-button class="follow" is-link @click="showPopup">+&nbsp;关注</van-button>
            <!-- <van-cell ></van-cell> -->
            <van-popup class="popup" v-model="show">
              <van-loading class="loading" color="#14b9c8" />正在添加关注
            </van-popup>
          </li>
          <li class="recommendedPlayerLi">
            <div class="recommendedPlayerImgBox">
              <img
                src="https://img3.tapimg.com/avatars/31e7bba0b7ea1f976bef15eabda0d3b5.gif?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
              />
            </div>
            <span class="name">会纯阳</span>
            <div>
              <img
                class="icon"
                src="https://img.tapimg.com/market/images/e3f67d658224613a4935ad23df4205c6.png"
              />
              <span class="role">TapTap玩赏家</span>
            </div>
            <van-button class="follow" is-link @click="showPopup">+&nbsp;关注</van-button>
            <!-- <van-cell ></van-cell> -->
            <van-popup class="popup" v-model="show">
              <van-loading class="loading" color="#14b9c8" />正在添加关注
            </van-popup>
          </li>
          <li class="recommendedPlayerLi">
            <div class="recommendedPlayerImgBox">
              <img
                src="https://img3.tapimg.com/avatars/31e7bba0b7ea1f976bef15eabda0d3b5.gif?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
              />
            </div>
            <span class="name">会纯阳</span>
            <div>
              <img
                class="icon"
                src="https://img.tapimg.com/market/images/e3f67d658224613a4935ad23df4205c6.png"
              />
              <span class="role">TapTap玩赏家</span>
            </div>
            <van-button class="follow" is-link @click="showPopup">+&nbsp;关注</van-button>
            <!-- <van-cell ></van-cell> -->
            <van-popup class="popup" v-model="show">
              <van-loading class="loading" color="#14b9c8" />正在添加关注
            </van-popup>
          </li>
          <li class="recommendedPlayerLi">
            <div class="recommendedPlayerImgBox">
              <img
                src="https://img3.tapimg.com/avatars/31e7bba0b7ea1f976bef15eabda0d3b5.gif?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
              />
            </div>
            <span class="name">会纯阳</span>
            <div>
              <img
                class="icon"
                src="https://img.tapimg.com/market/images/e3f67d658224613a4935ad23df4205c6.png"
              />
              <span class="role">TapTap玩赏家</span>
            </div>
            <van-button class="follow" is-link @click="showPopup">+&nbsp;关注</van-button>
            <!-- <van-cell ></van-cell> -->
            <van-popup class="popup" v-model="show">
              <van-loading class="loading" color="#14b9c8" />正在添加关注
            </van-popup>
          </li>
          <li class="recommendedPlayerLi">
            <div class="recommendedPlayerImgBox">
              <img
                src="https://img3.tapimg.com/avatars/31e7bba0b7ea1f976bef15eabda0d3b5.gif?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
              />
            </div>
            <span class="name">会纯阳</span>
            <div>
              <img
                class="icon"
                src="https://img.tapimg.com/market/images/e3f67d658224613a4935ad23df4205c6.png"
              />
              <span class="role">TapTap玩赏家</span>
            </div>
            <van-button class="follow" is-link @click="showPopup">+&nbsp;关注</van-button>
            <!-- <van-cell ></van-cell> -->
            <van-popup class="popup" v-model="show">
              <van-loading class="loading" color="#14b9c8" />正在添加关注
            </van-popup>
          </li>
          <li class="recommendedPlayerLi">
            <div class="recommendedPlayerImgBox">
              <img
                src="https://img3.tapimg.com/avatars/31e7bba0b7ea1f976bef15eabda0d3b5.gif?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
              />
            </div>
            <span class="name">会纯阳</span>
            <div>
              <img
                class="icon"
                src="https://img.tapimg.com/market/images/e3f67d658224613a4935ad23df4205c6.png"
              />
              <span class="role">TapTap玩赏家</span>
            </div>
            <van-button class="follow" is-link @click="showPopup">+&nbsp;关注</van-button>
            <!-- <van-cell ></van-cell> -->
            <van-popup class="popup" v-model="show">
              <van-loading class="loading" color="#14b9c8" />正在添加关注
            </van-popup>
          </li>
        </ul>
      </div>
      <!-- 游戏测试 -->
      <div class="gameTesting slideBox">
        <!-- 头部 -->
        <div class="gameTestingTitle slideTitle">
          <h4>新游预定</h4>
          <a href>查看更多</a>
        </div>
        <!-- 主体 -->
        <div class="newDayCenter">
          <ul class="newDayUi">
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
          </ul>
        </div>
      </div>
      <!-- TapTap 篝火计划 -->
      <div class="bonfirePlan slideBox">
        <!-- 头部 -->
        <div class="bonfirePlan slideTitle">
          <h4>TapTap 篝火计划</h4>
          <a href>查看更多</a>
        </div>
        <!-- 主体 -->
        <div class="newDayCenter">
          <ul class="newDayUi newDayUi">
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最</span>
            </li>
            <li class="newDayLi">
              <a class="newDayImgBox">
                <img
                  src="https://img.tapimg.com/market/lcs/09dc955ab9093023de7d75ca9b996b49_360.png?imageView2/1/w/256/q/40/interlace/1/ignore-error/1"
                  alt
                />
              </a>
              <span>韦恩的最后零件（测试服）</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </van-pull-refresh>
</template>

<script>
export default {
  data() {
    return {
      //滑动标签数据
      listBoxData: [
        "往期推荐",
        "TapTap独家",
        "单机",
        "角色扮演",
        "动作",
        "MOBA",
        "策略",
        "卡牌",
        "生存",
        "模拟",
        "竞速",
        "益智",
        "二次元"
      ],
      show: false,
      isLoading: false,
      current: 0,
      //轮播
      images: [
        "https://img.tapimg.com/market/images/9e19cb7b0513254a7351fe6f015d156b.png?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/1df2cfc5a78e0faa867b7567060ebde4.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/ae0c4a98fc7fb67eed64c172bcfeaefe.jpg?imageView2/1/w/2080/h/800/q/80/format/jpg/interlace/1/ignore-error/1"
      ],
      //往期专题左右滑动
      oldSpecialImg: [
        "https://img.tapimg.com/market/images/90d365add61abd510da989171009cd5a.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/975476f65f4b7e85cb4f1a23811d0c01.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/4c0e2f230ba7e87f004a65846896eae8.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/4c0e2f230ba7e87f004a65846896eae8.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/4c0e2f230ba7e87f004a65846896eae8.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1",
        "https://img.tapimg.com/market/images/4c0e2f230ba7e87f004a65846896eae8.jpg?imageView2/1/w/780/h/300/q/40/format/jpg/interlace/1/ignore-error/1"
      ],
      width: document.documentElement.offsetWidth - 120
    };
  },
  methods: {
    //下拉刷新
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    //往期专题 轮播
    onChange(index) {
      this.current = index;
    },
    //弹出层
    showPopup() {
      this.show = true;
    }
  }
};
</script>

<style lang="less" scoped>
ul::-webkit-scrollbar {
  display: none;
}
//弹出层
.popup {
  text-align: center;
}
.loading {
  width: 0.6rem;
  height: 0.9rem;
  display: inline-block;
  line-height: 0.9rem;
}
//头部标题
.slideTitle {
  padding-left: 0.35rem;
  background: white;
  height: 0.75rem;
  font-size: 4.2666666667vw;
  overflow: hidden;
  h4 {
    display: inline-block;
    border-width: 1.0666666667vw;
    line-height: 0.75rem;
    margin: 0;
  }
  a {
    float: right;
    margin-right: 0.6rem;
    color: #14b9c8;
    line-height: 0.75rem;
    font-size: 0.25rem;
  }
}
.findBox {
  font-size: 0.4rem;
  position: relative;
  width: 100%;
  height: 200%;
  white-space: nowrap;
  background: #f5f5f5;
  overflow-x: hidden;
  overflow-y: scroll;
  // 轮播图
  .bannerImg {
    max-width: 100%;
    width: 100%;
    height: 100%;
  }
  // 滑动标签
  .listBox {
    background: #f5f5f5;
    width: 100%;
    height: 0.8rem;
    .bannerList {
      position: relative;
      white-space: nowrap;
      overflow: auto;
      li {
        width: 100px;
        display: inline-block;
        margin-left: 0.25rem;
        height: 0.6rem;
        font-size: 3.7333333333vw;
        background: #14b9c8;
        border-radius: 18px;
        text-align: center;
        a {
          line-height: 0.6rem;
          color: #fff;
          text-decoration: none;
          background-color: transparent;
        }
      }
    }
  }
  //每日新发现&新游预定
  .slideBox {
    width: 100%;
    height: 3.8rem;
    background: white;
    //主体
    .newDayCenter {
      width: 100%;
      height: 3rem;
      overflow: hidden;
      background: #fff;
      .newDayUi {
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
        display: flex;
        align-items: center;
        .newDayLi:nth-of-type(1) {
          margin-left: 0.35rem;
        }
        .newDayLi {
          margin-left: 0.3rem;
          flex: 1;
          height: 3rem;
          width: 2.5rem;
          box-shadow: none;
          border-radius: 0;
          .newDayImgBox {
            position: relative;
            top: 0.14rem;
            display: inline-block;
            background: transparent;
            width: 1.7rem;
            height: 1.9rem;
            border-radius: 4.8vw;
            img {
              width: 1.55rem;
              height: 1.55rem;
            }
          }
          span {
            white-space: normal;
            width: auto;
            display: block;
            font-size: 0.27rem;
          }
        }
      }
    }
  }
  //新游预定
  .newGame {
    margin-top: 0.2rem;
  }
  //往期专题
  .oldSpecial {
    margin-top: 0.2rem;
    width: 100%;
    height: 3.2rem;
    background: white;
    overflow: hidden;
    .oldSpecialBanner {
      margin-top: 0.2rem;
      margin-left: 0.3rem;
    }
  }
  //推荐玩家
  .recommendedPlayer {
    margin-top: 0.2rem;
    width: 100%;
    height: 3.8rem;
    overflow: hidden;
    .recommendedPlayerTitle {
      background: #f5f5f5;
    }
    .recommendedPlayerUl {
      position: relative;
      white-space: nowrap;
      overflow: auto;
      .recommendedPlayerLi {
        display: inline-block;
        position: relative;
        margin-left: 0.3rem;
        width: 2.2rem;
        background: white;
        padding-bottom: 0.2rem;
        .recommendedPlayerImgBox {
          position: relative;
          top: 0.2rem;
          margin: 0 auto;
          width: 1.2rem;
          height: 1.2rem;
          border-radius: 50%;
          img {
            width: 1.2rem;
            height: 1.2rem;
            border-radius: 50%;
          }
        }
        .name {
          display: block;
          text-align: center;
          margin-top: 0.25rem;
          color: black;
          font-size: 0.3rem;
        }
        div {
          margin-left: 0.15rem;
          .icon {
            display: inline-block;
            position: absolute;
            width: 0.29rem;
            height: 0.29rem;
          }
          .role {
            margin-left: 0.35rem;
            display: block;
            color: #4f4f4f;
            font-size: 0.23rem;
            margin-bottom: 0.2rem;
          }
        }
        .follow {
          line-height: 0;
          font-size: 0.3rem;
          color: #14b9c8;
          margin: 0 auto;
          width: 1.5rem;
          height: 0.5rem;
          display: block;
          border-radius: 10%;
          background: white;
          border: 0.012rem solid #14b9c8;
        }
      }
    }
  }
  //游戏测试
  .gameTesting {
    margin-top: 0.3rem;
  }
  //TapTap 篝火计划
  .bonfirePlan {
    color: white;
    margin-top: 0.3rem;
    background: url("../../assets/back.jpg") no-repeat no-repeat;
    background-size: 150% 150%;
    background-position: -1rem -1rem;
    .newDayCenter {
      background: none;
      .newDayUi{
        margin-left: 2.4rem;
      }
    }
  }
}
</style>>