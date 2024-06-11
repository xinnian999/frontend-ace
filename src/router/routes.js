export default [
  {
    path: '/home',
    name: 'home',
    title: '首页',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/compute',
    name: 'compute',
    title: '算法',
    component: () => import('../views/compute/index.vue')
  },
  {
    path: '/compute/:id',
    name: 'compute-detail',
    component: () => import('../views/compute/detail.vue')
  }
]
