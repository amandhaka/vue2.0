<template>
  <div>
    <navbar />
      <h1>Login Page</h1>
      <p>{{this.$store.state.isLogin}}</p>
      <p>{{ login }}</p>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
import { mapGetters } from 'vuex'
export default {
  name: 'login',
  components: {
    navbar: navbar
  },
  computed: {
    ...mapGetters(['login'])
  }
}
</script>

<style>

</style>
