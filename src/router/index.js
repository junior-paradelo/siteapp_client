import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Login from '../components/Login.vue'
import Seeker from '../components/Seeker.vue'
import Register from '../components/Register.vue'
import LastSites from '../components/LastSites.vue'
import Mapa from '../components/Map.vue'
import SiteDetails from '../components/SiteDetails.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
   path: '/seeker' ,
   name: 'Seeker',
   component: Seeker
  },
  {
    path: '/register',
    name: 'Register',
    component: Register
  },
  {
    path: '/last' ,
    name: 'LastSites',
    component: LastSites
   },
   {
    path: '/map' ,
    name: 'Map',
    component: Mapa
   },
   {
    path: '/details' ,
    name: 'SiteDetails',
    component: SiteDetails
   }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
