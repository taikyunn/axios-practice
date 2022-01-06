import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase/app'
import 'firebase/app'
import "firebase/auth"

// const firebaseConfig = {
//   apiKey: "AIzaSyAAnnx_1qPjYVu57aUwl_IlcR9Ozl_GAvw",
//   authDomain: "practice-firebase-auth-e4a76.firebaseapp.com",
//   projectId: "practice-firebase-auth-e4a76",
//   storageBucket: "practice-firebase-auth-e4a76.appspot.com",
//   messagingSenderId: "295491385260",
//   appId: "1:295491385260:web:de94eb1cee8248628fec09",
//   measurementId: "G-36HJMM4SRC"
// };

const firebaseConfig = {
  apiKey: "AIzaSyAAnnx_1qPjYVu57aUwl_IlcR9Ozl_GAvw",
  authDomain: process.env.VUE_APP_AUTH_DOMAIN,
  projectId: process.env.VUE_APP_PROJECT_ID,
  storageBucket: process.env.VUE_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.VUE_APP_MESSAGING_SENDER_ID,
  appId: process.env.VUE_APP_APP_ID,
  measurementId: process.env.VUE_APP_MEASUREMENT_ID,
};
firebase.initializeApp(firebaseConfig);

createApp(App).use(store).use(router).mount('#app')
