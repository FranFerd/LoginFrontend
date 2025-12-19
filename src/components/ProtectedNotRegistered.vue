<template>
<div class="text-center">
      <v-card class="pa-8 elevation-5 rounded-xl" max-width="600">
        <v-icon color="warning" size="64" class="mb-4">
          mdi-account-circle-outline
        </v-icon>
        
        <h1 class="text-h4 mb-2 grey--text text--darken-2">Welcome, Guest!</h1>
        <p class="text-h6 mb-6">
          Please register or login to access this page
        </p>
        
        <v-img
          src="../assets/icons/padlock.png"
          max-height="200"
          max-width="200"
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
        </div>
      </v-card>
    </div>
</template>
<script setup lang="ts">
import { useRouter } from 'vue-router';

const router = useRouter()
const goToRegister = (): void => {
    router.push('/signup')
}
const goToLogin = (): void => {
    router.push('/login')
}
</script>