import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import PortfolioPage from '@/components/PortfolioPage.vue'


const routes = [
  {
    path: '/',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: PortfolioPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router