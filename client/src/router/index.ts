import SignupView from '@/views/SignupView.vue'
import HomeView from '@/views/HomeView.vue'
import { createRouter, createWebHistory } from 'vue-router'
import NotFoundView from '@/views/NotFoundView.vue'
import LoginView from '@/views/LoginView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/',name: 'LandingHome', component: HomeView },
    { path: '/signup', name: 'Signup', component: SignupView },
    { path: '/login', name: 'Login', component: LoginView },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFoundView }
  ],
})

export default router