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
    <h1 class="contact-header">Contact me</h1>
    <v-card class="contact-card">
      <v-card-text class="email-card">
        <v-text-field
            class="email-field"
            v-model="email"
            label="Email"
            readonly
        />
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
  height: 93vh;
  width: 100vw;
  /*background-image: url('@/assets/images/background/Notes_background.jpg');
  background-size: cover;
  background-position: center; */
}

.contact-header {
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 20px;
}

.contact-card {
  width: 40vw;
  text-align: center;
}

.email-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
}

/* Ensure the text field takes up all available width */
.email-field {
  width: 100%;
}

/* Increase the font size of the inner input */
::v-deep .email-field input {
  font-size: 26pt !important;
}

/* Optionally, adjust the label font size if needed */
::v-deep .email-field label {
  font-size: 15pt !important;
}
</style>