<template>
  <div>
    <p>{{dres.sheng}} {{dres.shi}} {{dres.qu}}</p>
    <div>
      <v-distpicker
        @province="onChangeProvince"
        @city="onChangeCity"
        @area="onChangeArea"
      ></v-distpicker>
    </div>
    <input type="button" value="保存" @click="cun" />
    <input type="button" value="取消" @click="back" />
  </div>
</template>
    <script>
import VDistpicker from "v-distpicker";
export default {
  data() {
    return {
      dres: {
        sheng: "",
        shi: "",
        qu: ""
      }
    };
  },
  components: { VDistpicker },
  methods: {
    onChangeProvince(a) {
      this.dres.sheng = a.value;
    },
    onChangeCity(a) {
      this.dres.shi = a.value;
    },
    onChangeArea(a) {
      this.dres.qu = a.value;
    },
    cun() {
      this.$store.dispatch("addDres", this.dres);
      this.$router.back(1);
    },
    back() {
      this.$router.back(1);
    }
  }
};
</script>
<style scoped>

</style>>
