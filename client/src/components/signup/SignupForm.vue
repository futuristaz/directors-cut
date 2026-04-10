<script setup>
import { ref } from 'vue'
import InputField from '@/components/shared/InputField.vue'
import HighlightCta from '../shared/HighlightCta.vue'

const username = ref('')
const email = ref('')
const password = ref('')
</script>

<template>
    <div class="flex flex-col flex-1 justify-center items-center px-8">
        <div class="flex flex-col w-full max-w-sm gap-5">
            <p class="font-headline font-bold text-3xl text-on-surface mb-5">
                Create an account
            </p>
            <div class="flex flex-col gap-5">
                <InputField label="Username" v-model="username" placeholder="Enter your username">
                    <template #icon>
                        <i class="pi pi-user"></i>
                    </template>
                </InputField>
                <InputField label="Email" type="email" v-model="email" placeholder="you@example.com">
                    <template #icon>
                        <i class="pi pi-envelope"></i>
                    </template>
                </InputField>
                <InputField label="Password" type="password" v-model="password" placeholder="••••••••••">
                    <template #icon>
                        <i class="pi pi-lock"></i>
                    </template>
                </InputField>
                <HighlightCta class="hover:opacity-90 transition-opacity" text="BEGIN YOUR JOURNEY"/>
                <p class="font-body text-on-surface-variant text-sm text-center">
                    Already have an account? <a href="/login" class="text-primary-container font-body font-bold hover:opacity-90 transition-opacity">LOG IN</a>
                </p>
            </div>
        </div>
    </div>
</template>