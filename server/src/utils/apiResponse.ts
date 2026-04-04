import type { Response } from 'express';
import type { ApiResponse } from '../types/apiResponse.js';

export const sendSuccess = <T>(res: Response, data: T, status = 200): void => {
    const body: ApiResponse<T> = { status, success: true, data };
    res.status(status).json(body);
};

export const sendError = (res: Response, message: string, status = 500): void => {
    const body: ApiResponse<{ message: string }> = { status, success: false, data: { message } };
    res.status(status).json(body);
};