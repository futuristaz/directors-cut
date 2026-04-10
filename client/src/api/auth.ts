const register = async (username: string, email: string, password: string) => {
    const res = await fetch('/api/v1/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
        credentials: 'include'
    })

    const text = await res.text()
    console.log('Raw response:', text)

    const data = JSON.parse(text)

    if (!data.success) {
        throw new Error(data.data.message)
    }

    return data.data
}

export default register