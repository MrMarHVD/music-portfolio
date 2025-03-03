<script setup>
  import MainPage from './components/MainPage.vue'
  import Toolbar from './components/Toolbar.vue'
  import '@/assets/images/background/background1.webp'
  </script>

  <template>
    <div class="mainContainer" >
      <Toolbar class="fixed-toolbar" />
      <div class="scrollable-content">
       <MainPage />
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
  }

  .fixed-toolbar {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000; /* Ensure it stays above other content */
  }
  </style>