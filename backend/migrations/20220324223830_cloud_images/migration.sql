-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "image" UUID;

-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "image" UUID;

-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "image" UUID;

-- CreateTable
CREATE TABLE "CloudImage" (
    "id" UUID NOT NULL,
    "image" JSONB,
    "altText" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "CloudImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Category_image_idx" ON "Category"("image");

-- CreateIndex
CREATE INDEX "Ingredient_image_idx" ON "Ingredient"("image");

-- CreateIndex
CREATE INDEX "Recipe_image_idx" ON "Recipe"("image");

-- AddForeignKey
ALTER TABLE "Ingredient" ADD CONSTRAINT "Ingredient_image_fkey" FOREIGN KEY ("image") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_image_fkey" FOREIGN KEY ("image") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Recipe" ADD CONSTRAINT "Recipe_image_fkey" FOREIGN KEY ("image") REFERENCES "CloudImage"("id") ON DELETE SET NULL ON UPDATE CASCADE;
