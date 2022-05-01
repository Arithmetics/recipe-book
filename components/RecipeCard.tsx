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
      width={'165px'}
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
      <Flex gap={1}>
        {recipe.tags?.map((tag) => {
          return (
            <Tag key={tag.name} size="sm" variant="outline" colorScheme="yellow">
              <TagLabel>{tag.name}</TagLabel>
            </Tag>
          );
        })}
      </Flex>
    </Stack>
  );
}
