<template>
  <div id="app">
      
    
      <div class="maindiv"><router-view></router-view></div>
    <ourDown></ourDown>
  </div>
</template>

<script>
 import ourDown from "./base/ourDown";
export default {
  name: 'App',
  components:{
    ourDown
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
.maindiv{
  margin-bottom: 70px;
}
</style>
