import { useState } from 'react';
import {
  IngredientStatusType,
  useGetAllCategoriesQuery,
  useGetAllIngredientsQuery,
} from '../generated/graphql-types';
import IngredientsByCategory from './IngredientsByCategory';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

export default function AllIngredients(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryId, setCategoryId] = useState<string>('');
  const [status, setStatus] = useState<IngredientStatusType | ''>('');
  const [keyIngredientsOnly, setKeyIngredientsOnly] = useState<boolean>(false);

  const { data, loading } = useGetAllIngredientsQuery();
  const { data: categoryData, loading: loadingCategories } = useGetAllCategoriesQuery();

  if (loading || loadingCategories) {
    return (
      <div>
        <h2 className="ml-4 mt-4 text-3xl font-bold">Ingredients</h2>
        <div className="flex justify-center pt-[30vh]">
          <div className="size-10 animate-spin rounded-full border-2 border-border border-t-main" />
        </div>
      </div>
    );
  }

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value) setCategoryId(e.target.value);
  };
  const selectStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value) setStatus(e.target.value as IngredientStatusType);
  };
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void =>
    setSearchTerm(e.target.value);
  const resetFilters = (): void => {
    setCategoryId('');
    setStatus('');
    setSearchTerm('');
  };

  const categoryFilterIngredients = categoryId
    ? data?.ingredients?.filter((i) => i.category?.id === categoryId)
    : data?.ingredients;
  const keyIngredientFilter = keyIngredientsOnly
    ? categoryFilterIngredients?.filter((i) => i.key)
    : categoryFilterIngredients;
  const statusFilteredIngredients = status
    ? keyIngredientFilter?.filter((i) => i.status === status)
    : keyIngredientFilter;
  const searchTermFilterIngredients = statusFilteredIngredients?.filter((s) =>
    s.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div>
      <h2 className="ml-4 mt-4 text-3xl font-bold">Ingredients</h2>
      <Input
        placeholder="Search"
        value={searchTerm}
        onChange={handleSearch}
        className="mx-4 mb-0 max-w-[91%]"
      />
      <div className="mx-4 mt-4 flex flex-wrap gap-4 lg:flex-row lg:flex-wrap">
        <select
          onChange={selectCategory}
          value={categoryId}
          className={cn(
            'max-w-[400px] rounded-base border-2 border-border bg-background px-3 py-2 text-sm shadow-shadow'
          )}
        >
          <option value="">Filter Category</option>
          {categoryData?.categories?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </select>
        <select
          onChange={selectStatus}
          value={status}
          className={cn(
            'max-w-[400px] rounded-base border-2 border-border bg-background px-3 py-2 text-sm shadow-shadow'
          )}
        >
          <option value="">Filter Status</option>
          <option value={IngredientStatusType.Good}>Good</option>
          <option value={IngredientStatusType.Low}>Low</option>
          <option value={IngredientStatusType.Out}>Out</option>
        </select>
        <div className="flex items-center space-x-2">
          <Checkbox
            id="key-ingredients"
            checked={keyIngredientsOnly}
            onCheckedChange={(checked) => setKeyIngredientsOnly(checked === true)}
          />
          <Label htmlFor="key-ingredients">Key Ingredients Only</Label>
        </div>
      </div>
      <Button className="ml-4 w-[120px]" onClick={resetFilters}>
        Reset Filters
      </Button>
      <IngredientsByCategory
        categories={categoryData?.categories}
        ingredients={searchTermFilterIngredients}
      />
    </div>
  );
}
