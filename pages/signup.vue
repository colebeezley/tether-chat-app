<script setup lang="ts">
definePageMeta({
  middleware: ['loginStatus'],
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

const goToLogin = () => {
  navigateTo('/login')
}
</script>

<template>
  <ClientOnly>
    <div class="columns is-centered">
      <div class="column is-5-tablet is-4-desktop is-3-widescreen">
        <div class="box">
          <div class="title has-text-black">Signup</div>
          <div class="field">
            <label for="" class="label">Username</label>
            <div class="control">
              <input
                type="text"
                placeholder="e.g. username"
                class="input"
                id="username"
                name="username"
                v-model="user.username"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Email</label>
            <div class="control">
              <input
                type="email"
                placeholder="e.g. youremail@gmail.com"
                class="input"
                id="email"
                name="email"
                v-model="user.email"
                required
              />
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Password</label>
            <div class="control">
              <input
                type="password"
                placeholder="*******"
                class="input"
                id="password"
                name="password"
                v-model="user.password"
                required
              />
            </div>
          </div>
          <div class="field">
            <button @click="signUp" class="button is-success">Create account</button>
          </div>
          <div class="field">
            <button @click="goToLogin" class="button is-danger">Go to Login</button>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
