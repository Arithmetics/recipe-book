import { Checkbox, Image, Progress, Stack, Text } from '@chakra-ui/react';
import {
  Ingredient,
  IngredientStatusType,
  useToggleIngredientInListMutation,
  useUpdateIngredientStatusMutation,
} from '../generated/graphql-types';

type IngredientCardProps = {
  ingredient: Ingredient;
};

function progress(status?: IngredientStatusType | null): { value: number; colorScheme: string } {
  if (status === IngredientStatusType.Good) {
    return {
      value: 100,
      colorScheme: 'green',
    };
  }
  if (status === IngredientStatusType.Low) {
    return {
      value: 50,
      colorScheme: 'yellow',
    };
  }
  if (status === IngredientStatusType.Out) {
    return {
      value: 10,
      colorScheme: 'red',
    };
  }
  return {
    value: 10,
    colorScheme: 'red',
  };
}

export default function IngredientCard({ ingredient }: IngredientCardProps): JSX.Element {
  const [updateIngredient, { loading: updateIngredientLoading }] =
    useUpdateIngredientStatusMutation();

  const [toggleIngredientInListMutation, { loading: toggleIngredientListLoading }] =
    useToggleIngredientInListMutation();

  const { value, colorScheme } = progress(ingredient.status);

  const toggleIngredientOnShoppingList = (): void => {
    toggleIngredientInListMutation({
      variables: {
        id: ingredient.id,
        onList: !ingredient.onShoppingList,
      },
    });
  };

  const handleClick = (): void => {
    try {
      if (ingredient.status === IngredientStatusType.Out) {
        updateIngredient({ variables: { status: IngredientStatusType.Good, id: ingredient.id } });
      }
      if (ingredient.status === IngredientStatusType.Low) {
        updateIngredient({ variables: { status: IngredientStatusType.Out, id: ingredient.id } });
      }
      if (ingredient.status === IngredientStatusType.Good) {
        updateIngredient({ variables: { status: IngredientStatusType.Low, id: ingredient.id } });
      }
    } catch (e) {
      console.log(e);
    }
  };

  console.log(updateIngredientLoading, toggleIngredientListLoading);

  return (
    <Stack
      width={'150px'}
      bg={'gray.600'}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      position={'relative'}
      padding={2}
      transition="all 0.5s"
      _hover={{
        transform: 'scale(1.05)',
      }}
    >
      <Text fontSize="md">{ingredient.name}</Text>
      <Image
        h={'150px'}
        w={'150px'}
        src={ingredient.image?.image?.publicUrlTransformed || ''}
        objectFit={'cover'}
        objectPosition={'top'}
        cursor="pointer"
        onClick={handleClick}
      />
      <Progress isAnimated colorScheme={colorScheme} size="sm" value={value} />
      {!ingredient.key && (
        <Checkbox
          size="lg"
          colorScheme="yellow"
          isChecked={ingredient.onShoppingList || false}
          onChange={toggleIngredientOnShoppingList}
        >
          On list
        </Checkbox>
      )}
    </Stack>
  );
}
