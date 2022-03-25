import gql from 'graphql-tag';

export const SIGNIN_MUTATION = gql`
  mutation SignIn($email: String!, $password: String!) {
    authenticateUserWithPassword(email: $email, password: $password) {
      ... on UserAuthenticationWithPasswordSuccess {
        item {
          id
          email
          name
        }
      }
      ... on UserAuthenticationWithPasswordFailure {
        message
      }
    }
  }
`;

export const SIGNOUT_MUTATION = gql`
  mutation SignOut {
    endSession
  }
`;
