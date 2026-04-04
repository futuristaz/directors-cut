/*
  Warnings:

  - You are about to drop the `WatchItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "WatchItem" DROP CONSTRAINT "WatchItem_userId_fkey";

-- DropTable
DROP TABLE "WatchItem";

-- DropEnum
DROP TYPE "MediaType";

-- DropEnum
DROP TYPE "WatchStatus";
