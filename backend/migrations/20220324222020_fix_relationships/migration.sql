/*
  Warnings:

  - You are about to drop the column `categories` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `categories` on the `Ingredient` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_categories_fkey";

-- DropForeignKey
ALTER TABLE "Ingredient" DROP CONSTRAINT "Ingredient_categories_fkey";

-- DropIndex
DROP INDEX "Category_categories_idx";

-- DropIndex
DROP INDEX "Ingredient_categories_idx";

-- AlterTable
ALTER TABLE "Category" DROP COLUMN "categories";

-- AlterTable
ALTER TABLE "Ingredient" DROP COLUMN "categories",
ADD COLUMN     "category" UUID;

-- CreateTable
CREATE TABLE "_Ingredient_recipes" (
    "A" UUID NOT NULL,
    "B" UUID NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_Ingredient_recipes_AB_unique" ON "_Ingredient_recipes"("A", "B");

-- CreateIndex
CREATE INDEX "_Ingredient_recipes_B_index" ON "_Ingredient_recipes"("B");

-- CreateIndex
CREATE INDEX "Ingredient_category_idx" ON "Ingredient"("category");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_category_fkey" FOREIGN KEY ("category") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Ingredient_recipes" ADD FOREIGN KEY ("A") REFERENCES "Ingredient"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_Ingredient_recipes" ADD FOREIGN KEY ("B") REFERENCES "Recipe"("id") ON DELETE CASCADE ON UPDATE CASCADE;
