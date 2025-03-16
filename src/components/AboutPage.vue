<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicSample from './MusicSample.vue'
import ContactFooter from './ContactFooter.vue'
import '@/assets/global.css'
import InfoBlock from './InfoBlock.vue'
import AboutMeBlock from "@/components/AboutMeBlock.vue";

</script>

<template>

  <v-container class="backdrop content-container">
   <AboutMeBlock  />
  </v-container>
</template>

<style scoped>
v-container {
  height: 100vh;
  width: 120vw;
  overflow-y: auto;
}

.content-container {
  margin-top: 0px;
}


</style>