<template>
    <v-card class="max-w-[600px] mx-auto mt-16 rounded-lg">
        <div class="flex justify-center mt-2">
            <v-card-title class="text-h4">Register your account</v-card-title>
        </div>

        <v-sheet class="mx-auto w-10/12">
            <v-form v-model="form" @submit.prevent="handleSubmit">
                <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    :maxLength="12"
                    :readonly="isLoading"
                    counter
                    clearable
                    label="Username"
                    class="mt-2"
                ></v-text-field> 
                <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    :readonly="isLoading"
                    clearable
                    label="Email"
                    class="mt-8"
                ></v-text-field>
                <v-text-field
                    :type="isShowPassword ? 'text' : 'password'"
                    v-model="password"
                    :rules="passwordRules"
                    :maxLength="30"
                    :readonly="isLoading"
                    counter
                    clearable
                    label="Password"
                    class="mt-8 max-l"></v-text-field>
                <v-text-field
                    :type="isShowPassword ? 'text' : 'password'"
                    v-model="passwordConfirm"
                    :rules="passwordConfirmRules"
                    :readonly="isLoading"
                    clearable
                    label="Confirm password"
                    class="mt-8"></v-text-field>
                <v-checkbox 
                label="Show password"
                v-model="isShowPassword"></v-checkbox>
            <div class="my-5 flex justify-center border">
                <v-btn
                  type="submit" 
                  color="deep-purple-accent-1" 
                  block
                  :disabled="!form"
                  :loading="isLoading">Submit</v-btn>
            </div>
            </v-form>
        </v-sheet>
    </v-card>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const isLoading = ref(false)
  const form = ref(false)
  const isShowPassword = ref(false)
  const email = ref('')
  const username = ref('')
  const password = ref('')
  const passwordConfirm = ref('')

  const usernameRules = [
    (value: string) => !!value || 'Username is required',
    (value: string) => value.length >= 3 || 'Minimum 3 characters',
    (value: string) => value.length <=12 || 'Maximum 12 characters',
    (value: string) => !/\s/.test(value) || 'No spaces allowed',
    (value: string) => /^[a-zA-Z0-9_]+$/.test(value) || 'Only letters, numbers, and underscores allowed'
  ]

  const passwordRules = [
    (value: string) => !!value || 'Password is required',
    (value: string) => value.length >= 6 || 'Minimum 6 characters',
    (value: string) => value.length <=30 || 'Maximum 30 characters',
  ]

  const passwordConfirmRules = [
    (value: string) => !!value || 'Please confirm your password',
    (value: string) => value === password.value || 'Passwords do not match'
  ]

  const emailRules = [
    (value: string) => !!value || 'Email is required',
    (value: string) =>
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value) || // Accepts user.name+tag@example.co.uk. Rejects obvious invalid formats
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