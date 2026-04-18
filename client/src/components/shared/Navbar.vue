<script setup>
import HighlightCta from './HighlightCta.vue';
import { logout } from '@/api/auth';
import { useAuth } from '@/stores/auth';
import { useRouter } from 'vue-router';

const { user, clearUser } = useAuth();
const router = useRouter();

const handleLogout = async () => {
  try {
    await logout();
  } finally {
    clearUser();
    router.push('/');
  }
};

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
          <template v-if="user">
            <RouterLink to="/home" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Browse</RouterLink>
            <RouterLink to="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Library</RouterLink>
            <RouterLink to="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Watchlists</RouterLink>
          </template>
          <template v-else>
            <a href="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Features</a>
            <a href="#" class="text-on-surface font-body text-sm hover:text-primary transition-colors">Trending</a>
          </template>
        </div>

        <!-- RIGHT: Auth Buttons -->
        <div class="flex items-center gap-4">
          <template v-if="user">
            <span class="text-on-surface-variant font-label text-sm">Hi, {{ user.username }}</span>
            <button
              class="cursor-pointer text-on-surface font-label text-sm hover:text-primary transition-colors"
              @click="handleLogout"
            >
              Log out
            </button>
          </template>
          <template v-else>
            <RouterLink to="/login" class="text-on-surface font-label text-sm hover:text-primary transition-colors">Log in</RouterLink>
            <HighlightCta to="/signup" text="Join Now"/>
          </template>
        </div>
      </div>
    </div>
  </nav>
</template>