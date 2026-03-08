import { Category, Ingredient } from '../generated/graphql-types';
import IngredientCard from './IngredientCard';

function byOrder(a: Category, b: Category): number {
  if (!a.order) return 1;
  if (!b.order) return -1;
  if (a.order > b.order) return -1;
  return 1;
}

type IngredientsByCategoryProps = {
  categories: Category[] | null | undefined;
  ingredients: Ingredient[] | null | undefined;
};

export default function IngredientsByCategory({
  categories,
  ingredients,
}: IngredientsByCategoryProps): JSX.Element | null {
  const sorted = [...(categories || [])].sort(byOrder);
  return (
    <>
      {sorted.map((c) => {
        const catIngredients = ingredients?.filter((i) => i?.category?.id === c.id);
        if (!catIngredients?.length) return null;
        return (
          <div key={c.id}>
            <h3 className="ml-4 mt-8 text-2xl font-semibold">{c.name}</h3>
            <div className="mx-4 mt-4 flex flex-wrap gap-4">
              {catIngredients.map((i) => (
                <IngredientCard key={i.id} ingredient={i} />
              ))}
            </div>
            <hr className="my-4 border-border" />
          </div>
        );
      })}
    </>
  );
}
