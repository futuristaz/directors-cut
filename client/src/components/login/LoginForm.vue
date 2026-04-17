<script setup>
import { ref } from 'vue'
import { login } from '@/api/auth'
import InputField from '@/components/shared/InputField.vue'
import HighlightCta from '../shared/HighlightCta.vue'
import router from '@/router'
import { useAuth } from '@/stores/auth'

const email = ref('')
const password = ref('')

const error = ref('')
const { setUser } = useAuth()

const handleSubmit = async () => {
    if (!email.value) {
        error.value = 'Email is required'
        return
    }
    if (!password.value) {
        error.value = 'Password is required'
        return
    }

    try {
        const data = await login(email.value, password.value)
        setUser(data.user)
        router.push('/home')
    } catch (e) {
        error.value = e.message
    }
}

</script>

<template>
    <div class="relative flex-1 flex items-center justify-center overflow-hidden" style="height: calc(100vh - 128px)">
        <!-- Background -->
        <div class="absolute inset-0 z-0">
            <img class="w-full h-full object-cover opacity-40"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDnwsGmG7UunNEE-wj8WAZQ5d9SejEcKYLsIzwbb--xvbWUseXrc3Y8Kxx83MpVPFZ7t85a-_kEmzVKS2kHRqONMU-KrklR6zbQRZWPS8oO0g8uJxj5cCn7SJBJYtLfiPEX3eTj5QXOjsFPQQxA8JoCOEfVHuysJ6JBU0OA6SRSCKQrywXJVzFFLNOrwXxH6ROr9dXQjoiBDdD2-kFJ7KD8P2w9kQLn3Kt57gw9SULhblTPGVbkSgoCRerufsleoClkB1U0n3011zdR" />
            <div class="absolute inset-0 cinematic-vignette"></div>
            <div class="absolute inset-0 spotlight-glow"></div>
        </div>

        <!-- Card -->
        <div class="relative z-10 w-full max-w-md px-6">
            <div
                class="bg-surface-container/70 backdrop-blur-2xl p-10 rounded-xl shadow-2xl border border-outline-variant/10">
                <div class="mb-10 text-center">
                    <h1 class="text-4xl font-headline font-black tracking-tighter uppercase text-on-surface mb-2">
                        Welcome Back
                    </h1>
                    <p class="text-on-surface-variant font-label text-sm tracking-wide uppercase">
                        Access the Private Archive
                    </p>
                </div>

                <div class="space-y-6">
                    <InputField label="Email" type="email" v-model="email" placeholder="you@example.com">
                        <template #icon>
                            <i class="pi pi-envelope"></i>
                        </template>
                    </InputField>
                    <InputField label="Password" type="password" v-model="password" placeholder="••••••••">
                        <template #icon>
                            <i class="pi pi-lock"></i>
                        </template>
                    </InputField>

                    <p v-if="error" class="text-error text-sm font-body text-center">{{ error }}</p>

                    <HighlightCta text="Enter the Gallery" class="w-full uppercase" @submit="handleSubmit" />
                </div>

                <div class="mt-10 border-t border-outline-variant/10 text-center">
                    <p class="text-on-surface-variant font-label text-sm uppercase tracking-wide">
                        New to the collection?
                        <RouterLink to="/signup" class="text-secondary font-bold hover:underline ml-2">Join Now
                        </RouterLink>
                    </p>
                </div>
            </div>
        </div>
    </div>
</template>