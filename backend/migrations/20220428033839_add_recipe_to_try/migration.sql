-- CreateTable
CREATE TABLE "RecipeToTry" (
    "id" UUID NOT NULL,
    "name" TEXT NOT NULL DEFAULT E'',
    "originalLink" TEXT NOT NULL DEFAULT E'',

    CONSTRAINT "RecipeToTry_pkey" PRIMARY KEY ("id")
);
