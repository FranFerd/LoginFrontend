<template>
<v-app class="background-container">
  <Navbar></Navbar>
  <v-main>
    <router-view></router-view>
  </v-main>
</v-app>
</template>

<script setup lang="ts">
import Navbar from './components/Navbar.vue';
</script>
<style scoped>
.background-container {
  background-image: url('./assets/background-gradient.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100vh;
}
</style>