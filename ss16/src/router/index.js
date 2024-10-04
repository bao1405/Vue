import { createWebHistory, createRouter } from 'vue-router'

import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import ContactView from '../views/ContactView.vue'
import Register from '../views/Register.vue'
import Login from '../views/Login.vue';
import UserDetail from "@/views/UserDetail.vue";
import ListUser from "@/views/ListUser.vue";

const routes = [
  { path: '/', component: HomeView },
  { path: '/about', component: AboutView },
  { path: '/contact', component: ContactView },
  { path: '/register', component: Register },
  { path: '/login', component: Login },
  { path: "/ListUser",name: "ListUser",component: ListUser,},
  { path: "/user/:id",name: "UserDetail",component: UserDetail,props: true,},
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})