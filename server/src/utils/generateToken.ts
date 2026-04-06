import type { CookieOptions, Response } from "express";
import jwt from "jsonwebtoken";
import ms from "ms";
import type { Secret, SignOptions } from "jsonwebtoken";

const getJwtExpiresIn = (): NonNullable<SignOptions["expiresIn"]> => {
    return (process.env.JWT_EXPIRES_IN ?? "1d") as NonNullable<SignOptions["expiresIn"]>
}

const getCookieMaxAge = (expiresIn: NonNullable<SignOptions["expiresIn"]>): number => {
    if (typeof expiresIn === "number") {
        return expiresIn * 1000;
    }

    return ms(expiresIn);
}

export const getJwtCookieOptions = (): CookieOptions => {
    const expiresIn = getJwtExpiresIn();

    return {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        path: "/",
        maxAge: getCookieMaxAge(expiresIn)
    }
}

export const generateToken = (userId: string, res: Response): string => {
    const secret = process.env.JWT_SECRET;

    if (!secret) {
        throw new Error("JWT_SECRET is not defined");
    }

    const expiresIn = getJwtExpiresIn();

    const token = jwt.sign({ id: userId }, secret as Secret, { expiresIn })

    res.cookie("jwt", token, getJwtCookieOptions());

    return token;
};