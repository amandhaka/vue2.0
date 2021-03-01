<template>
  <div>
    <navbar />
      <h1>Login Page</h1>
      <p>{{ $store.getters.login }}</p>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'login',
  components: {
    navbar: navbar
  }
}
</script>

<style>

</style>
