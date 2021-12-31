import { createRouter, createWebHashHistory, Router } from 'vue-router'


export const constantRoutes = [
  {
    path: '/',
  }
]

const router: Router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes
})

export default router
