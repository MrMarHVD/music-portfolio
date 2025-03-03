<script setup>
  import MainPage from './components/MainPage.vue'
  import Toolbar from './components/Toolbar.vue'
  </script>

  <template>
    <div class="verticalContainer" >
      <Toolbar />
      <MainPage />
    </div>

  </template>

  <style scoped>
  /* Add any styles if needed */

  .verticalContainer {
    display: flex;
    flex-direction: column;
    height: 100vh;
  }
  </style>