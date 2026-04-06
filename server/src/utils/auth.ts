import type { AuthUserDto } from "../types/auth.js"

type UserLike = {
    id: string,
    username: string,
    email: string
}

export const toAuthUserDto = (user: UserLike): AuthUserDto => ({
    id: user.id,
    username: user.username,
    email: user.email,
});