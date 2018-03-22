import Vue from 'vue'
import Router from 'vue-router'
import LayoutsAuth from '@/layouts/Auth'
import PagesLogin from '@/pages/Login'
import PagesDashboard from '@/pages/Dashboard'
import LayoutsAdmin from '@/layouts/Admin'
import PagesAdminAddCourse from '@/pages/admin/AddCourse'
import PagesAdminListCourses from '@/pages/admin/ListCourses'

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
          name: 'PagesDashboard',
          component: PagesDashboard
        },
        {
          path: 'courses',
          name: 'PagesAdminListCourses',
          component: PagesAdminListCourses,
          children: [
            {
              path: 'add',
              name: 'PagesAdminAddCourse',
              component: PagesAdminAddCourse
            }
          ]
        }
      ]
    }
  ]
})
