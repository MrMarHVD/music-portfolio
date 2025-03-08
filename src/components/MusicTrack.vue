<script setup>
import { defineProps, computed } from 'vue'
import { VCard, VCardText } from 'vuetify/components'
import '@/assets/global.css'

const props = defineProps({
  trackTitle: { type: String, required: true },
  trackSrc: { type: String, required: true },
  trackType: { type: String, default: 'audio/flac' }
})

// Build a resolved URL using the Vite base URL.
// This ensures that if your app’s base changes, the URL is still correct.
const resolvedTrackSrc = computed(() => {
  const path = props.trackSrc.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${path}`
})
</script>

<template>
  <div class="marginContainer">
  <v-container >
  <v-card class="musicCard">
    <v-card-text class="center-content">
      <h2>{{ trackTitle }}</h2>
      <audio controls class="custom-audio">
        <source :src="resolvedTrackSrc" :type="trackType" />
        Your browser does not support the audio element.
      </audio>
    </v-card-text>
  </v-card>
  </v-container>
  </div>
</template>

<style scoped>
/* Center the card content horizontally and vertically */
.musicCard {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Optional: set a fixed height if vertical centering is desired */
  height: 150px;

}

/* Flex column for the card text to stack items and center them */
.center-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Styling for the header */
h2 {
  margin-bottom: 16px;
  font-size: 25pt;
  font-family: Trattatello;
}

/* Ensure the audio element is responsive */

</style>