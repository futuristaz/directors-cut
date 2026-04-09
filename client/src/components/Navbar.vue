<script setup>
</script>

<template>
  <nav class="bg-surface-container">
    <div class="mx-auto max-w-8xl px-6 lg:px-12">
      <div class="flex h-16 items-center justify-between">

        <!-- LEFT: Logo + Nav Links -->
        <div class="flex items-baseline gap-8">
          <span class="text-2xl font-bold text-primary-container font-headline tracking-tight leading-none">
            DIRECTOR'S CUT
          </span>
          <a href="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Features</a>
          <a href="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Trending</a>
        </div>

        <!-- RIGHT: Auth Buttons -->
        <div class="flex items-center gap-4">
          <a href="#" class="text-on-surface font-label text-sm hover:text-primary transition-colors">Sign In</a>
          <a href="#"
            class="bg-primary-container text-white font-label text-sm font-semibold px-5 py-2 rounded-md hover:opacity-90 transition-opacity">
            Join Now
          </a>
        </div>

      </div>
    </div>
  </nav>
</template>