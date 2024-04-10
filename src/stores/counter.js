import { defineStore } from 'pinia'
import { useAuthStore } from './auth.js';

export const useCounterStore = defineStore('counter', {
  // state의 대부분은 스토어를 중시으로 이루어진다.
  // 일반적으로 앱을 나타내는 상태를 정의하는 것으로 시작.
  // 피니아에서 state는 초기 상태를 반환하는 함수로 정의된다.
  state: () => ({
    count: 0
  }),
  getters: {
    countDigitLength: (state) => state.count.toString().length
  },
  actions: {
    increment() {
      if (!this.isAuthenticated()) return;
      this.count++
    },
    decrement() {
      if (!this.isAuthenticated()) return;
      this.count--
    },
    isAuthenticated() {
      // 로그인이 안되어 있으면 증가 기능을 실행하지 않는다.
      const authStore = useAuthStore();
      return authStore.isAuthenticated;
    }
  }
})