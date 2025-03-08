<script setup>
import { ref } from 'vue'
import { VContainer, VCard, VCardText, VTextField, VBtn } from 'vuetify/components'

const email = ref('example@example.com')

const copyToClipboard = () => {
  navigator.clipboard.writeText(email.value)
}
</script>

<template>
  <v-container class="contact-container">
    <h1>Contact me</h1>
    <v-card class="contact-card">
      <v-card-text>
        <v-text-field v-model="email" label="Email" readonly></v-text-field>
        <v-btn @click="copyToClipboard">Copy</v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
.contact-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-image: url('@/assets/images/background/Notes_background.jpg');
  background-size: cover;
  background-position: center;
}

.contact-card {
  width: 300px;
  text-align: center;
}

h1 {
  margin-bottom: 20px;
}
</style>