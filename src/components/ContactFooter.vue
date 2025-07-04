<script setup>
import { VContainer, VBtn, VIcon, VDivider } from 'vuetify/components'
import '@mdi/font/css/materialdesignicons.css'
import '@/assets/global.css'
import { useDevice } from '@/composables/useDevice.js'
import { computed } from 'vue'

const { isMobile } = useDevice()

const iconSize = computed(() => 
  isMobile.value ? 30 : 50
)

const buttonClass = computed(() => 
  isMobile.value ? 'social-btn-mobile' : 'social-btn-desktop'
)

const containerClass = computed(() => 
  isMobile.value ? 'social-links-mobile' : 'social-links-desktop'
)
</script>

<template>
  <v-container>
    <v-divider></v-divider>
  <v-container :class="['social-media-links', containerClass]">
    <v-btn :class="['social-btn', buttonClass]" icon href="https://www.youtube.com/@DetectiveMar" target="_blank">
      <v-icon color="red" :size="iconSize"> mdi-youtube</v-icon>
    </v-btn>
    <v-btn :class="['social-btn', buttonClass]" icon href="https://soundcloud.com/themrmar" target="_blank">
      <v-icon color="orange" :size="iconSize" >mdi-soundcloud</v-icon>
    </v-btn>

  </v-container>
  </v-container>
</template>

<style scoped>
.social-media-links {
  display: flex;
  justify-content: center;
}

.social-links-desktop {
  gap: 50px;
}

.social-links-mobile {
  gap: 20px;
}

.social-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: white;
}

.social-btn-desktop {
  width: 10vw;
  height: 3vw;
  min-width: 80px;
  min-height: 40px;
}

.social-btn-mobile {
  width: 60px;
  height: 60px;
}
</style>