<template>
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
          :rules="usernameRules"
          label="Username"
          :readonly="isLoading"
          clearable>
        </v-text-field>

        <v-text-field
          v-model="password"
          :rules="passwordRules"
          label="Password"
          class="my-2"
          :readonly="isLoading"
          clearable>
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
  </v-card>
</template>
<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const isRememberMe = ref(false)
const form = ref(false)
const isLoading = ref(false)

const username = ref('')
const password = ref('')

const usernameRules = [
  value => !!value || 'Username is required'
]

const passwordRules = [
  value => !!value || 'Password is required'
]

const passwordResetRedirect = () => {
  router.push('/password-reset')
}

const handleSubmit = () => {
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
  }, 2000);
}

</script>
<style scoped>

</style>