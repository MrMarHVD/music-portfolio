<script setup>
  import MainPage from './components/MainPage.vue'
  import Toolbar from './components/Toolbar.vue'
  import '@/assets/images/background/background1.webp'
  </script>

  <template>
    <div class="mainContainer" >
      <Toolbar />
      <MainPage />
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
  }
  </style>