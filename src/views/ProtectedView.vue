<script setup lang="ts">
    // Pinia store needed for account retention
import { ref } from 'vue';
import ProtectedRegistered from '@/components/ProtectedRegistered.vue';
import ProtectedNotRegistered from '@/components/ProtectedNotRegistered.vue';
const isRegistered = ref(false)
const registerSwitch = (): void => {
    isRegistered.value = !isRegistered.value
}
</script>
<template>
<v-container class="flex flex-col justify-center align-center" style="min-height: 80vh;">
    <v-btn @click="registerSwitch">
        Switch
    </v-btn>
    <div v-if="isRegistered">
        <ProtectedRegistered></ProtectedRegistered>
    </div>
    <div v-else>
        <ProtectedNotRegistered></ProtectedNotRegistered>
    </div>
</v-container>
</template>