<template>
  <div>
    <van-tabs class="titleNav" background="#FCFCFC" color="#14b9c8" title-active-color="#14b9c8">
      <van-tab v-for="(item,index) in titleData" :key="index" :title="item">
        <div class="ListBox">
          <span>{{index+1}}</span>
          <div class="imgBox">
            <img
              src="https://img.tapimg.com/market/lcs/ab7069f7aa80a3e1bdebcbe0d18bc575_360.png?imageMogr2/auto-orient/strip"
              alt
            />
          </div>
          <div class="message">
            <div class="name">江湖悠悠（测试版）</div>
            <div class="bottom">
              <van-icon name="star" color="#14b9c8" />
              <span class="score">&nbsp;9.1</span>
              <span class="describe">删档测试</span>
            </div>
            <div class="button">下载</div>
          </div>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      titleData: ["热门榜", "新品榜", "预约榜", "热卖榜", "热玩榜", "厂商"]
    };
  }
};
</script>

<style lang="less" scoped>
.ListBox {
  position: relative;
  padding-left: 0.2rem;
  font-size: 0.49rem;
  display: flex;
  height: 1.6rem;
  line-height: 1.6rem;
  background: powderblue;
  overflow: hidden;
  .imgBox {
    position: absolute;
    top: 10%;
    left: 0.7rem;
    img {
      width: 1.3rem;
      height: 1.3rem;
    }
  }
  .message {
    position: absolute;
    left: 2.3rem;
    height: 100%;
    font-size: 0.38rem;
    position: absolute;
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
    .button {
      position: absolute;
      top: 30%;
      right:-1.8rem;
      font-size: .3rem;
      width: 1.5rem;
      height: 0.6rem;
      line-height: 0.6rem;
      border-radius: 10%;
      text-align: center;
      background: #14b9c8;
      color: white;
    }
  }
}
</style>