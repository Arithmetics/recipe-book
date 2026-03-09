import React from 'react';
import { DocumentRendererProps } from '@keystone-6/document-renderer';

export const renderers: DocumentRendererProps['renderers'] = {
  block: {
    paragraph: ({ children, textAlign }) => (
      <p
        className="mb-4 text-base last:mb-0"
        style={{ textAlign: textAlign as 'left' | 'right' | 'center' | 'justify' | undefined }}
      >
        {children}
      </p>
    ),
    heading: ({ children, textAlign }) => (
      <h2
        className="mt-8 mb-3 text-3xl font-bold first:mt-0"
        style={{ textAlign: textAlign as 'left' | 'right' | 'center' | 'justify' | undefined }}
      >
        {children}
      </h2>
    ),
    list: ({ children, type }) => {
      const ListTag = type === 'ordered' ? 'ol' : 'ul';
      return (
        <ListTag className="mb-4 list-inside list-disc space-y-1.5 last:mb-0">
          {children.map((c, index) => (
            <li key={c.key ?? index}>{c}</li>
          ))}
        </ListTag>
      );
    },
  },
};
