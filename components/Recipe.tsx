import { Box, Center, Spinner, Stack, Flex, Text } from '@chakra-ui/react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useGetRecipeQuery } from '../generated/graphql-types';
import IngredientCard from './IngredientCard';
import { renderers } from './documentRender';

type RecipeCardProps = {
  id?: string;
};

export default function RecipeCard({ id }: RecipeCardProps): JSX.Element {
  const { data, loading } = useGetRecipeQuery({
    variables: {
      id: id ?? '',
    },
  });
  const recipe = data?.recipe;

  if (loading) {
    return (
      <Box>
        <Center marginTop={'30vh'}>
          <Spinner color="yellow.500" marginLeft="auto" marginRight="auto" size="xl" />
        </Center>
      </Box>
    );
  }

  return (
    <Stack paddingLeft={100} paddingRight={100} paddingBottom={100}>
      <Text fontSize="5xl">{recipe?.name}</Text>
      <Flex
        gap={4}
        wrap={'wrap'}
        marginRight={8}
        marginLeft={8}
        padding={8}
        border={'1px'}
        borderColor={'yellow.500'}
        boxShadow={'dark-lg'}
        rounded={'md'}
      >
        {recipe?.ingredients?.map((i) => (
          <IngredientCard key={i.id} ingredient={i} />
        ))}
      </Flex>
      <Box
        marginRight={8}
        marginLeft={8}
        padding={8}
        border={'1px'}
        borderColor={'yellow.500'}
        boxShadow={'dark-lg'}
        rounded={'md'}
      >
        <DocumentRenderer document={recipe?.instructions?.document} renderers={renderers} />;
      </Box>
    </Stack>
  );
}
