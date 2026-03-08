import { useGetAllCategoriesQuery, useShoppingListQuery } from '../generated/graphql-types';
import IngredientsByCategory from './IngredientsByCategory';

export default function ShoppingList(): JSX.Element {
  const { data, loading } = useShoppingListQuery({ fetchPolicy: 'network-only' });
  const { data: categoryData, loading: loadingCategories } = useGetAllCategoriesQuery();

  if (loading || loadingCategories) {
    return (
      <div>
        <h2 className="ml-4 mt-4 text-3xl font-bold">Shopping</h2>
        <div className="flex justify-center pt-[30vh]">
          <div className="size-10 animate-spin rounded-full border-2 border-border border-t-main" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <h2 className="ml-4 mt-4 text-3xl font-bold">Shopping</h2>
      {!data?.ingredients?.length && (
        <div className="flex justify-center pt-[30vh]">
          <p className="text-main">No items on list</p>
        </div>
      )}
      <IngredientsByCategory
        categories={categoryData?.categories}
        ingredients={data?.ingredients}
      />
    </div>
  );
}
