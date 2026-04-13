<script setup>
import HighlightCta from '@/components/shared/HighlightCta.vue';

</script>

<template>
    <main class="relative min-h-screen flex items-center justify-center overflow-hidden px-6"> -->
        <!-- 404 Content (Asymmetric & High Contrast) -->
        <div class="relative z-20 w-full flex flex-col items-center text-center">
            <!-- Large Dramatic Typography -->
            <div class="relative mb-4">
                <h1
                    class="font-headline text-[12rem] md:text-[20rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-linear-to-b from-surface-bright via-surface-variant to-transparent opacity-60 select-none">
                    404
                </h1>
                <div class="absolute inset-0 flex items-center justify-center">
                    <span
                        class="font-headline text-5xl md:text-8xl font-black italic text-primary-container text-neon-glow tracking-tighter uppercase translate-y-8 md:translate-y-16">
                        THE SCENE WAS CUT.
                    </span>
                </div>
            </div>
            <div class="mt-4 md:mt-8 space-y-8 max-w-xl">
                <p
                    class="font-body text-lg md:text-xl text-on-surface-variant font-light tracking-wide leading-relaxed">
                    The page you are looking for has been removed from the final edit or never existed in the script.
                </p>
                <div class="flex flex-col sm:flex-row items-center justify-center gap-4 pt-6">
                    <HighlightCta href="/" text="Back to Home"/>
                </div>
            </div>
        </div>
        <!-- Ambient Red Glow (Lighting Principle) -->
        <div class="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-primary-container/10 blur-[120px] rounded-full"></div>
    </main>
</template>