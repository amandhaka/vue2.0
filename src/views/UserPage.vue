<template>
  <div>
      <navbar />
      <h1>User page</h1>
  </div>
</template>

<script>
import navbar from '@/components/navbar.vue'
export default {
  name: 'user',
  components: {
    navbar: navbar
  },
  mounted () {
    const router = this.$router
    const route = this.$route
    console.log(router)
    console.log(route)
  }
}
</script>

<style>

</style>
