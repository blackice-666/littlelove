<template>
  <div class="down">
    <router-link tag="li" to="/Home">
      <i class="iconfont icon-shouye"></i>首页
    </router-link>
    <router-link tag="li" to="/List">
      <i class="iconfont icon-icon--"></i>列表
    </router-link>
    <router-link tag="li" to="/purchased">
      <i class="iconfont icon-gouwu"></i>购物
    </router-link>
    <router-link tag="li" to="/mine">
      <i class="iconfont icon-wode"></i>个人
    </router-link>
  </div>
</template>
<script>
export default {
  name: "ourDown",
  mounted(){this.atc()},
  methods: {
    atc() {
      let active = document.querySelectorAll(".down li");
      console.log(active)
  }
  }
};
</script>
<style lang="less" scoped>
@w: 100%;
// .active{
//     color: #red;
//     background: red
// }
.down {
  width: @w;
  position: fixed;
  bottom: 0px;
  left: 0;
  text-align: center;
  font-size: 20px;
  //   background: #cccccc;
  z-index: 10;
  display: flex;
  li {
    flex: 1;
    list-style: none;
    display: flex;
    flex-direction: column;
    i {
      font-size: 25px;
    }
  }
}
</style>