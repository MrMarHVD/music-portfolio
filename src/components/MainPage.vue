<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicSample from './MusicSample.vue'
import ContactFooter from './ContactFooter.vue'
import MusicTrack from './MusicTrack.vue'
import '@/assets/global.css'
</script>

<template>

  <v-container class="backdrop content-container">
   <Introduction />
    <!-- Add more cards as needed -->
    <MusicTrack
      trackTitle="Demo Track"
      trackSrc="/music/manuven_theme.mp3"
      trackType="audio/mp3"
      bgImageUrl="/images/stylised_music_notes_bg.png"
    />

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