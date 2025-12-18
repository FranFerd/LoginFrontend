<template>
  <v-container class="d-flex flex-col align-center justify-center" style="min-height: 80vh;">
    <!-- Registered User View -->
    <div v-if="isRegistered" class="text-center">
      <v-card class="pa-8 elevation-5 rounded-xl" max-width="600">
        <v-icon color="success" size="64" class="mb-4">
          mdi-check-circle-outline
        </v-icon>
        
        <h1 class="text-h4 mb-2 primary--text">Welcome *username*!</h1>
        <p class="text-body-1 mb-6">
          You are seeing this page because you are registered. Here's a cookie!
        </p>
        
        <v-img
          src="../assets/icons/cookie.png"
          max-height="200"
          max-width="200"
          class="rounded-lg mx-auto mb-6"
        ></v-img>
        
        <div class="d-flex flex-wrap justify-center gap-4 mt-4">
          <v-btn color="primary" @click="goToDashboard" class="px-6">
            <v-icon left>mdi-view-dashboard</v-icon>
            Go to Home
          </v-btn>
          <v-btn color="secondary" @click="openProfile" outlined class="px-6">
            <v-icon left>mdi-account</v-icon>
            View Profile
          </v-btn>
        </div>
      </v-card>
    </div>

    <!-- Unregistered User View -->
    <div v-else class="text-center">
      <v-card class="pa-8 elevation-5 rounded-xl" max-width="600">
        <v-icon color="warning" size="64" class="mb-4">
          mdi-account-circle-outline
        </v-icon>
        
        <h1 class="text-h4 mb-2 grey--text text--darken-2">Welcome Guest!</h1>
        <p class="text-body-1 mb-6">
          Please register or login to access all features
        </p>
        
        <v-img
          src="../assets/icons/lock.png"
          max-height="150"
          max-width="150"
          class="mx-auto mb-6"
        ></v-img>
        
        <v-divider class="my-6"></v-divider>
        
        <div class="d-flex flex-wrap justify-center gap-4">
          <v-btn color="primary" @click="goToRegister" class="px-6">
            <v-icon left>mdi-account-plus</v-icon>
            Register Now
          </v-btn>
          <v-btn color="secondary" @click="goToLogin" outlined class="px-6">
            <v-icon left>mdi-login</v-icon>
            Login
          </v-btn>
          <v-btn @click="exploreFeatures" text color="info">
            <v-icon left>mdi-information</v-icon>
            Explore Features
          </v-btn>
        </div>
        
        <p class="text-caption text--secondary mt-6">
          Registration gives you access to premium features and personalized content
        </p>
      </v-card>
    </div>
  </v-container>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
// import { useAuthStore } from '@/stores/auth'

const router = useRouter()
// const authStore = useAuthStore()

// Reactive state
const isRegistered = ref(true)

// Check registration status

// Navigation methods
const goToDashboard = () => {
  router.push('/dashboard')
}

const openProfile = () => {
  router.push('/profile')
}

const goToRegister = () => {
  router.push('/register')
}

const goToLogin = () => {
  router.push('/login')
}

const exploreFeatures = () => {
  router.push('/features')
}
</script>

<style scoped>
.border-4 {
  border: 4px solid #FF9800 !important; /* Orange border for the cookie */
  border-radius: 16px;
}

/* Smooth transitions */
.v-card {
  transition: transform 0.3s ease;
}

.v-card:hover {
  transform: translateY(-4px);
}

/* Responsive adjustments */
@media (max-width: 600px) {
  .v-container {
    padding: 16px !important;
  }
  
  .v-card {
    padding: 24px !important;
  }
}
</style>