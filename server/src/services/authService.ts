import bcrypt from 'bcrypt'
import { toAuthUserDto } from '../utils/auth.js'
import { userService } from './userService.js'
import type { RequestUser } from '../types/requestUser.js'

type RegisterInput = {
  username: string
  email: string
  password: string
}

type LoginInput = {
  email: string
  password: string
}

export class AuthService {
  async register(input: RegisterInput) {
    const { username, email, password } = input

    if (!username || !email || !password) {
      throw new AuthServiceError('Username, email and password are required', 400)
    }

    const [usernameExists, emailExists] = await Promise.all([
        userService.findByUsername(username),
        userService.findByEmail(email)
    ])

    if (usernameExists) {
      throw new AuthServiceError('User with this username already exists.', 409)
    }

    if (emailExists) {
      throw new AuthServiceError('User with this email already exists.', 409)
    }

    const passwordHash = await bcrypt.hash(password, 10)

    const user = await userService.create({
        username,
        email,
        passwordHash
    })

    return {
      user: toAuthUserDto(user),
      tokenPayload: { userId: user.id },
    }
  }

  async login(input: LoginInput) {
    const { email, password } = input

    if (!email || !password) {
      throw new AuthServiceError('Email and password are required', 400)
    }

    const user = await userService.findByEmail(email)

    if (!user) {
      throw new AuthServiceError('Invalid email or password', 401)
    }

    const isPasswordValid = await bcrypt.compare(password, user.passwordHash)

    if (!isPasswordValid) {
      throw new AuthServiceError('Invalid email or password', 401)
    }

    return {
      user: toAuthUserDto(user),
      tokenPayload: { userId: user.id },
    }
  }

  getMe(user: RequestUser | undefined) {
    if (!user) {
      throw new AuthServiceError('Not authorized', 401)
    }

    return {
      user: toAuthUserDto(user),
    }
  }
}

export class AuthServiceError extends Error {
  statusCode: number

  constructor(message: string, statusCode = 400) {
    super(message)
    this.name = 'AuthServiceError'
    this.statusCode = statusCode
  }
}

export const authService = new AuthService()