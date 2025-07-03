<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'
import {computed} from "vue";

const meImageUrl = new URL('@/assets/images/other/mephoto.JPG', import.meta.url).href;
const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;



</script>

<template>
  <v-container>
    <v-card class="musicNoteBG" :style="cardStyle" >
      <v-card-text class="center-content">
        <h1> About Me</h1>
        <v-img id="meImage" :src="meImageUrl" alt=""></v-img>
      </v-card-text>

      <v-card-text>
        <div class="info-box">
          <p class="body-text"> My name is Howard, but online I go by the name MrMar. I've been composing for quite a while now, and have worked with a lot of different styles and tools over the years, but recently I've gotten especially into orchestral composition.
            </p>
          <p class="body-text">
            I take inspiration from a lot of different places, but for me the greatest source has always been video games and their soundtracks. Games which I know have inspired me include Skyrim, Super Mario Galaxy, Breath of the Wild, and Undertale. If you have a game project that's remotely in the ballpark of any of those, then that's already more than good enough to be exciting to me, so hit me up via the contact page in that case! </p>
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