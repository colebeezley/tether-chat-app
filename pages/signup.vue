<script setup lang="ts">
definePageMeta({
  middleware: ['loggedIn'],
})
let user = reactive({
  username: '',
  email: '',
  password: '',
})

const firebaseUser = useFirebaseUser()

const signUp = async () => {
  firebaseUser.value = await createUser(user.username, user.email, user.password).then(() => {
    navigateTo('/profile')
  })
}
</script>

<template>
  <ClientOnly>
    <div>
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" v-model="user.username" required /><br /><br />

      <label for="email">Email:</label>
      <input type="text" id="email" name="email" v-model="user.email" required /><br /><br />

      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="user.password" required /><br /><br />

      <button class="button" @click="signUp" v-if="!firebaseUser">Create account</button>
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
