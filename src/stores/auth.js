import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state() {
    return {
      isAuthenticated: false,
      user: {}
    };
  },
  getters: {
    fullName(state) {
      return `${state.user.first_name} ${state.user.last_name}`;
    }
  },
  actions: {
    logout() {
      this.$patch(state => {
        state.isAuthenticated = false;
        state.user = {};
      });
    },
    async login() {
      const res = await fetch('https://reqres.in/api/users/2');
      const { data } = await res.json();
      console.log(data.data);
      this.$patch(state => {
        state.user = data;
        state.isAuthenticated = true;
      });
    }
  }
});