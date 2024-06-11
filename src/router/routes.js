import { IconHome, IconCode, IconEdit } from '@arco-design/web-vue/es/icon'

export default [
  {
    path: '/home',
    name: 'home',
    title: '首页',
    icon: IconHome,
    component: () => import('../views/Home.vue')
  },
  {
    path: '/formulaic',
    name: 'formulaic',
    title: '八股文',
    icon: IconEdit,
    component: () => import('../views/formulaic/index.vue')
  },
  {
    path: '/formulaic/detail',
    name: 'formulaic-detail',
    component: () => import('../views/formulaic/detail.vue')
  },
  {
    path: '/compute',
    name: 'compute',
    title: '算法',
    icon: IconCode,
    component: () => import('../views/compute/index.vue')
  },
  {
    path: '/compute/:id',
    name: 'compute-detail',
    component: () => import('../views/compute/detail.vue')
  }
]
