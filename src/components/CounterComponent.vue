<template>
  <div>
    <br />
    <button @click="increment">+</button>
    Count Value : {{ store.count }}
    <button @click="decrement">-</button>

    <br />
    Counter moved to {{ store.countDigitLength }} digit length
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'

const store = useCounterStore()
// 잘못된 방식임. 아래와 같이 작성하면 초기의 값만 읽어들임
// const countDigitLengthTest = store.count.toString().length;

// 아래와 같은 방식 말고 store의 getter를 활용할 수도 있다. -> {{ store.countDigitLength }}
// const countDigitLength = computed(() => store.count.toString().length);

function increment() {
  store.count++;
}

function decrement() {
  store.count--;
}

</script>