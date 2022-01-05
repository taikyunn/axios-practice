<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <h1>ログイン中のユーザー:{{ email }}</h1>
  </div>
</template>

<script>

// import firebase from 'firebase/app'
// import 'firebase/app'
// import "firebase/auth"

export default {
  name: 'HelloWorld',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App',
      // email: ''
    }
  },
  // created() {
  //   firebase.auth().currentUser.email()
  //   .then(responce => {
  //     console.log(responce)
  //   })
  // },
 }

</script>
