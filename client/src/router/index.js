import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'home',
  //   component: () => import('../components/List')
  // },
  {
    path: '/view',
    name: 'view',
    component: () => import('../components/List')
  },
  {
    path: '/edit/:id',
    name: 'edit',
    component: () => import('../components/Edit')
  },
  {
    path: '/help',
    name: 'help',
    component: () => import('../components/Help'),

  },
  {
    path: '/',
    name: 'landing',
    component: () => import('../components/Home'),

  },
  {
    path: '/orders',
    name: 'orders',
    component: () => import('../components/Orders'),

  },
   {
     path: '/customers',
    name: 'customers',
     component: () => import('../components/Customers'),

  },
  {
    path: '/edit-customer/:id',
   name: 'viewcustomers',
    component: () => import('../components/ViewCustomer'),

 },
 {
  path: '/orderreports',
 name: 'reports',
  component: () => import('../components/OrderReports'),

}
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
