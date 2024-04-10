import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: {
      name: "Jason",
      email: "jason@gmail.com",
    }
  }),
})
