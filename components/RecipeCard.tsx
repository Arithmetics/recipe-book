import { useRouter } from 'next/router';
import { Image, Stack, Stat, StatLabel, StatNumber, Text } from '@chakra-ui/react';
import { Recipe } from '../generated/graphql-types';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
  const router = useRouter();

  const handleClick = (): void => {
    console.log('xxx');
    router.push(`/recipes/${recipe.id}`);
  };

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
      transition="all 0.5s"
      cursor="pointer"
      _hover={{
        transform: 'scale(1.05)',
      }}
    >
      <Text fontSize="md">{recipe.name}</Text>
      <Image
        h={'150px'}
        w={'150px'}
        src={recipe.image?.image?.publicUrlTransformed || ''}
        objectFit={'cover'}
        objectPosition={'top'}
      />
      <Stat>
        <StatLabel>Ingredients</StatLabel>
        <StatNumber>{recipe.ingredientsCount}</StatNumber>
      </Stat>
    </Stack>
  );
}
