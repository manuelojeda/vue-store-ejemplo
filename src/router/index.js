import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Character from '../views/Character.vue'

const routes = [
  {
    component: Home,
    path: '/'
  },
  {
    component: Character,
    path: '/character/:id'
  },
]

const router = createRouter({
  routes,
  history: createWebHistory()
})

export default router
