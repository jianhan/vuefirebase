import Vue from 'vue'
import Router from 'vue-router'
import LayoutsAuth from '@/layouts/Auth'
import PagesLogin from '@/pages/Login'
import PagesDashboard from '@/pages/Dashboard'
import LayoutsAdmin from '@/layouts/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/auth',
      name: 'LayoutsAuth',
      component: LayoutsAuth,
      children: [
        {
          path: 'login',
          component: PagesLogin
        }
      ]
    },
    {
      path: '/admin',
      name: 'LayoutsAdmin',
      component: LayoutsAdmin,
      children: [
        {
          path: 'dashboard',
          component: PagesDashboard
        }
      ]
    }
  ]
})
