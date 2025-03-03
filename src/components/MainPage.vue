<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicPortfolio from './MusicPortfolio.vue'
import '@/assets/global.css'
</script>

<template>

  <v-container class="backdrop">
   <Introduction />
    <!-- Add more cards as needed -->
    <MusicPortfolio />
  </v-container>
</template>

<style scoped>
v-container {
  height: 100vh;
  overflow-y: auto;
}


</style>