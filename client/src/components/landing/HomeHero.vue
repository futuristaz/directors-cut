<script setup>
import heroBackdrop from '../../assets/img/hero-backdrop.jpeg'
import HighlightCta from '../shared/HighlightCta.vue';
</script>

<template>
    <section class="relative max-h-screen overflow-hidden bg-surface">
        <img :src="heroBackdrop" alt="Hero backdrop" class="w-full object-cover" />

        <!-- dim overlay -->
        <div class="absolute inset-0 bg-surface opacity-75"></div>

        <!-- fade top -->
        <div class="absolute inset-x-0 top-0 h-24 bg-linear-to-b from-surface to-transparent"></div>

        <!-- fade bottom -->
        <div class="absolute inset-x-0 bottom-0 h-24 bg-linear-to-t from-surface to-transparent"></div>

        <div class="absolute inset-0 flex flex-col items-start justify-center px-16">
            <h1 class="font-headline text-[5.5rem] font-extrabold text-on-surface leading-none tracking-tighter">
                EVERY FRAME<br />MATTERS.
            </h1>
            <h1 class="font-headline text-[5.5rem] font-extrabold text-primary-container leading-none mt-4 tracking-tighter"
                style="filter: drop-shadow(0 0 30px #E50914aa);">
                TRACK YOUR<br />JOURNEY.
            </h1>
            <p class="font-body text-xl text-primary mt-4">
                Join a community of film enthusiasts. Rate, review and <br /> curate your private screening collection with editorial precision.
            </p>
            <div class="mt-4">
                <HighlightCta class="hover:opacity-90 transition-opacity" text="Join Now" to="/signup"/>
            </div>
        </div>
    </section>
</template>