<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>
<template>
  <v-card
    class="rounded-lg shadow-lg hover:shadow-x1 transition-shadow"
    color="surface"
    elevation="2">
    <div class="flex-col gap-5">
      <div class="flex justify-center py-2">
        <v-icon
          size="48"
          class="text-primary-600 dark:text-primary-400">
          {{ icon }}
        </v-icon>          
      </div>

      <div class="flex justify-center">
        <h3 class="text-xl font-semibold mb-2 text-gray-900 dark:text-gray-500" color="grey">
          {{ title }}
        </h3>
      </div>
      
      <div class="text">
        <p class="text-gray-600 dark:text-gray-500 pr-5 pl-5 pb-2">
          {{ description }}
        </p>
      </div>
    </div>
  </v-card>
</template>