export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    const { $auth }: any = useNuxtApp()

    if (!$auth?.currentUser?.uid) {
      return navigateTo('/')
    }
  })

  addRouteMiddleware('loggedIn', () => {
    const { $auth }: any = useNuxtApp()

    if ($auth?.currentUser?.uid) {
      return navigateTo('/profile')
    }
  })
})
