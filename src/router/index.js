import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'
import Availability from '@/views/Availability.vue'
import PricingPackage from '@/views/PricingPackage.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: 'portfolio',
        name: 'Portfolio',
        component: Portfolio
      },
      {
        path: 'availability',
        name: 'Availability',
        component: Availability
      },
      {
        path: 'pricing-package/:details?',
        name: 'Pricing Package',
        component: PricingPackage
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
