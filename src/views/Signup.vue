<template>
  <div class="Signup">
    <table>
      <tr>
        <th>メールアドレス：</th>
      </tr>
      <tr>
        <td><input type="email" placeholder="メールアドレス" v-model="email"></td>
      </tr>
      <tr>
        <th>パスワード：</th>
      </tr>
      <tr>
        <td><input type="password" placeholder="パスワード" v-model="password"></td>
      </tr>
    </table>
    <button @click="signUp">登録する</button>
  </div>
</template>

<script>
import firebase from 'firebase/app'
import 'firebase/app'
import "firebase/auth"

export default {
  data() {
    return {
      email: "",
      password: "",
    }
  },
  methods:{
    signUp() {
      firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      .then(response => {
        alert("ようこそ" + response.user.email + "さん")
        this.$router.push("/")
      }
      )
      .catch (error => {
        console.log(error)
      })
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.signup {
  margin-top: 20px;
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center
}
input {
  margin: 10px 0;
  padding: 10px;
}
button {
  margin: 10px 0;
  padding: 10px;
}
</style>
