"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// keystone.ts
var keystone_exports = {};
__export(keystone_exports, {
  default: () => keystone_default
});
module.exports = __toCommonJS(keystone_exports);
var import_core2 = require("@keystone-6/core");

// schema.ts
var import_core = require("@keystone-6/core");
var import_fields = require("@keystone-6/core/fields");
var import_cloudinary = require("@keystone-6/cloudinary");
var import_fields_document = require("@keystone-6/fields-document");
var import_config = require("dotenv/config");
var cloudinary = {
  cloudName: process.env.CLOUDINARY_CLOUD_NAME || "",
  apiKey: process.env.CLOUDINARY_KEY || "",
  apiSecret: process.env.CLOUDINARY_SECRET || "",
  folder: "recipes"
};
function isSignedIn({ session: session2 }) {
  return !!session2;
}
var lists = {
  User: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      email: (0, import_fields.text)({
        validation: { isRequired: true },
        isIndexed: "unique",
        isFilterable: true
      }),
      password: (0, import_fields.password)({ validation: { isRequired: true } })
    },
    ui: {
      listView: {
        initialColumns: ["name", "email"]
      }
    }
  }),
  Ingredient: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      note: (0, import_fields.text)(),
      status: (0, import_fields.select)({
        type: "enum",
        options: [
          { label: "Good", value: "GOOD" },
          { label: "Low", value: "LOW" },
          { label: "Out", value: "OUT" }
        ],
        validation: {
          isRequired: true
        },
        ui: { displayMode: "select" }
      }),
      key: (0, import_fields.checkbox)({ defaultValue: false }),
      onShoppingList: (0, import_fields.checkbox)({ defaultValue: false }),
      category: (0, import_fields.relationship)({ ref: "Category" }),
      recipes: (0, import_fields.relationship)({ ref: "Recipe.ingredients", many: true }),
      image: (0, import_fields.relationship)({
        ref: "CloudImage",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] }
        }
      })
    },
    hooks: {
      resolveInput: async ({ resolvedData }) => {
        const newResolve = { ...resolvedData };
        if (resolvedData.status === "GOOD") {
          newResolve.onShoppingList = false;
        }
        return newResolve;
      }
    },
    ui: {
      listView: {
        initialColumns: ["name", "status", "key", "onShoppingList"]
      }
    }
  }),
  Category: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      order: (0, import_fields.integer)({ isIndexed: "unique" }),
      image: (0, import_fields.relationship)({
        ref: "CloudImage",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] }
        }
      })
    }
  }),
  Recipe: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      originalLink: (0, import_fields.text)(),
      ingredients: (0, import_fields.relationship)({ ref: "Ingredient.recipes", many: true }),
      image: (0, import_fields.relationship)({
        ref: "CloudImage",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] }
        }
      }),
      tags: (0, import_fields.relationship)({ ref: "Tag", many: true }),
      instructions: (0, import_fields_document.document)({
        formatting: true,
        dividers: true,
        links: true
      })
    }
  }),
  CloudImage: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      image: (0, import_cloudinary.cloudinaryImage)({
        cloudinary,
        label: "Source"
      }),
      altText: (0, import_fields.text)({ validation: { isRequired: false } })
    },
    ui: {
      listView: {
        initialColumns: ["image", "altText"]
      }
    }
  }),
  RecipeToTry: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      originalLink: (0, import_fields.text)()
    },
    ui: {
      listView: {
        initialColumns: ["name", "originalLink"]
      }
    }
  }),
  Tag: (0, import_core.list)({
    access: {
      operation: {
        query: () => true,
        delete: isSignedIn,
        create: isSignedIn,
        update: isSignedIn
      }
    },
    fields: {
      name: (0, import_fields.text)({ validation: { isRequired: true } }),
      image: (0, import_fields.relationship)({
        ref: "CloudImage",
        ui: {
          displayMode: "cards",
          cardFields: ["image", "altText"],
          inlineCreate: { fields: ["image", "altText"] },
          inlineEdit: { fields: ["image", "altText"] }
        }
      })
    }
  })
};

// auth.ts
var import_auth = require("@keystone-6/auth");
var import_session = require("@keystone-6/core/session");
var sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  if (process.env.NODE_ENV === "production") {
    throw new Error("The SESSION_SECRET environment variable must be set in production");
  } else {
    sessionSecret = "-- DEV COOKIE SECRET; CHANGE ME --";
  }
}
var { withAuth } = (0, import_auth.createAuth)({
  listKey: "User",
  identityField: "email",
  sessionData: "name",
  secretField: "password",
  initFirstItem: {
    fields: ["name", "email", "password"]
  }
});
var sessionMaxAge = 60 * 60 * 24 * 30;
var session = (0, import_session.statelessSessions)({
  maxAge: sessionMaxAge,
  secret: sessionSecret
});

// keystone.ts
var frontendUrl = process.env.FRONTEND_URL;
if (!frontendUrl) {
  throw new Error(`Where's your FRONTEND_URL dude`);
}
var keystone_default = withAuth(
  // Using the config function helps typescript guide you to the available options.
  (0, import_core2.config)({
    // the db sets the database provider - we're using sqlite for the fastest startup experience
    graphql: {
      cors: {
        origin: frontendUrl,
        credentials: true
      }
    },
    server: {
      cors: {
        origin: frontendUrl,
        credentials: true
      }
    },
    db: {
      provider: "postgresql",
      url: `${process.env.DATABASE_URL}?pool_timeout=0`,
      enableLogging: true,
      idField: { kind: "uuid" }
    },
    // This config allows us to set up features of the Admin UI https://keystonejs.com/docs/apis/config#ui
    ui: {
      // For our starter, we check that someone has session data before letting them see the Admin UI.
      isAccessAllowed: (context) => !!context.session?.data
    },
    lists,
    session
  })
);
//# sourceMappingURL=config.js.map
