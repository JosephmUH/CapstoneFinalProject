import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../components/List')
  },
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

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
