<template>
    <div class="routers" @click="dis">
  <router-link to = "/my">点击我进入设置</router-link>
</div>
</template>
<!--/我的主页/-->
<script>


    export default {
        name: "mine",
        methods:{
          dis(){
            console.log(this)
            document.getElementsByClassName("routers")[0].style.display="none"
          }
        }
    }
</script>

<style scoped>

</style>
