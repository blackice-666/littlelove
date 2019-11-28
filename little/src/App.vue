<template>
  <div id="app">
    <router-link to="/my">去到我的页面</router-link>
      <mine></mine>
    <router-view/>
  </div>
</template>

<script>
  import  mine from './lin/mine'
export default {
  name: 'App',
  components:{
    mine
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
