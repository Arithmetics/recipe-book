import React from 'react';
import { DocumentRendererProps } from '@keystone-6/document-renderer';
import { Text, UnorderedList, ListItem, OrderedList } from '@chakra-ui/react';

export const renderers: DocumentRendererProps['renderers'] = {
  // use your editor's autocomplete to see what other renderers you can override
  block: {
    paragraph: ({ children, textAlign }) => {
      return (
        <Text
          fontSize="md"
          style={{ textAlign: textAlign as 'left' | 'right' | 'center' | 'justify' | undefined }}
        >
          {children}
        </Text>
      );
    },
    heading: ({ children, textAlign }) => {
      return (
        <Text
          fontSize="3xl"
          style={{ textAlign: textAlign as 'left' | 'right' | 'center' | 'justify' | undefined }}
        >
          {children}
        </Text>
      );
    },
    list: ({ children, type }) => {
      if (type === 'ordered') {
        return (
          <OrderedList>
            {children.map((c, index) => (
              <ListItem color={'yellow.500'} key={c.key ?? index}>
                {c}
              </ListItem>
            ))}
          </OrderedList>
        );
      }
      return (
        <UnorderedList>
          {children.map((c, index) => (
            <ListItem color={'yellow.500'} key={c.key ?? index}>
              {c}
            </ListItem>
          ))}
        </UnorderedList>
      );
    },
  },
};
