<script setup>
import { ref } from 'vue'

  const username = ref('')
  const usernameRules = [
    value => {
      if (value?.length >= 3) return true
      return 'Username must be at least 3 characters.'
    },
  ]

  const password = ref('123')
  const passwordRules = [
    value => {
      if (/[^0-9]/.test(value)) return true
      return 'Last name can not contain digits.'
    },
  ]
</script>
<template>
    <v-card class="max-w-[600px] mx-auto mt-16 rounded-lg">
        <div class="flex justify-center mt-2">
            <v-card-title class="text-h4">Log into your account</v-card-title>
        </div>
        <div class="flex justify-center my-4">
            <v-img
                height="200px"
                class="rounded-full"
                src="../assets/icons/profile.png"
            ></v-img>
        </div>

        <v-sheet class="mx-auto w-10/12">
            <v-form @submit.prevent>
                <v-text-field
                    v-model="username"
                    :rules="usernameRules"
                    label="Username"
                    class="mt-2"
                ></v-text-field>
                <v-text-field
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    class="mt-8"></v-text-field>
                <v-checkbox 
                    label="Remember me"
                    v-model="isRememberMe"></v-checkbox>
            <div class="my-8 flex justify-center border">
                <v-btn type="submit" color="deep-purple-accent-1" block>Login</v-btn>
            </div>
            </v-form>
        </v-sheet>
    </v-card>
</template>