<template>
  <v-card
    class="rounded-lg shadow-lg hover:shadow-x1 transition-shadow"
    color="surface"
    elevation="2">
    <div class="flex-col">
      <div class="flex justify-center py-2">
        <v-icon
          size="100"
          class="text-primary-600">
          {{ icon }}
        </v-icon>          
      </div>

      <div class="flex justify-center text-center">
        <h3 class="text-h4 font-semibold mb-2" color="grey">
          {{ title }}
        </h3>
      </div>
      
      <div class="text-h5 text-center">
        <p class=" pr-5 pl-5 pb-2">
          {{ description }}
        </p>
      </div>
    </div>
  </v-card>
</template>
<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
}>()
</script>