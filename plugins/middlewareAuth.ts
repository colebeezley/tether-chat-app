export default defineNuxtPlugin(() => {
  addRouteMiddleware('auth', () => {
    const { $auth }: any = useNuxtApp()

    console.log('middleware user: ', $auth?.currentUser)

    if (!$auth?.currentUser.uid) {
      return navigateTo('/')
    }
  })
})
