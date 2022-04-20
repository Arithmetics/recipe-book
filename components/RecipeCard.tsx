import { useRouter } from 'next/router';
import { Flex, Image, Stack, Tag, TagLabel, Text } from '@chakra-ui/react';
import { Recipe } from '../generated/graphql-types';

type RecipeCardProps = {
  recipe: Recipe;
};

export default function RecipeCard({ recipe }: RecipeCardProps): JSX.Element {
  const router = useRouter();

  const handleClick = (): void => {
    router.push(`/recipes/${recipe.id}`);
  };

  return (
    <Stack
      onClick={handleClick}
      width={'175px'}
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
        w={'160px'}
        src={recipe.image?.image?.publicUrlTransformed || ''}
        objectFit={'cover'}
        objectPosition={'top'}
      />
      <Flex gap={1}>
        <Tag size="sm" variant="outline" colorScheme="yellow">
          <TagLabel>Instant Pot</TagLabel>
        </Tag>
        <Tag size="sm" variant="outline" colorScheme="yellow">
          <TagLabel>Fish</TagLabel>
        </Tag>
      </Flex>
    </Stack>
  );
}
