<script setup>
import {defineProps, computed, onMounted, ref} from 'vue'
import { VCard, VCardText, VContainer } from 'vuetify/components'
import '@/assets/global.css'

const props = defineProps({
  trackTitle: { type: String, required: true },
  trackSrc: { type: String, required: true },
  trackType: { type: String, default: 'audio/flac' },
  // Optional background image URL prop
  bgImageUrl: { type: String, default: '' }
})

const isPlaying = ref(false);

// Resolve the audio URL using the Vite base URL
const resolvedTrackSrc = computed(() => {
  const path = props.trackSrc.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${path}`
})

// Resolve the background image URL if provided
const resolvedBgImageUrl = computed(() => {
  if (!props.bgImageUrl) return ''
  const path = props.bgImageUrl.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${path}`
})

// Use a CSS variable to pass the background image URL to the pseudo-element.
const cardStyle = computed(() => {
  return resolvedBgImageUrl.value
      ? { '--bg-image': `url(${resolvedBgImageUrl.value})`, '--bg-opacity': isPlaying.value ? 1 : 0.5 }
      : {}
})


function onPlay() {
  isPlaying.value = true;
}

function onPause() {
  isPlaying.value = false;
}

function onEnded() {
  isPlaying.value = false;
}


</script>

<template>
  <div class="marginContainer">
    <v-container>
      <v-card class="musicCard" :style="cardStyle">
        <v-card-text class="center-content">
          <h2 class="header-background">{{ trackTitle }}</h2>
          <v-container class="medium-padding">

            <audio controls
                   @play="onPlay"
                   @pause="onPause"
                   @ended="onEnded"
                   class="custom-audio">
              <source :src="resolvedTrackSrc" :type="trackType" />
              Your browser does not support the audio element.
            </audio>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.musicCard {
  position: relative; /* Create a positioning context for ::before */
  z-index: 0;         /* Ensure content appears above the pseudo-element */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* ::before uses the CSS variable for the background image */
.musicCard::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: var(--bg-image, none);
  background-size: cover;
  background-position: center;
  opacity: var(--bg-opacity, 0.5);      /* Adjust opacity as desired */
  z-index: -1;        /* Place behind the content */
}

/* Relying on your global.css for these classes */
.musicCard {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  /* Optional: set a fixed height if vertical centering is desired */

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
  font-family: Inter;
}


</style>