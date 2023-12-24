import { createRouter, createWebHistory } from 'vue-router'
import { getToken } from '@/utils/auth';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'auth',
      component: () => import('../views/Auth.vue')
    },
    {
      path: '/registration',
      name: 'registration',
      component: () => import('../views/Registration.vue')
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue')
    }
  ]
})

router.beforeEach((to, from, next) => {
  if (!getToken() && to.name !== 'auth' && to.name !== 'registration') {
    return next({ name: 'auth' });
  }

  return next();
});

export default router
