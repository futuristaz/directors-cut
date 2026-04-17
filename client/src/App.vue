<script setup>
import Navbar from './components/shared/Navbar.vue';
import Footer from './components/shared/Footer.vue';
import { onMounted } from 'vue'
import { useAuth } from '@/stores/auth'

const { fetchUser } = useAuth()

onMounted(() => {
    fetchUser()
})
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