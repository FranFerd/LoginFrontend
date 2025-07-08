<template>
<v-app class="background-container relative">
  <!-- Overlay --> 
  <div :class="overlayClass" class="absolute inset-0 z-0"></div> <!-- inset-0 fills the entire parent, z-0 places the element behind other elements-->
  <Navbar></Navbar>
  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
import { useTheme } from 'vuetify'
import { computed } from 'vue'

const theme = useTheme()

// Set overlay class based on current theme
const overlayClass = computed(() =>
  theme.global.current.value.dark
    ? 'bg-black/60'  // Dark overlay
    : 'bg-white/5'  // Light overlay
)
</script>
<style scoped>
.background-container {
  background-image: url('./assets/background-gradient.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
:deep(input:-webkit-autofill) {
  -webkit-box-shadow: 0 0 0px 1000px var(--v-theme-surface) inset !important;
  -webkit-text-fill-color: var(--v-theme-on-surface) !important;
  transition: background-color 5000s ease-in-out 0s;
}
/* :deep is to access child  */
:deep(.v-field__input) {
    font-size: 30px;
}
:deep(.v-label.v-field-label.v-field-label--floating){
    font-size: 15px   
}
:deep(.v-label.v-field-label){
    font-size: 18px
}
:deep(.v-messages__message){
    font-size: 15px
}
</style>