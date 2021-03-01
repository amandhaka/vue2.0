<template>
  <div>
    <navbar />
      <h1>Login Page</h1>
      <ul>
        <li v-for="todo in getTodo" :key="todo.id" :class="String(todo.completed)">{{ todo.title }}</li>
      </ul>
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
    ...mapGetters(['login', 'getTodo'])
  }
}
</script>

<style>
  .false {
    color:red
  }
  .true {
    color:green;
  }
</style>
