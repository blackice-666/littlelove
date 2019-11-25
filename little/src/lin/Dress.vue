<template>
<div>
  <p>{{sheng}}  {{shi}} {{qu}}</p>
  <div class="box">
    <v-distpicker @province="onChangeProvince" @city="onChangeCity" @area="onChangeArea" class="vv">
  </v-distpicker>
  </div>
</div>
 
</template>
    <script>
import VDistpicker from "v-distpicker";
export default {
  data(){
    return{
      sheng:"",
      shi:"",
      qu:""
    }
  },
  components: { VDistpicker },
  methods: {
    onChangeProvince(a) {
     this.sheng=a.value
    },

    onChangeCity(a) {
     this.shi=a.value
    },

    onChangeArea(a) {
      this.qu=a.value
    }
  }
};
</script>
<style scoped>
 .box{
    display: flex
  }
  .vv{
    flex: 1
  }
</style>>
