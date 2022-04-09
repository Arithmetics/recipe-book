import {
  Box,
  Flex,
  Center,
  Spinner,
  Text,
  Select,
  Button,
  Checkbox,
  useBreakpointValue,
} from '@chakra-ui/react';
import { useState } from 'react';
import {
  IngredientStatusType,
  useGetAllCategoriesQuery,
  useGetAllIngredientsQuery,
} from '../generated/graphql-types';
import IngredientsByCategory from './IngredientsByCategory';

export default function AllIngredients(): JSX.Element {
  const flexDirection = useBreakpointValue<'column' | 'row'>({
    base: 'column',
    lg: 'row',
  });

  const { data, loading } = useGetAllIngredientsQuery();
  const { data: categoryData, loading: loadingCategories } = useGetAllCategoriesQuery();

  const [categoryId, setCategoryId] = useState<string>('');
  const [status, setStatus] = useState<IngredientStatusType | ''>('');
  const [keyIngredientsOnly, setKeyIngredientsOnly] = useState<boolean>(false);

  if (loading || loadingCategories) {
    return (
      <Box>
        <Text marginLeft={8} marginTop={4} fontSize={'3xl'}>
          Ingredients
        </Text>
        <Center marginTop={'30vh'}>
          <Spinner color="yellow.500" marginLeft="auto" marginRight="auto" size="xl" />
        </Center>
      </Box>
    );
  }

  const selectCategory = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value) {
      setCategoryId(e.target.value);
    }
  };
  const selectStatus = (e: React.ChangeEvent<HTMLSelectElement>): void => {
    if (e.target.value) {
      setStatus(e.target.value as IngredientStatusType);
    }
  };

  const toggleKeyIngredientsOnly = (): void => {
    setKeyIngredientsOnly(!keyIngredientsOnly);
  };

  const resetFilters = (): void => {
    setCategoryId('');
    setStatus('');
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

  return (
    <Box>
      <Text marginLeft={8} marginTop={4} fontSize={'3xl'}>
        Ingredients
      </Text>
      <Flex gap={4} margin={8} wrap={'wrap'} flexDirection={flexDirection}>
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
        <Checkbox
          size="lg"
          colorScheme="yellow"
          isChecked={keyIngredientsOnly}
          onChange={toggleKeyIngredientsOnly}
        >
          Key Ingredients Only
        </Checkbox>
      </Flex>
      <Button marginLeft={8} width={120} onClick={resetFilters}>
        Reset Filters
      </Button>
      <IngredientsByCategory
        categories={categoryData?.categories}
        ingredients={statusFilteredIngredients}
      />
    </Box>
  );
}
