<template>
  <div id="app">
<<<<<<< HEAD
      
    
      <div class="maindiv"><router-view></router-view></div>
    <ourDown></ourDown>
=======
      <ourDown></ourDown>
    <router-view/>
>>>>>>> d5b5d2835b52fbb7929fda78c865239e4d8ff04c
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
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
<<<<<<< HEAD
}
.maindiv{
  margin-bottom: 70px;
}
=======
} */
>>>>>>> d5b5d2835b52fbb7929fda78c865239e4d8ff04c
</style>
