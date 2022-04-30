import {
  Box,
  Center,
  Spinner,
  Text,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Link,
} from '@chakra-ui/react';
import { ExternalLinkIcon } from '@chakra-ui/icons';

import { useRecipesToTryQuery } from '../generated/graphql-types';

export default function RecipesToTry(): JSX.Element {
  const { data, loading } = useRecipesToTryQuery({ fetchPolicy: 'network-only' });

  if (loading) {
    return (
      <Box>
        <Text fontSize={'3xl'} marginLeft={8} marginTop={4}>
          Recipes To Try
        </Text>
        <Center marginTop={'30vh'}>
          <Spinner color="yellow.500" marginLeft="auto" marginRight="auto" size="xl" />
        </Center>
      </Box>
    );
  }

  return (
    <Box>
      <Text fontSize={'3xl'} marginLeft={8} marginTop={4}>
        Recipes To Try
      </Text>
      {!data?.recipeToTries?.length && (
        <Center marginTop={'30vh'}>
          <Text color="yellow.500">No items on list</Text>
        </Center>
      )}
      <TableContainer padding={8}>
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Link</Th>
            </Tr>
          </Thead>
          <Tbody>
            {data?.recipeToTries?.map((rtt) => {
              return (
                <Tr key={rtt.name}>
                  <Td>{rtt.name}</Td>
                  <Td>
                    <Link href={rtt.originalLink || '#'} isExternal>
                      {rtt.originalLink}
                      <ExternalLinkIcon mx="2px" />
                    </Link>
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}
