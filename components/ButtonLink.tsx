import NextLink from 'next/link';
import { ReactElement } from 'react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface ButtonLinkProps {
  title: string;
  href: string;
  buttonTheme?: { variant?: 'default' | 'neutral' | 'noShadow' | 'reverse' | 'ghost' };
  layoutProps?: { w?: string };
  leftIcon?: ReactElement;
}

export default function ButtonLink({
  href,
  title,
  buttonTheme = {},
  layoutProps,
  leftIcon,
}: ButtonLinkProps): JSX.Element {
  const variant =
    buttonTheme.variant === 'ghost' || !buttonTheme.variant ? 'neutral' : buttonTheme.variant;
  return (
    <NextLink href={href} passHref legacyBehavior>
      <Button variant={variant} className={cn(layoutProps?.w === 'full' && 'w-full')} asChild>
        <a>
          {leftIcon}
          {title}
        </a>
      </Button>
    </NextLink>
  );
}
