import { prisma } from '../config/db.js'

type CreateUserInput = {
    username: string
    email: string
    passwordHash: string
}

export class UserService {
    findByEmail(email: string) {
        return prisma.user.findUnique({
            where: { email },
        })
    }

    findByUsername(username: string) {
        return prisma.user.findUnique({
            where: { username },
        })
    }

    findById(id: string) {
        return prisma.user.findUnique({
            where: { id },
        })
    }

    findAuthUserById(id: string) {
        return prisma.user.findUnique({
            where: { id },
            select: {
                id: true,
                username: true,
                email: true,
                createdAt: true,
                updatedAt: true,
            },
        })
    }

    create(data: CreateUserInput) {
        return prisma.user.create({
            data,
        })
    }
}

export const userService = new UserService()