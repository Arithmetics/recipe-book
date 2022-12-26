import { Box, Center, Spinner, Text } from '@chakra-ui/react';
import { useGetAllCategoriesQuery, useShoppingListQuery } from '../generated/graphql-types';

import IngredientsByCategory from './IngredientsByCategory';

export default function ShoppingList(): JSX.Element {
  const { data, loading } = useShoppingListQuery({ fetchPolicy: 'network-only' });
  const { data: categoryData, loading: loadingCategories } = useGetAllCategoriesQuery();

  if (loading || loadingCategories) {
    return (
      <Box>
        <Text fontSize={'3xl'} marginLeft={4} marginTop={4}>
          Shopping
        </Text>
        <Center marginTop={'30vh'}>
          <Spinner color="yellow.500" marginLeft="auto" marginRight="auto" size="xl" />
        </Center>
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize={'3xl'} marginLeft={4} marginTop={4}>
        Shopping
      </Text>
      {!data?.ingredients?.length && (
        <Center marginTop={'30vh'}>
          <Text color="yellow.500">No items on list</Text>
        </Center>
      )}
      <IngredientsByCategory
        categories={categoryData?.categories}
        ingredients={data?.ingredients}
      />
    </Box>
  );
}
