import express from 'express';
import dotenv from 'dotenv';
dotenv.config();

import userRoutes from './routes/userRoutes.js';

const app = express();
const API_BASE = '/api/v1'

app.use(express.json());

// API routes
app.use(`${API_BASE}/users`, userRoutes);

app.listen(process.env.PORT, () => {
    console.log(`Server running on PORT ${process.env.PORT}`)
});

