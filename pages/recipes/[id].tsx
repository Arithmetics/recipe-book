import Recipe from '../../components/Recipe';

type IngredientsPageProps = {
  query: { id?: string };
};
export default function IngredientsPage({ query }: IngredientsPageProps): JSX.Element {
  return <Recipe id={query.id} />;
}
