<template>
  <div class="box">
    <div class="set">
      <p>用户名：</p>
      <input type="text" v-model="users.id" placeholder="请输入用户名" />
    </div>
    <div class="set">
      <p class="sp">小米账号：</p>
      <input type="number" v-model="users.name" placeholder="请输入账号" />
    </div>

    <br />
    <input type="button" value="保存" @click="cun" />
    <input type="button" value="取消" @click="back"/>
  </div>
</template>

<script>
export default {
  name: "Setting",
  data() {
    return {
      users: {
        id: "",
        name: ""
      }
    };
  },
  methods: {
    cun() {
      if(this.users.id==""||this.users.name==""){
          alert("请输入内容")
      }else{
        this.$store.dispatch("addUsers", this.users);
        this.$router.back(1)
      }
    },
    back(){
      this.$router.back(1)
    }
  }
};
</script>

<style scoped>
.box {
  width: 100%;
}
.set {
  display: block;
  width: 100%;
}
p {
  display: inline-block;
  width: 100px;
  text-align: center;
}
</style>
