<template>
  <div class="header">
      <slot>默认内容</slot>
      <span>我的</span>
    <i class="iconfont icon-saoma"></i>
  </div>
</template>
<script>
    export default {
        name: "Header"
    }
</script>
<style scoped>
  .header{
    width: 100%;
    height: 30px;
    line-height: 30px;
    margin-bottom: 20px;
  }
  .header span:nth-of-type(1){
    float: left;
  }
  .header span:nth-of-type(2){
    width:90% ;
    text-align: center;
    font-size: 1.5rem;
  }
  .header i{
    font-size: 1.875rem;
    float: right;
  }
</style>
