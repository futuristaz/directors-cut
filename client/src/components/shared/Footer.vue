<script setup>
const year = new Date().getFullYear()
</script>

<template>
  <nav class="bg-surface-container">
    <div class="mx-auto max-w-8xl px-6 lg:px-12">
      <div class="flex h-16 items-center justify-between">
        <p class="text-outline-variant font-body font-bold text-sm">© {{ year }} DIRECTOR'S CUT. All rights reserved.</p>
      </div>
    </div>
  </nav>
</template>