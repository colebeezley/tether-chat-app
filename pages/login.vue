<script setup lang="ts">
definePageMeta({
  middleware: ['loggedIn'],
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
    <div>
      <label for="email">Email:</label>
      <input type="text" id="email" name="email" v-model="user.email" required /><br /><br />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="user.password" required /><br /><br />

      <button class="button" @click="goToSignup" v-if="!firebaseUser">Go To Sign up</button>
      <button class="button" @click="signIn" v-if="!firebaseUser">Sign in</button>
      <button class="button" @click="signOut" v-else>Sign out</button>
      <div v-if="firebaseUser">
        <h3>You are signed in</h3>
      </div>
      <div v-else>
        <h3>User signed out</h3>
      </div>
      <NuxtPage />
    </div>
  </ClientOnly>
</template>
