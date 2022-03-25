import { list } from '@keystone-6/core';

import { text, relationship, password, select } from '@keystone-6/core/fields';
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

export const lists: Lists = {
  User: list({
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
  }),
  Category: list({
    fields: {
      name: text({ validation: { isRequired: true } }),
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
};
