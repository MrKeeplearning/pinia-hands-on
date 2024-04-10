<script setup>
import Counter from '@/components/CounterComponent.vue'
import { useAuthStore } from '@/stores/auth.js'
import { storeToRefs } from 'pinia'

const authStore = useAuthStore()
const { isAuthenticated, fullName } = storeToRefs(authStore)
</script>

<template>
  <main>
    <div v-if="isAuthenticated">
      User name is : {{ fullName }}
    </div>
    <Counter />
  </main>
</template>
