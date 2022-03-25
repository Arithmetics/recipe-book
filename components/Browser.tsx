import { Box, Stack, Text } from '@chakra-ui/react';
// import { useRouter } from 'next/router';

import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useGetRecipeQuery } from '../generated/graphql-types';
import { renderers } from './documentRender';
export default function Browser(): JSX.Element {
  const { data, loading } = useGetRecipeQuery({
    variables: {
      id: 'ea0e67be-f9a7-46c2-bc19-531828850cde',
    },
  });

  if (loading) {
    return <></>;
  }

  return (
    <Box>
      <Stack spacing={3}>
        <Text fontSize="6xl">(6xl) In love with React & Next</Text>
        <Text fontSize="5xl">(5xl) In love with React & Next</Text>
        <Text fontSize="4xl">(4xl) In love with React & Next</Text>
        <Text fontSize="3xl">(3xl) In love with React & Next</Text>
        <Text fontSize="2xl">(2xl) In love with React & Next</Text>
        <Text fontSize="xl">(xl) In love with React & Next</Text>
        <Text fontSize="lg">(lg) In love with React & Next</Text>
        <Text fontSize="md">(md) In love with React & Next</Text>
        <Text fontSize="sm">(sm) In love with React & Next</Text>
        <Text fontSize="xs">(xs) In love with React & Next</Text>
      </Stack>
      <DocumentRenderer document={data?.recipe?.instructions?.document} renderers={renderers} />
    </Box>
  );
}
