import Vue from 'vue'
import Router from 'vue-router'
import mine from '../lin/mine.vue'
import purchased from '../hao/purchased.vue'
import Dress from "../lin/Dress.vue"
 import Setting from "./../lin/Setting"
import Ce from "../../src/lin/Ce.vue"
import shoppublic from './../hao/shoppublic'
import bublic from './../hao/bublic'
import detail from './../hao/detail'
import comment from './../hao/comment'

Vue.use(Router)
export default new Router({
  routes: [
    {
      path: '/',
      name:"purchased",
      component: purchased
    },
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
      component: mine
    },
    {
      path: '/shoppublic',
      name: 'shoppublic',
      component: shoppublic
    },
    {
      path: '/bublic',
      name: 'bublic',
      component: bublic
    },
    {
      path: '/detail/:our',
      name: 'detail',
      component: detail
    },
    {
      path: '/comment/:com',
      name: 'comment',
      component: comment
    }
  ]
})
