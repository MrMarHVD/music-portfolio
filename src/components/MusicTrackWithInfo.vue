<script setup>
import { defineProps, computed, ref } from 'vue'
import { VCard, VCardText, VContainer } from 'vuetify/components'
import '@/assets/global.css'
import { useDevice } from '@/composables/useDevice.js'

const props = defineProps({
  trackTitle: { type: String, required: true },
  trackSrc: { type: String, required: true },
  trackType: { type: String, default: 'audio/flac' },
  // Optional background image URL prop
  bgImageUrl: { type: String, default: '' },
  // New prop for the additional text information
  trackInfo: { type: String, default: '' }
})

const { isMobile } = useDevice()

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

// Responsive layout classes
const layoutDirection = computed(() => 
  isMobile.value ? 'mobile-layout' : 'desktop-layout'
)

const contentClass = computed(() => 
  isMobile.value ? 'content-mobile' : 'content-desktop'
)

// Responsive audio player class
const audioClass = computed(() => 
  isMobile.value ? 'custom-audio' : 'custom-audio-small'
)

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
        <v-card-text :class="['center-content', layoutDirection]">
          <v-container :class="['medium-padding', contentClass]">
            <v-card-text>
            <h2 class="header-background">{{ trackTitle }}</h2>
            </v-card-text>
            <audio
              controls
              :class="audioClass"
              @play="onPlay"
              @pause="onPause"
              @ended="onEnded">
              <source :src="resolvedTrackSrc" :type="trackType" />
              Your browser does not support the audio element.
            </audio>
          </v-container>
          <v-container :class="['medium-padding', 'text-container', contentClass]">
            <p class="small-text">{{ trackInfo }}</p>
          </v-container>
        </v-card-text>
      </v-card>
    </v-container>
  </div>
</template>

<style scoped>
.marginRight {
  margin-right: 30px;
}

.musicCard {
  position: relative; /* Create a positioning context for pseudo-elements */
  z-index: 0;         /* Ensure content appears above the pseudo-elements */
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

/* ::before applies the background image via the CSS variable */
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
  opacity: var(--bg-opacity, 0.5);
  z-index: -2;
}

/* Desktop layout - right half white background */
.desktop-layout .musicCard::after {
  content: "";
  position: absolute;
  top: 0;
  right: 0;
  width: 50%;
  height: 100%;
  background-color: white;
  z-index: -1;
}

/* Mobile layout - no right half white background */
.mobile-layout .musicCard::after {
  display: none;
}

/* Layout direction */
.desktop-layout {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

.mobile-layout {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Content sizing */
.content-desktop {
  flex: 1;
}

.content-mobile {
  width: 100%;
}

.text-container {
  text-align: left;
}

/* Desktop text container gets white background and border */
.desktop-layout .text-container {
  background-color: white;
  border-left: 2px solid black;
  border-radius: 12px;
}

/* Mobile text container gets subtle background */
.mobile-layout .text-container {
  background-color: rgba(255, 255, 255, 0.9);
  border-radius: 8px;
  margin-top: 10px;
}

/* Styling for the header - fonts now handled by global conditional classes */
h2 {
  margin-bottom: 16px;
}
</style>