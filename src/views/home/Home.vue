<template>
  <div class="Home">
    <van-pull-refresh class="refresh" v-model="isLoading" @refresh="onRefresh">
      <div class="yeka1" @click="info(3)">
        <img class="img" src="http://127.0.0.1:1574/44164812d38c7b49bd18c2882012df7a.jpg" alt />
        <p class="tuijian">编辑推荐</p>
        <div class="xiang">
          <img class="tou" src="http://127.0.0.1:1574/d8169499e83d7fff17b9f514894db175_360.png" alt />
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
                <img class="xio" :src="item.usericon" alt />
                {{item.name}}
              </p>
            </div>
            <van-rate :size="0.3+'rem'" v-model="item.star" readonly />
            <div>
              <p class="pj">{{item.comment}}</p>
              <img :src="item.gameicon" alt />
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
const { mapState, mapActions ,mapMutations} = createNamespacedHelpers("Home");
import { Dialog } from "vant";
export default {
  data() {
    return {
      value: 3,
      swipeWidth: document.documentElement.offsetWidth - 85,
      isLoading: false
    };
  },
  computed: {
    ...mapState(["data", "anArr"])
  },
  methods: {
    ...mapActions(["queryData", "queryWt"]),
    ...mapMutations(["Update"]),
    onRefresh() {
      setTimeout(() => {
        this.Update();
        this.$toast("刷新成功");
        this.isLoading = false;
      }, 500);
    },
    info(lx) {
      //http://localhost:8080/allpage.html#/Details
      // location.href=location.origin+`/allpage.html#/Details`;
      let obj = {
        href: location.href,
        lx
      };
      localStorage.setItem("obj", JSON.stringify(obj));
      location.href = location.origin + `/allpage.html#/Details`;
    }
  },
  created() {
    this.queryData().then(() => {
      if (this.data.length == 0) {
        Dialog.alert({
          message: "哦吼,获取数据失败了"
        });
      }
    });
    this.queryWt();
  }
};
</script>

<style scoped lang='less'>
.xio {
  border-radius: 50%;
}
.warp {
  font-size: 0.23rem;
  color: black;
      font-weight: 550;
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
      font-weight: 900;
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
  color: black;
  font-size: 0.3rem;
  font-weight: 600;
  display: flex;
  justify-content: space-between;
  p {
    margin: 0.1rem 0.1rem;
    &:nth-of-type(2) {
      float: right;
      color: black;
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
    width: 200%;
    height: 100%;
    transform: translateX(-20%);
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