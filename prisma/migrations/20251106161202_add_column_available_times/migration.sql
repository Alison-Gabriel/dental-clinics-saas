-- AlterTable
ALTER TABLE "User" ADD COLUMN     "available_times" TEXT[] DEFAULT ARRAY[]::TEXT[];
