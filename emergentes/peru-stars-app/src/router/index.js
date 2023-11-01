import { createRouter, createWebHistory } from 'vue-router'

import Welcome from "@/accountManagement/views/Welcome.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'welcome',
      component: Welcome
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('@/accountManagement/views/About.vue')
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: () => import('@/accountManagement/views/SignIn.vue')
    },
    {
      path: '/sign-up',
      name: 'sign-up',
      component: () => import('@/accountManagement/views/SignUp.vue')
    }
  ]
})

export default router
