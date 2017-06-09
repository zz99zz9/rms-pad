import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/pages/login'
import Index from '@/pages/Index'
import Pay from '@/pages/pay'
import Cancel from '@/pages/cancel'
import Index2 from '@/pages/Index2'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Login
    },{
      path: '/Index',
      component: Index
    },{
      path: '/Pay',
      component: Pay
    },{
      path: '/Cancel',
      component: Cancel
    },{
      path: '/Index2',
      component: Index2
    }
  ]
})
