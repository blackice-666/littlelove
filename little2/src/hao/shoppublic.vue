<template>
<!-- 没有商品显示的页面 -->
  <div class="shoppublic"  v-show="c"> 
    <!-- {{c}} -->
    <slot>
      <img :src="imgs" alt width="100" height="100"/>
      <p>暂无购买记录</p>
    </slot>
  </div>
</template>
<!--/我的主页/-->
<script>
export default {
  name: "shoppublic",
  props:{
    c:{
      defulat:true
    }
  },
  data() {
    return {
      imgs:
        "http://bpic.588ku.com/element_origin_min_pic/01/31/68/94573b4e1f9d684.jpg"
    };
  }
};
</script>

<style lang="less" scoped>

</style>