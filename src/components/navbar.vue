<template>
  <nav class='navbar'>
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
.router-link {
    margin:10 px;
}
</style>
