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

  <FeatureCardRow></FeatureCardRow>

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
<script setup lang="ts">
import FeatureCardRow from '@/components/FeatureCardRow.vue';
</script>