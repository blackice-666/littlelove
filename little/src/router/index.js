import Vue from 'vue'
import Router from 'vue-router'
import purchased from './../hao/purchased'
import my from '../wst/my'
Vue.use(Router)

export default new Router({
  routes: [
    {path: '/purchased', name: 'purchased', component: purchased},
    {path:'/my',name:'my',component:my},

  ]
})
