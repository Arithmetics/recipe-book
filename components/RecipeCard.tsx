import Link from 'next/link';
import { Recipe } from '../generated/graphql-types';
import { ImageCard } from '@/components/ui/image-card';
import { Badge } from '@/components/ui/badge';

type RecipeCardProps = {
  recipe: Recipe;
};

const linkClassName =
  'group flex h-full flex-col cursor-pointer transition-all duration-300 hover:scale-[1.02]';

export default function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
  const imageUrl = recipe.image?.image?.publicUrlTransformed ?? '';
  const caption = recipe.name ?? '';
  const tags = recipe.tags?.map((tag) => (
    <Badge key={tag.name} variant="default" className="text-xs">
      {tag.name}
    </Badge>
  ));

  const card = (
    <ImageCard
      imageUrl={imageUrl}
      caption={caption}
      imageAlt={caption}
      className="flex-1 min-h-0 transition-colors group-hover:border-main"
    >
      {tags}
    </ImageCard>
  );

  if (!recipe?.id) {
    return <div className={linkClassName}>{card}</div>;
  }

  return (
    <Link href={`/recipes/${recipe.id}`} passHref legacyBehavior>
      <a className={linkClassName}>{card}</a>
    </Link>
  );
}
