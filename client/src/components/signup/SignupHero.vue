<script setup>
import SignupBackdrop from '@/assets/img/signup-backdrop.png'
</script>

<template>
    <section class="relative overflow-hidden h-screen shrink-0 w-8/12 bg-surface">
        <img :src="SignupBackdrop" alt="Signup backdrop" class="h-full w-full object-cover object-center grayscale opacity-50" />
        <div class="absolute inset-0 flex flex-col items-start justify-end px-16 pb-16">
            <h1 class="font-headline text-6xl font-black text-on-surface tracking-tighter mb-4">
                CURATING THE <br /> <span class="text-primary-container">
                    UNSEEN.
                </span></h1>
            <p class="text-on-surface-variant text-lg max-w-sm font-body leading-relaxed mb-15">
                Access a masterfully curated library of independent cinema, director's cuts, and lost masterpieces.
            </p>
        </div>
    </section>
</template>