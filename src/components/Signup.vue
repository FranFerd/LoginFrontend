<template>
  <v-container>
    <v-card 
      class="mx-auto max-w-[600px] rounded-xl mt-16"
      color="surface">
      <div class="flex justify-center mt-2">
          <v-card-title class="text-h4">Register your account</v-card-title>
      </div>

      <v-sheet 
        class="mx-auto w-10/12">
          <v-form v-model="form" @submit.prevent="handleSubmit">
            <v-text-field
              v-model="username"
              counter
              clearable
              label="Username"
              class="mt-2"
              :rules="usernameRules"
              :maxLength="12"
              :readonly="isLoading">
            </v-text-field> 

            <v-text-field
                v-model="email"
                clearable
                label="Email"
                class="mt-8"
                :rules="emailRules"
                :readonly="isLoading"
                :maxLength="254">
            </v-text-field>

            <v-text-field
              v-model="password"
              counter
              clearable
              label="Password"
              class="mt-8 max-l"
              :prepend-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :type="isShowPassword ? 'text' : 'password'"
              :rules="passwordRules"
              :maxLength="30"
              :readonly="isLoading"
              @click:prepend-inner="toggleShowPassword">
            </v-text-field>

            <v-text-field
              v-model="passwordConfirm"
              clearable
              label="Confirm password"
              class="mt-8"
              :prepend-inner-icon="isShowPassword ? 'mdi-eye' : 'mdi-eye-off'"
              :maxLength="30"
              :type="isShowPassword ? 'text' : 'password'"
              :rules="confirmRules"
              :readonly="isLoading"
              @click:prepend-inner="toggleShowPassword">
            </v-text-field>
            
          <div class="my-8 flex justify-center">
            <v-btn
              type="submit" 
              color="primary" 
              block
              :disabled="!form"
              :loading="isLoading">Sign up
            </v-btn>
          </div>
        </v-form>
      </v-sheet>
    </v-card>
      <v-snackbar
        v-model="snackbar"
        class="mb-8"
        timeout="7000"
        color="deep-orange-darken-4"
        location="bottom">{{ errorMessage }}
  
        <template v-slot:actions>
          <v-btn
            color="light-blue-lighten-2"
            variant="text"
            @click="snackbar = false"
          >
            Close
          </v-btn>
        </template>
      </v-snackbar>
  </v-container>
 <v-dialog
    v-model="dialog"
    max-width="500px"
    transition="dialog-transition"
  >
    <template #default>
      <SignupCodeVerification 
      @close="dialog = false" 
      :username="username"
      :password="password"
      :email="email.toLowerCase()">
      </SignupCodeVerification> <!-- on emit 'close' -->
    </template>
  </v-dialog>
</template>
<script setup lang="ts">
import { computed, ref } from 'vue'
import { usernameRules, emailRules, passwordRules, passwordConfirmRules } from '@/utils/rules'
import SignupCodeVerification from './SignUpCodeVerification.vue'
import axios from 'axios'

import type { UserCredentials } from '@/types/credentials'

const isLoading = ref(false)
const form = ref(false)
const isShowPassword = ref(false)

const email = ref('')
const username = ref('')
const password = ref('')
const passwordConfirm = ref('')

const snackbar = ref(false)
const errorMessage = ref('')

const dialog = ref(false)

const confirmRules = computed(() => passwordConfirmRules(password.value))

const toggleShowPassword = () => {
  isShowPassword.value = !isShowPassword.value
}

const getUserCredentials = (): UserCredentials => {
  return {
    username: username.value,
    password: password.value,
    email: email.value.toLowerCase()
  }
}

const handleSubmit = async (): Promise<void> => {
  try{
    if(!form.value) return
    
    isLoading.value = true
    const response = await axios.post('http://127.0.0.1:8000/signup/request-confirmation', getUserCredentials())
    console.log(response.data)

    dialog.value = true
  }
  catch (error: unknown) {
    snackbar.value = true
    
    if (axios.isAxiosError(error) && error.response){
      errorMessage.value = error.response.data.detail[0].msg || error.response.data.detail || 'Unknown error'
      console.error(errorMessage.value)
    }
    else{
      errorMessage.value = "Unexpected error"
      console.error(errorMessage.value)
    }
  } 
  finally{
    isLoading.value = false
  }
}
</script>
<style scoped>
::v-deep(.v-snackbar__content) {
  font-size: 20px;
}
</style>