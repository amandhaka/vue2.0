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
export default {
  name: 'navbar',
  methods: {
    clicked () {
      this.$store.dispatch('setLoginAction', 'NEW VALUE')
    }
  }
}
</script>
<style>
.navbar {
    height: 50px;
    background-color: aqua;
    width: 100vw;
}
a{
    margin:10px;
    margin-top:10px;
}
</style>
