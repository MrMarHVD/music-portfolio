<script setup>
  import { VToolbar, VTabs, VTab } from 'vuetify/components'
  </script>

  <template>
    <v-toolbar class="toolbar" color="dark-grey">
      <div class="tabs-wrapper">
        <v-tabs class="tabs-container">
          <router-link to="/" class="tab-link">
            <v-tab class="flex-tab">Home</v-tab>
          </router-link>
          <router-link to="/portfolio" class="tab-link">
            <v-tab class="flex-tab">Portfolio</v-tab>
          </router-link>
          <!-- <router-link to="/about" class="tab-link">
            <v-tab class="flex-tab">About</v-tab>
          </router-link>  -->
          <router-link to="/contact" class="tab-link">
            <v-tab class="flex-tab">Contact</v-tab>
          </router-link>
        </v-tabs>
      </div>
    </v-toolbar>
  </template>

  <style scoped>
  .toolbar {
    border-bottom: 10px;
    border-color: black;
  }

  .tabs-wrapper {
    display: flex;
    justify-content: center;
    width: 100%;
  }

  .tabs-container {
    display: flex;
    gap: 10px; /* Adjust the gap between tabs as needed */
  }

  .flex-tab {
    flex: 0 1 auto; /* Allow tabs to shrink and grow */
    display: flex;
    align-items: center;
    justify-content: center;
    border: 1px solid black; /* Add border around each tab */
    padding: 10px; /* Add padding inside each tab */
    border-radius: 1px; /* Optional: Add border radius for rounded corners */
    background-color: white; /* Optional: Change background color of tabs */
    max-width: 10vw;
    width: 10vw;
  }

  .tab-link {
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    color: inherit;
    width: 100%;
  }
  </style>