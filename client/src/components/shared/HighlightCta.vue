<script setup>
defineProps({
    text: {
        type: String
    },
    to: {
        type: String
    }
});
</script>

<template>
    <RouterLink v-if="to" :to="to"
        class="cursor-pointer font-label font-bold text-on-primary bg-linear-to-tl from-primary-container from-50% to-primary px-6 py-3 text-center rounded-sm hover:opacity-90 transition-opacity">
        {{ text }}
    </RouterLink>
    <button v-else
        class="cursor-pointer font-label font-bold text-on-primary bg-linear-to-tl from-primary-container from-50% to-primary px-6 py-3 text-center rounded-sm hover:opacity-90 transition-opacity"
        @click="$emit('submit')">
        {{ text }}
    </button>
</template>