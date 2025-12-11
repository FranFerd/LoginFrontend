<template>
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

</template>
<script setup lang="ts">
import FeatureCard from './FeatureCard.vue';
</script>