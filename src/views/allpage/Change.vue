<template>
  <div class="find">
    <header class="headerBox">
      <div class="top">
        <van-icon name="arrow-left" class="left" />
        <span class="bian">编辑资料</span>
        <span class="bao">保存</span>
      </div>
      <div class="bottom">
        <div class="tou"></div>
      </div>
    </header>
    <footer class="footerBox">
      <van-cell-group>
        <van-field v-model="username" clearable label="昵称：" placeholder="请输入昵称" />
        <van-field v-model="desc" clearable label="个人简介：" placeholder="输入一句话简介" />
        <van-field v-model="phone" label="手机号：" placeholder="请输入手机号" />
        <van-field v-model="password" type="password" label="修改密码：" placeholder="请输入新密码" />
      </van-cell-group>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "",
      desc: "",
      phone: "",
    };
  }
};
</script>

<style lang="less" scoped>
.headerBox {
  width: 100%;
  color: #ffffff;
  background: rgba(0, 176, 191);
  .top {
    position: relative;
    .left {
      line-height: 1rem;
      margin-left: 0.2rem;
      font-size: 0.4rem;
    }
    .bian {
      position: absolute;
      top: 50%;
      left: 3rem;
      transform: translateY(-50%);
      font-size: 0.4rem;
    }
    .bao {
      position: absolute;
      top: 50%;
      right: 0.5rem;
      transform: translateY(-50%);
      font-size: 0.3rem;
    }
  }
  .bottom {
    position: relative;
    width: 100%;
    height: 3.5rem;
    background: #eeeeee;
    .tou {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 2rem;
      height: 2rem;
      border-radius: 50%;
      background: pink;
    }
  }
}
.footerBox {
  .van-cell {
    box-sizing: border-box;
    padding-top: 0.5rem;
  }
}
</style>
