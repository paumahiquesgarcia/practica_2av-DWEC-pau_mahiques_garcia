import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import(/* webpackChunkName: "about" */ '../components/inicio.vue')
  },
  {
    path: '/tasques',
    name: 'tasques',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../components/llista_tasques.vue')
  },
  {
    path: '/tasca/:id',
    name: 'tasca',
    component: () => import( '../components/tasca.vue')
  },
  {
    path: '/novatasca',
    name: 'NovaTasca',
    component: () => import('../components/nova_tasca.vue')
  },
  {
    path: '/editatasca/:id',
    name: 'EditaTasca',
    component: () => import('../components/edita_tasca.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router