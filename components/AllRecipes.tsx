import { Box, Flex, Center, Spinner, Text } from '@chakra-ui/react';
import { useGetAllCategoriesQuery, useGetAllRecipesQuery } from '../generated/graphql-types';
import RecipeCard from './RecipeCard';

export default function AllIngredients(): JSX.Element {
  const { data, loading } = useGetAllRecipesQuery();
  const {
    //   data: categoryData,
    loading: loadingCategories,
  } = useGetAllCategoriesQuery();

  //   const [categoryId, setCategoryId] = useState<string>('');
  //   const [status, setStatus] = useState<IngredientStatusType | ''>('');

  if (loading || loadingCategories) {
    return (
      <Box>
        <Text fontSize={'3xl'} marginLeft={8} marginTop={8}>
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
      <Text fontSize={'3xl'} marginLeft={8} marginTop={8}>
        Recipes
      </Text>
      <Flex margin={8} gap={4} wrap={'wrap'} justifyContent="center">
        {data?.recipes?.map((recipe) => (
          <RecipeCard key={recipe.id} recipe={recipe} />
        ))}
      </Flex>
    </Box>
  );
}
