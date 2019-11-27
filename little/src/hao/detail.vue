<template>
  <!-- 商品详情页 -->
  <div class="detail">
    <div class="carouselImg">
      <img :src="currentItem.Img" alt height="150" />
    </div>
    <!--商品详情轮播-->
    <div class="carouselPrice">
      <p>￥{{ currentItem.Pic }}</p>
    </div>
    <div class="carouselWord">
      <p>{{ currentItem.Inoc }}</p>
    </div>
    <!-- 商品评价 -->
    <div class="comment">
      <div class="top">
        <p class="p1">评价</p>
        <p class="p2">共&nbsp;{{ num }}&nbsp;条&gt;</p>
      </div>
      <hr />
      <div class="nav">
        <div class="navComment" v-for="(item, index) of navWord" :key="index">
          <!-- 评语 -->
          <div class="time">
            <p>{{ item.name }}</p>
            <p>{{ item.time }}</p>
          </div>
          <div class="menus">
            <p>{{ item.main }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<!--/我的主页/-->
<script>
import { getBooklist } from "../api";
import Cookies from "../../node_modules/js-cookie";
export default {
  name: "detail",
  data() {
    return {
      currentItem: {},
      num: "1",
      navWord: []
    };
  },
  created() {
    this.getRouterData();
    this.getCookie();
  },
  methods: {
    getRouterData() {
      return getBooklist().then(res => {
        this.currentItem = res.data.booklist[this.$route.params.our];
        console.log(res);
      });
    },
    getCookie() {
      let a = Cookies.get("name");
      this.navWord = a == undefined ? [] : JSON.parse(a);
    }
  }
};
</script>

<style lang="less" scoped>
.detail {
  .carouselImg {
    position: relative;
    width: 100%;
    height: 200px;
    img {
      position: absolute;
      top: 50%;
      left: 50%;
      -ms-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
  }
  .comment {
    width: 95%;
    margin: 0 auto;
    height: 100px;
    // border: 1px solid #ccc;
    // clear: both;
    hr {
      width: 100%;
    }
    .top {
      .p1 {
        float: left;
      }
      .p2 {
        float: right;
      }
    }
    .time {
      width: 100%;
      p {
        float: left;
        width: 50%;
      }
    }
    .menus {
      width: 100%;
      text-indent: 1em;
    }
  }
}
</style>
