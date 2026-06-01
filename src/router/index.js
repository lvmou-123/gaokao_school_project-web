import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '@/stores/user'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/Home.vue'),
  },
  {
    path: '/schools',
    name: 'Schools',
    meta: { requiresAuth: true },
    component: () => import('@/views/Schools.vue'),
  },
  {
    path: '/school/:id',
    name: 'SchoolDetail',
    meta: { requiresAuth: true },
    component: () => import('@/views/SchoolDetail.vue'),
  },
  {
    path: '/majors',
    name: 'Majors',
    meta: { requiresAuth: true },
    component: () => import('@/views/Majors.vue'),
  },
  {
    path: '/ai-chat',
    name: 'AiChat',
    meta: { requiresAuth: true },
    component: () => import('@/views/AiChat.vue'),
  },
  {
    path: '/schools-by-major/:majorId',
    name: 'SchoolsByMajor',
    meta: { requiresAuth: true },
    component: () => import('@/views/SchoolsByMajor.vue'),
  },
  {
    path: '/favorites',
    name: 'Favorites',
    meta: { requiresAuth: true },
    component: () => import('@/views/Favorites.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    if (savedPosition) return savedPosition
    return { top: 0 }
  },
})

router.beforeEach((to, _from, next) => {
  const store = useUserStore()
  if (to.meta.requiresAuth && !store.isLoggedIn) {
    store.openLoginDialog(to.fullPath)
    next(false)
  } else {
    next()
  }
})

export default router
