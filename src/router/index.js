import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/cakes',
    component: () => import('../views/Сakes.vue')
  },
  {
    path: '/filling',
    component: () => import('../views/Filling.vue')
  },
  {
    path: '/delivery',
    component: () => import('../views/Delivery.vue')
  },
  {
    path: '/contact',
    component: () => import('../views/Contact.vue')
  },
  { path: '/:any', component:import('../views/404.vue')},
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})
export default router