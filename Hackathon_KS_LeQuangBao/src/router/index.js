import { createWebHistory, createRouter } from 'vue-router'

import Dashboard from '../views/Dashboard.vue'
import Product from '../views/Manager-Product.vue'
import User from '../views/Manager-User.vue'

const routes = [
  { path: '/admin', component: Dashboard },
  { path: '/admin/manager-product', component: Product },
  { path: '/admin/manager-user', component: User },

]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})