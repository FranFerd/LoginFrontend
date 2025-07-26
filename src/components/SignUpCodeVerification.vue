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
      We have sent a 6-digit code to 
      <div class="my-2 underline">
        '{{ props.email }}'
      </div> 
      <div>
        Enter the code in the form below.
      </div>
    </v-card-text>
    
    <v-form 
      v-model="codeForm"
      @submit.prevent="handleSubmit"
      class="ml-10 w-4/5">
      <div class="flex gap-5 mt-5">
        <v-text-field
          v-model="verificationCode"
          label="6-digit code"
          clearable
          :readonly="isLoadingSubmit"
          :maxLength="6"
          :rules="codeRules">
        </v-text-field>

        <v-btn
          type="submit"
          color="primary"
          style="height: 74px" 
          class="text-h6"
          :loading="isLoadingSubmit"
          :disabled="!codeForm">Submit code
        </v-btn>
      </div>
    </v-form>

    <v-snackbar
        v-model="snackbar"
        class="mb-8"
        timeout="7000"
        color="deep-orange-darken-4"
        location="bottom">{{ snackbarMessage }}
  
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

    <v-card-text class="ml-3">
      Didn't receive any email? 
      <div>
        <span v-if="isLoadingResend">
          <v-progress-circular
            color="purple"
            indeterminate
          ></v-progress-circular>
        </span>
        <a v-if="!isLoadingResend || !isCounterStarted" @click="resendCode" class="cursor-pointer underline">
          resend code
        </a>
      </div>
      <div v-if="isCounterStarted">
        Please wait {{ counter }} seconds before resending email
      </div>
    </v-card-text>

  </v-card>
</template>
<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { codeRules } from '@/utils/rules'
import axios from 'axios'
import type { CodeAndEMail, UserCredentials } from '@/types/credentials'

const props = defineProps<{
  username: string,
  password: string,
  email: string
}>()

const verificationCode = ref('')
const codeForm = ref(false)

const snackbar = ref(false)
const snackbarMessage = ref('')

const isLoadingSubmit = ref(false)
const isLoadingResend = ref(false)

const counter = ref(60)
const isCounterStarted = ref(false)
const interval = ref(0)

const emit = defineEmits(['close'])

const handleClose = () => {
  emit('close')
}

const getCodeAndEmail = (): CodeAndEMail => {
    return {
      code: verificationCode.value,
      email: props.email
    }
}

const getUserCredentials = (): UserCredentials  => {
  return {
    username: props.username,
    password: props.password,
    email: props.email
  }
}

const startCountdown = (): void => {
  isCounterStarted.value = true
  counter.value = 60

  interval.value = setInterval(() => {
    if (counter.value === 1){
      clearInterval(interval.value)
      isCounterStarted.value = false
    }
    counter.value--
  }, 1000)
}

const handleSubmit = async (): Promise<void> => {
  try{
    isLoadingSubmit.value = true
    const response = await axios.post('http://127.0.0.1:8000/signup/register', getCodeAndEmail())
    console.log(response.data)
    handleClose()
  }
  catch(error: unknown){
    snackbar.value = true

    if(axios.isAxiosError(error) && error.response){
      snackbarMessage.value = error.response.data.detail[0].msg || error.response.data.detail || 'Unknown error'
      console.error(snackbarMessage.value)
    }
    else{
      snackbarMessage.value = "Unexpected error"
      console.error(snackbarMessage.value)
    }
  }
  finally{
    isLoadingSubmit.value = false
  }
}

const resendCode = async (): Promise<void> => {
  try{
    isLoadingResend.value = true
    
    const response = await axios.post('http://127.0.0.1:8000/signup/request-confirmation', getUserCredentials())
    console.log(response.data)

    snackbar.value = true
    snackbarMessage.value = response.data.message
    startCountdown()
  }
  catch (error: unknown) {
    snackbar.value = true
    
    if (axios.isAxiosError(error) && error.response){
      snackbarMessage.value = error.response.data.detail[0].msg || error.response.data.detail || 'Unknown error'
      console.error(snackbarMessage.value)
    }
    else{
      snackbarMessage.value = "Unexpected error"
      console.error(snackbarMessage.value)
    }
  } 
  finally{
    isLoadingResend.value = false
  }
}

onMounted(async () => {
  console.log(props.email)
})

</script>
<style scoped>
:deep(.v-field__input) {
    font-size: 30px;
}
:deep(.v-label.v-field-label.v-field-label--floating){
    font-size: 15px   
}
:deep(.v-label.v-field-label){
    font-size: 18px
}
:deep(.v-messages__message){
    font-size: 15px
}
</style>