<template>
    <v-card class="max-w-[600px] mx-auto mt-16 rounded-lg">
        <div class="flex justify-center mt-2">
            <v-card-title class="text-h4">Register your account</v-card-title>
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
                    v-model="email"
                    :rules="emailRules"
                    label="Email"
                    class="mt-8"
                ></v-text-field>
                <v-text-field
                    :type="isShowPassword ? 'text' : 'password'"
                    v-model="password"
                    :rules="passwordRules"
                    label="Password"
                    class="mt-8"></v-text-field>
                <v-text-field
                    :type="isShowPassword ? 'text' : 'password'"
                    v-model="passwordConfirm"
                    :rules="passwordConfirmRules"
                    label="Confirm password"
                    class="mt-8"></v-text-field>
                <v-checkbox 
                label="Show password"
                v-model="isShowPassword"></v-checkbox>
            <div class="my-5 flex justify-center border">
                <v-btn type="submit" color="deep-purple-accent-1" block>Submit</v-btn>
            </div>
            </v-form>
        </v-sheet>
    </v-card>
</template>
<script setup lang="ts">
  import { ref } from 'vue'

  const isShowPassword = ref(false)
  const email = ref('')
  const username = ref('')
  const password = ref('')

  const usernameRules = [
    value => {
      if (value?.length >= 3 && value?.length <= 12) return true
      return 'Username must be between 3 and 12 characters.'
    },
  ]

  const passwordRules = [
    value => {
      if (value?.length >= 3 && value?.length <= 12) return true
      return 'Password must be between 3 and 12 characters.'
    },
  ]

  const passwordConfirmRules = [
    value => {
        if (value === password.value) return true
        return "Passwords do not match" 
    }
  ]

  const emailRules = [
    value => {
        if(value.includes){

        }
    }
  ]
</script>