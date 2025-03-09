<script setup>
import { ref } from 'vue'
import { VContainer, VCard, VCardText, VTextField, VBtn } from 'vuetify/components'

const email = ref('profdrmrmar@gmail.com')
const discord = ref('mistermar')

// Copy email to the clipboard
const copyEmailtoClipboard = () => {
  navigator.clipboard.writeText(email.value)
}

// Copy Discord to the clipboard
const copyDiscordtoClipboard = () => {
  navigator.clipboard.writeText(discord.value)
}
</script>

<template>
  <v-container class="contact-container">
    <h1 class="contact-header">Contact me</h1>
    <v-card class="contact-card">
      <body>If you think you might want to work with me on a project, send me an email or hit me up on Discord!</body>
    </v-card>
    <v-card class="contact-card">
      <v-card-text class="email-card">
        <v-text-field
            class="email-field"
            v-model="email"
            label="Email"
            readonly
        />
        <v-btn id="contactMeButton" @click="copyEmailtoClipboard">Copy</v-btn>
      </v-card-text>
    </v-card>
    <v-card class="contact-card">
      <v-card-text class="email-card">
        <v-text-field
            class="email-field"
            v-model="discord"
            label="Discord"
            readonly
        />
        <v-btn id="contactMeButton" @click="copyDiscordtoClipboard">Copy</v-btn>
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
  /*background-image: url('@/assets/images/background/Notes_background.jpg');
  background-size: cover;
  background-position: center; */
}


.contact-header {
  background-color: white;
  padding: 10px 20px;
  margin-bottom: 50px;
  border-radius: 5px;
}

#contactMeButton {
  width: 300px;
  height: 60px;
}

.contact-card {
  width: 40vw;
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
}

.email-card {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: stretch;
  justify-content: center;
  align-items: center;
}

/* Ensure the text field takes up all available width */
.email-field {
  width: 100%;
  align-items: center;
}

/* Increase the font size of the inner input */
::v-deep .email-field input {
  font-size: 26pt !important;
  align-items: center;
}

/* Optionally, adjust the label font size if needed */
::v-deep .email-field label {
  font-size: 15pt !important;
}
</style>