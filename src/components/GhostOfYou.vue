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
        <h2 class="header-background">Ghost of You</h2>
        <v-img id="tumtumImage" :src="tumtumImage" alt=""></v-img>
      </v-card-text>


      <v-card-text class="centered">
        <div class="info-box" id="ghostOfYouIntro">
          <p class="body-text">
            The only collaborative project I'm working on at the moment is called Ghost of You. It's a visual novel, and part of the score is mostly done already. Some of the tracks are provided below.
          </p>
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

.centered {
  display: flex;
  align-items: center;
  flex-display: column;
  justify-content: center;
}

#ghostOfYouIntro {
  width: 75%;
  display: flex;
  justify-content: center;
  height: auto;
  align-items: center;
}

#tumtumImage {
  width: 30%;
  height: auto;
  border-radius: 100px;
}


</style>