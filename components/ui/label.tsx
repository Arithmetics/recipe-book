'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

export type LabelProps = React.ComponentProps<'label'>;

const Label = React.forwardRef<HTMLLabelElement, LabelProps>(({ className, ...props }, ref) => (
  // eslint-disable-next-line jsx-a11y/label-has-associated-control -- Label is used with htmlFor in parent
  <label
    ref={ref}
    className={cn(
      'text-sm font-base leading-none text-foreground peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
      className
    )}
    {...props}
  />
));
Label.displayName = 'Label';

export { Label };
