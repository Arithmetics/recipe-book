import { Image, Progress, Stack, Text } from '@chakra-ui/react';
import {
  Ingredient,
  IngredientStatusType,
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

  const { value, colorScheme } = progress(ingredient.status);

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

  console.log(updateIngredientLoading);

  return (
    <Stack
      onClick={handleClick}
      width={'150px'}
      bg={'gray.600'}
      boxShadow={'2xl'}
      rounded={'md'}
      overflow={'hidden'}
      position={'relative'}
      padding={2}
      margin={4}
      transition="all 0.5s"
      cursor="pointer"
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
      />
      <Progress colorScheme={colorScheme} size="sm" value={value} />
    </Stack>
  );
}
