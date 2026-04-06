import express from 'express';
import dotenv from 'dotenv';
import { connectDB, disconnectDB } from './config/db.js';
import cookieParser from 'cookie-parser';

dotenv.config();
await connectDB();

import authRoutes from './routes/authRoutes.js';

const app = express();
const API_BASE = '/api/v1'

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

// API routes
app.use(`${API_BASE}/auth`, authRoutes);

const DEFAULT_PORT = 3000;
const parsedPort = Number.parseInt(process.env.PORT ?? "", 10);

const port = Number.isInteger(parsedPort) &&
    parsedPort > 0 &&
    parsedPort <= 65535
        ? parsedPort
        : DEFAULT_PORT; 

const server = app.listen(port, () => {
    console.log(`Server running on PORT ${port}`)
});

process.on("unhandledRejection", (err) => {
    console.error("Unhandled Rejection", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    })
})

process.on("uncaughtException", async (err) => {
    console.error("Uncaught Exception", err);
    server.close(async () => {
        await disconnectDB();
        process.exit(1);
    })
})

process.on("SIGTERM", async () => {
    console.log("SIGTERM received, shutting down gracefully");
    server.close(async () => {
        await disconnectDB();
        process.exit(0)
    })
})
