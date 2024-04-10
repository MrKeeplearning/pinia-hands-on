<template>
  <div>
    <!-- have count value -->
    <p>Count Value : {{ store.count }}</p>
  </div>
</template>

<!--<script>-->
<!--export default {-->
<!--  props: [-->
<!--    "count"-->
<!--  ],-->
<!--  setup(props) {-->
<!--    console.log(props.count);-->
<!--  }-->
<!--}-->
<!--</script>-->

<script setup>
import { useCounterStore } from '@/stores/counter.js'

const store = useCounterStore();
console.log(store.count);
</script>