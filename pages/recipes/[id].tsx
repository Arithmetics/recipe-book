import Recipe from '../../components/Recipe';

type RecipePageProps = {
  query: { id?: string };
};

export default function RecipePage({ query }: RecipePageProps): JSX.Element {
  return <Recipe id={query?.id} />;
}
