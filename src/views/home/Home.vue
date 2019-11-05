<template>
  <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
  <p >刷新次数: {{ count }}</p>

  <van-list
  v-model="loading"
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell
    v-for="item in list"
    :key="item"
    :title="item"
  />
</van-list>

</van-pull-refresh>

</template>

<script>
// import { createNamespacedHelpers } from "vuex";
// const { mapState, mapActions } = createNamespacedHelpers("shouye");
export default {
  data() {
    return {
      count: 0,
      isLoading: false,
      list: [],
      loading: false,
      finished: false
    }
  },

  methods: {
    onRefresh() {
      setTimeout(() => {
        this.$toast('刷新成功');
        this.isLoading = false;
        this.count++;
      }, 500);
    },
    onLoad() {
      // 异步更新数据
      setTimeout(() => {
        for (let i = 0; i < 10; i++) {
          this.list.push(this.list.length + 1);
        }
        // 加载状态结束
        this.loading = false;

        // 数据全部加载完成
        if (this.list.length >= 40) {
          this.finished = true;
        }
      }, 500);
    }
  }
}
</script>

<style scoped >
p{
    font-size: 0.5rem;
}
.van-pull-refresh{
    z-index: 999;}
.box{
    height: 6rem;
    background: lightcoral;
}
</style>