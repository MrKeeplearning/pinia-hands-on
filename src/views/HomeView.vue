<script setup>
import Counter from '@/components/CounterComponent.vue'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore();
const {isAuthenticated, user} = storeToRefs(authStore);
</script>

<template>
  <main>
    <div v-if="isAuthenticated">
      User name is : {{ user.name }}
    </div>
    <Counter />
  </main>
</template>
