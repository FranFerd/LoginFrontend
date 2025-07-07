<script setup lang="ts">
import { ref, computed } from 'vue';
import { useTheme } from 'vuetify';

const theme = useTheme()
const isDark = computed(() => theme.global.current.value.dark)

const toggleTheme = () => {
  theme.global.name.value = isDark.value ? 'light' : 'dark'
}
</script>
<template>
<v-app-bar color="primary">Bar</v-app-bar>
<v-card color="surface">Card</v-card>
<v-btn color="primary">Button</v-btn> 
<v-sheet color="background">Sheet</v-sheet>

</template>