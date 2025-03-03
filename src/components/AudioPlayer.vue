<template>
  <!-- A card wrapper for styling; adjust width as needed -->
  <v-card class="pa-2" style="max-width: 600px;">
    <!-- Title -->
    <v-card-title class="py-1">{{ title }}</v-card-title>

    <v-card-text class="py-0">
      <div class="d-flex align-center" style="gap: 8px;">
        <!-- Left: Play / Pause -->
        <v-btn icon variant="text" @click="togglePlay">
          <v-icon>{{ isPlaying ? 'mdi-pause' : 'mdi-play' }}</v-icon>
        </v-btn>

        <!-- Progress Bar + Time -->
        <div class="d-flex align-center flex-grow-1" style="gap: 8px;">
          <!-- Seek Slider -->
          <v-slider
              class="flex-grow-1"
              v-model="currentTime"
              :max="duration"
              density="compact"
              hide-details
              @change="seekAudio"
          ></v-slider>

          <!-- CurrentTime / Duration -->
          <span style="white-space: nowrap;">
            {{ currentTimeFormatted }} / {{ durationFormatted }}
          </span>
        </div>

        <!-- Right: Volume -->
        <v-btn icon variant="text" @click="toggleMute">
          <v-icon>{{ isMuted ? 'mdi-volume-off' : 'mdi-volume-high' }}</v-icon>
        </v-btn>

        <!-- Volume Slider (hidden if muted) -->
        <v-slider
            v-if="!isMuted"
            class="volume-slider"
            v-model="volume"
            :max="1"
            :step="0.1"
            density="compact"
            hide-details
            style="max-width: 80px;"
            @change="changeVolume"
        ></v-slider>
      </div>
    </v-card-text>
  </v-card>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount, computed, defineProps } from 'vue'

// Props: audio 'src' and optional 'title'
const props = defineProps({
  src: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    default: 'Audio Player',
  },
})

// Audio-related state
const audio = ref(null)
const isPlaying = ref(false)
const currentTime = ref(0)
const duration = ref(0)
const isMuted = ref(false)
const volume = ref(1)

// Lifecycle: set up <audio> object and event listeners
onMounted(() => {
  audio.value = new Audio(props.src)

  audio.value.addEventListener('loadedmetadata', () => {
    duration.value = audio.value.duration
  })

  audio.value.addEventListener('timeupdate', () => {
    currentTime.value = audio.value.currentTime
  })

  audio.value.addEventListener('play', () => {
    isPlaying.value = true
  })

  audio.value.addEventListener('pause', () => {
    isPlaying.value = false
  })
})

onBeforeUnmount(() => {
  if (audio.value) {
    // Stop and release audio resources
    audio.value.pause()
    audio.value.src = ''
    audio.value = null
  }
})

// Methods
function togglePlay() {
  if (!audio.value) return
  if (isPlaying.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
}

function seekAudio() {
  if (audio.value) {
    audio.value.currentTime = currentTime.value
  }
}

function toggleMute() {
  if (!audio.value) return
  isMuted.value = !isMuted.value
  audio.value.muted = isMuted.value
}

function changeVolume() {
  if (!audio.value) return
  audio.value.volume = volume.value
}

// Format time as M:SS
const currentTimeFormatted = computed(() => formatTime(currentTime.value))
const durationFormatted = computed(() => formatTime(duration.value))

function formatTime(seconds) {
  if (!seconds || isNaN(seconds)) return '0:00'
  const mins = Math.floor(seconds / 60)
  const secs = Math.floor(seconds % 60)
  return `${mins}:${secs < 10 ? '0' : ''}${secs}`
}
</script>

<style scoped>
.volume-slider {
  min-width: 50px;
}
</style>