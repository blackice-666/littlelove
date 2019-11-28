import Vue from 'vue'
import Router from 'vue-router'
import mine from '../lin/mine.vue'
import purchased from './../hao/purchased'
import Dress from "./../lin/Dress"
 import Setting from "./../lin/Setting"
import Ce from "../../src/lin/Ce.vue"
Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/purchased',
      name:"purchased",
      component: purchased
    },
    {
      path: '/Dress',
      name:"Dress",
      component: Dress
    },
    { 
      path: '/Setting',
      name:"Setting",
      component: Setting
    },
    { 
      path: '/Ce',
      name:"Ce",
      component: Ce
    },
    { 
      path: '/mine',
      name:'mine',
      component: mine
    }
  ]
})
