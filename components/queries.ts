import gql from 'graphql-tag';

export const GET_RECIPE_QUERY = gql`
  query GetRecipe($id: ID!) {
    recipe(where: { id: $id }) {
      id
      instructions {
        document
      }
    }
  }
`;
