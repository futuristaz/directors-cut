import type { User } from "@prisma/client"

declare global {
    namespace Express {
        interface Request {
            user?: {
                id: string,
                username: string,
                email: string,
                createdAt: Date,
                updatedAt: Date
            }
        }
    }
}

export {};