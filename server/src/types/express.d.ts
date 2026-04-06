import type { RequestUser } from "./requestUser.ts";

declare global {
    namespace Express {
        interface Request {
            user?: RequestUser
        }
    }
}

export {};