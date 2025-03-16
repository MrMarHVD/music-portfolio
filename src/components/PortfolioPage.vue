<script setup>
import { VContainer, VCard, VCardText, VDivider } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicSample from './MusicSample.vue'
import ContactFooter from './ContactFooter.vue'
import '@/assets/global.css'
import ProjectOverview from './ProjectOverview.vue'
import GhostOfYou from './GhostOfYou.vue'
import MusicTrack from './MusicTrack.vue'
import MusicTrackWithInfo from "@/components/MusicTrackWithInfo.vue";
import OtherWork from './OtherWork.vue'
import PortfolioHeader from "@/components/PortfolioHeader.vue";
</script>

<template>

  <v-container class="backdrop content-container">
    <!-- <PortfolioIntro > -->
    <!-- <GhostOfYou > -->
<!--    <ProjectOverview
        backgroundUrl="@/assets/images/background/Notes_background.jpg"
        headerText="My Custom Project"
        contentText="This is a custom block of text for the project overview."
        :musicTracks="[]"
        foregroundImageUrl="@/assets/images/other/tumtumworlds.jpg"
    /> -->
    <GhostOfYou />
   <MusicTrack
       trackTitle="Purgatory_daytime"
       trackSrc="/music/Maple_Forest_Walk.flac"
       trackType="audio/flac"
       bgImageUrl="/images/purgatorylobby.jpeg"
   />
    <MusicTrack
        trackTitle="My Custom Music Track"
        trackSrc="/music/Maple_Forest_Walk.flac"
        trackType="audio/flac"
    />
    <MusicTrack
        trackTitle="My Custom Music Track"
        trackSrc="/music/Maple_Forest_Walk.flac"
        trackType="audio/flac"
    />
    <v-divider class="custom-divider"></v-divider>
<!--    <ProjectOverview
        imageUrl="/assets/images/other/tumtumworlds.jpg"
        headerText="My Custom Project"
        contentText="This is a custom block of text for the project overview."
    /> -->
    <!-- <Project2 > -->
    <!-- Add more cards as needed -->
  </v-container>
  <v-container class="backdrop content-container">
    <OtherWork />
    <v-card-text class="center-content">
      <h3 class="header-background">Orchestral</h3>
    </v-card-text>
    <v-container class="bordered-container">

    <MusicTrack
        trackTitle="My Custom Music Track"
        trackSrc="/music/Maple_Forest_Walk.flac"
        trackType="audio/flac"
    />
    <MusicTrack
        trackTitle="My Custom Music Track"
        trackSrc="/music/Maple_Forest_Walk.flac"
        trackType="audio/flac"
    />
    <MusicTrackWithInfo
        trackTitle="Title"
        trackSrc="/music/Maple_Forest_Walk.flac"
        trackType="audio/flac"
        bgImageUrl="/images/purgatorylobby.jpeg"
        trackInfo="This is a bit of a wild one. I was just getting into using 8bit sounds in my music and wanted to create a boss theme. It's rather eccentric and very busy, but not my worst work."
    />

    </v-container>

    <v-card-text class="center-content">
      <h3 class="header-background">Soundfonts and 8bit</h3>
    </v-card-text>
    <v-container class="bordered-container">

      <MusicTrack
          trackTitle="My Custom Music Track"
          trackSrc="/music/Maple_Forest_Walk.flac"
          trackType="audio/flac"
      />
      <MusicTrack
          trackTitle="My Custom Music Track"
          trackSrc="/music/Maple_Forest_Walk.flac"
          trackType="audio/flac"
      />
      <MusicTrackWithInfo
          trackTitle="Title"
          trackSrc="/music/Maple_Forest_Walk.flac"
          trackType="audio/flac"
          bgImageUrl="/images/purgatorylobby.jpeg"
          trackInfo="This is a bit of a wild one. I was just getting into using 8bit sounds in my music and wanted to create a boss theme. It's rather eccentric and very busy, but not my worst work."
      />



    </v-container>

    <v-card-text class="center-content">
      <h3 class="header-background">Experimental</h3>
    </v-card-text>
    <v-container class="bordered-container">


      <MusicTrackWithInfo
          trackTitle="Fiat Lux"
          trackSrc="/music/Maple_Forest_Walk.flac"
          trackType="audio/flac"
          bgImageUrl="/images/purgatorylobby.jpeg"
          trackInfo="This one is based on an idea, namely the quote 'Let there be light,' as supposedly spoken by God. I tried to imagine what that would sound like, and this is the result."
      />

      <MusicTrack
          trackTitle="Changing Heart"
          trackSrc="/music/Maple_Forest_Walk.flac"
          trackType="audio/flac"
      />

    </v-container>

    <ContactFooter />

  </v-container>
</template>

<style scoped>
v-container {
  height: 100vh;
  overflow-y: auto;
}

.bordered-container {
  border: 4px solid lightgray;
  border-radius: 5px;
  padding: 5px;
}

.content-container {
  border-radius: 4vh;
  margin-top: 1vh;
  margin-bottom: 1vh;
}




</style>