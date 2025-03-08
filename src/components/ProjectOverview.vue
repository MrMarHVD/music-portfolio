<script setup>
import { VContainer, VCard, VCardText, VImg } from 'vuetify/components'

const props = defineProps({
  imageUrl: String,
  headerText: String,
  contentText: String
})

const resolvedImageUrl = new URL(props.imageUrl, import.meta.url).href;

const backgroundImageStyle = {
  backgroundImage: `url(${new URL('@/assets/images/background/Notes_background.jpg', import.meta.url).href})`
}
</script>

<template>
  <v-container>
    <v-card :style="backgroundImageStyle" class="musicNoteBG">
      <v-card-text class="center-content">
        <h2>{{ headerText }}</h2>
        <v-img :src="resolvedImageUrl" alt="Foreground Image" />
      </v-card-text>
      <v-card-text>
        <div class="info-box">
          {{ contentText }}
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
h2 {
  margin-bottom: 16px;
  font-size: 25pt;
  font-family: Trattatello;
}
</style>