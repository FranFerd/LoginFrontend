<template>
<v-container>
    <v-card
        class="max-w-[600px] mx-auto rounded-xl mt-16"
        color="surface">
        <v-img
            src='/src/assets/icons/lock-light.png'
            height="200px"
            class="my-5"
            :class="themeClass">
        </v-img>
    
        <v-card-text
            class="text-h3 flex justify-center">
            Forgot your password?
        </v-card-text>
    
        <v-card-text
            class="text-h5 flex justify-center">
            We will send you an email to reset your password
        </v-card-text>
        <v-form 
            v-model="form"
            @submit.prevent="handleSubmit"
            class="w-[87%] mx-auto mt-5">
            <v-text-field 
                label="Enter your email"
                clearable
                :readonly="isLoading"
                :rules="emailRules">
                <template #prepend>
                    <div class="border-4 border-double rounded-2xl">
                        <v-icon size="65" class="">mdi-email</v-icon>
                    </div>    
                </template>
            </v-text-field>
    
            <v-btn
            type="submit"
            class="w-full mb-8"
            color="primary"
            :disabled="!form"
            :loading="isLoading"> Reset password
            </v-btn>
        </v-form>
    </v-card>
</v-container>
</template>
<script setup lang="ts">
import { useTheme } from 'vuetify';
import { computed, ref } from 'vue';

const theme = useTheme()
const themeClass = computed(() => 
    theme.global.name.value === 'dark' ? 'inverted' : ''
)

const form = ref(false)
const isLoading = ref(false)

const emailRules = [
  (value: string) => !!value || 'Email is required',
  (value: string) =>
  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || // Accepts user.name+tag@example.co.uk
  'Enter a valid email address'
]

const handleSubmit = (): void => {
  if(!form.value) return
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000);
}
</script>
<style scoped>
.inverted{
    filter: invert(1)
}
</style>