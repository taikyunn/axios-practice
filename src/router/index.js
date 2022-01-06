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

// beforeガードはこれで一旦固定する。
router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    firebase.auth().onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({ name: 'Signin' })
      }
    })
  } else {
    next()
  }
})


export default router
