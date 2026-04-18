<script setup>
import LoginForm from '@/components/login/LoginForm.vue';
import { useAuth } from '@/stores/auth'
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const { user, loading } = useAuth()

watchEffect(() => {
    if (!loading.value && user.value) {
        router.push('/home')
    }
})
</script>

<template>
    <LoginForm />
</template>