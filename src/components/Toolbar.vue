<script setup>
import { VToolbar, VTabs, VTab } from 'vuetify/components'
</script>

<template>
  <v-toolbar class="toolbar" color="lightgrey">
    <v-tabs>
      <router-link to="/" class="tab-link">
        <v-tab>Home</v-tab>
      </router-link>
      <router-link to="/portfolio" class="tab-link">
        <v-tab>Portfolio</v-tab>
      </router-link>
      <router-link to="/about" class="tab-link">
        <v-tab>About</v-tab>
      </router-link>
      <router-link to="/contact" class="tab-link">
        <v-tab>Contact</v-tab>
      </router-link>
    </v-tabs>
  </v-toolbar>
</template>

<style scoped>
.toolbar {
  border-bottom: 10px;
  border-color: black;
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