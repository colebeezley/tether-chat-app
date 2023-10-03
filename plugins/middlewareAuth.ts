export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    initUser()

    if (typeof window !== 'undefined') {
      const localUserData = localStorage.getItem('user')

      if (!localUserData) {
        return navigateTo('/')
      }
    }
  })

  addRouteMiddleware('loggedOut', () => {
    if (typeof window !== 'undefined') {
      const localUserData = localStorage.getItem('user')

      if (localUserData) {
        return navigateTo('/profile')
      }
    }
  })
})
