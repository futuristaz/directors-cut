const API_BASE = '/api/v1/auth'

export const register = async (username: string, email: string, password: string) => {
    const res = await fetch(`${API_BASE}/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include'
    })

    const data = await res.json();
    if (!res.ok || !data.success) throw new Error(data.data.message ?? 'Registration failed')
    return data.data
}

export const login = async (email: string, password: string) => {
    const res = await fetch(`${API_BASE}/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify({ email, password })
    })

    const data = await res.json()
    if (!res.ok || !data.success) throw new Error(data.data.message ?? 'Login failed')
    return data.data
}

export const logout = async () => {
    const res = await fetch(`${API_BASE}/logout`, {
        method: 'POST',
        credentials: 'include'
    })

    const data = await res.json()
    if (!res.ok || !data.success) throw new Error(data.data.message ?? 'Logout failed')
    return data.data
}

export const me = async () => {
    const res = await fetch(`${API_BASE}/me`, {
        method: 'GET',
        credentials: 'include'
    })

    const data = await res.json()
    if (!res.ok || !data.success) throw new Error(data.data.message ?? 'Failed to load user')
    return data.data
}