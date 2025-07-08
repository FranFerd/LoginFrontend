<template>
  <v-card
    max-width="600"
    color="surface"
    class="mx-auto mt-16 rounded-xl">
    <div class="flex justify-center">
      <v-card-title class="text-h4 mt-2">
        Email verification
      </v-card-title>
    </div>
    <v-card-subtitle class="text-h5 mt-5 ml-5">
      Please confirm your email
    </v-card-subtitle>
    <v-card-text class="text-h5 ml-3">
      We have sent a 6-letter code to the (email). 
      <div>
        Enter the code in the form below.
      </div>
    </v-card-text>
    <v-form 
      v-model="codeForm"
      class="ml-10 w-4/5"
      @submit.prevent="handleSubmit">
      <div class="flex gap-5 mt-5">
        <v-text-field
          v-model="verificationCode"
          :readonly="isLoading"
          :maxLength="6"
          :rules="textRules"
          label="6-letter-code"
          clearable>
        </v-text-field>
          <v-btn
            type="submit"
            :loading="isLoading"
            :disabled="!codeForm"
            color="primary"
            class="text-h6"
            style="height: 74px"> Submit code
          </v-btn>
      </div>
    </v-form>

    <v-card-text class="ml-3">
      Didn't receive any email? 
      <div>
        Check spam folder or resend code (count down 00:59)
      </div>
    </v-card-text>

  </v-card>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const verificationCode = ref('')
const codeForm = ref(false)
const isLoading = ref(false)

const textRules = [
  (value: string) => !!value || 'Enter code',
  (value: string) => value.length === 6 || 'Code is 6 characters'
]

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const handleSubmit = () => {
  if(!codeForm.value) return
  isLoading.value = true
  setTimeout(() => {
    isLoading.value = false
    handleClose()
  }, 2000);
}
</script>