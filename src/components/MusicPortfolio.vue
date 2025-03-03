<script setup>
import { VContainer, VCard, VCardText, VCardTitle, VBtn, VIcon } from 'vuetify/components'
import { ref } from 'vue'

const soundFiles = [
  { title: 'Track 1', src: 'path/to/track1.mp3' },
  { title: 'Track 2', src: 'path/to/track2.mp3' },
  { title: 'Track 3', src: 'path/to/track3.mp3' },
]

const currentTrack = ref(null)

const playTrack = (src) => {
  if (currentTrack.value) {
    currentTrack.value.pause()
  }
  currentTrack.value = new Audio(src)
  currentTrack.value.play()
}
</script>

<template>
  <v-container>

    <v-card v-for="(file, index) in soundFiles" :key="index" class="mb-4">
      <v-card-title>{{ file.title }}</v-card-title>
      <v-card-text>
        <v-btn @click="playTrack(file.src)" color="primary" icon>
          <v-icon>mdi-play</v-icon>
        </v-btn>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
h1 {
  margin-bottom: 16px;
}

.mb-4 {
  margin-bottom: 16px;
}
</style>