<script setup lang="ts">
import { updateUserChat } from '~/composables/updateChat'

const firebaseUser = useFirebaseUser().value
const message = ref('')
const target = ref('you')

const addChat = async () => {
  await updateUserChat(firebaseUser?.displayName, target.value, message.value).catch((err) => {
    console.log('error: ', err)
  })
}
</script>

<template>
  <div>
    <label for="message">Message:</label>
    <input type="text" id="message" name="message" v-model="message" required /><br />
    <label for="toUser">To:</label>
    <input type="text" id="toUser" name="toUser" v-model="target" required /><br />
    <button class="button" @click="addChat">Send message</button>
  </div>
</template>
