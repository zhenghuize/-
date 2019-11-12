<template>
  <div class="find">
    <header class="headerBox">
      <div class="top">
        <van-icon name="arrow-left" class="left" @click="tui" />
        <span class="bian">编辑资料</span>
        <span class="bao" @click="bao">保存</span>
      </div>
      <div class="bottom">
        <div class="tou">
          <img :src="icon" alt />
        </div>
      </div>
    </header>
    <footer class="footerBox">
      <van-cell-group>
        <van-field v-model="username" clearable label="昵称：" placeholder="请输入昵称" />
        <van-field v-model="desc" clearable label="个人简介：" placeholder="输入一句话简介" />
        <van-field v-model="phone" label="手机号：" placeholder="请输入手机号" />
        <van-field v-model="email" label="邮箱：" placeholder="请输入邮箱账号" />
        <van-field v-model="sex" label="性别：" />
      </van-cell-group>
      <van-button type="info" @click="xiu">修改密码</van-button>
    </footer>
    <van-dialog v-model="show" title="请输入新密码" show-cancel-button @confirm="ti" @cancel='qu'>
      <van-field v-model="password" placeholder="请输入新密码(1~16位数字)" />
    </van-dialog>
  </div>
</template>

<script>
import md5 from "blueimp-md5";
import { updateInfo, userInfo, xiuPass } from "../../api/user.js";
export default {
  data() {
    return {
      show: false,
      sex: "男",
      icon: "",
      username: "",
      desc: "",
      phone: "",
      email: "",
      password: "",
      id: null
    };
  },
  methods: {
    xiu() {
      this.show = true;
    },
    qu(){
this.password='';
    },
    ti() {
      let reg = /^\d{1,16}$/;
      if(!reg.test(this.password)){
        this.$toast("密码格式错误，请输入正确格式！");
        this.password='';
        return;
      }
      let pass = md5(this.password);
      xiuPass(this.id, pass).then(result => {
        if (parseInt(result.code) === 0) {
          this.$toast("密码修改成功，即将跳往登录页！");
          location.href = location.origin + "/allpage.html";
        }
      });
    },
    bao() {
      let obj = {
        id: this.id,
        username: this.username,
        phone: this.phone,
        email: this.email,
        introduce: this.desc
      };
      updateInfo(obj)
        .then(result => {
          if (parseInt(result.code) === 0) {
            this.$toast("修改成功，即将跳往个人首页");
            location.href = location.origin + "/#/Personal";
          }
        })
        .catch(() => {
          this.$toast("修改失败，请稍后再试！");
        });
    },

    tui() {
      location.href = location.origin + "/#/Personal";
    }
  },
  created() {
    userInfo().then(result => {
      if (parseInt(result.code) === 0) {
        let info = result.data;
        let [{ id, name, introduce, icon, phone, email }] = info;
        this.username = name;
        this.desc = introduce;
        this.icon = icon;
        this.phone = phone;
        this.email = email;
        this.id = id;
      }
    });
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
      img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
      }
    }
  }
}
.footerBox {
  .van-cell {
    box-sizing: border-box;
    padding-top: 0.5rem;
  }
  .van-button {
    width: 100%;
    margin-top: 0.2rem;
  }
}
</style>