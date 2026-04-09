<script setup>
import heroBackdrop from '../assets/img/hero-backdrop.jpeg'
</script>

<template>
    <section class="relative max-h-screen overflow-hidden">
        <img :src="heroBackdrop" alt="Hero backdrop" class="w-full object-cover" />

        <!-- dim overlay -->
        <div class="absolute inset-0 bg-surface opacity-60"></div>

        <!-- fade top -->
        <div class="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-surface to-transparent"></div>

        <!-- fade bottom -->
        <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface to-transparent"></div>

        <div class="absolute inset-0 flex flex-col items-start justify-center px-16">
            <h1 class="font-headline text-8xl font-extrabold text-on-surface leading-none">
                EVERY FRAME<br />MATTERS.
            </h1>
            <h1 class="font-headline text-8xl font-extrabold text-primary-container leading-none mt-4"
                style="filter: drop-shadow(0 0 30px #E50914aa);">
                TRACK YOUR<br />JOURNEY.
            </h1>
        </div>
    </section>
</template>