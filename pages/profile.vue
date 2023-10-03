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
  <ClientOnly>
    <div class="columns is-centered">
      <div class="column is-10-tablet is-8-desktop is-6-widescreen">
        <div class="box">
          <div class="title has-text-black">Your Profile</div>
          <div class="field">
            <button @click="goToChats" class="button is-success">Chats</button>
          </div>
          <div class="field">
            <pre>{{ firebaseUser }}</pre>
          </div>
          <div class="field">
            <button @click="signOut" class="button is-danger">Sign out</button>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
