<template>
  <div id="app">
      <ourDown></ourDown>
    <router-view/>
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
} */
</style>
