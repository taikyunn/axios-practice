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
    <button @click="signIn">ログイン</button>
    <p>新しくアカウントを作成</p>
    <router-link to="/signIn">新規登録</router-link>
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
    signIn() {
      firebase.auth().signInWithEmailAndPassword(this.email, this.password)
      .then(
        response => {
          response.user.getIdToken().then(idToken => {
            localStorage.setItem('jwt',idToken.toString())
          })
          alert('ログインできました。!')
          this.$router.push('/')
        },
        err => {
          alert(err.message)
        }
      )
    }
  }
}
</script>
