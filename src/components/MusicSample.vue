<script setup>
import { VContainer, VCard, VCardText, VCardTitle, VBtn, VIcon } from 'vuetify/components'
import { ref } from 'vue'
import AudioPlayer from "@/components/AudioPlayer.vue";
import '@/assets/global.css'


const soundFiles = [
  { title: 'Track 1', src: '@/assets/music/Maple_Forest_Walk.flac' },
  { title: 'Track 2', src: 'path/to/track2.mp3' },
  { title: 'Track 3', src: 'path/to/track3.mp3' },
]


</script>

<script>

</script>

<template>
  <v-container>
  <v-card>
    <v-container class="center-content">
      <h2>Music Sample</h2>
      <audio controls class="custom-audio">
        <source src="@/assets/music/Maple_Forest_Walk.flac" type="audio/flac" />
        Your browser does not support the audio element.
      </audio>
    </v-container>
  </v-card>
  </v-container>
</template>

<style scoped>
h2 {
  margin-bottom: 16px;
  font-size: 25pt;
  font-family: Trattatello;
}


.mb-4 {
  margin-bottom: 16px;
}
</style>