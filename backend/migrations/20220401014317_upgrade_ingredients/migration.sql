-- AlterTable
ALTER TABLE "Ingredient" ADD COLUMN     "key" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "onShoppingList" BOOLEAN NOT NULL DEFAULT false;
