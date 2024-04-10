<script setup>
import Counter from '@/components/CounterComponent.vue';

</script>

<template>
  <main>
    Home page
    {{ store.count }}
    <Counter/>
  </main>
</template>
