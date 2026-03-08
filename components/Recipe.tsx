import { useState } from 'react';
import { DocumentRenderer } from '@keystone-6/document-renderer';
import { useGetRecipeQuery } from '../generated/graphql-types';
import IngredientCard from './IngredientCard';
import { renderers } from './documentRender';
import { Button } from '@/components/ui/button';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

type RecipeProps = {
  id?: string;
};

export default function Recipe({ id }: RecipeProps): JSX.Element {
  const [showIngredients, setShowIngredients] = useState(true);

  const { data, loading } = useGetRecipeQuery({
    variables: {
      id: id ?? '',
    },
  });
  const recipe = data?.recipe;

  if (loading) {
    return (
      <div className="flex justify-center pt-[30vh]">
        <div className="size-10 animate-spin rounded-full border-2 border-border border-t-main" />
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-[2000px] px-4 pb-24 flex flex-col gap-4">
      <div className="flex items-center gap-2">
        <h1 className="text-5xl font-bold">{recipe?.name}</h1>
        {recipe?.originalLink && (
          <a
            href={recipe.originalLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-destructive"
            aria-label="Open original link"
          >
            <svg className="inline size-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          </a>
        )}
      </div>
      <Collapsible open={showIngredients} onOpenChange={setShowIngredients}>
        <CollapsibleTrigger asChild>
          <Button variant="default">
            {showIngredients ? 'Hide Ingredients' : 'Show Ingredients'}
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent>
          <div className="flex flex-wrap gap-4 rounded-base border-2 border-border bg-card p-4 shadow-shadow">
            {recipe?.ingredients?.map((i) => (
              <IngredientCard key={i.id} ingredient={i} />
            ))}
          </div>
        </CollapsibleContent>
      </Collapsible>
      <div className="mx-8 rounded-base border-2 border-border p-8 shadow-shadow">
        <DocumentRenderer document={recipe?.instructions?.document} renderers={renderers} />
      </div>
    </div>
  );
}
