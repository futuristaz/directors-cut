import express from 'express';
import type { Request, Response } from 'express';
import { sendSuccess, sendError } from '../utils/apiResponse.js';

const router = express.Router();

router.get("/hello", (req: Request, res: Response) => {
    sendSuccess(res, { message: 'hello' })
});


export default router;