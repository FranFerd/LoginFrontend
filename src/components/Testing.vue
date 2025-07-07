<script setup lang="ts">
import { useTheme } from 'vuetify'

const theme = useTheme()

function toggleTheme () {
  theme.global.name.value = theme.global.current.value.dark ? 'light' : 'dark'
}
</script>
<template>
<v-switch
  inset
  hide-details
  class="my-auto"
  @change="toggleTheme"
>
  <!-- Prefix slot for sun icon -->
  <template #prepend>
    <v-icon color="yellow-accent-2">mdi-weather-sunny</v-icon>
  </template>

  <!-- Label slot -->
  <template #label>
    <v-icon color="blue lighten-3">mdi-weather-night</v-icon>
  </template>
</v-switch>

</template>