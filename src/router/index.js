import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import ContactUs from '../views/Contact-us.vue'
import Faq from '../views/Faq.vue'
import Features from '../views/Features.vue'
import LatestUpdate from '../views/Latest-update.vue'
import Supports from '../views/Supports.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/contact-us',
    name: 'Contact-us',
    component: ContactUs
  },
  {
    path: '/faq',
    name: 'Faq',
    component: Faq
  }
  ,
  {
    path: '/features',
    name: 'Features',
    component: Features
  }
  ,
  {
    path: '/latest-update',
    name: 'Latest-update',
    component: LatestUpdate
  }
  ,
  {
    path: '/supports',
    name: 'Supports',
    component: Supports
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
