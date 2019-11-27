<template>
  <!-- 购买记录页 -->
  <div class="purchase">
    <div class="top">
      <!-- 头部页面 -->
      <span @click="toback">&lt;</span>
      <p>{{ shop }}</p>
    </div>
    <div class="classis">
      <!-- 列表分类项 -->
      <ul>
        <li v-for="(item,i) of cla" @click="boks(i)" :key="item.id">{{item}}</li>
      </ul>
    </div>
    <div class="nav">
      <shoppublic :c="found"></shoppublic>
      <!---父传子，过程记录-->
      <bublic :p="list"></bublic>
    </div>
  </div>
</template>
<!--/已购信息/-->
<script>
import shoppublic from "./shoppublic";
import bublic from "./bublic";
import { getBooklist } from "../api";
export default {
  name: "purchased",
  data() {
    return {
      found: true,
      shop: "已购记录",
      cla: ["有声读物", "儿童", "得到"],
      list: []
    };
  },
  components: {
    shoppublic,
    bublic
  },
  methods: {
    boks(i) {
      return getBooklist().then(res => {
        if (i == 0) {
          this.list = res.data.booklist.filter(function(item) {
            return item.Type == "books";
          });
        }
        if (i == 1) {
          this.list = res.data.booklist.filter(function(item) {
            return item.Type == "childs";
          });
        }
        if (i == 2) {
          this.list = res.data.booklist;
        }
        console.log(this.list);
        if (this.list.length > 0) {
          this.found = false;
        }
        console.log(res);
      });
    },
    toback() {
      window.history.go(-1);
    }
  }
};
</script>

<style lang="less" scoped>
* {
  margin: 0;
  padding: 0;
}
.purchase {
  position: relative;
  width: 100%;
}
.top {
  width: 100%;
  height: 40px;
  background: rgb(138, 138, 236);
  line-height: 40px;
  text-align: center;
  position: fixed;
  top: 0;
  left: 0;
  span {
    float: left;
    width: 5%;
    height: 40px;
    font-size: 20px;
    font-weight: bold;
  }
  p {
    float: left;
    width: 95%;
    font-size: 20px;
  }
}
.classis {
  margin-top: 40px;
  ul {
    display: flex;
    flex-direction: row;
    text-align: center;
    li {
      list-style: none;
      flex: 1;
    }
  }
}
.nav {
  width: 100%;
  height: 500px;
  .shoppublic {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    -moz-transform: translate(-50%, -50%);
    -o-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
  }
}
</style>
