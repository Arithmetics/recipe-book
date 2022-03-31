import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
  /** The `Upload` scalar type represents a file upload. */
  Upload: any;
};

export type AuthenticatedItem = User;

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  image?: Maybe<CloudImage>;
  name?: Maybe<Scalars['String']>;
};

export type CategoryCreateInput = {
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type CategoryRelateToOneForCreateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
};

export type CategoryRelateToOneForUpdateInput = {
  connect?: InputMaybe<CategoryWhereUniqueInput>;
  create?: InputMaybe<CategoryCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CategoryUpdateArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};

export type CategoryUpdateInput = {
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  name?: InputMaybe<StringFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type CloudImage = {
  __typename?: 'CloudImage';
  altText?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<CloudinaryImage_File>;
};

export type CloudImageCreateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type CloudImageOrderByInput = {
  altText?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
};

export type CloudImageRelateToOneForCreateInput = {
  connect?: InputMaybe<CloudImageWhereUniqueInput>;
  create?: InputMaybe<CloudImageCreateInput>;
};

export type CloudImageRelateToOneForUpdateInput = {
  connect?: InputMaybe<CloudImageWhereUniqueInput>;
  create?: InputMaybe<CloudImageCreateInput>;
  disconnect?: InputMaybe<Scalars['Boolean']>;
};

export type CloudImageUpdateArgs = {
  data: CloudImageUpdateInput;
  where: CloudImageWhereUniqueInput;
};

export type CloudImageUpdateInput = {
  altText?: InputMaybe<Scalars['String']>;
  image?: InputMaybe<Scalars['Upload']>;
};

export type CloudImageWhereInput = {
  AND?: InputMaybe<Array<CloudImageWhereInput>>;
  NOT?: InputMaybe<Array<CloudImageWhereInput>>;
  OR?: InputMaybe<Array<CloudImageWhereInput>>;
  altText?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
};

export type CloudImageWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

/**
 * Mirrors the formatting options [Cloudinary provides](https://cloudinary.com/documentation/image_transformation_reference).
 * All options are strings as they ultimately end up in a URL.
 */
export type CloudinaryImageFormat = {
  angle?: InputMaybe<Scalars['String']>;
  aspect_ratio?: InputMaybe<Scalars['String']>;
  background?: InputMaybe<Scalars['String']>;
  border?: InputMaybe<Scalars['String']>;
  color?: InputMaybe<Scalars['String']>;
  color_space?: InputMaybe<Scalars['String']>;
  crop?: InputMaybe<Scalars['String']>;
  default_image?: InputMaybe<Scalars['String']>;
  delay?: InputMaybe<Scalars['String']>;
  density?: InputMaybe<Scalars['String']>;
  dpr?: InputMaybe<Scalars['String']>;
  effect?: InputMaybe<Scalars['String']>;
  fetch_format?: InputMaybe<Scalars['String']>;
  flags?: InputMaybe<Scalars['String']>;
  format?: InputMaybe<Scalars['String']>;
  gravity?: InputMaybe<Scalars['String']>;
  height?: InputMaybe<Scalars['String']>;
  opacity?: InputMaybe<Scalars['String']>;
  overlay?: InputMaybe<Scalars['String']>;
  page?: InputMaybe<Scalars['String']>;
  /** Rewrites the filename to be this pretty string. Do not include `/` or `.` */
  prettyName?: InputMaybe<Scalars['String']>;
  quality?: InputMaybe<Scalars['String']>;
  radius?: InputMaybe<Scalars['String']>;
  transformation?: InputMaybe<Scalars['String']>;
  underlay?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['String']>;
  x?: InputMaybe<Scalars['String']>;
  y?: InputMaybe<Scalars['String']>;
  zoom?: InputMaybe<Scalars['String']>;
};

export type CloudinaryImage_File = {
  __typename?: 'CloudinaryImage_File';
  encoding?: Maybe<Scalars['String']>;
  filename?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['ID']>;
  mimetype?: Maybe<Scalars['String']>;
  originalFilename?: Maybe<Scalars['String']>;
  publicUrl?: Maybe<Scalars['String']>;
  publicUrlTransformed?: Maybe<Scalars['String']>;
};


export type CloudinaryImage_FilePublicUrlTransformedArgs = {
  transformation?: InputMaybe<CloudinaryImageFormat>;
};

export type CreateInitialUserInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type IdFilter = {
  equals?: InputMaybe<Scalars['ID']>;
  gt?: InputMaybe<Scalars['ID']>;
  gte?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  lt?: InputMaybe<Scalars['ID']>;
  lte?: InputMaybe<Scalars['ID']>;
  not?: InputMaybe<IdFilter>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
};

export type Ingredient = {
  __typename?: 'Ingredient';
  category?: Maybe<Category>;
  id: Scalars['ID'];
  image?: Maybe<CloudImage>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  recipes?: Maybe<Array<Recipe>>;
  recipesCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IngredientStatusType>;
};


export type IngredientRecipesArgs = {
  orderBy?: Array<RecipeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RecipeWhereInput;
};


export type IngredientRecipesCountArgs = {
  where?: RecipeWhereInput;
};

export type IngredientCreateInput = {
  category?: InputMaybe<CategoryRelateToOneForCreateInput>;
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  recipes?: InputMaybe<RecipeRelateToManyForCreateInput>;
  status?: InputMaybe<IngredientStatusType>;
};

export type IngredientManyRelationFilter = {
  every?: InputMaybe<IngredientWhereInput>;
  none?: InputMaybe<IngredientWhereInput>;
  some?: InputMaybe<IngredientWhereInput>;
};

export type IngredientOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  status?: InputMaybe<OrderDirection>;
};

export type IngredientRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  create?: InputMaybe<Array<IngredientCreateInput>>;
};

export type IngredientRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  create?: InputMaybe<Array<IngredientCreateInput>>;
  disconnect?: InputMaybe<Array<IngredientWhereUniqueInput>>;
  set?: InputMaybe<Array<IngredientWhereUniqueInput>>;
};

export enum IngredientStatusType {
  Good = 'GOOD',
  Low = 'LOW',
  Out = 'OUT'
}

export type IngredientStatusTypeNullableFilter = {
  equals?: InputMaybe<IngredientStatusType>;
  in?: InputMaybe<Array<IngredientStatusType>>;
  not?: InputMaybe<IngredientStatusTypeNullableFilter>;
  notIn?: InputMaybe<Array<IngredientStatusType>>;
};

export type IngredientUpdateArgs = {
  data: IngredientUpdateInput;
  where: IngredientWhereUniqueInput;
};

export type IngredientUpdateInput = {
  category?: InputMaybe<CategoryRelateToOneForUpdateInput>;
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  recipes?: InputMaybe<RecipeRelateToManyForUpdateInput>;
  status?: InputMaybe<IngredientStatusType>;
};

export type IngredientWhereInput = {
  AND?: InputMaybe<Array<IngredientWhereInput>>;
  NOT?: InputMaybe<Array<IngredientWhereInput>>;
  OR?: InputMaybe<Array<IngredientWhereInput>>;
  category?: InputMaybe<CategoryWhereInput>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  recipes?: InputMaybe<RecipeManyRelationFilter>;
  status?: InputMaybe<IngredientStatusTypeNullableFilter>;
};

export type IngredientWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  enableSessionItem: Scalars['Boolean'];
  enableSignout: Scalars['Boolean'];
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isOrderable: Scalars['Boolean'];
  itemView?: Maybe<KeystoneAdminUiFieldMetaItemView>;
  label: Scalars['String'];
  listView: KeystoneAdminUiFieldMetaListView;
  path: Scalars['String'];
  search?: Maybe<QueryMode>;
  viewsIndex: Scalars['Int'];
};


export type KeystoneAdminUiFieldMetaItemViewArgs = {
  id?: InputMaybe<Scalars['ID']>;
};

export type KeystoneAdminUiFieldMetaCreateView = {
  __typename?: 'KeystoneAdminUIFieldMetaCreateView';
  fieldMode: KeystoneAdminUiFieldMetaCreateViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaCreateViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiFieldMetaListView = {
  __typename?: 'KeystoneAdminUIFieldMetaListView';
  fieldMode: KeystoneAdminUiFieldMetaListViewFieldMode;
};

export enum KeystoneAdminUiFieldMetaListViewFieldMode {
  Hidden = 'hidden',
  Read = 'read'
}

export type KeystoneAdminUiListMeta = {
  __typename?: 'KeystoneAdminUIListMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  itemQueryName: Scalars['String'];
  key: Scalars['String'];
  label: Scalars['String'];
  labelField: Scalars['String'];
  listQueryName: Scalars['String'];
  pageSize: Scalars['Int'];
  path: Scalars['String'];
  plural: Scalars['String'];
  singular: Scalars['String'];
};

export type KeystoneAdminUiSort = {
  __typename?: 'KeystoneAdminUISort';
  direction: KeystoneAdminUiSortDirection;
  field: Scalars['String'];
};

export enum KeystoneAdminUiSortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type KeystoneMeta = {
  __typename?: 'KeystoneMeta';
  adminMeta: KeystoneAdminMeta;
};

export type Mutation = {
  __typename?: 'Mutation';
  authenticateUserWithPassword?: Maybe<UserAuthenticationWithPasswordResult>;
  createCategories?: Maybe<Array<Maybe<Category>>>;
  createCategory?: Maybe<Category>;
  createCloudImage?: Maybe<CloudImage>;
  createCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  createIngredient?: Maybe<Ingredient>;
  createIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  createInitialUser: UserAuthenticationWithPasswordSuccess;
  createRecipe?: Maybe<Recipe>;
  createRecipes?: Maybe<Array<Maybe<Recipe>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteCloudImage?: Maybe<CloudImage>;
  deleteCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  deleteIngredient?: Maybe<Ingredient>;
  deleteIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  deleteRecipe?: Maybe<Recipe>;
  deleteRecipes?: Maybe<Array<Maybe<Recipe>>>;
  deleteUser?: Maybe<User>;
  deleteUsers?: Maybe<Array<Maybe<User>>>;
  endSession: Scalars['Boolean'];
  updateCategories?: Maybe<Array<Maybe<Category>>>;
  updateCategory?: Maybe<Category>;
  updateCloudImage?: Maybe<CloudImage>;
  updateCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  updateIngredient?: Maybe<Ingredient>;
  updateIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  updateRecipe?: Maybe<Recipe>;
  updateRecipes?: Maybe<Array<Maybe<Recipe>>>;
  updateUser?: Maybe<User>;
  updateUsers?: Maybe<Array<Maybe<User>>>;
};


export type MutationAuthenticateUserWithPasswordArgs = {
  email: Scalars['String'];
  password: Scalars['String'];
};


export type MutationCreateCategoriesArgs = {
  data: Array<CategoryCreateInput>;
};


export type MutationCreateCategoryArgs = {
  data: CategoryCreateInput;
};


export type MutationCreateCloudImageArgs = {
  data: CloudImageCreateInput;
};


export type MutationCreateCloudImagesArgs = {
  data: Array<CloudImageCreateInput>;
};


export type MutationCreateIngredientArgs = {
  data: IngredientCreateInput;
};


export type MutationCreateIngredientsArgs = {
  data: Array<IngredientCreateInput>;
};


export type MutationCreateInitialUserArgs = {
  data: CreateInitialUserInput;
};


export type MutationCreateRecipeArgs = {
  data: RecipeCreateInput;
};


export type MutationCreateRecipesArgs = {
  data: Array<RecipeCreateInput>;
};


export type MutationCreateUserArgs = {
  data: UserCreateInput;
};


export type MutationCreateUsersArgs = {
  data: Array<UserCreateInput>;
};


export type MutationDeleteCategoriesArgs = {
  where: Array<CategoryWhereUniqueInput>;
};


export type MutationDeleteCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type MutationDeleteCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type MutationDeleteCloudImagesArgs = {
  where: Array<CloudImageWhereUniqueInput>;
};


export type MutationDeleteIngredientArgs = {
  where: IngredientWhereUniqueInput;
};


export type MutationDeleteIngredientsArgs = {
  where: Array<IngredientWhereUniqueInput>;
};


export type MutationDeleteRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type MutationDeleteRecipesArgs = {
  where: Array<RecipeWhereUniqueInput>;
};


export type MutationDeleteUserArgs = {
  where: UserWhereUniqueInput;
};


export type MutationDeleteUsersArgs = {
  where: Array<UserWhereUniqueInput>;
};


export type MutationUpdateCategoriesArgs = {
  data: Array<CategoryUpdateArgs>;
};


export type MutationUpdateCategoryArgs = {
  data: CategoryUpdateInput;
  where: CategoryWhereUniqueInput;
};


export type MutationUpdateCloudImageArgs = {
  data: CloudImageUpdateInput;
  where: CloudImageWhereUniqueInput;
};


export type MutationUpdateCloudImagesArgs = {
  data: Array<CloudImageUpdateArgs>;
};


export type MutationUpdateIngredientArgs = {
  data: IngredientUpdateInput;
  where: IngredientWhereUniqueInput;
};


export type MutationUpdateIngredientsArgs = {
  data: Array<IngredientUpdateArgs>;
};


export type MutationUpdateRecipeArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};


export type MutationUpdateRecipesArgs = {
  data: Array<RecipeUpdateArgs>;
};


export type MutationUpdateUserArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};


export type MutationUpdateUsersArgs = {
  data: Array<UserUpdateArgs>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type PasswordState = {
  __typename?: 'PasswordState';
  isSet: Scalars['Boolean'];
};

export type Query = {
  __typename?: 'Query';
  authenticatedItem?: Maybe<AuthenticatedItem>;
  categories?: Maybe<Array<Category>>;
  categoriesCount?: Maybe<Scalars['Int']>;
  category?: Maybe<Category>;
  cloudImage?: Maybe<CloudImage>;
  cloudImages?: Maybe<Array<CloudImage>>;
  cloudImagesCount?: Maybe<Scalars['Int']>;
  ingredient?: Maybe<Ingredient>;
  ingredients?: Maybe<Array<Ingredient>>;
  ingredientsCount?: Maybe<Scalars['Int']>;
  keystone: KeystoneMeta;
  recipe?: Maybe<Recipe>;
  recipes?: Maybe<Array<Recipe>>;
  recipesCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
  orderBy?: Array<CategoryOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CategoryWhereInput;
};


export type QueryCategoriesCountArgs = {
  where?: CategoryWhereInput;
};


export type QueryCategoryArgs = {
  where: CategoryWhereUniqueInput;
};


export type QueryCloudImageArgs = {
  where: CloudImageWhereUniqueInput;
};


export type QueryCloudImagesArgs = {
  orderBy?: Array<CloudImageOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: CloudImageWhereInput;
};


export type QueryCloudImagesCountArgs = {
  where?: CloudImageWhereInput;
};


export type QueryIngredientArgs = {
  where: IngredientWhereUniqueInput;
};


export type QueryIngredientsArgs = {
  orderBy?: Array<IngredientOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: IngredientWhereInput;
};


export type QueryIngredientsCountArgs = {
  where?: IngredientWhereInput;
};


export type QueryRecipeArgs = {
  where: RecipeWhereUniqueInput;
};


export type QueryRecipesArgs = {
  orderBy?: Array<RecipeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RecipeWhereInput;
};


export type QueryRecipesCountArgs = {
  where?: RecipeWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  orderBy?: Array<UserOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: UserWhereInput;
};


export type QueryUsersCountArgs = {
  where?: UserWhereInput;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type Recipe = {
  __typename?: 'Recipe';
  id: Scalars['ID'];
  image?: Maybe<CloudImage>;
  ingredients?: Maybe<Array<Ingredient>>;
  ingredientsCount?: Maybe<Scalars['Int']>;
  instructions?: Maybe<Recipe_Instructions_Document>;
  name?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
};


export type RecipeIngredientsArgs = {
  orderBy?: Array<IngredientOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: IngredientWhereInput;
};


export type RecipeIngredientsCountArgs = {
  where?: IngredientWhereInput;
};

export type RecipeCreateInput = {
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  ingredients?: InputMaybe<IngredientRelateToManyForCreateInput>;
  instructions?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
};

export type RecipeManyRelationFilter = {
  every?: InputMaybe<RecipeWhereInput>;
  none?: InputMaybe<RecipeWhereInput>;
  some?: InputMaybe<RecipeWhereInput>;
};

export type RecipeOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  originalLink?: InputMaybe<OrderDirection>;
};

export type RecipeRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  create?: InputMaybe<Array<RecipeCreateInput>>;
};

export type RecipeRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  create?: InputMaybe<Array<RecipeCreateInput>>;
  disconnect?: InputMaybe<Array<RecipeWhereUniqueInput>>;
  set?: InputMaybe<Array<RecipeWhereUniqueInput>>;
};

export type RecipeUpdateArgs = {
  data: RecipeUpdateInput;
  where: RecipeWhereUniqueInput;
};

export type RecipeUpdateInput = {
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  ingredients?: InputMaybe<IngredientRelateToManyForUpdateInput>;
  instructions?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
};

export type RecipeWhereInput = {
  AND?: InputMaybe<Array<RecipeWhereInput>>;
  NOT?: InputMaybe<Array<RecipeWhereInput>>;
  OR?: InputMaybe<Array<RecipeWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  ingredients?: InputMaybe<IngredientManyRelationFilter>;
  name?: InputMaybe<StringFilter>;
  originalLink?: InputMaybe<StringFilter>;
};

export type RecipeWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type Recipe_Instructions_Document = {
  __typename?: 'Recipe_instructions_Document';
  document: Scalars['JSON'];
};


export type Recipe_Instructions_DocumentDocumentArgs = {
  hydrateRelationships?: Scalars['Boolean'];
};

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  password?: Maybe<PasswordState>;
};

export type UserAuthenticationWithPasswordFailure = {
  __typename?: 'UserAuthenticationWithPasswordFailure';
  message: Scalars['String'];
};

export type UserAuthenticationWithPasswordResult = UserAuthenticationWithPasswordFailure | UserAuthenticationWithPasswordSuccess;

export type UserAuthenticationWithPasswordSuccess = {
  __typename?: 'UserAuthenticationWithPasswordSuccess';
  item: User;
  sessionToken: Scalars['String'];
};

export type UserCreateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserOrderByInput = {
  email?: InputMaybe<OrderDirection>;
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type UserUpdateArgs = {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  password?: InputMaybe<Scalars['String']>;
};

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  email?: InputMaybe<StringFilter>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  email?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
};

export type SignInMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type SignInMutation = { __typename?: 'Mutation', authenticateUserWithPassword?: { __typename?: 'UserAuthenticationWithPasswordFailure', message: string } | { __typename?: 'UserAuthenticationWithPasswordSuccess', item: { __typename?: 'User', id: string, email?: string | null, name?: string | null } } | null };

export type SignOutMutationVariables = Exact<{ [key: string]: never; }>;


export type SignOutMutation = { __typename?: 'Mutation', endSession: boolean };

export type GetAllCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCategoriesQuery = { __typename?: 'Query', categories?: Array<{ __typename?: 'Category', id: string, name?: string | null }> | null };

export type GetAllIngredientsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllIngredientsQuery = { __typename?: 'Query', ingredients?: Array<{ __typename?: 'Ingredient', id: string, name?: string | null, status?: IngredientStatusType | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null }> | null };

export type UpdateIngredientStatusMutationVariables = Exact<{
  id: Scalars['ID'];
  status: IngredientStatusType;
}>;


export type UpdateIngredientStatusMutation = { __typename?: 'Mutation', updateIngredient?: { __typename?: 'Ingredient', id: string, name?: string | null, status?: IngredientStatusType | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null };

export type GetAllRecipesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllRecipesQuery = { __typename?: 'Query', recipes?: Array<{ __typename?: 'Recipe', id: string, name?: string | null, originalLink?: string | null, ingredientsCount?: number | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null }> | null };

export type GetRecipeQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetRecipeQuery = { __typename?: 'Query', recipe?: { __typename?: 'Recipe', id: string, name?: string | null, originalLink?: string | null, instructions?: { __typename?: 'Recipe_instructions_Document', document: any } | null, ingredients?: Array<{ __typename?: 'Ingredient', id: string, name?: string | null, status?: IngredientStatusType | null, category?: { __typename?: 'Category', id: string, name?: string | null } | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null }> | null, image?: { __typename?: 'CloudImage', id: string, altText?: string | null, image?: { __typename?: 'CloudinaryImage_File', publicUrlTransformed?: string | null } | null } | null } | null };


export const SignInDocument = gql`
    mutation SignIn($email: String!, $password: String!) {
  authenticateUserWithPassword(email: $email, password: $password) {
    ... on UserAuthenticationWithPasswordSuccess {
      item {
        id
        email
        name
      }
    }
    ... on UserAuthenticationWithPasswordFailure {
      message
    }
  }
}
    `;
export type SignInMutationFn = Apollo.MutationFunction<SignInMutation, SignInMutationVariables>;

/**
 * __useSignInMutation__
 *
 * To run a mutation, you first call `useSignInMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignInMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signInMutation, { data, loading, error }] = useSignInMutation({
 *   variables: {
 *      email: // value for 'email'
 *      password: // value for 'password'
 *   },
 * });
 */
export function useSignInMutation(baseOptions?: Apollo.MutationHookOptions<SignInMutation, SignInMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignInMutation, SignInMutationVariables>(SignInDocument, options);
      }
export type SignInMutationHookResult = ReturnType<typeof useSignInMutation>;
export type SignInMutationResult = Apollo.MutationResult<SignInMutation>;
export type SignInMutationOptions = Apollo.BaseMutationOptions<SignInMutation, SignInMutationVariables>;
export const SignOutDocument = gql`
    mutation SignOut {
  endSession
}
    `;
export type SignOutMutationFn = Apollo.MutationFunction<SignOutMutation, SignOutMutationVariables>;

/**
 * __useSignOutMutation__
 *
 * To run a mutation, you first call `useSignOutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignOutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signOutMutation, { data, loading, error }] = useSignOutMutation({
 *   variables: {
 *   },
 * });
 */
export function useSignOutMutation(baseOptions?: Apollo.MutationHookOptions<SignOutMutation, SignOutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignOutMutation, SignOutMutationVariables>(SignOutDocument, options);
      }
export type SignOutMutationHookResult = ReturnType<typeof useSignOutMutation>;
export type SignOutMutationResult = Apollo.MutationResult<SignOutMutation>;
export type SignOutMutationOptions = Apollo.BaseMutationOptions<SignOutMutation, SignOutMutationVariables>;
export const GetAllCategoriesDocument = gql`
    query GetAllCategories {
  categories {
    id
    name
  }
}
    `;

/**
 * __useGetAllCategoriesQuery__
 *
 * To run a query within a React component, call `useGetAllCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
      }
export function useGetAllCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>(GetAllCategoriesDocument, options);
        }
export type GetAllCategoriesQueryHookResult = ReturnType<typeof useGetAllCategoriesQuery>;
export type GetAllCategoriesLazyQueryHookResult = ReturnType<typeof useGetAllCategoriesLazyQuery>;
export type GetAllCategoriesQueryResult = Apollo.QueryResult<GetAllCategoriesQuery, GetAllCategoriesQueryVariables>;
export const GetAllIngredientsDocument = gql`
    query GetAllIngredients {
  ingredients {
    id
    name
    status
    category {
      id
      name
    }
    image {
      id
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
    `;

/**
 * __useGetAllIngredientsQuery__
 *
 * To run a query within a React component, call `useGetAllIngredientsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllIngredientsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllIngredientsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllIngredientsQuery(baseOptions?: Apollo.QueryHookOptions<GetAllIngredientsQuery, GetAllIngredientsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllIngredientsQuery, GetAllIngredientsQueryVariables>(GetAllIngredientsDocument, options);
      }
export function useGetAllIngredientsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllIngredientsQuery, GetAllIngredientsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllIngredientsQuery, GetAllIngredientsQueryVariables>(GetAllIngredientsDocument, options);
        }
export type GetAllIngredientsQueryHookResult = ReturnType<typeof useGetAllIngredientsQuery>;
export type GetAllIngredientsLazyQueryHookResult = ReturnType<typeof useGetAllIngredientsLazyQuery>;
export type GetAllIngredientsQueryResult = Apollo.QueryResult<GetAllIngredientsQuery, GetAllIngredientsQueryVariables>;
export const UpdateIngredientStatusDocument = gql`
    mutation UpdateIngredientStatus($id: ID!, $status: IngredientStatusType!) {
  updateIngredient(where: {id: $id}, data: {status: $status}) {
    id
    name
    status
    category {
      id
      name
    }
    image {
      id
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
    `;
export type UpdateIngredientStatusMutationFn = Apollo.MutationFunction<UpdateIngredientStatusMutation, UpdateIngredientStatusMutationVariables>;

/**
 * __useUpdateIngredientStatusMutation__
 *
 * To run a mutation, you first call `useUpdateIngredientStatusMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateIngredientStatusMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateIngredientStatusMutation, { data, loading, error }] = useUpdateIngredientStatusMutation({
 *   variables: {
 *      id: // value for 'id'
 *      status: // value for 'status'
 *   },
 * });
 */
export function useUpdateIngredientStatusMutation(baseOptions?: Apollo.MutationHookOptions<UpdateIngredientStatusMutation, UpdateIngredientStatusMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateIngredientStatusMutation, UpdateIngredientStatusMutationVariables>(UpdateIngredientStatusDocument, options);
      }
export type UpdateIngredientStatusMutationHookResult = ReturnType<typeof useUpdateIngredientStatusMutation>;
export type UpdateIngredientStatusMutationResult = Apollo.MutationResult<UpdateIngredientStatusMutation>;
export type UpdateIngredientStatusMutationOptions = Apollo.BaseMutationOptions<UpdateIngredientStatusMutation, UpdateIngredientStatusMutationVariables>;
export const GetAllRecipesDocument = gql`
    query GetAllRecipes {
  recipes {
    id
    name
    originalLink
    ingredientsCount
    image {
      id
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
    `;

/**
 * __useGetAllRecipesQuery__
 *
 * To run a query within a React component, call `useGetAllRecipesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllRecipesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllRecipesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllRecipesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllRecipesQuery, GetAllRecipesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllRecipesQuery, GetAllRecipesQueryVariables>(GetAllRecipesDocument, options);
      }
export function useGetAllRecipesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllRecipesQuery, GetAllRecipesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllRecipesQuery, GetAllRecipesQueryVariables>(GetAllRecipesDocument, options);
        }
export type GetAllRecipesQueryHookResult = ReturnType<typeof useGetAllRecipesQuery>;
export type GetAllRecipesLazyQueryHookResult = ReturnType<typeof useGetAllRecipesLazyQuery>;
export type GetAllRecipesQueryResult = Apollo.QueryResult<GetAllRecipesQuery, GetAllRecipesQueryVariables>;
export const GetRecipeDocument = gql`
    query GetRecipe($id: ID!) {
  recipe(where: {id: $id}) {
    id
    name
    originalLink
    instructions {
      document
    }
    ingredients {
      id
      name
      status
      category {
        id
        name
      }
      image {
        id
        image {
          publicUrlTransformed
        }
        altText
      }
    }
    image {
      id
      image {
        publicUrlTransformed
      }
      altText
    }
  }
}
    `;

/**
 * __useGetRecipeQuery__
 *
 * To run a query within a React component, call `useGetRecipeQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetRecipeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetRecipeQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetRecipeQuery(baseOptions: Apollo.QueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
      }
export function useGetRecipeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetRecipeQuery, GetRecipeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetRecipeQuery, GetRecipeQueryVariables>(GetRecipeDocument, options);
        }
export type GetRecipeQueryHookResult = ReturnType<typeof useGetRecipeQuery>;
export type GetRecipeLazyQueryHookResult = ReturnType<typeof useGetRecipeLazyQuery>;
export type GetRecipeQueryResult = Apollo.QueryResult<GetRecipeQuery, GetRecipeQueryVariables>;