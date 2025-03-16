<script setup xmlns="http://www.w3.org/1999/html">
import { VToolbar, VTabs, VTab } from 'vuetify/components'

</script>

<template>
  <v-toolbar color="secondary">
    <v-tabs>
      <v-tab>
        <router-link to="/">Home</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/portfolio">Portfolio</router-link>
      </v-tab>
      <v-tab>
        <router-link to="/about">About</router-link>
      </v-tab>
      <v-tab>
      <router-link to="/contact">Contact</router-link>
      </v-tab>
    </v-tabs>
  </v-toolbar>
</template>

<style scoped>
/* Add any styles if needed */
</style>