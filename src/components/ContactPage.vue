<script setup>
import { ref } from 'vue'
import { VContainer, VCard, VCardText, VTextField, VBtn } from 'vuetify/components'
import { useDevice } from '@/composables/useDevice.js'
import { computed } from 'vue'

const email = ref('profdrmrmar@gmail.com')
const discord = ref('mistermar')

const { isMobile } = useDevice()

const cardWidthClass = computed(() => 
  isMobile.value ? 'contact-card-mobile' : 'contact-card-desktop'
)

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
    <v-card :class="['contact-card', cardWidthClass]">
      <p class="body-text">If you think you might want to work with me on a project, send me an email or hit me up on Discord!</p>
    </v-card>
    <v-card :class="['contact-card', cardWidthClass]">
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
    <v-card :class="['contact-card', cardWidthClass]">
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
  padding: 20px;
  text-align: center;
  margin-bottom: 50px;
}

.contact-card-desktop {
  width: 60vw;
}

.contact-card-mobile {
  width: 90vw;
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

/* Input field styling - font sizes now handled by global conditional classes */
::v-deep .email-field input {
  align-items: center;
}

/* Label styling - font sizes now handled by global conditional classes */
::v-deep .email-field label {
  /* No additional styling needed */
}
</style>