<script setup lang="ts">
definePageMeta({
  middleware: ['strict-auth'],
})

import { updateUserChat } from '~/composables/updateChat'

const firebaseUser = useFirebaseUser().value
const message = ref('')
const target = ref('you')
const loadTarget = ref('')

const addChat = async () => {
  await updateUserChat(firebaseUser.displayName, target.value, message.value).catch((err) => {
    console.log('error: ', err)
  })
}

const previousUserChats: [String] = await getUserChats(firebaseUser?.displayName, 'you')
let userChats = previousUserChats

const loadNewChats = async () => {
  userChats = await getUserChats(firebaseUser?.displayName, loadTarget.value)
  loadTarget.value = ''
}

const goToProfile = () => {
  navigateTo('/profile')
}
</script>

<template>
  <ClientOnly>
    <div class="columns is-centered">
      <div class="column is-10-tablet is-8-desktop is-6-widescreen">
        <div class="box">
          <div class="title has-text-black">Chats</div>
          <div class="field">
            <button @click="goToProfile" class="button is-success">Profile</button>
          </div>

          <div id="loadchats" class="field">
            <div class="field">
              <label for="" class="label">User messages to load</label>
              <div class="control">
                <input class="input" v-model="loadTarget" required />
              </div>
            </div>
            <div class="field">
              <button @click="loadNewChats" class="button is-success">Load</button>
            </div>
            <div class="field">
              <pre>{{ userChats }}</pre>
            </div>
          </div>

          <div class="field">
            <label for="" class="label">To</label>
            <div class="control">
              <input class="input" v-model="target" required />
            </div>
          </div>
          <div class="field">
            <label for="" class="label">Message</label>
            <div class="control">
              <input class="input" v-model="message" required />
            </div>
          </div>
          <div class="field">
            <button @click="addChat" class="button is-success">Send message</button>
          </div>
        </div>
      </div>
    </div>
  </ClientOnly>
</template>
