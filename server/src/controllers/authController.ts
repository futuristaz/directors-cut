import type { Request, Response } from "express";
import { sendError, sendSuccess } from "../utils/apiResponse.js";
import { prisma } from "../config/db.js";
import bcrypt from 'bcrypt';

const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body;
    const saltRounds = 10;

    const usernameExists = await prisma.user.findUnique({
        where: { username: username}
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

    sendSuccess(res, {
        user: {
            id: user.id,
            username:  username,
            email: email
        }
    }, 201)
}

export { register };