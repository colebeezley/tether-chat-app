export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    initUser()
    const { $auth }: any = useNuxtApp()

    if (!$auth?.currentUser?.uid) {
      return navigateTo('/')
    }
  })

  addRouteMiddleware('loggedOut', () => {
    const { $auth }: any = useNuxtApp()

    if ($auth?.currentUser?.uid) {
      return navigateTo('/profile')
    }
  })
})
