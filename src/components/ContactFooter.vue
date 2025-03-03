<script setup>
import { VContainer, VBtn, VIcon, VDivider } from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/global.css'
</script>

<template>
  <v-container>
    <v-divider></v-divider>
  <v-container class="social-media-links">
    <v-btn class="social-btn" icon href="https://youtube.com" target="_blank">
      <v-icon color="red" size="50"> mdi-youtube</v-icon>
    </v-btn>
    <v-btn class="social-btn" icon href="https://linkedin.com" target="_blank">
      <v-icon color="blue" size="50">mdi-linkedin</v-icon>
    </v-btn>
    <v-btn class="social-btn" icon href="https://soundcloud.com" target="_blank">
      <v-icon color="orange" size="50" >mdi-soundcloud</v-icon>
    </v-btn>
  </v-container>
  </v-container>
</template>

<style scoped>
.social-media-links {
  display: flex;
  justify-content: center;
  gap: 50px;
}
.social-btn {
  width: 10vw;
  height: 3vw;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
}
</style>