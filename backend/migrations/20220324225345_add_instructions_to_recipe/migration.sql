-- AlterTable
ALTER TABLE "Recipe" ADD COLUMN     "instructions" JSONB NOT NULL DEFAULT E'[{"type":"paragraph","children":[{"text":""}]}]';
