// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
<<<<<<< HEAD
import Vuex from 'vuex'
Vue.use(Vuex);
=======


>>>>>>> d5b5d2835b52fbb7929fda78c865239e4d8ff04c
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{// 存放状态
      yonghu:{id:"花生",name:"123456789"},
      dizhi:{sheng:"北京市",shi:"北京城区",qu:"海淀区"}
  },
  mutations:{// 更改状态的逻辑，同步操作
    addUsers(_state,val){
      this.state.yonghu=val
    },
    addDres(_state,val){
      this.state.dizhi=val
    }
  },
  actions:{//提交mutation，异步操作
    addUsers(context,s){
      context.commit('addUsers',s);
    },
    addDres(context,s){
      context.commit('addDres',s);
    }
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
