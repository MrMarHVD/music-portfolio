import { createRouter, createWebHistory } from 'vue-router'
import MainPage from '@/components/MainPage.vue'
import PortfolioPage from '@/components/PortfolioPage.vue'
import ContactPage from '@/components/ContactPage.vue'
import AboutPage from '@/components/AboutPage.vue'

const routes = [
  {
    path: '/music-portfolio',
    name: 'Home',
    component: MainPage
  },
  {
    path: '/music-portfolio/portfolio',
    name: 'Portfolio',
    component: PortfolioPage
  },
  {
    path: '/music-portfolio/about',
    name: 'About',
    component: AboutPage
  },
  {
    path: '/music-portfolio/contact',
    name: 'Contact',
    component: ContactPage
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router