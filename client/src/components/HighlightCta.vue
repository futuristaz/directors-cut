<script setup>
defineProps({
    text: {
        type: String
    },
    color: {
        type: String,
        default: 'primary-container'
    }
});
</script>

<template>
    <button
        class="bg-primary-container font-label font-bold text-on-primary bg-linear-to-tl from-primary-container from-50% to-primary px-6 py-3 text-center rounded-sm" 
        @click="console.log('clicked')"
    >
        {{ text }}
    </button>
</template>