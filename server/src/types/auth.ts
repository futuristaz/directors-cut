export type AuthUserDto = {
    id: string,
    username: string,
    email: string
}

export type AuthResponseDto = {
    user: AuthUserDto,
    token: string
}