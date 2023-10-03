export default defineNuxtPlugin(() => {
  addRouteMiddleware('strict-auth', () => {
    // we can use strict-auth to force users refreshing back to the profile screen
    // this will prevent them from loading the chats as if they weren't logged in

    initUser()

    const { $auth }: any = useNuxtApp()

    if (!$auth?.currentUser?.uid) {
      return navigateTo('/profile')
    }
  })

  addRouteMiddleware('auth', () => {
    // basic auth check
    // if cached auth information is present, we let the user continue

    initUser()

    if (typeof window !== 'undefined') {
      const localUserData = localStorage.getItem('user')

      if (!localUserData) {
        return navigateTo('/')
      }
    }
  })

  addRouteMiddleware('loginStatus', () => {
    // check to see if the user should be logged in
    // we will use this middelware to prevent signed in users from going to login or signup
    // they can always sign out if needed

    if (typeof window !== 'undefined') {
      const localUserData = localStorage.getItem('user')

      if (localUserData) {
        return navigateTo('/profile')
      }
    }
  })
})
