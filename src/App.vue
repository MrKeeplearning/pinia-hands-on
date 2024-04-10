<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useAuthStore } from '@/stores/auth.js'

const authStore = useAuthStore()

function logout() {
  authStore.$patch((state) => {
    (state.isAuthenticated = false), (state.user = {});
  });
}
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <button @click="logout">Logout</button>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style>

</style>