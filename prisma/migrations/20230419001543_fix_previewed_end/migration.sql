/*
  Warnings:

  - You are about to drop the column `previweEnd` on the `Rental` table. All the data in the column will be lost.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Rental" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "bikeId" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME,
    "start" DATETIME,
    "previwedEnd" DATETIME,
    "end" DATETIME
);
INSERT INTO "new_Rental" ("bikeId", "createdAt", "end", "id", "start", "updatedAt", "userId") SELECT "bikeId", "createdAt", "end", "id", "start", "updatedAt", "userId" FROM "Rental";
DROP TABLE "Rental";
ALTER TABLE "new_Rental" RENAME TO "Rental";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
