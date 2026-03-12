import { useState } from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useToast,
  Spinner,
  Center,
} from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { CURRENT_USER_QUERY } from '../auth/queries';
import {
  useSignInMutation,
  UserAuthenticationWithPasswordSuccess,
  UserAuthenticationWithPasswordFailure,
} from '../../generated/graphql-types';
import { useUser } from './Nav';

type LoginModalProps = {
  isOpen: boolean;
};

export default function LoginModal({ isOpen }: LoginModalProps): JSX.Element {
  const router = useRouter();
  const toast = useToast();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { loading: getUserLoading } = useUser();

  const [signin, { data, loading }] = useSignInMutation({
    refetchQueries: [{ query: CURRENT_USER_QUERY }],
  });

  const submitLogin = async (): Promise<void> => {
    try {
      const res = await signin({
        variables: { email: email.toLowerCase(), password },
      });

      if ((res.data?.authenticateUserWithPassword as UserAuthenticationWithPasswordSuccess)?.item) {
        toast({
          title: 'Signed in',
          description: 'Welcome back',
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
        router.push('/');
      }
    } catch (e) {
      toast({
        title: 'Error',
        description:
          'There was an error on the backend. Try again and then Email Brock if it percists',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setEmail(e.target.value);
  };

  const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setPassword(e.target.value);
  };

  return (
    <Modal isOpen={isOpen} onClose={() => null}>
      <ModalOverlay />
      <ModalContent>
        {getUserLoading ? (
          <Center mt="150px" mb="150px">
            <Spinner color="yellow.500" marginLeft="auto" marginRight="auto" size="xl" />
          </Center>
        ) : (
          <>
            <ModalHeader>Sign In</ModalHeader>
            <ModalBody>
              <FormControl id="email">
                <FormLabel color={'gray.500'}>Email address</FormLabel>
                <Input
                  value={email}
                  onChange={onEmailChange}
                  name="email"
                  type="email"
                  focusBorderColor="yellow.500"
                />
              </FormControl>
              <FormControl id="password">
                <FormLabel color={'gray.500'}>Password</FormLabel>
                <Input
                  value={password}
                  onChange={onPasswordChange}
                  focusBorderColor="yellow.500"
                  type="password"
                  name="password"
                  onKeyPress={(e) => (e.key === 'Enter' ? submitLogin() : undefined)}
                />
              </FormControl>
              <Stack spacing={6}>
                <FormLabel color={'red.500'}>
                  {
                    (data?.authenticateUserWithPassword as UserAuthenticationWithPasswordFailure)
                      ?.message
                  }
                </FormLabel>
                <Button onClick={() => submitLogin()} isLoading={loading}>
                  Sign in
                </Button>
              </Stack>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
