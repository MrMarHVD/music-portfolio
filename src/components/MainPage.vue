<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicPortfolio from './MusicPortfolio.vue'
</script>

<template>
  <v-container>
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