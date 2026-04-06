import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config"

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is not defined");
}

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
  log:
    process.env.NODE_ENV === "development"
      ? ["query", "error", "warn"]
      : ["error"],
});

const getErrorMessage = (error: unknown): string =>
  error instanceof Error ? error.message : String(error);

const connectDB = async (): Promise<void> => {
  try {
    await prisma.$connect();
    console.log("DB connected via Prisma");
  } catch (error) {
    console.error(`Database connection error: ${getErrorMessage(error)}`);
    process.exit(1);
  }
};

const disconnectDB = async (): Promise<void> => {
  try {
    await prisma.$disconnect();
    console.log("DB disconnected");
  } catch (error) {
    console.error(`Database disconnection error: ${getErrorMessage(error)}`);
    process.exit(1);
  }
};

export { prisma, connectDB, disconnectDB };