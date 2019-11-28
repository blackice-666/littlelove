<template>
<<<<<<< HEAD
  <div id="box">
    <Header></Header>
    <div class="top">
      <img src="../../static/img/qie.jpg" height="392" width="524" />
      <div v-for="(item,index) in myUser" :key="index">
        <p>{{ item.id }}</p>
        <p>小米账号：{{ item.name }}</p>
      </div>
      <i class="iconfont icon-arrow-right"></i>
=======
    <div class="routers">
        <router-link to = "/purchased">已购商品</router-link>
>>>>>>> d5b5d2835b52fbb7929fda78c865239e4d8ff04c
    </div>
    <div>
      <ul class="menu">
        <li v-for="item in img">
          <router-link :to="{name: item.path}">
            <img :src="item.mg" />
            {{ item.name }}
            <i class="iconfont icon-arrow-right"></i>
          </router-link>
        </li>
      </ul>
    </div>
    <p>小米音箱APP版本：V2.2.10 | 稳定版</p>
     <!-- {{ myUser }} -->
  </div>
</template>
<!-- 我的主页 -->
<script>
<<<<<<< HEAD
import Header from "./Header";
export default {
  name: "mine",
  data() {
    return {
      name: "化生",
      tel: "123456789",
      img: [
        {
          path: "purchased",
          mg: "../../static/img/jilu.png",
          name: "已购记录"
        },
        {
          path: "Dress",
          mg: "../../static/img/dress.png",
          name: "地区"
        },
        {
          path: "Ce",
          mg: "../../static/img/ce.png",
          name: "用户手册"
        },
        {
          path: "Setting",
          mg: "../../static/img/shezhi.png",
          name: "设置"
        },
        {
          mg: "../../static/img/icon_bluetooth.png",
          name: "蓝牙设置"
        },
        {
          mg: "../../static/img/icon_car.png",
          name: "地址与出行信息"
        },
        {
          mg: "../../static/img/icon_qq.png",
          name: "QQ音乐"
        },
        {
          mg: "../../static/img/icon_night_mode.png",
          name: "夜间模式"
        },
      ]
    };
  },
  computed:{
    myUser(){
      return {
         myUser:this.$store.state.yonghu
      } 
=======
    export default {
        name: "mine",
>>>>>>> d5b5d2835b52fbb7929fda78c865239e4d8ff04c
    }
  },
  components: {
    Header
  },
};
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  text-decoration: none;
  color: #000;
}
#box {
  width: 100%;
}
.top {
  display: flex;
  width: 100%;
  height: 6rem;
  text-align: left;
}
.top img:nth-of-type(1) {
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 100%;
  margin-right: 10px;
}
.top i {
  position: absolute;
  right: 10px;
  font-size: 30px;
  margin-top: 20px;
}
.top div p {
  font-size: 0.8rem;
  line-height: 2.5rem;
  width: 150px;
}
li {
  list-style: none;
}
.menu {
  width: 100%;
}
.menu li {
  display: flex;
  margin: 20px 0;
  line-height: 30px;
}
.menu li img:nth-of-type(1) {
  width: 30px;
  height: 30px;
  margin-right: 20px;
  margin-bottom: -10px;
}
.menu li i {
  font-size: 30px;
  position: absolute;
  right: 10px;
  color: red;
}
</style>
    