<script setup lang="ts">
let user = reactive({
  email: '',
  password: '',
})

const firebaseUser = useFirebaseUser()

const goToSignup = () => {
  navigateTo('/signup')
}
const goToLogin = () => {
  navigateTo('/login')
}
const goToProfile = () => {
  navigateTo('/profile')
}
const signOut = async () => {
  firebaseUser.value = await signOutUser()
}
</script>

<template>
  <ClientOnly>
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <div class="box">
          <div class="title has-text-black">Welcome to Tether!</div>
          <div v-if="!firebaseUser">
            <div class="field">
              <button @click="goToLogin" class="button is-success">Go to login</button>
            </div>
            <div class="field">
              <button @click="goToSignup" class="button is-success">Create account</button>
            </div>
          </div>
          <div v-else="firebaseUser">
            <div class="field">
              <button @click="goToProfile" class="button is-success">Go to your Profile</button>
            </div>
            <div class="field">
              <button @click="signOut" class="button is-danger">Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
