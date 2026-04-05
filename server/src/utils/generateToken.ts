import type { Response } from "express";
import jwt from "jsonwebtoken";
import type { Secret, SignOptions } from "jsonwebtoken";

export const generateToken = (userId: string, res: Response): string => {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }

    const expiresIn = (process.env.JWT_EXPIRES_IN ?? "1d") as NonNullable<SignOptions["expiresIn"]>;

    const token = jwt.sign({ id: userId }, secret as Secret, { expiresIn })

    res.cookie("jwt", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 1000 * 60 * 60 * 24 
    });

    return token;
};