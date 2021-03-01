<template>
  <nav class='navbar'>
      <a href="/">Product</a>
      <a href="/user/:username">User</a>
      <a href="/login">Login</a>

      <router-link to="/">Product</router-link>
      <router-link to="/user/:username">User</router-link>
      <router-link to="/login">login</router-link>
      <button @click="clicked">Clickme</button>
  </nav>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'navbar',
  methods: {
    ...mapActions(['setLoginAction']),
    clicked () {
      this.setLoginAction('New Value')
    }
  }
}
</script>
<style>
.navbar {
    height: 50px;
    background-color: aqua;
    width: 100vw;
    text-align: center;
}
a{
    margin:10px;
}
</style>
