import { createRouter, createWebHistory } from 'vue-router'
import Home from '~views/home.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home,
    alias: '/home'
  }
]

export const Router = createRouter({
  history: createWebHistory(),
  routes
})
