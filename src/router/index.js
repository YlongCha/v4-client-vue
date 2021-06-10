import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/home.vue'
import GuildInfo from '../views/guild-info'
import HeroInfo from '../views/hero-info'
import ServerInfo from '../views/server-info'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/guild-info',
    name: 'guildInfo',
    component: GuildInfo
  },
  {
    path: '/hero-info',
    name: 'heroInfo',
    component: HeroInfo
  },
  {
    path: '/server-info',
    name: 'serverInfo',
    component: ServerInfo
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
