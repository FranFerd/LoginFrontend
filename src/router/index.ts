import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: () => import('@/components/Home.vue')
    },
    {
        path: "/login",
        name: "Login",
        component: () => import('@/components/Login.vue')
    },
    {
        path: "/signup",
        name: "Signup",
        component: () => import('@/components/Signup.vue')
    },
    {
        path: "/protected",
        name: "Protected",
        component: () => import('@/components/Protected.vue')
    },
    {
        path: "/test",
        name: "test",
        component: () => import('@/components/Testing.vue')
    },
    {
        path: "/password-reset-email",
        name: "PasswordResetEmail",
        component: () => import('@/components/PasswordResetEmail.vue')
    }
]

export const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes,
})