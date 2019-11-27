<template>
  <div class="comment">
    <solt>
      <div>{{msg}}</div>
    </solt>
    <div class="commentImg">
      <img :src="remark.Img" alt height="150" />
    </div>
    <div class="commentName">
      <p>{{remark.Name}}</p>
    </div>
    <hr />

    <div class="mui-input">
      <p>评价：</p>
      <textarea cols="50" rows="8" name="textarea" id="textarea" v-model="commentNav"></textarea>
      <button type="button" @click="gettext">获取</button>
    </div>
  </div>
</template>

<script>
import { getBooklist } from "../api";

import Cookies from "../../node_modules/js-cookie";
import solt from "./solt";
import detail from "./detail";
export default {
  name: "comment",
  data() {
    return {
      // remark:评论
      remark: {},
      msg: "评价晒单",
      commentNav: []
    };
  },
  components: {
    solt,
    detail
  },
  created() {
    this.getRouterData();
  },
  methods: {
    getRouterData() {
      return getBooklist().then(res => {
        this.remark = res.data.booklist[this.$route.params.com];
        console.log(res);
      });
    },
    gettext() {
      let cookie = Cookies.get("name");
      cookie = cookie == undefined ? [] : JSON.parse(cookie);
      let i = Math.random().toString(36).substr(2).slice(1,7);
      let taday = new Date();
      let  mytime=taday.toLocaleTimeString(); //获取当前时间 
      this.$router.push({name:"detail",params:{ our: this.$route.params.com}})
      console.log(i);

      
      
      console.log(cookie);
      var strs = {
        name: i, //随机名字
        time: mytime, //随机时间
        main: this.commentNav
      };

      cookie.unshift(strs);
      Cookies.set("name", JSON.stringify(cookie), { expires: 7 });
    }
  }
};
</script>

<style lang="less" scoped>
.commentImg {
  margin-top: 25px;
  .mui-input {
    textarea {
      resize: none;
    }
  }
}
</style>
