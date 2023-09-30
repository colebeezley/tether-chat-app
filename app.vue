<script setup>
onMounted(async () => {
  const email = "test@test.test";
  const password = "password";
  const creds = await signInUser(email, password);
  console.log(creds);
});
</script>

<template>
  <div>
    <button class="button">Click me</button>
    <NuxtPage />
  </div>
</template>

<style>
@import "bulma/css/bulma";
</style>
