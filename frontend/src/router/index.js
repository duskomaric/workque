import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/Home.vue'),
      meta: {
        pageTitle: 'Home',
        breadcrumb: [
          {
            text: 'Home',
            active: true,
          },
        ],
      },
    },
    {
      path: '/second-page',
      name: 'second-page',
      component: () => import('@/views/SecondPage.vue'),
      meta: {
        pageTitle: 'Second Page',
        breadcrumb: [
          {
            text: 'Second Page',
            active: true,
          },
        ],
      },
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('@/views/Login.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '/error-404',
      name: 'error-404',
      component: () => import('@/views/error/Error404.vue'),
      meta: {
        layout: 'full',
      },
    },
    {
      path: '*',
      redirect: 'error-404',
    },
      // *===============================================---*
      // *--------- USER ---- ------------------------------*
      // *===============================================---*
      {
          path: '/apps/users/list',
          name: 'apps-users-list',
          component: () => import('@/views/apps/user/users-list/UsersList.vue'),
      },
      {
          path: '/apps/users/view/:id',
          name: 'apps-users-view',
          component: () => import('@/views/apps/user/users-view/UsersView.vue'),
      },
      {
          path: '/apps/users/edit/:id',
          name: 'apps-users-edit',
          component: () => import('@/views/apps/user/users-edit/UsersEdit.vue'),
      },

      // Invoice
      {
          path: '/apps/invoice/list',
          name: 'apps-invoice-list',
          component: () => import('@/views/apps/invoice/invoice-list/InvoiceList.vue'),
      },
      {
          path: '/apps/invoice/preview/:id',
          name: 'apps-invoice-preview',
          component: () => import('@/views/apps/invoice/invoice-preview/InvoicePreview.vue'),
      },
      {
          path: '/apps/invoice/add/',
          name: 'apps-invoice-add',
          component: () => import('@/views/apps/invoice/invoice-add/InvoiceAdd.vue'),
      },
      {
          path: '/apps/invoice/edit/:id',
          name: 'apps-invoice-edit',
          component: () => import('@/views/apps/invoice/invoice-edit/InvoiceEdit.vue'),
      },
  ],
})

export default router
