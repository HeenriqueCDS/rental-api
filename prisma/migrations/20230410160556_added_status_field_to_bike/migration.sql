/*
  Warnings:

  - You are about to drop the column `deletedAt` on the `Bike` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `Station` table. All the data in the column will be lost.

*/
-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);

-- CreateTable
CREATE TABLE "Rental" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bikeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "start" DATETIME,
    "previweEnd" DATETIME,
    "end" DATETIME
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Bike" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "stationId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "status" TEXT NOT NULL DEFAULT 'available',
    "updatedAt" DATETIME
);
INSERT INTO "new_Bike" ("createdAt", "id", "name", "stationId", "updatedAt") SELECT "createdAt", "id", "name", "stationId", "updatedAt" FROM "Bike";
DROP TABLE "Bike";
ALTER TABLE "new_Bike" RENAME TO "Bike";
CREATE TABLE "new_Station" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "latitude" REAL NOT NULL,
    "longitude" REAL NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME
);
INSERT INTO "new_Station" ("address", "capacity", "createdAt", "description", "id", "latitude", "longitude", "name", "updatedAt") SELECT "address", "capacity", "createdAt", "description", "id", "latitude", "longitude", "name", "updatedAt" FROM "Station";
DROP TABLE "Station";
ALTER TABLE "new_Station" RENAME TO "Station";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");
