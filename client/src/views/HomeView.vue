<script setup>
import { watchEffect } from 'vue'
import { useRouter } from 'vue-router'
import { useAuth } from '@/stores/auth'

const router = useRouter()
const { user, loading } = useAuth()

watchEffect(() => {
    if (!loading.value && !user.value) {
        router.replace('/login')
    }
})
</script>

<template>
    <div class="flex-1 flex items-center justify-center">
        <div class="text-center space-y-4">
            <p v-if="loading" class="text-on-surface-variant font-body">Loading...</p>
            <div v-else-if="user">
                <h1 class="font-headline text-4xl font-black text-on-surface tracking-tighter uppercase mb-2">
                    Welcome, {{ user.username }}
                </h1>
                <p class="text-on-surface-variant font-body">{{ user.email }}</p>
            </div>
            <div v-else>
                <h1 class="font-headline text-4xl font-black text-primary-container tracking-tighter uppercase mb-2">
                    Not logged in
                </h1>
            </div>
        </div>
    </div>
</template>