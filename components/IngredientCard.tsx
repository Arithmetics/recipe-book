import { toast } from 'sonner';
import {
  Ingredient,
  IngredientStatusType,
  useToggleIngredientInListMutation,
  useUpdateIngredientStatusMutation,
} from '../generated/graphql-types';
import { Checkbox } from '@/components/ui/checkbox';
import { Progress } from '@/components/ui/progress';
import { Label } from '@/components/ui/label';

type IngredientCardProps = {
  ingredient: Ingredient;
};

function progressValue(status?: IngredientStatusType | null): number {
  if (status === IngredientStatusType.Good) return 100;
  if (status === IngredientStatusType.Low) return 50;
  return 10;
}

export default function IngredientCard({ ingredient }: IngredientCardProps): JSX.Element {
  const [updateIngredient] = useUpdateIngredientStatusMutation();
  const [toggleIngredientInListMutation] = useToggleIngredientInListMutation();
  const value = progressValue(ingredient.status);

  const handleClick = (): void => {
    try {
      if (ingredient.status === IngredientStatusType.Out) {
        updateIngredient({ variables: { status: IngredientStatusType.Good, id: ingredient.id } });
      }
      if (ingredient.status === IngredientStatusType.Low) {
        updateIngredient({ variables: { status: IngredientStatusType.Out, id: ingredient.id } });
      }
      if (ingredient.status === IngredientStatusType.Good) {
        updateIngredient({ variables: { status: IngredientStatusType.Low, id: ingredient.id } });
      }
    } catch {
      toast.error('Ingredient Update fail');
    }
  };

  return (
    <div className="relative w-[103px] overflow-hidden rounded-base border-2 border-border bg-card p-2 shadow-shadow transition-transform duration-300 hover:scale-105">
      <p className="h-10 w-[105px] overflow-hidden text-ellipsis text-sm">{ingredient.name}</p>
      <button
        type="button"
        onClick={handleClick}
        className="block border-0 bg-transparent p-0"
        aria-label={`Cycle status for ${ingredient.name}`}
      >
        <img
          src={ingredient.image?.image?.publicUrlTransformed || ''}
          alt=""
          className="h-[100px] w-[120px] cursor-pointer object-cover object-top"
        />
      </button>
      <Progress value={value} className="mt-1" />
      {!ingredient.key && (
        <div className="mt-2 flex items-center space-x-2">
          <Checkbox
            id={`list-${ingredient.id}`}
            checked={ingredient.onShoppingList || false}
            onCheckedChange={(checked) =>
              toggleIngredientInListMutation({
                variables: { id: ingredient.id, onList: checked === true },
              })
            }
          />
          <Label htmlFor={`list-${ingredient.id}`} className="text-xs">
            On list
          </Label>
        </div>
      )}
    </div>
  );
}
