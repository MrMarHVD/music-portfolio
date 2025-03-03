<script setup>
import { VContainer, VTextField, VCard, VCardText } from 'vuetify/components'
import '@/assets/global.css'
</script>

<template>
  <v-container>
    <v-card>
      <v-card-text class="center-content">
        <h1>Introduction</h1>
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


</style>