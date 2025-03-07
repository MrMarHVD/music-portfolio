<script setup>
import { VContainer, VCard, VCardText, VImg, VRow, VCol } from 'vuetify/components'
import '@/assets/global.css'

const props = defineProps({
  backgroundUrl: String,
  headerText: String,
  contentText: String,
  musicTracks: Array
})

const backgroundImageStyle = {
  backgroundImage: `url(${props.backgroundUrl})`
}
</script>

<template>
  <v-container>
    <v-card :style="backgroundImageStyle" class="musicNoteBG">
      <v-card-text class="center-content">
        <h2>{{ headerText }}</h2>
      </v-card-text>
      <v-card-text>
        <div class="info-box">
          {{ contentText }}
        </div>
      </v-card-text>
      <v-card-text>
        <v-row>
          <v-col v-for="(track, index) in musicTracks.slice(0, Math.ceil(musicTracks.length / 2))" :key="index">
            <audio controls class="custom-audio">
              <source :src="track.src" :type="track.type" />
              Your browser does not support the audio element.
            </audio>
          </v-col>
          <v-col v-for="(track, index) in musicTracks.slice(Math.ceil(musicTracks.length / 2))" :key="index">
            <audio controls class="custom-audio">
              <source :src="track.src" :type="track.type" />
              Your browser does not support the audio element.
            </audio>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>

</style>