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
    <div>
      <button class="button" @click="goToLogin" v-if="!firebaseUser">Sign in</button>
      <button class="button" @click="goToSignup" v-if="!firebaseUser">Create account</button>
      <div v-if="firebaseUser">
        <h3>You are signed in</h3>
        <button class="button" @click="goToProfile">Profile</button>
        <button class="button" @click="signOut">Sign out</button>
      </div>
      <div v-else>
        <h3>User signed out</h3>
      </div>
      <NuxtPage />
    </div>
  </ClientOnly>
</template>
