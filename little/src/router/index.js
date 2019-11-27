import Vue from 'vue'
import Router from 'vue-router'
import purchased from './../hao/purchased'
import shoppublic from './../hao/shoppublic'
import bublic from './../hao/bublic'
import detail from './../hao/detail'
import comment from './../hao/comment'

Vue.use(Router)

export default new Router({
  routes: [

    {
      path: '/purchased',
      name: 'purchased',
      component: purchased
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
