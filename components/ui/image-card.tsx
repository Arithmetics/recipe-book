import * as React from 'react';
import { cn } from '@/lib/utils';

type ImageCardProps = {
  imageUrl: string;
  caption: string;
  imageAlt?: string;
  className?: string;
  children?: React.ReactNode;
};

export function ImageCard({
  imageUrl,
  caption,
  imageAlt = '',
  className,
  children,
}: ImageCardProps): React.ReactElement {
  return (
    <div
      className={cn(
        'flex min-w-0 flex-col overflow-hidden rounded-base border-2 border-border bg-card text-card-foreground shadow-shadow',
        className
      )}
    >
      <div className="relative aspect-square w-full overflow-hidden bg-muted">
        <img src={imageUrl} alt={imageAlt} className="h-full w-full object-cover object-top" />
      </div>
      <p className="truncate px-2 pt-2 text-sm font-medium" title={caption}>
        {caption}
      </p>
      {children != null && React.Children.count(children) > 0 ? (
        <div className="flex min-h-[2rem] flex-wrap items-end gap-1 p-2 pt-0">{children}</div>
      ) : null}
    </div>
  );
}
