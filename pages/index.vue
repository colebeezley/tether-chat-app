<script setup lang="ts">
let user = reactive({
  email: 'test@test.test',
  password: 'password',
})

const firebaseUser = useFirebaseUser()

const signIn = async () => {
  firebaseUser.value = await signInUser(user.email, user.password)
}
const signUp = async () => {
  firebaseUser.value = await createUser(user.email, user.password)
}
const signOut = async () => {
  firebaseUser.value = await signOutUser()
}
</script>

<template>
  <ClientOnly>
    <div>
      <p><NuxtLink to="/secret">Go to Secret Page</NuxtLink></p>
      <button class="button" @click="signIn" v-if="!firebaseUser">Sign in</button>
      <button class="button" @click="signOut" v-else>Sign out</button>
      <div v-if="firebaseUser">
        <pre>
      {{ firebaseUser }}
        </pre>
      </div>
      <div v-else>
        <h3>User signed out</h3>
      </div>
      <NuxtPage />
    </div>
  </ClientOnly>
</template>
