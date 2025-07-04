<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import '@/assets/global.css'

const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;
</script>

<template>
  <v-container>
    <v-card class="musicNoteBG">
      <v-card-text class="center-content">
        <h2 class="header-background">Other Work</h2>
      </v-card-text>

      <v-card-text class="centered">
        <div class="info-box" id="less-wide">
          <p class="body-text">
           I can compose in a wide variety of different styles and genres beyond what Ghost of You required. So if you feel the tracks above don't suit your project, here's a collection of other tracks in various styles which I've made over the years.
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

#less-wide {
  width: 75%;
}

v-text-field {
  width: 100%;
}
</style>
