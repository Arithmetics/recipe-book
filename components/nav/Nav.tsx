import { useState, useEffect } from 'react';
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  HStack,
  useDisclosure,
  VStack,
  IconButton,
  CloseButton,
} from '@chakra-ui/react';
import { HamburgerIcon } from '@chakra-ui/icons';
import { MdOutlineIntegrationInstructions, MdOutlineFoodBank } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiMeat } from 'react-icons/gi';
import ButtonLink from '../ButtonLink';
import LoginModal from './LoginModal';
import { useCurrentUserQuery, AuthenticatedItem, User } from '../../generated/graphql-types';

export function useUser(): {
  user: Partial<AuthenticatedItem> | null | undefined;
  loading: boolean;
} {
  const { data, loading } = useCurrentUserQuery();
  return { user: data?.authenticatedItem as User, loading };
}

export default function Nav(): JSX.Element {
  const mobileNav = useDisclosure();
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  const { user } = useUser();

  useEffect(() => {
    setIsLoginModalOpen(!user);
  }, [user]);

  return (
    <>
      <LoginModal isOpen={isLoginModalOpen} />
      <chakra.header bg="gray.900" w="full" px={{ base: 2, sm: 4 }} py={4} shadow="md">
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          <HStack display="flex" spacing={3} alignItems="center">
            <Box display={{ base: 'inline-flex', md: 'none' }}>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label="Open menu"
                fontSize="20px"
                color={useColorModeValue('gray.800', 'inherit')}
                variant="ghost"
                icon={<HamburgerIcon />}
                onClick={mobileNav.onOpen}
              />
              <VStack
                pos="absolute"
                top={0}
                left={0}
                right={0}
                display={mobileNav.isOpen ? 'flex' : 'none'}
                flexDirection="column"
                padding={2}
                paddingBottom={4}
                margin={0}
                bg="gray.900"
                spacing={3}
                rounded="sm"
                shadow="sm"
                zIndex={10}
              >
                <CloseButton
                  aria-label="Close menu"
                  justifySelf="self-start"
                  onClick={mobileNav.onClose}
                />
                <ButtonLink
                  title="Recipes"
                  leftIcon={<MdOutlineIntegrationInstructions />}
                  href={`/recipes`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="Ingredients"
                  leftIcon={<MdOutlineFoodBank />}
                  href={`/ingredients`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="Shopping"
                  leftIcon={<AiOutlineShoppingCart />}
                  href={`/shoppingList`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
                <ButtonLink
                  title="To Try"
                  leftIcon={<GiMeat />}
                  href={`/recipes-to-try`}
                  buttonTheme={{ variant: 'ghost' }}
                  layoutProps={{ w: 'full' }}
                />
              </VStack>
            </Box>
            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}>
              <ButtonLink
                title="Recipes"
                leftIcon={<MdOutlineIntegrationInstructions />}
                href={'/recipes'}
                buttonTheme={{ variant: 'ghost' }}
              />
              <ButtonLink
                title="Ingredients"
                leftIcon={<MdOutlineFoodBank />}
                href={'/ingredients'}
                buttonTheme={{ variant: 'ghost' }}
              />
              <ButtonLink
                title="Shopping"
                leftIcon={<AiOutlineShoppingCart />}
                href={'/shoppingList'}
                buttonTheme={{ variant: 'ghost' }}
              />
              <ButtonLink
                title="To Try"
                leftIcon={<GiMeat />}
                href={'/recipes-to-try'}
                buttonTheme={{ variant: 'ghost' }}
              />
              <p>{user?.name}</p>
            </HStack>
            <HStack spacing={3} display={{ base: 'none', md: 'inline-flex' }}></HStack>
          </HStack>
          <HStack
            spacing={3}
            display={mobileNav.isOpen ? 'none' : 'flex'}
            alignItems="center"
          ></HStack>
        </Flex>
      </chakra.header>
    </>
  );
}
