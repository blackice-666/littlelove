<template>
  <!-- 商品详情json -->
  <div class="bublic">
    <ul>
      <li v-for="(item,index) of p" :key="index">
        <div class="all" @click="todetail(item.Id)">
          <div class="shopimg">
            <!--图片-->
            <a href>
              <img :src="item.Img" title="item.Inoc" width="80" height="100" />
            </a>
          </div>
          <div class="shopnav">
            <!--内容-->
            <div class="shopnav-inoc">
              <p>{{item.Inoc}}</p>
            </div>
            <div class="shopnav-name">
              <p>{{item.Name}}</p>
            </div>
          </div>
          <div class="shopplice">
            <!--价钱-->
            <p>{{item.Pic}}</p>
          </div>
        </div>
        <div class="clear">
          <p @click="tocomment(item.Id)">评价订单</p>
          <p @click="todetail(item.Id)">详情订单</p>
          <p @click="clearn(item.Id)">删除订单</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import { getBooklist } from "../api";
import detail from "./detail";
export default {
  name: "bublic",
  props: ["p"],
  data() {
    return {
      list: []
    };
  },
  components: {
    detail
  },
  created() {
    this.getb();
  },
  methods: {
    clearn(Id) {
      
      this.p = this.p.filter(function(item) {
        return item.Id != Id;
        
      });
      console.log(this.list);
    },
    getb() {
      return getBooklist().then(res => {
        this.list = res.data.booklist;
        console.log(res);
      });
    },
    todetail(Id) {
      this.$router.push({
        name: "detail",
        params: {
          our: Id
        }
      });
      console.log(this.list.index);
    },
    tocomment(Id) {
      this.$router.push({
        name: "comment",
        params: {
          com: Id
        }
      });
      // console.log(this.list.index);
    }
  }
};
</script>

<style lang="less" scoped>
.bublic {
  ul {
    width: 100%;
    li {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      margin-top: 10px;
      padding-left: 10px;
      list-style: none;
      box-sizing: border-box;

      .all {
        width: 100%;
        height: 100px;

        .shopimg {
          float: left;
          width: 30%;
          margin-left: -40px;
        }
        .shopnav {
          float: left;
          width: 50%;
          text-align: center;
          .shopnav-inoc {
            // width: 70%;
            height: 60px;
            // padding-left: 23%;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 2; //显示文字行数。
            overflow: hidden;
          }
        }
        .shopplice {
          float: left;
          width: 20%;
          text-align: center;
        }
      }
      .clear {
        display: flex;
        flex-direction: row;
        float: right;
        // right: 0;
        p {
          // flex: 1;
          // float: right;
          margin-right: 30px;
          // right: 0;
          border: 1px solid #ccc;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
