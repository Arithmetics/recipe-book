import { useState } from 'react';
import { Box, Flex, Center, Spinner, Text, Input } from '@chakra-ui/react';
import {
  useGetAllCategoriesQuery,
  useGetAllRecipesQuery,
  Recipe,
} from '../generated/graphql-types';
import RecipeCard from './RecipeCard';

export interface PickerItem {
  label: string;
  value: string;
}

export default function AllIngredients(): JSX.Element {
  const [searchTerm, setSearchTerm] = useState('');

  const { data, loading } = useGetAllRecipesQuery();
  const {
    //   data: categoryData,
    loading: loadingCategories,
  } = useGetAllCategoriesQuery();

  // useEffect(() => {
  //   if (!loading) {
  //     const x =
  //       data?.recipes?.map((r) => {
  //         return {
  //           label: r.name || '',
  //           value: r.id,
  //         };
  //       }) || [];
  //     setPickerItems(x);
  //   }
  // }, [loading, data?.recipes]);

  //   const [categoryId, setCategoryId] = useState<string>('');
  //   const [status, setStatus] = useState<IngredientStatusType | ''>('');

  if (loading || loadingCategories) {
    return (
      <Box>
        <Text fontSize={'3xl'} marginLeft={8} marginTop={4}>
          Recipes
        </Text>
        <Center marginTop={'30vh'}>
          <Spinner color="yellow.500" marginLeft="auto" marginRight="auto" size="xl" />
        </Center>
      </Box>
    );
  }

  //   const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //     if (e.target.value) {
  //       setCategoryId(e.target.value);
  //     }
  //   };

  //   const selectStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
  //     if (e.target.value) {
  //       setStatus(e.target.value as IngredientStatusType);
  //     }
  //   };

  //   const resetFilters = (): void => {
  //     setCategoryId('');
  //     setStatus('');
  //   };

  //   const categoryFilterIngredients = categoryId
  //     ? data?.ingredients?.filter((i) => i.category?.id === categoryId)
  //     : data?.ingredients;

  //   const statusFilteredIngredients = status
  //     ? categoryFilterIngredients?.filter((i) => i.status === status)
  //     : categoryFilterIngredients;

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setSearchTerm(e.target.value);
  };

  const nonFilteredRecipes = data?.recipes?.filter((r) =>
    r.name?.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <Box>
      {/* <Flex gap={4} margin={8} wrap={'wrap'}>
        <Select
          placeholder="Filter Category"
          onChange={selectCategory}
          value={categoryId}
          maxWidth={400}
        >
          {categoryData?.categories?.map((c) => (
            <option key={c.id} value={c.id}>
              {c.name}
            </option>
          ))}
        </Select>
        <Select placeholder="Filter Status" onChange={selectStatus} value={status} maxWidth={400}>
          <option value={IngredientStatusType.Good}>Good</option>
          <option value={IngredientStatusType.Low}>Low</option>
          <option value={IngredientStatusType.Out}>Out</option>
        </Select>
        <Button onClick={resetFilters}>Reset Filters</Button>
      </Flex> */}
      <Text fontSize={'3xl'} marginLeft={4} marginTop={4}>
        Recipes
      </Text>
      <Flex maxWidth={'800px'} margin={4} alignItems={'center'} gap={'40px'}>
        <Input placeholder="Search" value={searchTerm} onChange={handleSearch} />
      </Flex>
      <Flex margin={4} gap={4} wrap={'wrap'}>
        {nonFilteredRecipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe as Recipe} />
        ))}
      </Flex>
    </Box>
  );
}
