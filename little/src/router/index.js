import Vue from 'vue'
import Router from 'vue-router'
import purchased from './../hao/purchased'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/purchased',
      name: 'purchased',
      component: purchased
    }
  ]
})
