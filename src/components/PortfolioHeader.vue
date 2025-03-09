<script setup>
import { VContainer, VCard, VCardText } from 'vuetify/components'
import '@/assets/global.css'

const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg1', import.meta.url).href;

const props = defineProps({
  headerText: String
})

</script>

<template>
  <v-container>
    <v-card class="musicNoteBG">
      <v-card-text class="center-content">
        <h3 class="header-background">{{ headerText }}</h3>
      </v-card-text>

      <v-card-text>

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
</style>