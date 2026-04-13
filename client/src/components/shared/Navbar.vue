<script setup>
import HighlightCta from './HighlightCta.vue';

</script>

<template>
  <nav class="bg-surface-container">
    <div class="mx-auto max-w-8xl px-6 lg:px-12">
      <div class="flex h-16 items-center justify-between">

        <!-- LEFT: Logo + Nav Links -->
        <div class="flex items-baseline gap-8">
          <RouterLink to="/" class="text-2xl font-bold text-primary-container font-headline tracking-tight leading-none hover:opacity-90 transition-opacity">
              DIRECTOR'S CUT
          </RouterLink>
          <a href="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Features</a>
          <a href="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Trending</a>
        </div>

        <!-- RIGHT: Auth Buttons -->
        <div class="flex items-center gap-4">
          <RouterLink to="/login" class="text-on-surface font-label text-sm hover:text-primary transition-colors">Log in</RouterLink>
          <HighlightCta href="/signup" text="Join Now"/>
        </div>
      </div>
    </div>
  </nav>
</template>