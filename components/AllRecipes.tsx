import { useState } from 'react';
import {
  useGetAllCategoriesQuery,
  useGetAllRecipesQuery,
  Recipe,
} from '../generated/graphql-types';
import RecipeCard from './RecipeCard';
import { Input } from '@/components/ui/input';

export default function AllRecipes(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, loading } = useGetAllRecipesQuery();
  const { loading: loadingCategories } = useGetAllCategoriesQuery();

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  if (loading || loadingCategories) {
    return (
      <div>
        <h2 className="ml-4 mt-4 text-3xl font-bold">Recipes</h2>
        <div className="flex justify-center pt-[30vh]">
          <div className="size-10 animate-spin rounded-full border-2 border-border border-t-main" />
        </div>
      </div>
    );
  }

  const nonFilteredRecipes = data?.recipes?.filter((r) =>
    r.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h2 className="ml-4 mt-4 text-3xl font-bold">Recipes</h2>
      <div className="mx-4 flex max-w-[800px] items-center gap-10">
        <Input placeholder="Search" value={searchTerm} onChange={handleSearch} />
      </div>
      <div className="mx-4 mt-4 grid grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-4">
        {nonFilteredRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe as Recipe} />
        ))}
      </div>
    </div>
  );
}
