/*
  Warnings:

  - You are about to drop the column `authorId` on the `comment` table. All the data in the column will be lost.
  - Added the required column `userId` to the `comment` table without a default value. This is not possible if the table is not empty.
  - Added the required column `authorId` to the `post` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "comment" DROP CONSTRAINT "comment_authorId_fkey";

-- AlterTable
ALTER TABLE "comment" DROP COLUMN "authorId",
ADD COLUMN     "userId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "post" ADD COLUMN     "authorId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "user" ADD COLUMN     "isAuthor" BOOLEAN NOT NULL DEFAULT false;

-- AddForeignKey
ALTER TABLE "post" ADD CONSTRAINT "post_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "comment" ADD CONSTRAINT "comment_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
