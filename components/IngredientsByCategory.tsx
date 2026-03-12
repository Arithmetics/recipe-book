import { Flex, Text, Divider } from '@chakra-ui/react';
import { Category, Ingredient } from '../generated/graphql-types';
import IngredientCard from './IngredientCard';

function byOrder(a: Category, b: Category): number {
  if (!a.order) {
    return 1;
  }
  if (!b.order) {
    return -1;
  }
  if (a.order > b.order) {
    return -1;
  }
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

        if (catIngredients?.length) {
          return (
            <>
              <Text fontSize="2xl" marginLeft={4} marginTop={8}>
                {c.name}
              </Text>
              <Flex margin={4} gap={4} wrap={'wrap'}>
                {catIngredients?.map((i) => (
                  <IngredientCard key={i.id} ingredient={i} />
                ))}
              </Flex>
              <Divider />
            </>
          );
        }
      })}
    </>
  );
}
