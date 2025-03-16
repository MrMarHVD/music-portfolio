<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'
import {computed} from "vue";

const meImageUrl = new URL('@/assets/images/other/mephoto.JPG', import.meta.url).href;
const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;

const props = defineProps( {
  header: { type: String, required: true},
  textContent: { type: String, required: true},
  bgImageUrl: { type: String, required: false}
})

const resolvedBgImageUrl = computed(() => {
  if (!props.bgImageUrl) return ''
  const path = props.bgImageUrl.replace(/^\//, '')
  return `${import.meta.env.BASE_URL}${path}`
})

const cardStyle = computed(() => {
  return resolvedBgImageUrl.value
      ? { '--bg-image': `url(${resolvedBgImageUrl.value})` }
      : {}
})

</script>

<template>
  <v-container>
    <v-card class="musicNoteBG" :style="cardStyle">
      <v-card-text class="center-content">
        <h1> {{ header }}</h1>
        <v-img id="meImage" :src="meImageUrl" alt=""></v-img>
      </v-card-text>

      <v-card-text>
        <div class="info-box">
          <body> {{ textContent }} ☝</body>️
        </div>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<style scoped>
h1 {
  margin-bottom: 16px;
}

.background-card {
  background-image: resolvedBgImageUrl;
}


v-text-field {
  width: 100%;
}

#meImage {
  width: 50%;
  height: auto;
}


</style>