import { useState } from 'react';
import { MdOutlineIntegrationInstructions, MdOutlineFoodBank } from 'react-icons/md';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { GiMeat } from 'react-icons/gi';
import { HiMenu, HiX } from 'react-icons/hi';
import ButtonLink from '../ButtonLink';
import { useCurrentUserQuery, AuthenticatedItem, User } from '../../generated/graphql-types';
import { Button } from '@/components/ui/button';

export function useUser(): {
  user: Partial<AuthenticatedItem> | null | undefined;
  loading: boolean;
} {
  const { data, loading } = useCurrentUserQuery();
  return { user: data?.authenticatedItem as User, loading };
}

export default function Nav(): JSX.Element {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      <header className="w-full border-b-2 border-border bg-secondary-background px-2 py-4 shadow-shadow sm:px-4">
        <div className="mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="inline-flex md:hidden">
              <Button
                variant="noShadow"
                size="icon"
                className="md:hidden"
                aria-label="Open menu"
                onClick={() => setMobileOpen(true)}
              >
                <HiMenu className="size-5" />
              </Button>
              {mobileOpen && (
                <div className="fixed inset-0 left-0 right-0 top-0 z-10 flex flex-col gap-3 border-2 border-border bg-secondary-background p-2 pb-4 shadow-shadow">
                  <Button
                    variant="noShadow"
                    size="icon"
                    aria-label="Close menu"
                    className="justify-self-start"
                    onClick={() => setMobileOpen(false)}
                  >
                    <HiX className="size-5" />
                  </Button>
                  <ButtonLink
                    title="Recipes"
                    leftIcon={<MdOutlineIntegrationInstructions className="size-4" />}
                    href="/recipes"
                    buttonTheme={{ variant: 'neutral' }}
                    layoutProps={{ w: 'full' }}
                  />
                  <ButtonLink
                    title="Ingredients"
                    leftIcon={<MdOutlineFoodBank />}
                    href="/ingredients"
                    buttonTheme={{ variant: 'neutral' }}
                    layoutProps={{ w: 'full' }}
                  />
                  <ButtonLink
                    title="Shopping"
                    leftIcon={<AiOutlineShoppingCart />}
                    href="/shoppingList"
                    buttonTheme={{ variant: 'neutral' }}
                    layoutProps={{ w: 'full' }}
                  />
                  <ButtonLink
                    title="To Try"
                    leftIcon={<GiMeat />}
                    href="/recipes-to-try"
                    buttonTheme={{ variant: 'neutral' }}
                    layoutProps={{ w: 'full' }}
                  />
                </div>
              )}
            </div>
            <div className="hidden gap-3 md:inline-flex">
              <ButtonLink
                title="Recipes"
                leftIcon={<MdOutlineIntegrationInstructions className="size-4" />}
                href="/recipes"
                buttonTheme={{ variant: 'neutral' }}
              />
              <ButtonLink
                title="Ingredients"
                leftIcon={<MdOutlineFoodBank className="size-4" />}
                href="/ingredients"
                buttonTheme={{ variant: 'neutral' }}
              />
              <ButtonLink
                title="Shopping"
                leftIcon={<AiOutlineShoppingCart className="size-4" />}
                href="/shoppingList"
                buttonTheme={{ variant: 'neutral' }}
              />
              <ButtonLink
                title="To Try"
                leftIcon={<GiMeat className="size-4" />}
                href="/recipes-to-try"
                buttonTheme={{ variant: 'neutral' }}
              />
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
