import { Ingredient } from '../generated/graphql-types';
import { ImageCard } from '@/components/ui/image-card';

type IngredientCardProps = {
  ingredient: Ingredient;
};

export default function IngredientCard({ ingredient }: IngredientCardProps): JSX.Element {
  const imageUrl = ingredient.image?.image?.publicUrlTransformed ?? '';
  const name = ingredient.name ?? '';

  return (
    <ImageCard
      imageUrl={imageUrl}
      caption={name}
      imageAlt={name}
      className="w-[75px] shrink-0 [&>p]:text-xs"
    />
  );
}
