import React from 'react';
import { DocumentRendererProps } from '@keystone-6/document-renderer';

export const renderers: DocumentRendererProps['renderers'] = {
  block: {
    paragraph: ({ children, textAlign }) => (
      <p
        className="text-base"
        style={{ textAlign: textAlign as 'left' | 'right' | 'center' | 'justify' | undefined }}
      >
        {children}
      </p>
    ),
    heading: ({ children, textAlign }) => (
      <h2
        className="text-3xl font-bold"
        style={{ textAlign: textAlign as 'left' | 'right' | 'center' | 'justify' | undefined }}
      >
        {children}
      </h2>
    ),
    list: ({ children, type }) => {
      const ListTag = type === 'ordered' ? 'ol' : 'ul';
      return (
        <ListTag className="list-inside list-disc text-main">
          {children.map((c, index) => (
            <li key={c.key ?? index}>{c}</li>
          ))}
        </ListTag>
      );
    },
  },
};
