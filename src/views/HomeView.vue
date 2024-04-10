<script setup>
import { useCounterStore } from '@/stores/counter.js';

const store = useCounterStore();
console.log(store.count);
</script>

<template>
  <main>
    Home page
  </main>
</template>
