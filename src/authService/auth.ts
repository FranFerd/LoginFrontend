import axios from "axios";
import { ref } from "vue";

import type { UserCredentials } from "@/types/credentials";
import type { TokenData } from "@/types/token";

const isAuthenticated = ref(false)
const authToken = ref<string | null>(localStorage.getItem('token') || null)
const API_BASE = 'http://127.0.0.1:8000/token'

const setAuth = (token: string): void => {
    authToken.value = token
    isAuthenticated.value = true
    localStorage.setItem('token', token)
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`
}

const clearAuth = (): void => {
    authToken.value = null
    isAuthenticated.value = false
    localStorage.removeItem('token')
    delete axios.defaults.headers.common['Authorization']
}

const login = async(credentials: URLSearchParams): Promise<TokenData>  => {
    const response = await axios.post(`${API_BASE}/token`, credentials)
    return response.data
}

const signup = async() => {

}