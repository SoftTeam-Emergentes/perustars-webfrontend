// Composables
import { createRouter, createWebHistory } from 'vue-router'
import PreHome from "@/accountManagement/views/PreHome.vue";

const routes = [
  {
    path: '/',
    name: 'pre-home',
    component: PreHome,
  },
  {
    path: "/about",
    name: "about",
    component: () => import('@/accountManagement/views/About.vue'),
  },
  {
    path: "/sign-in",
    name: "sign-in",
    component: () => import('@/accountManagement/views/SignIn.vue'),
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: () => import('@/accountManagement/views/SignUp.vue')
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
