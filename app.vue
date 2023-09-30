<script setup>
let user = reactive({
  email: "test@test.test",
  password: "password",
});

const creds = ref();

const signIn = async () => {
  creds.value = await signInUser(user.email, user.password);
  console.log(creds.value);
};
const signUp = async () => {
  creds.value = await createUser(user.email, user.password);
  console.log("account created: " + creds.value);
};
const signOut = async () => {
  creds.value = await signOutUser();
  console.log("signed out: " + creds.value);
};
</script>

<template>
  <div>
    <button class="button" @click="signIn">Sign in</button>
    <button class="button" @click="signOut">Sign out</button>
    <pre>
      {{ creds }}
    </pre>
    <NuxtPage />
  </div>
</template>

<style>
@import "bulma/css/bulma";
</style>
