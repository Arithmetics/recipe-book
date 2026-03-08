import Link from 'next/link';
import { Recipe } from '../generated/graphql-types';
import { Badge } from '@/components/ui/badge';

type RecipeCardProps = {
  recipe: Recipe;
};

const cardClassName =
  'relative block w-[min(47%,165px)] cursor-pointer overflow-hidden rounded-base border-2 border-border bg-card p-2 shadow-shadow transition-all duration-300 hover:scale-105';

export default function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
  const content = (
    <>
      <p className="text-sm font-base">{recipe.name}</p>
      <img
        src={recipe.image?.image?.publicUrlTransformed || ''}
        alt=""
        className="h-[150px] w-[150px] object-cover object-top"
      />
      <div className="mt-1 flex flex-wrap gap-1">
        {recipe.tags?.map((tag) => (
          <Badge key={tag.name} variant="default">
            {tag.name}
          </Badge>
        ))}
      </div>
    </>
  );

  if (!recipe?.id) {
    return <div className={cardClassName}>{content}</div>;
  }

  return (
    <Link href={`/recipes/${recipe.id}`} className={cardClassName}>
      {content}
    </Link>
  );
}
