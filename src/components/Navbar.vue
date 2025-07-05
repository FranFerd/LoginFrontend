<script setup lang="ts">
</script>
<template>
  <v-app-bar app color="deep-purple-accent-2"> <!-- Fixed bar at the top of the app; wraps your navbar. app props - Adjusts for the app layout (so <v-main> sits below it) -->
    <div class="flex gap-3 ml-10 align-center" style="min-width: 300px">
        <v-img
            src="../assets/icons/login.png"
            alt="logo"
            max-height="40"
            max-width="40"
        />
        <v-toolbar-title class="text-h5">Login Project</v-toolbar-title> <!-- slot for the app name/logo -->
    </div>

    <v-spacer /> <!-- Pushes content (e.g., nav buttons) to the right -->

    <div class="flex gap-5 mr-10">
        <v-btn text to="/" class="text-h6">Home</v-btn>
        <v-btn txt to="/login" class="text-h6">Login</v-btn>
        <v-btn txt to="/signup" class="text-h6">Signup</v-btn>
        <v-btn txt to="/protected" class="text-h6">Protected</v-btn>
    </div>
  </v-app-bar>
</template>