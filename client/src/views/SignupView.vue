<script setup>
import InputField from '@/components/shared/InputField.vue';

</script>

<template>
    <div class="bg-surface min-h-screen px-5 py-5 flex-col flex gap-5">
        <InputField label="Username" v-model="username" placeholder="Enter your username">
            <template #icon>
                <i class="pi pi-user"></i>
            </template>
        </InputField>
        <InputField label="Email" v-model="email" placeholder="you@example.com">
            <template #icon>
                <i class="pi pi-envelope"></i>
            </template>
        </InputField>
    </div>
</template>