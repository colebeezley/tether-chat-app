<script setup>
const creds = reactive({
  email: "test@test.test",
  password: "password",
});

const signIn = async () => {
  let res = await signInUser(creds.email, creds.password);
  console.dir(res);
};
const signUp = async () => {
  let res = await createUser(creds.email, creds.password);
  console.log("account created: " + res);
};
const signOut = async () => {
  let res = await signOutUser();
  console.log("signed out: " + res);
};
</script>

<template>
  <div>
    <button class="button" @click="signIn">Sign in</button>
    <button class="button" @click="signOut">Sign out</button>
    <NuxtPage />
  </div>
</template>

<style>
@import "bulma/css/bulma";
</style>
