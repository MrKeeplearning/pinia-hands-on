import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: "Jason",
      email: "jason@gmail.com",
    }
  }),
})
