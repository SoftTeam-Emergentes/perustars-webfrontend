import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'PreHome',
    component: () => import(/* webpackChunkName: "about" */ '../views/PreHome.vue')
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  {
    path: '/home',
    name: 'Home',
    component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import(/* webpackChunkName: "about" */ '../views/Login.vue')
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import(/* webpackChunkName: "about" */ '../views/Register.vue')
  },
  {
    path: '/terms&conditions',
    name: 'TermsAndConditions',
    component: () => import(/* webpackChunkName: "about" */ '../components/terms-and-conditions.vue')
  },
  {
    path: '/artist/:artistId/event/:eventId',
    name: 'Event',
    component: () => import(/* webpackChunkName: "about" */ '../views/Event.vue')
  },
  {
    path: '/artist/:artistId/artwork/:artworkId',
    name: 'Artwork',
    component: () => import(/* webpackChunkName: "about" */ '../views/Artwork.vue')
  },
  {
    path: '/hobbyist/profile',
    name: 'Hobbyist',
    component: () => import(/* webpackChunkName: "about" */ '../views/Hobbyist.vue')
  },
  {
    path: '/artist/:artistId',
    name: 'ArtistProfile',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArtistProfile.vue')
  },
  {
    path: '/artwork/new',
    name: 'ArtworkNew',
    component: () => import(/* webpackChunkName: "about" */ '../components/new-artwork')
  },
  {
    path: '/event/new',
    name: 'EventNew',
    component: () => import('../components/new-event.vue')
  },
  {
    path: '/hobbyist/artworks',
    name: 'HobbyistArtworks',
    component: () => import(/* webpackChunkName: "about" */ '../views/HobbyistFavoriteArtworks')
  },
  {
    path: '/artist/:artistId/event/:eventId/assistance',
    name: 'Assistance',
    component:()=>import(/* webpackChunkName: "about" */'../components/assistance-form.vue')
  },
  {
    path: '*',
    name:'Error404',
    component:()=>import(/* webpackChunkName: "about" */'../components/error404-wildcart.vue')
  },
  {
    path:'/home/artist/profile',
    name:'HomeArtist',
    component:()=>import('../views/ArtistProfileEdit.vue')
  }

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
