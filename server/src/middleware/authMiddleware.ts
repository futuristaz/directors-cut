import jwt, { type Secret } from "jsonwebtoken";
import type { JwtPayload } from "jsonwebtoken";
import type { Request, Response, NextFunction } from "express";
import { sendError } from "../utils/apiResponse.js";
import { userService } from "../services/userService.js";

export const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    let token: string | undefined;

    if (req.headers.authorization && req.headers.authorization.startsWith("Bearer ")) {
        token = req.headers.authorization.split(" ")[1];
    } else if (req.cookies?.jwt) {
        token = req.cookies.jwt;
    }

    if (!token) {
        return sendError(res, "Not authorized", 401)
    }

    try {
        const jwtSecret = process.env.JWT_SECRET;

        if (!jwtSecret) {
            throw new Error("JWT_SECRET is not defined");
        }

        const decoded = jwt.verify(token, jwtSecret as Secret) as JwtPayload & { id: string };

        const user = await userService.findAuthUserById(decoded.id)

        if (!user) {
            return sendError(res, "User no longer exists", 401);
        }

        req.user = user;
        return next();
    } catch (error) {
        return sendError(res, "Not authorized, token failed", 401);
    }
};