<script setup>
import { VContainer, VTextField, VCard, VCardText, VImg } from 'vuetify/components'
import '@/assets/global.css'
import { computed } from 'vue'

const props = defineProps({
  headerText: {
    type: String,
    required: true
  },
  contentText: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String,
    required: true
  },
  imageAlt: {
    type: String,
    default: ''
  }
})

// Handle both asset imports and public URLs
const resolvedImageUrl = computed(() => {
  if (props.imageUrl.startsWith('@/')) {
    // For asset imports, we need to use dynamic imports
    return new URL(props.imageUrl.replace('@/', '../'), import.meta.url).href;
  }
  // For public URLs, return as is
  return props.imageUrl;
});

const backgroundUrl = new URL('@/assets/images/background/Notes_background.jpg', import.meta.url).href;
</script>

<template>
  <v-container>
    <v-card class="musicNoteBG">
      <v-card-text class="center-content">
        <h2 class="header-background">{{ headerText }}</h2>
        <v-img class="project-image" :src="resolvedImageUrl" :alt="imageAlt"></v-img>
      </v-card-text>

      <v-card-text>
        <div class="info-box">
          <p class="body-text">
            {{ contentText }}
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

v-text-field {
  width: 100%;
}

.project-image {
  width: 30%;
  height: auto;
  border-radius: 100px;
}
</style> 