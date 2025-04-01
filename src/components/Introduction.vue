<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'

const meImageUrl = new URL('/images/aristocat.png', import.meta.url).href;
const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;

</script>

<template>
  <v-container>
    <v-card class="musicNoteBG">
      <v-card-text class="center-content">
        <h1 class="header-background">Welcome!</h1>
        <v-img id="meImage" :src="meImageUrl" alt=""></v-img>
      </v-card-text>

        <v-card-text>
          <div class="info-box">
            <body>Hello! I'm MrMar and welcome to my portfolio! I'm a hobby composer interested in finding new projects to work on, with a special interest in scoring video games. Below is a sample if you want a quick impression of the type of stuff I like to make at the moment. Have a look at the PORTFOLIO tab above for more. ☝</body>️
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
  width: 30%;
  height: auto;
  border-radius: 10vw;
}


</style>