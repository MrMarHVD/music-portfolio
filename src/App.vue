<script setup>
  import MainPage from './components/MainPage.vue'
  import Toolbar from './components/Toolbar.vue'
  import '@/assets/images/background/background1.webp'
  import ContactFooter from "@/components/ContactFooter.vue";
  import { VContainer, VCard } from 'vuetify/components'
ﬁ  import { useDevice } from './composables/useDevice.js'
  import { computed } from 'vue'

  const { isMobile } = useDevice()

  const contentContainerStyle = computed(() => ({
    maxWidth: isMobile.value ? '98vw' : '64vw'
  }))
</script>

<template>
  <div class="mainContainer" >
    <Toolbar class="fixed-toolbar" />
    <div class="scrollable-wrapper">
      <div class="main-content-container" :style="contentContainerStyle">
        <router-view />
      </div>
    </div>

  </div>


</template>

<style scoped>
/* Add any styles if needed */



.mainContainer {
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-image: url(@/assets/images/background/background1.webp);
  background-size: cover;
  align-items: center;
}

.scrollable-wrapper {
  width: 100%;
  height: calc(100vh - 64px);
  overflow-y: auto;
  margin-top: 64px;
}

.main-content-container {
  width: 100%;
  overflow-y: auto;
  margin: 0 auto;
}

.fullWidthContainer {
  width: 5000px;
}

.fixed-toolbar {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000; /* Ensure it stays above other content */
}
</style>