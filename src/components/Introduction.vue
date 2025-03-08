<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'

const meImageUrl = new URL('@/assets/images/other/mephoto.JPG', import.meta.url).href;
const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;

</script>

<template>
  <v-container>
    <v-card class="musicNoteBG">
      <v-card-text class="center-content">
        <h1>Welcome!</h1>
        <v-img id="meImage" :src="meImageUrl" alt=""></v-img>
      </v-card-text>

        <v-card-text>
          <div class="info-box">
            <body>Hello, and welcome to my portfolio! I'm a hobby composer always excited for new projects. Below is a sample if you want a quick impression of the type of stuff I make. Have a look at the PORTFOLIO tab above for more. ☝</body>️
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

#meImage {
  width: 50%;
  height: auto;
}


</style>