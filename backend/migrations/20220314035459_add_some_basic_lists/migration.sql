-- CreateEnum
CREATE TYPE "IngredientStatusType" AS ENUM ('GOOD', 'LOW', 'OUT');

-- CreateTable
CREATE TABLE "Ingredient" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "note" TEXT NOT NULL DEFAULT E'',
    "status" "IngredientStatusType" NOT NULL,
    "categories" UUID,

    CONSTRAINT "Ingredient_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Category" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "categories" UUID,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recipe" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "originalLink" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "Recipe_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Ingredient_categories_idx" ON "Ingredient"("categories");

-- CreateIndex
CREATE INDEX "Category_categories_idx" ON "Category"("categories");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_categories_fkey" FOREIGN KEY ("categories") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_categories_fkey" FOREIGN KEY ("categories") REFERENCES "Ingredient"("id") ON DELETE SET NULL ON UPDATE CASCADE;
