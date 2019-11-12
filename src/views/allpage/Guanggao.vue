<template>
  <div class="container">
    <img :src="img" alt />
    <div class="tiao" @click="tiao">
      <span>{{num}}秒</span> 跳过
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      img: require("../../assets/guang.jpeg"),
      num: 5
    };
  },
  methods: {
    tiao() {
        location.href ="http://localhost:8080/#/Home";
    }
  },
  created() {
    setInterval(() => {
      this.num -= 1;
      if (this.num === 0) {
        location.href ="http://localhost:8080/#/Home"; }
    }, 1000);
  }
};
</script>

<style lang="less" scoped>
.container {
  position: relative;
  // top: -1rem;
  width: 100%;
  height: 120%;
  z-index: 999;
  img {
    width: 100%;
    height: 100%;
  }
  .tiao {
    position: absolute;
    top: 0.3rem;
    right: 0.3rem;
    padding: 0.05rem;
    font-size: 0.18rem;
    color: #000;
    background: #ffffff;
    border-radius: 0.3rem;
  }
}
</style>