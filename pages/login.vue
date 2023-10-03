<script setup lang="ts">
definePageMeta({
  middleware: ['loginStatus'],
})
let user = reactive({
  email: '',
  password: '',
})

const firebaseUser = useFirebaseUser()

const signIn = async () => {
  firebaseUser.value = await signInUser(user.email, user.password)
  navigateTo('/profile')
}
const signOut = async () => {
  firebaseUser.value = await signOutUser()
}
const goToSignup = () => {
  navigateTo('/signup')
}
</script>

<template>
  <ClientOnly>
    <section class="hero is-primary is-fullheight">
      <div class="hero-body">
        <div class="container">
          <div class="columns is-centered">
            <div class="column is-5-tablet is-4-desktop is-3-widescreen">
              <div class="box">
                <div class="title has-text-black">Login</div>
                <div class="field">
                  <label for="" class="label">Email</label>
                  <div class="control">
                    <input
                      type="email"
                      placeholder="e.g. youremail@gmail.com"
                      class="input"
                      id="email"
                      name="email"
                      v-model="user.email"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <label for="" class="label">Password</label>
                  <div class="control">
                    <input
                      type="password"
                      placeholder="*******"
                      class="input"
                      id="password"
                      name="password"
                      v-model="user.password"
                      required
                    />
                  </div>
                </div>
                <div class="field">
                  <button @click="signIn" class="button is-success">Login</button>
                </div>
                <div class="field">
                  <button @click="goToSignup" class="button is-danger">Create account</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </ClientOnly>
</template>
