<script setup lang="ts">
import FeatureCard from '../components/FeatureCard.vue'
</script>
<template>
<v-container class="max-w-4xl mx-auto py-16 px-6">
  <!-- Hero Section -->
  <section class="text-center mb-16">
    <h1 class="text-h1 font-extrabold mb-4 ">
      Secure Login & Signup System
    </h1>
    <div class="mt-10">
      <p class="text-h3">
        This project demonstrates a full authentication flow with Vue 3, Vuetify UI, Tailwind CSS, and a FastAPI backend using JWT tokens for secure authorization.
      </p>
    </div>

  </section>

  <!-- Features Cards -->
  <section class="grid grid-cols-1 md:grid-cols-3 gap-25"> <!-- grid-cols-1 - small screens only have 1 row, md - 3 -->
    <FeatureCard
      icon="mdi-lock-check-outline"
      title="JWT Authentication"
      description="Secure token-based authentication with JSON Web Tokens to protect your API endpoints.">
    </FeatureCard>

    <FeatureCard
      icon="mdi-server"
      title="FastAPI Backend"
      description="High-performance Python backend managing user sessions, authentication, and PostgreSQL database.">
    </FeatureCard>

    <FeatureCard
      icon="mdi-vuejs"
      title="Vue 3 & Vuetify Frontend"
      description="Modern, responsive UI built with Vue 3, Vuetify components, and Tailwind CSS utility-first styling.">
    </FeatureCard>
  </section>

  <div class="mt-10 grid grid-cols-1 md:grid-cols-2 gap-50">
    <v-btn
      color="primary"
      class="rounded text-h3"
      style="height: 56px;"
      to="/signup"> Signup
    </v-btn>
    <v-btn
      outlined
      color="primary"
      class="rounded-lg text-h3"
      style="height: 56px;"
      to="/login"> Login
    </v-btn>
  </div>
</v-container>
</template>
