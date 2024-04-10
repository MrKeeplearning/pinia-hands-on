import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuthenticated: false,
    user: {}
  }),
  getters: {
    fullName: (state) => `${state.user.first_name} ${state.user.last_name}`
  },
  actions: {
    logout() {
      this.$patch((state) => {
        (state.isAuthenticated = false), (state.user = {})
      })
    },
    async login() {
      // 정보를 불러오는데 delay를 부여할 수도 있다. 아래는 2초의 delay를 부여
      const res = await fetch('https://reqres.in/api/users/2?delay=2')
      const { data } = await res.json()
      console.log(data)
      this.user = data
      this.isAuthenticated = true
    }
  }
})
