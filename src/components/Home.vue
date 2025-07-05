<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
</script>
<template>
  <v-container class="max-w-4xl mx-auto py-16 px-6">
    <!-- Hero Section -->
    <section class="text-center mb-16">
      <h1 class="text-4xl font-extrabold mb-4 text-gray-900 dark:text-gray-100">
        Secure Login & Signup System
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300 max-w-xl mx-auto">
        This project demonstrates a full authentication flow with Vue 3, Vuetify UI, Tailwind CSS, and a FastAPI backend using JWT tokens for secure authorization.
      </p>
    </section>

    <!-- Features Cards -->
    <section class="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
      <FeatureCard
        icon="mdi-lock-check-outline"
        title="JWT Authentication"
        description="Secure token-based authentication with JSON Web Tokens to protect your API endpoints."
      />
      <FeatureCard
        icon="mdi-server"
        title="FastAPI Backend"
        description="High-performance Python backend managing user sessions, authentication, and PostgreSQL database."
      />
      <FeatureCard
        icon="mdi-vuejs"
        title="Vue 3 & Vuetify Frontend"
        description="Modern, responsive UI built with Vue 3, Vuetify components, and Tailwind CSS utility-first styling."
      />
    </section>

    <!-- Call to Action Buttons -->
    <section class="text-center space-x-4 flex justify-center gap-30 mt-10">
      <v-btn
        color="primary"
        class="rounded-lg font-semibold text-lg"
        to="/signup"
      >
        Signup
      </v-btn>
      <v-btn
        outlined
        color="primary"
        class="rounded-lg font-semibold text-lg"
        to="/login"
      >
        Login
      </v-btn>
    </section>
  </v-container>
</template>
