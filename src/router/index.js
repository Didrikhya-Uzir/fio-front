import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import ShoppingHome from '../views/ShoppingHome.vue'
import AllProductList from '../views/AllProductList.vue'
import Authenticate from '../views/Authenticate.vue'

import ServiceHome from '../views/ServiceHome.vue'
import ShopProfileBuyer from '../views/ShopProfileBuyer.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/shopping',
    name: 'ShoppingHome',
    component: ShoppingHome
  },
  {
    path: '/products',
    name: 'AllProductList',
    component: AllProductList
  },
  {
    path: '/authenticate',
    name: 'Authenticate',
    component: Authenticate
  },
  {
    path: '/service',
    name: 'ServiceHome',
    component: ServiceHome
  },
  {
    path: '/ShopProfile',
    name: 'ShopProfileBuyer',
    component: ShopProfileBuyer
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
