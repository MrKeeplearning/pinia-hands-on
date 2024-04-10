import { defineStore } from 'pinia'
import { useAuthStore } from './auth.js'

export const useCounterStore = defineStore('counter', {
  state() {
    return { count: 0 };
  },
  getters: {
    countDigitLength(state) {
      return state.count.toString().length;
    },
    isAuthenticated() {
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    }
  },
  actions: {
    increment() {
      if (!this.isAuthenticated) return;
      this.count++;
    },
    decrement() {
      if (!this.isAuthenticated) return;
      this.count--;
    }
  }
});