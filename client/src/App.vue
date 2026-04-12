<script setup>
import Navbar from './components/shared/Navbar.vue';
import Footer from './components/shared/Footer.vue';
</script>

<template>
  <Navbar />
  <RouterView v-slot="{ Component }">
    <Transition name="fade" mode="out-in">
      <component :is="Component" :key="$route.path" />
    </Transition>
  </RouterView>
  <Footer />
</template>