import type { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/apiResponse.js";
import { prisma } from "../config/db.js";
import bcrypt from 'bcrypt';
import { generateToken, getJwtCookieOptions } from "../utils/generateToken.js";

const register = async (req: Request, res: Response) => {
    try {

        const { username, email, password } = req.body;
        const saltRounds = 10;

        if (!username || !email || !password) {
            return sendError(res, "Username, email and password are required", 400);
        }

        const usernameExists = await prisma.user.findUnique({
            where: { username: username }
        });

        const emailExists = await prisma.user.findUnique({
            where: { email: email }
        });

        if (usernameExists) {
            return sendError(res, "User with this username already exists.", 409);
        } else if (emailExists) {
            return sendError(res, "User with this email already exists.", 409);
        }

        const salt = await bcrypt.genSalt(saltRounds);
        const hashedPassword = await bcrypt.hash(password, salt);

        const user = await prisma.user.create({
            data: {
                username,
                email,
                passwordHash: hashedPassword
            }
        });

        const token = generateToken(user.id, res);

        sendSuccess(res, {
            user: {
                id: user.id,
                username: username,
                email: email
            },
            token
        }, 201)
    } catch (error) {
        console.error(error);
        return sendError(res, "Registration failed", 500);
    }
}

const login = async (req: Request, res: Response) => {
    try {

        const { email, password } = req.body ?? {};

        if (!email || !password) {
            return sendError(res, "Email and password are required", 400);
        }

        const user = await prisma.user.findUnique({
            where: { email: email }
        });

        if (!user) {
            return sendError(res, "Invalid email or password", 401);
        }

        const isPasswordValid = await bcrypt.compare(password, user.passwordHash);

        if (!isPasswordValid) {
            return sendError(res, "Invalid email or password", 401);
        }

        const token = generateToken(user.id, res);

        return sendSuccess(res, {
            user: {
                id: user.id,
                email: email
            },
            token
        }, 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Login failed", 500);
    }
}

const logout = async (req: Request, res: Response) => {
    try {
        const { maxAge, ...clearCookieOptions } = getJwtCookieOptions();

        res.clearCookie("jwt", clearCookieOptions);
        return sendSuccess(res, { message: "Logged out successfully"}, 200);
    } catch (error) {
        console.error(error);
        return sendError(res, "Logout failed", 500);
    }
}

export { register, login, logout };