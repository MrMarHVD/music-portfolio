<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'

const tumtumImage = new URL('@/assets/images/other/tumtumworlds.jpg', import.meta.url).href;
const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;

</script>

<template>
  <v-container>
    <v-card class="musicNoteBG">
      <v-card-text class="center-content">
        <h2>Ghost of You</h2>
        <v-img id="tumtumImage" :src="tumtumImage" alt=""></v-img>
      </v-card-text>

      <v-card-text>
        <div class="info-box">
         The only collaborative project I'm working on at the moment is called Ghost of You. It's a visual novel, and part of the score is mostly done already. Some of the tracks are provided below.
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
h1 {
  margin-bottom: 16px;
}


v-text-field {
  width: 100%;
}

#tumtumImage {
  width: 50%;
  height: auto;
}


</style>