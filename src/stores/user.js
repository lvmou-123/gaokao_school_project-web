import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useUserStore = defineStore('user', () => {
  const token = ref(localStorage.getItem('token') || '')
  const showLoginDialog = ref(false)
  const pendingRoute = ref(null)

  const isLoggedIn = computed(() => !!token.value)

  function setToken(val) {
    token.value = val
    localStorage.setItem('token', val)
  }

  function logout() {
    token.value = ''
    localStorage.removeItem('token')
  }

  function getToken() {
    return token.value
  }

  function openLoginDialog(route) {
    pendingRoute.value = route || null
    showLoginDialog.value = true
  }

  function closeLoginDialog() {
    showLoginDialog.value = false
    pendingRoute.value = null
  }

  return { token, isLoggedIn, showLoginDialog, pendingRoute, setToken, logout, getToken, openLoginDialog, closeLoginDialog }
})
