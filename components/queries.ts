import gql from 'graphql-tag';

export const GET_ALL_CATEGORIES = gql`
  query GetAllCategories {
    categories {
      id
      name
    }
  }
`;

export const GET_ALL_INGREDIENTS = gql`
  query GetAllIngredients {
    ingredients {
      id
      name
      status
      category {
        id
        name
      }
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const UPDATE_INGREDIENT_STATUS = gql`
  mutation UpdateIngredientStatus($id: ID!, $status: IngredientStatusType!) {
    updateIngredient(where: { id: $id }, data: { status: $status }) {
      id
      name
      status
      category {
        id
        name
      }
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const GET_ALL_RECIPES = gql`
  query GetAllRecipes {
    recipes {
      id
      name
      originalLink
      ingredientsCount
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;

export const GET_RECIPE = gql`
  query GetRecipe($id: ID!) {
    recipe(where: { id: $id }) {
      id
      name
      originalLink
      instructions {
        document
      }
      ingredients {
        id
        name
        status
        category {
          id
          name
        }
        image {
          id
          image {
            publicUrlTransformed
          }
          altText
        }
      }
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
  }
`;
