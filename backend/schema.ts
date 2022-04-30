import { list } from '@keystone-6/core';

import { text, relationship, password, select, checkbox, integer } from '@keystone-6/core/fields';
import { cloudinaryImage } from '@keystone-6/cloudinary';
import { document } from '@keystone-6/fields-document';
import { Lists } from '.keystone/types';
import 'dotenv/config';

export const cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || '',
  apiKey: process.env.CLOUDINARY_KEY || '',
  apiSecret: process.env.CLOUDINARY_SECRET || '',
  folder: 'recipes',
};

function isSignedIn({ session }: { session: unknown }): boolean {
  return !!session;
}

export const lists: Lists = {
  User: list({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      email: text({
        validation: { isRequired: true },
        isIndexed: 'unique',
        isFilterable: true,
      }),
      password: password({ validation: { isRequired: true } }),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'email'],
      },
    },
  }),
  Ingredient: list({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      note: text(),
      status: select({
        type: 'enum',
        options: [
          { label: 'Good', value: 'GOOD' },
          { label: 'Low', value: 'LOW' },
          { label: 'Out', value: 'OUT' },
        ],
        validation: {
          isRequired: true,
        },
        ui: { displayMode: 'select' },
      }),
      key: checkbox({ defaultValue: false }),
      onShoppingList: checkbox({ defaultValue: false }),
      category: relationship({ ref: 'Category' }),
      recipes: relationship({ ref: 'Recipe.ingredients', many: true }),
      image: relationship({
        ref: 'CloudImage',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
        },
      }),
    },
    hooks: {
      resolveInput: async ({ resolvedData }) => {
        const newResolve = { ...resolvedData };
        if (resolvedData.status === 'GOOD') {
          newResolve.onShoppingList = false;
        }
        return newResolve;
      },
    },
    ui: {
      listView: {
        initialColumns: ['name', 'status', 'key', 'onShoppingList'],
      },
    },
  }),
  Category: list({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      order: integer({ isIndexed: 'unique' }),
      image: relationship({
        ref: 'CloudImage',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
        },
      }),
    },
  }),
  Recipe: list({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      originalLink: text(),
      ingredients: relationship({ ref: 'Ingredient.recipes', many: true }),
      image: relationship({
        ref: 'CloudImage',
        ui: {
          displayMode: 'cards',
          cardFields: ['image', 'altText'],
          inlineCreate: { fields: ['image', 'altText'] },
          inlineEdit: { fields: ['image', 'altText'] },
        },
      }),
      instructions: document({
        formatting: true,
        dividers: true,
        links: true,
      }),
    },
  }),
  CloudImage: list({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn,
      },
    },
    fields: {
      image: cloudinaryImage({
        cloudinary,
        label: 'Source',
      }),
      altText: text({ validation: { isRequired: false } }),
    },
    ui: {
      listView: {
        initialColumns: ['image', 'altText'],
      },
    },
  }),
  RecipeToTry: list({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn,
      },
    },
    fields: {
      name: text({ validation: { isRequired: true } }),
      originalLink: text(),
    },
    ui: {
      listView: {
        initialColumns: ['name', 'originalLink'],
      },
    },
  }),
};
