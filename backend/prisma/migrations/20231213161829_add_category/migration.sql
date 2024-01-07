/*
  Warnings:

  - Added the required column `category` to the `Image` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "Category" AS ENUM ('NATURE', 'PORTRAIT', 'ANIMALS', 'FOOD', 'EVENTS', 'TECH', 'SPORTS', 'FASHION', 'MEMES', 'HOLIDAYS');

-- AlterTable
ALTER TABLE "Image" ADD COLUMN     "category" "Category" NOT NULL;
