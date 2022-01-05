import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import firebase from 'firebase/app'
import 'firebase/app'
import "firebase/auth"

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: { requiresAuth: true }
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/signin',
    name: 'SignIn',
    component: () => import('../views/SignIn.vue')
  },
  {
    path: '/signout',
    name: 'SignOut',
    component: () => import('../views/SignOut.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

// homeにアクセスするにはログインが必要になる
router.beforeEach((to, from, next) => {
  let currentUser = firebase.auth().currentUser
  let requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth && !currentUser) {
    next('signin')
  } else if (!requiresAuth && currentUser){
    next()
  } else {
    next()
  }
})


export default router
