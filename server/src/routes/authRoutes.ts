import express from 'express';
import { login, register } from '../controllers/authController.js'
import type { Request, Response } from 'express';
import { sendSuccess, sendError } from '../utils/apiResponse.js';

const router = express.Router();

router.post("/register", register);
router.post("/login", login)

export default router;