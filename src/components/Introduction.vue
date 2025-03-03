<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'

const meImageUrl = new URL('@/assets/images/other/mephoto.JPG', import.meta.url).href;

</script>

<template>
  <v-container>
    <v-card>
      <v-card-text class="center-content">
        <h1>Welcome!</h1>
        <v-img id="meImage" :src="meImageUrl" alt=""></v-img>
      </v-card-text>

        <v-card-text>
          <div class="info-box">
            Hello, and welcome to my portfolio! I'm a hobby composer, and you'll find some of my work below. Go to the "About"-page if you want to know more about me and the
            types of projects I'd especially love to work on. Or you could just listen to some of the sample tracks below.
          </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
h1 {
  margin-bottom: 16px;
}

v-card {
  padding: 16px;
}

v-text-field {
  width: 100%;
}

#meImage {
  width: 70%;
  height: auto;
}


</style>