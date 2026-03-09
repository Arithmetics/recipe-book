import { useRouter } from 'next/router';
import Recipe from '../../components/Recipe';

type RecipePageProps = {
  query: { id?: string };
};

export default function RecipePage({ query }: RecipePageProps): JSX.Element {
  const router = useRouter();
  const id = (router.query?.id ?? query?.id) as string | undefined;
  return <Recipe id={id} />;
}
