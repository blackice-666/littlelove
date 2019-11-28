// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Vuex from 'vuex'
Vue.use(Vuex);


Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{
    yonghu:{id:"花生",name:"123456789"}
  },
  mutations:{
    addUsers(_state,val){
      this.state.yonghu=val
      console.log(this.state.yonghu);
    }
  },
  actions:{
    addUsers(context,s){
      context.commit('addUsers',s);
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
