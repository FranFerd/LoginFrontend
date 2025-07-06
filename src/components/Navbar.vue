<script setup lang="ts">
import { ref } from 'vue';

const drawer = ref(false)
</script>
<template>
  <v-app-bar app color="deep-purple-accent-2"> <!-- Fixed bar at the top of the app; wraps your navbar. app props - Adjusts for the app layout (so <v-main> sits below it) -->
    <div class="flex gap-3 ml-4 align-center min-w-[200px]">
        <v-img
            src="../assets/icons/login.png"
            alt="logo"
            max-height="40"
            max-width="40"
            />
            <v-toolbar-title class="text-h5">Login Project</v-toolbar-title> <!-- slot for the app name/logo -->
    </div>
    <v-spacer /> <!-- Pushes content (e.g., nav buttons) to the right -->
    <div class="hidden sm:flex gap-4 mr-6">
      <v-btn text to="/" class="text-h6">Home</v-btn>
      <v-btn text to="/login" class="text-h6">Login</v-btn>
      <v-btn text to="/signup" class="text-h6">Signup</v-btn>
      <v-btn text to="/protected" class="text-h6">Protected</v-btn>
      <v-btn text to="/test" class="text-h6">Test</v-btn>
    </div>
          
    <!-- Hamburger icon. Shows only on small screens -->
    <div class="sm:hidden">
      <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
    </div>
  </v-app-bar>

  <div class="sm:hidden">
    <v-navigation-drawer
      v-model="drawer"
      temporary
      right
    >
      <v-list>
        <v-list-item to="/" title="Home" @click="drawer = false"></v-list-item>
        <v-list-item to="/login" title="Login" @click="drawer = false"></v-list-item>
        <v-list-item to="/signup" title="Signup" @click="drawer = false"></v-list-item>
        <v-list-item to="/protected" title="Protected" @click="drawer = false"></v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>     
</template>