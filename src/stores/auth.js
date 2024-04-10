import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: true,
    user: {
      name: 'Jason',
      email: 'jason@gmail.com'
    }
  }),
  actions: {

    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {})
      })
    },
    login() {
      this.$patch((state) => {
        (state.isAuthenticated = true), (state.user = { name: 'Jason', email: 'jason@gmail.com' })
      })
    }
  }
})
