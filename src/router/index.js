import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login') // index.vue会省略
  },
  {
    path: '/',
    name: 'layout',
    component: () => import('@/views/layout'), // index.vue会省略
    children: [
      {
        path: '/home', // 默认子路由为空，只能1个
        name: 'home',
        component: () => import('@/views/home') // index.vue会省略
      },
      {
        path: '/qa',
        name: 'qa',
        component: () => import('@/views/qa') // index.vue会省略
      },
      {
        path: '/video',
        name: 'video',
        component: () => import('@/views/video') // index.vue会省略
      },
      {
        path: '/my',
        name: 'my',
        component: () => import('@/views/my') // index.vue会省略
      },
      { path: '/', redirect: '/home' }
    ]
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
