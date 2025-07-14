<template>
  <v-container>
    <v-card class="max-w-[600px] mx-auto mt-16 rounded-xl">
      <div class="flex justify-center mt-2">
          <v-card-title class="text-h4">Log into your account</v-card-title>
      </div>
      <div class="flex justify-center mt-2 mb-5">
          <v-img
          height="186px"
          class="rounded-full"
          src="../assets/icons/profile.png"
          ></v-img>
      </div>
  
        <v-form 
          v-model="form" 
          @submit.prevent="handleSubmit"
          class="mx-auto w-10/12">
          <v-text-field
            v-model="username"
            label="Username"
            clearable
            :rules="usernameRulesLogin"
            :maxLength="12"
            :readonly="isLoading">
          </v-text-field>
  
          <v-text-field
            v-model="password"
            label="Password"
            clearable
            class="my-2"
            :rules="passwordRulesLogin"
            :minLength="6"
            :maxLength="30"
            :prepend-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
            :type="isShowPassword ? 'text' : 'password'"
            :readonly="isLoading"
            @click:prepend-inner="toggleShowPassword">
          </v-text-field>
  
          <div class="flex place-content-between">
            <v-checkbox 
              class="text-body-1 h-14"
              label="Remember me"
              v-model="isRememberMe"
              :readonly="isLoading">
            </v-checkbox>
              <v-btn 
                color="secondary"
                class="text-body-1" 
                style="height: 56px;" 
                @click="passwordResetRedirect">Forgot password?
              </v-btn>
          </div>
  
          <div class="my-8 flex justify-center">
            <v-btn 
              type="submit" 
              color="primary" 
              block
              :disabled="!form"
              :loading="isLoading">Login
            </v-btn>
          </div>
        </v-form>
    </v-card>
  </v-container>
</template>
<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { usernameRulesLogin, passwordRulesLogin } from '@/utils/rules'

const router = useRouter()

const isRememberMe = ref(false)
const isLoading = ref(false)
const form = ref(false)
const isShowPassword = ref(false)

const username = ref('')
const password = ref('')

const toggleShowPassword = () => {
  isShowPassword.value = !isShowPassword.value
}

const passwordResetRedirect = () => {
  router.push('/password-reset-email')
}

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000);
}
</script>