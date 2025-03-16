<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicSample from './MusicSample.vue'
import ContactFooter from './ContactFooter.vue'
import '@/assets/global.css'
</script>

<template>

  <v-container class="backdrop content-container">
   <Introduction />
    <!-- Add more cards as needed -->
    <MusicSample />
    <ContactFooter />
  </v-container>
</template>

<style scoped>
v-container {
  height: 100vh;
  width: 100vw;
  overflow-y: auto;
}

.content-container {
  margin-top: 1vh;
  border-radius: 4vw;
  margin-top: 1vh;
  margin-bottom: 1vh;
}


</style>