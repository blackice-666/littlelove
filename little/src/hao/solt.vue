<template>
  <div>
    <div class="top">
      <span @click="goblack">&lt;</span>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Top",

  methods: {
    goblack() {
      this.$router.back();
    }
  }
};
</script>

<style lang="less" scoped>
.top {
  width: 100%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background: rgb(138, 138, 236);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  span {
    position: fixed;
    top: 0;
    left: 10px;
  }
}
</style>
