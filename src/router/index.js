import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import Portfolio from '@/views/Portfolio.vue'
import Availability from '@/views/Availability.vue'
import PackageList from '@/views/PackageList.vue'
import PackageDetails from '@/views/PackageDetails.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '',
        name: 'Home',
        component: Portfolio
      },
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
        path: 'pricing-packages',
        name: 'Pricing Packages',
        component: PackageList
      },
      {
        path: 'pricing-packages/:id',
        name: 'Pricing Package',
        component: PackageDetails
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
