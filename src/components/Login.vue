<template>
  <v-card class="max-w-[600px] mx-auto mt-16 rounded-xl">
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
      <v-form v-model="form" @submit.prevent="handleSubmit">
        <v-text-field
          v-model="username"
          :rules="fieldRules"
          label="Username"
          class="mt-2"
          :readonly="isLoading">
        </v-text-field>

        <v-text-field
          v-model="password"
          :rules="fieldRules"
          label="Password"
          class="mt-8"
          :readonly="isLoading">
        </v-text-field>

        <v-checkbox 
          label="Remember me"
          v-model="isRememberMe"
          :readonly="isLoading">
        </v-checkbox>

        <div class="my-8 flex justify-center border">
          <v-btn 
            type="submit" 
            color="primary" 
            block
            :disabled="!form"
            :loading="isLoading">Login
          </v-btn>
        </div>
      </v-form>
    </v-sheet>
  </v-card>
</template>
<script setup>
import { ref } from 'vue'

  const isRememberMe = ref(false)
  const form = ref(false)
  const isLoading = ref(false)

  const username = ref('')
  const password = ref('')

  const fieldRules = [
    value => !!value || "This field is required"
  ]

  const handleSubmit = () => {
    isLoading.value = true
    setTimeout(() => {
      isLoading.value = false
    }, 2000);
  }

</script>