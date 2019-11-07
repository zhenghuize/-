<template>
  <div class="Home">
    <van-pull-refresh class="refresh" v-model="isLoading" @refresh="onRefresh">
      <div class="yeka1">
        <img
          class="img"
          src="https://img.tapimg.com/market/images/88d6966c346e0393abea432ee7aa26ea.jpg?imageView2/0/w/1080/q/40/format/jpg/interlace/1/ignore-error/1"
          alt
        />
        <p class="tuijian">编辑推荐</p>
        <div class="xiang">
          <img
            class="tou"
            src="https://img.tapimg.com/market/lcs/d8169499e83d7fff17b9f514894db175_360.png?imageView2/1/w/180/q/40/interlace/1/ignore-error/1"
            alt
          />
          <div>
            <p>流言侦探</p>
            <p>惊险剧情小说，在曼谷暴雨中再度展开</p>
          </div>
          <div>
            <p>
              <van-icon name="star" />&nbsp;9.6
            </p>
            <p>18139人评分</p>
          </div>
        </div>
      </div>
      <!-- 安利墙 -->
      <div class="anli">
        <p>安利墙</p>
        <p>更多推荐</p>
      </div>
      <van-swipe :loop="false" :show-indicators="false" :width="swipeWidth">
        <van-swipe-item v-for="item in anArr" :key="item.id">
          <div class="item">
            <div>
              <p>
                <img :src="item.tou" alt />
                {{item.name}}
              </p>
            </div>
            <van-rate :size="0.3+'rem'" v-model="value" readonly />
            <div>
              <p class="pj">{{item.text}}</p>
              <img :src="item.src" alt />
            </div>
          </div>
        </van-swipe-item>
      </van-swipe>
      <!-- 内容 -->
      <div class="warp" v-for="item in data" :key="item.id" @click="info(item.id)">
        <p>来自热门</p>
        <img :src="item.pic" alt />
        <div class="box">
          <img :src="item.icon" alt />
          <div>
            <p class="biao">{{item.name}}</p>
            <p>{{item.scorenumber}}人评分</p>
          </div>
          <div>
            <p>{{item.introduce}}</p>
            <p>
              <van-icon name="star" />
              &nbsp;{{item.score}}
            </p>
          </div>
          <!-- <van-cell :title="item.obj.p1" :border='false' :value="item.obj.p2" size="Least" /> -->
          <!-- <van-cell :title="item.obj.p3" :border='false' :value="item.obj.p4" size="Least" /> -->
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { createNamespacedHelpers } from "vuex";
const { mapState, mapActions } = createNamespacedHelpers("Home");
export default {
  data() {
    return {
      count: 0,
      value: 3,
      arr: [
        {
          id: 0,
          p3: "来自热门",
          img2:
            "https://img.tapimg.com/market/images/f10042350edd841f48b3aebe337d639a.png?imageMogr2/auto-orient/thumbnail/2080x/strip/gravity/Center/crop/2080x828/format/jpg/quality/80/interlace/1",
          obj: {
            img:
              "https://img.tapimg.com/market/icons/7930bca7859b8d0a3e0034c23c50b37b_360.png?imageView2/1/w/180/q/40/interlace/1/ignore-error/1",
            p1: "贪婪洞窟",
            p2: "4978人评分",
            p3: "全新宠物系统上线",
            p4: "8.1"
          }
        }
      ],
      anArr: [
        {
          id: 0,
          tou:
            "https://img.tapimg.com/market/images/22f1196f825298281376608459bfa7fe.png",
          name: "你就是医我的药评价江湖悠悠（测试版）",
          src:
            "https://img.tapimg.com/market/lcs/ab7069f7aa80a3e1bdebcbe0d18bc575_360.png?imageView2/1/w/240/q/80/interlace/1/ignore-error/1",
          text:
            "游戏不错，给人一种眼前一亮的感觉，画面，建模各方面都中上吧！但是国风游戏，钢琴bgm什么鬼，一下就把我带出了那种意境，bgm换成萧，笛子，葫芦丝都行啊！你说是不是！好好的一个环境布局亏在bgm上面是不是有点亏！"
        }
      ],
      swipeWidth: document.documentElement.offsetWidth - 75,
      isLoading: false
    };
  },
  computed: {
    ...mapState(["data"])
  },
  methods: {
    ...mapActions(["queryData"]),
    onRefresh() {
      setTimeout(() => {
        this.$toast("刷新成功");
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    info(lx) {
      //http://localhost:8080/allpage.html#/Details
      // location.href=location.origin+`/allpage.html#/Details`;
      let obj = {
        href: location.href,
        lx
      };
      localStorage.setItem('obj',JSON.stringify(obj));
      location.href = location.origin + `/allpage.html#/Details`;
    }
  },
  created() {
    this.queryData();
    window.console.log(this.data);
  }
};
</script>

<style scoped lang='less'>
.warp {
  font-size: 0.23rem;
  color: darkcyan;
  img {
    width: 100%;
    border-radius: 4px;
  }
  .box {
    img {
      float: left;
      width: 1rem;
      height: 1rem;
    }
    margin: 0.2rem 0;
    height: 1.05rem;
    div {
      background: transparent;
      width: 5.6rem;
      float: right;
      height: 0.5rem;
      margin: 0.05rem 0;
      p {
        margin: 0 0;
        &:nth-of-type(1) {
          max-width: 4rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          float: left;
        }
        &:nth-of-type(2) {
          float: right;
          color: turquoise;
        }
      }
    }
    .biao {
      font-weight: 600;
      font-size: 0.3rem;
    }
  }
}
.van-swipe-item {
  .item {
    width: 5.5rem;
    height: 2.1rem;
    padding: 0.1rem 0;
    background: #f8f8f8;
    border-radius: 0.1rem;
    display: flex;
    flex-wrap: wrap;
    // flex-direction: column ;
    align-content: space-around;
    justify-content: center;
    div {
      width: 4.8rem;
      // float: left;
      &:nth-of-type(1) {
        p {
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          width: 100%;
          display: block;
          margin: 0 0;
          font-size: 0.25rem;
          line-height: 0.3rem;
          img {
            width: 0.34rem;
            height: 0.34rem;
            margin-right: 0.1rem;
            transform: translateY(0.07rem);
          }
        }
      }
      &:nth-of-type(3) {
        display: flex;
        justify-content: space-between;
        p {
          width: 3.6rem;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 3;
          overflow: hidden;
          margin: 0 0;
          font-size: 0.25rem;
          // line-height: 0.3rem;
        }
        img {
          width: 1rem;
          height: 1rem;
          // transform: translateY(0.05rem);
        }
      }
    }
  }
}
.anli {
  width: 100%;
  color: #826faf;
  font-size: 0.3rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0.1rem 0.1rem;
    &:nth-of-type(2) {
      float: right;
      color: rgb(20, 185, 200);
    }
  }
}

.tuijian {
  font-size: 0.28rem;
  color: white;
  position: absolute;
  margin: 0.3rem 0.4rem;
}
.van-cell {
  background: transparent;
}
.Home {
  width: 92%;
  // overflow-y: auto;
  // height: 600px;
  // margin: 0 auto;
  // background: pink;
}

.yeka1 {
  height: 6.9rem;
  border-radius: 4%;
  overflow: hidden;
  margin-top: 0.3rem;
  position: relative;
  .img {
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
  }
}
.xiang {
  position: absolute;
  width: 92%;
  left: 0.3rem;
  bottom: 0;
  padding-bottom: 0.1rem;
  display: flex;
  justify-content: space-between;
  div {
    max-width: 3rem;
    max-height: 1.2rem;
    color: white;
    &:nth-of-type(1) {
      p {
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        &:nth-of-type(1) {
          font-size: 0.3rem;
        }
        &:nth-of-type(2) {
          color: slategrey;
        }
      }
    }
    &:nth-of-type(2) {
      p {
        text-align: right;
        &:nth-of-type(1) {
          font-size: 0.3rem;
        }
        &:nth-of-type(2) {
          color: slategrey;
        }
      }
    }

    p {
      font-weight: 800;
      font-size: 0.26rem;
      margin: 0.05rem 0;
    }
  }
  .tou {
    width: 1rem;
    height: 1rem;
  }
  background-image: linear-gradient(to bottom, rgba(7, 8, 8, 0), #070808);
}
.van-pull-refresh {
  z-index: 999;
}
</style>