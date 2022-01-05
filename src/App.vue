<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/signup" v-if="email == NULL ">新規登録 |</router-link>
    <router-link to="/signin" v-if="email == NULL ">ログイン |</router-link>
    <router-link to="/signout" v-if="email != NULL ">ログアウト |</router-link>
  </div>
  <router-view/>
</template>

<script>

// import firebase from 'firebase/app'
// import 'firebase/app'
// import "firebase/auth"

export default {
  data() {
    return {
      UserInfo: '',
    }
  },
  // created() {
  //   firebase.auth().currentUser.email()
  //   .then(responce => {
  //     this.UserInfo = responce
  //   })
  // },
 }

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
