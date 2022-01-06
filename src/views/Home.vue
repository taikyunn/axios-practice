<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h1>ユーザー名：{{ email }}</h1>
    <button @click="apiPublic">public</button>
    <button @click="apiPrivate">private</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import "firebase/auth"
import axios from 'axios'


export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      email:firebase.auth().currentUser.email,
    }
  },
  methods: {
    apiPublic: async function () {
      let res = await axios.get('http://localhost:8000/public')
      this.msg = res.data
    },
    apiPrivate: async function () {
      let res = await axios.get('http://localhost:8000/private', {
      headers: {'Authorization': `Bearer ${localStorage.getItem('jwt')}`}
      })
      this.msg = res.data
    }
  }
}

</script>
