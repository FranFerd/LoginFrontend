<template>
    <div v-if="isRegistered" class="text-center">
        <v-card max-width="600" class="pa-8 rounded-xl">
            <v-icon color="success" size="64" class="mb-4">
                mdi-check-circle-outline
            </v-icon>

            <h1 class="text-h4 mb-2 ">Welcome, {user}!</h1> 
            <p class="text-h6 mb-2">You are seeing this message because you are registered. Here's a cookie</p>

            <div class="flex justify-center align-center mt-5">
                <v-img
                src="../assets/icons/cookie.png"
                max-height="200px"
                max-width="200px">
                </v-img>
            </div>
            <div class="flex justify-center gap-10 mt-4">
                <v-btn
                color="primary"
                >
                <v-icon left>
                    mdi-home
                </v-icon>
                    Home page
                </v-btn>
                
                <v-btn
                color="secondary">
                <v-icon left>
                    mdi-account
                </v-icon>
                    Profile page
                </v-btn>
            </div>
            
        </v-card>

    </div>
</template>
<script setup lang="ts">
import { ref } from 'vue';
const isRegistered = ref(true)
</script>