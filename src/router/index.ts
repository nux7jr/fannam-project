import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'index',
    meta: { title: 'home page', layout: 'default' },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/about',
    name: 'about',
    meta: { title: 'about', layout: 'second' },
    component: () => import('@/pages/about.vue')
  }
]
const router = createRouter({
  history: createWebHistory('/'),
  routes
})

const _DEFAULT_TITLE = 'Fannam';

router.beforeEach((to: { meta: { title: string; }; }, _from: any, next: () => void) => {
  document.title = to.meta.title || _DEFAULT_TITLE;
  next();
});

export default router