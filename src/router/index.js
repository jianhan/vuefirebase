import Vue from 'vue'
import Router from 'vue-router'
import LayoutsAuth from '@/layouts/Auth'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'LayoutsAuth',
      component: LayoutsAuth
    }
  ]
})
