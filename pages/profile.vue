<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const firebaseUser = useFirebaseUser()

const signOut = async () => {
  firebaseUser.value = await signOutUser()
  navigateTo('')
}
const goToChats = () => {
  navigateTo('chats')
}
</script>

<template>
  <div>
    <h1>Your Profile</h1>
    <button class="button" @click="goToChats">Chats</button>
    <button class="button" @click="signOut">Sign out</button>
    <pre>
      {{ firebaseUser }}
    </pre>
  </div>
</template>
