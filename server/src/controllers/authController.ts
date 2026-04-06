import type { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/apiResponse.js";
import { prisma } from "../config/db.js";
import bcrypt from 'bcrypt';
import { generateToken, getJwtCookieOptions } from "../utils/generateToken.js";
import { toAuthUserDto } from "../utils/auth.js";
import { authService, AuthServiceError } from "../services/authService.js";

const register = async (req: Request, res: Response) => {
    try {
        const result = await authService.register(req.body);
        const token = generateToken(result.tokenPayload.userId);

        res.cookie("jwt", token, getJwtCookieOptions());

        return sendSuccess(
            res, {
                user: result.user,
                token
            }, 201)
    }
    catch (error) {
        console.error(error);

        if (error instanceof AuthServiceError) {
            return sendError(res, error.message, error.statusCode);
        }

        return sendError(res, "Login failed", 500);
    }
}


const login = async (req: Request, res: Response) => {
    try {
        const result = await authService.login(req.body ?? {});
        const token = generateToken(result.tokenPayload.userId);

        res.cookie("jwt", token, getJwtCookieOptions());

        return sendSuccess(res, {
            user: result.user,
            token
        }, 200);
    } catch (error) {
        console.error(error);

        if (error instanceof AuthServiceError) {
            return sendError(res, error.message, error.statusCode);
        }

        return sendError(res, "Login failed", 500);
    }
}

const logout = async (req: Request, res: Response) => {
    try {
        const { maxAge, ...clearCookieOptions } = getJwtCookieOptions();
        res.clearCookie("jwt", clearCookieOptions);
        return sendSuccess(res, { message: "Logged out successfully" }, 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Logout failed", 500);
    }
}

const me = async (req: Request, res: Response) => {
    try {
        const result = authService.getMe(req.user);
        return sendSuccess(res, result, 200);
    } catch (error) {
        console.error(error);

        if (error instanceof AuthServiceError) {
            return sendError(res, error.message, error.statusCode);
        }

        return sendError(res, "Failed to load user", 500);
    }
};

export { register, login, logout, me };