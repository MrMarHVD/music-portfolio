<script setup>
import { VContainer, VCard, VCardText, VDivider } from 'vuetify/components'
import Introduction from './Introduction.vue'
import MusicSample from './MusicSample.vue'
import ContactFooter from './ContactFooter.vue'
import '@/assets/global.css'
import ProjectOverview from './ProjectOverview.vue'
import ProjectSection from './ProjectSection.vue'
import MusicTrack from './MusicTrack.vue'
import MusicTrackWithInfo from "@/components/MusicTrackWithInfo.vue";
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
    <ProjectSection 
        :headerText="'Ghost of You'"
        :contentText="'One of the collaborative projects I\'ve worked on is called Ghost of You. It\'s a visual novel, and part of the score is mostly done already. Some of the tracks are provided below.'"
        :imageUrl="'@/assets/images/other/tumtumworlds.jpg'"
        :imageAlt="'Ghost of You project image'"
    />
   <MusicTrack
       trackTitle="Lobby"
       trackSrc="/music/purgatory_day.mp3"
       trackType="audio/flac"
       bgImageUrl="/images/purgatorylobby.jpeg"
   />
    <MusicTrack
        trackTitle="Pub"
        trackSrc="/music/pub.mp3"
        trackType="audio/flac"
        bgImageUrl="/images/pub_bg.png"
    />
    <MusicTrack
        trackTitle="Night Ambience"
        trackSrc="/music/GoY_Forest_Night.flac"
        trackType="audio/flac"
        bgImageUrl="/images/dark_forest_bg.png"
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
    <ProjectSection
        :headerText="'Other Work'"
        :contentText="'I can compose in a wide variety of different styles and genres beyond what Ghost of You required. So if you feel the tracks above don\'t suit your project, here\'s a collection of other tracks in various styles which I\'ve made over the years.'"
        :imageUrl="'/images/stylised_music_notes_bg.png'"
        :imageAlt="'Musical notes representing various composition styles'"
    />
    <v-card-text class="center-content">
      <h3 class="header-background">Orchestral</h3>
    </v-card-text>
    <v-container class="bordered-container">

    <MusicTrack
        trackTitle="Maple Forest Walk"
        trackSrc="/music/Maple_Forest_Walk.mp3"
        trackType="audio/mp3"
        bgImageUrl="/images/maple_forest_walk_bg.png"
    />

    <MusicTrackWithInfo
        trackTitle="Path to Damnaw"
        trackSrc="/music/Path_to_Damnaw.mp3"
        trackType="audio/mp3"
        bgImageUrl="/images/path_to_damnaw_bg.png"
        trackInfo="If you're wondering what the title means, it's a reference to a fictional country. I made this track as part of a Dungeons and Dragons campaign I ran (still running, actually)."
    />

      <MusicTrack
          trackTitle="Four Noble Truths"
          trackSrc="/music/four_noble_truths.mp3"
          trackType="audio/mp3"
          bgImageUrl="/images/four_noble_truths_bg.png"
      />

    </v-container>

    <v-card-text class="center-content">
      <h3 class="header-background">Soundfonts and 8bit</h3>
    </v-card-text>
    <v-container class="bordered-container">


      <MusicTrack
          trackTitle="Wandering Skies"
          trackSrc="/music/wandering_skies.mp3"
          trackType="audio/mp3"
          bgImageUrl="/images/wandering_skies_bg.png"
      />
      <MusicTrackWithInfo
          trackTitle="Sunset in the Ether"
          trackSrc="/music/sunset_in_the_ether.flac"
          trackType="audio/flac"
          trackInfo="This one doesn't just use soundfonts and 8bit stuff. It uses a bit of everything really, but I feel like it fits in here. I have no idea what genre it is, so let me know if it reminds you of anything."
          bgImageUrl="/images/sunset_in_the_ether_bg.png"
      />
      <MusicTrackWithInfo
          trackTitle="Unused Boss Theme"
          trackSrc="/music/Unused_boss_theme_remastered.flac"
          trackType="audio/flac"
          bgImageUrl="/images/unused_boss_theme_bg.png"
          trackInfo="This is a bit of a wild one. I was just getting into using 8bit sounds in my music and wanted to create a boss theme. It's rather eccentric and very busy, but not my worst work."
      />



    </v-container>

    <v-card-text class="center-content">
      <h3 class="header-background">Experimental</h3>
    </v-card-text>
    <v-container class="bordered-container">


      <MusicTrackWithInfo
          trackTitle="Fiat Lux"
          trackSrc="/music/Fiat_Lux.mp3"
          trackType="audio/mp3"
          bgImageUrl="/images/fiat_lux_bg.png"
          trackInfo="This one is based on an idea, namely the quote 'Let there be light,' as supposedly spoken by God. I tried to imagine what that would sound like, and this is the result."
      />

      <MusicTrack
          trackTitle="Changing Heart"
          trackSrc="/music/changing_heart.flac"
          trackType="audio/flac"
          bgImageUrl="/images/changing_heart_bg.png"
      />
      <MusicTrack
          trackTitle="Hypnagogia"
          trackSrc="/music/hypnagogia.flac"
          trackType="audio/flac"
          bgImageUrl="/images/hypnagogia_bg.png"
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