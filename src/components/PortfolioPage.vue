<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicSample from './MusicSample.vue'
import ContactFooter from './ContactFooter.vue'
import '@/assets/global.css'
import ProjectOverview from './ProjectOverview.vue'
import GhostOfYou from './GhostOfYou.vue'
</script>

<template>

  <v-container class="backdrop content-container">
    <!-- <PortfolioIntro > -->
    <!-- <GhostOfYou > -->
<!--    <ProjectOverview
        backgroundUrl="@/assets/images/background/Notes_background.jpg"
        headerText="My Custom Project"
        contentText="This is a custom block of text for the project overview."
        :musicTracks="[]"
        foregroundImageUrl="@/assets/images/other/tumtumworlds.jpg"
    /> -->
    <GhostOfYou />

    <!-- <Project2 > -->
    <!-- Add more cards as needed -->
  </v-container>
</template>

<style scoped>
v-container {
  height: 100vh;
  overflow-y: auto;
}

.content-container {
  margin-top: 0px;
}


</style>