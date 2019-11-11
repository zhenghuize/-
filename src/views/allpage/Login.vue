<template>
  <div class="find">
    <header class="headerBox">
      <van-icon name="cross" class="cha" @click="guan" />
      <p class="deng">登录TapTap</p>
    </header>
    <main class="mainBox">
      <van-cell-group>
        <van-field v-model="username" clearable label="用户名" placeholder="请输入手机号/邮箱账号" />
        <van-field v-model="password" type="password" label="密码" placeholder="请输入密码" clearable />
      </van-cell-group>
      <van-button type="primary" size="large" @click="submit">登录</van-button>
      <br />
      <a href="javascript:;" @click="zhu">还没账号？去注册 ></a>
    </main>
    <footer class="footerBox">
      <span class="one"></span>
      <span class="two">社交账号登录</span>
      <span class="three"></span>
      <div class="qita">
        <van-icon name="alipay" class="zhi" />
        <span class="wei">支付宝</span>
        <van-icon name="wechat" class="weixin" />
        <span class="q">微 信</span>
      </div>
    </footer>
  </div>
</template>

<script>
import { userLogin } from "../../api/user.js";
import md5 from "blueimp-md5";
export default {
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    zhu() {
      location.href = location.origin + "/allpage.html#/Zhuce";
    },
    guan() {
      location.href = location.origin;
    },
    //对用户名进行校验
    checkName() {
      let ary = [
        /^1\d{10}$/,
        /^\w+((-\w+)|(\.\w+))*@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/
      ];
      return ary.some(item => {
        return item.test(this.username);
      });
    },
    //对密码校验
    checkPass() {
      return /^\d{1,16}$/.test(this.password);
    },
    //登录
    submit() {
      if (!this.checkName() || !this.checkPass()) {
        this.$toast("账号密码错误，请稍后重试！");
        return;
      }
      let password = md5(this.password);
      userLogin(this.username, password)
        .then(result => {
          if (parseInt(result.code) === 0) {
            this.$toast("登录成功！");
            location.href = location.origin + "/allpage.html#/Personal";
            return;
          }
        })
        .catch(() => {
          this.$toast("登录失败，请稍后重试!");
        });
    }
  }
};
</script>

<style lang="less" scoped>
.find {
  .headerBox {
    position: relative;
    margin-top: 1rem;
    width: 100%;
    height: 1rem;
    .cha {
      font-size: 0.4rem;
      line-height: 1rem;
      margin-left: 0.3rem;
      font-weight: 200;
    }
    .deng {
      position: absolute;
      top: 0;
      left: 3rem;
      line-height: 1rem;
      font-size: 0.4rem;
      font-weight: 200;
    }
  }
  .mainBox {
    margin-top: 1.5rem;
    margin-bottom: 2.5rem;
    width: 100%;
    .van-button--primary {
      margin-top: 1rem;
      margin-bottom: 0.5rem;
      background: #eee;
      color: black;
      border-radius: 1rem;
      border: none;
      width: 90%;
      margin-left: 0.4rem;
    }
    a {
      font-size: 0.3rem;
      margin-left: 2.3rem;
      color: rgba(0, 176, 191);
    }
  }
  .footerBox {
    position: relative;
    .one {
      position: absolute;
      top: 0.1rem;
      display: inline-block;
      width: 2.9rem;
      border: 0.01rem solid darkgray;
    }
    .two {
      position: absolute;
      left: 3rem;
      top: -0.06rem;
      text-align: center;
      color: darkgray;
    }
    .three {
      position: absolute;
      right: 0;
      top: 0.1rem;
      display: inline-block;
      width: 3rem;
      border: 0.01rem solid darkgray;
    }
    .qita {
      .zhi {
        position: absolute;
        left: 2rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        font-size: 1rem;
      }
      .wei {
        position: absolute;
        left: 2.15rem;
        top: 1.5rem;
      }
      .weixin {
        position: absolute;
        left: 4.5rem;
        top: 0.5rem;
        width: 1rem;
        height: 1rem;
        border-radius: 50%;
        font-size: 1rem;
      }
      .q {
        position: absolute;
        left: 4.7rem;
        top: 1.52rem;
      }
    }
  }
}
</style>
}
</script>
