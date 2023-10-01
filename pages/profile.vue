<script setup lang="ts">
definePageMeta({
  middleware: ['auth'],
})
const firebaseUser = useFirebaseUser()
</script>

<template>
  <div>
    <h1>Your Profile</h1>
    <pre>
      {{ firebaseUser }}
    </pre>
  </div>
</template>
