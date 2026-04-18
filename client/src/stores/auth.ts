import { ref } from 'vue'
import { me } from '@/api/auth'

type User = {
    id: string
    username: string
    email: string
}

const user = ref<User | null>(null)
const loading = ref(true)
const initialized = ref(false)

const fetchUser = async () => {
    if (initialized.value) return

    try {
        const data = await me()
        user.value = data.user
    } catch {
        user.value = null
    } finally {
        loading.value = false
        initialized.value = true
    }
}

const setUser = (nextUser: User | null) => {
    user.value = nextUser
    loading.value = false
    initialized.value = true
}

const clearUser = () => {
    user.value = null
    loading.value = false
    initialized.value = true
}

export const useAuth = () => {
    return { user, loading, fetchUser, setUser, clearUser }
}