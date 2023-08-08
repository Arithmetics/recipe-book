export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
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

export type BooleanFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<BooleanFilter>;
};

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID'];
  image?: Maybe<CloudImage>;
  name?: Maybe<Scalars['String']>;
  order?: Maybe<Scalars['Int']>;
};

export type CategoryCreateInput = {
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
  order?: InputMaybe<Scalars['Int']>;
};

export type CategoryOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  order?: InputMaybe<OrderDirection>;
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
  order?: InputMaybe<Scalars['Int']>;
};

export type CategoryWhereInput = {
  AND?: InputMaybe<Array<CategoryWhereInput>>;
  NOT?: InputMaybe<Array<CategoryWhereInput>>;
  OR?: InputMaybe<Array<CategoryWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  name?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntNullableFilter>;
};

export type CategoryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
  order?: InputMaybe<Scalars['Int']>;
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
  /**  Rewrites the filename to be this pretty string. Do not include `/` or `.` */
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
  key?: Maybe<Scalars['Boolean']>;
  name?: Maybe<Scalars['String']>;
  note?: Maybe<Scalars['String']>;
  onShoppingList?: Maybe<Scalars['Boolean']>;
  recipes?: Maybe<Array<Recipe>>;
  recipesCount?: Maybe<Scalars['Int']>;
  status?: Maybe<IngredientStatusType>;
};


export type IngredientRecipesArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
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
  key?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  onShoppingList?: InputMaybe<Scalars['Boolean']>;
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
  key?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  note?: InputMaybe<OrderDirection>;
  onShoppingList?: InputMaybe<OrderDirection>;
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
  key?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  note?: InputMaybe<Scalars['String']>;
  onShoppingList?: InputMaybe<Scalars['Boolean']>;
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
  key?: InputMaybe<BooleanFilter>;
  name?: InputMaybe<StringFilter>;
  note?: InputMaybe<StringFilter>;
  onShoppingList?: InputMaybe<BooleanFilter>;
  recipes?: InputMaybe<RecipeManyRelationFilter>;
  status?: InputMaybe<IngredientStatusTypeNullableFilter>;
};

export type IngredientWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
};

export type IntNullableFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<IntNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type KeystoneAdminMeta = {
  __typename?: 'KeystoneAdminMeta';
  list?: Maybe<KeystoneAdminUiListMeta>;
  lists: Array<KeystoneAdminUiListMeta>;
};


export type KeystoneAdminMetaListArgs = {
  key: Scalars['String'];
};

export type KeystoneAdminUiFieldGroupMeta = {
  __typename?: 'KeystoneAdminUIFieldGroupMeta';
  description?: Maybe<Scalars['String']>;
  fields: Array<KeystoneAdminUiFieldMeta>;
  label: Scalars['String'];
};

export type KeystoneAdminUiFieldMeta = {
  __typename?: 'KeystoneAdminUIFieldMeta';
  createView: KeystoneAdminUiFieldMetaCreateView;
  customViewsIndex?: Maybe<Scalars['Int']>;
  description?: Maybe<Scalars['String']>;
  fieldMeta?: Maybe<Scalars['JSON']>;
  isFilterable: Scalars['Boolean'];
  isNonNull?: Maybe<Array<KeystoneAdminUiFieldMetaIsNonNull>>;
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

export enum KeystoneAdminUiFieldMetaIsNonNull {
  Create = 'create',
  Read = 'read',
  Update = 'update'
}

export type KeystoneAdminUiFieldMetaItemView = {
  __typename?: 'KeystoneAdminUIFieldMetaItemView';
  fieldMode?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldMode>;
  fieldPosition?: Maybe<KeystoneAdminUiFieldMetaItemViewFieldPosition>;
};

export enum KeystoneAdminUiFieldMetaItemViewFieldMode {
  Edit = 'edit',
  Hidden = 'hidden',
  Read = 'read'
}

export enum KeystoneAdminUiFieldMetaItemViewFieldPosition {
  Form = 'form',
  Sidebar = 'sidebar'
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
  groups: Array<KeystoneAdminUiFieldGroupMeta>;
  hideCreate: Scalars['Boolean'];
  hideDelete: Scalars['Boolean'];
  initialColumns: Array<Scalars['String']>;
  initialSort?: Maybe<KeystoneAdminUiSort>;
  isHidden: Scalars['Boolean'];
  isSingleton: Scalars['Boolean'];
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
  createRecipeToTries?: Maybe<Array<Maybe<RecipeToTry>>>;
  createRecipeToTry?: Maybe<RecipeToTry>;
  createRecipes?: Maybe<Array<Maybe<Recipe>>>;
  createTag?: Maybe<Tag>;
  createTags?: Maybe<Array<Maybe<Tag>>>;
  createUser?: Maybe<User>;
  createUsers?: Maybe<Array<Maybe<User>>>;
  deleteCategories?: Maybe<Array<Maybe<Category>>>;
  deleteCategory?: Maybe<Category>;
  deleteCloudImage?: Maybe<CloudImage>;
  deleteCloudImages?: Maybe<Array<Maybe<CloudImage>>>;
  deleteIngredient?: Maybe<Ingredient>;
  deleteIngredients?: Maybe<Array<Maybe<Ingredient>>>;
  deleteRecipe?: Maybe<Recipe>;
  deleteRecipeToTries?: Maybe<Array<Maybe<RecipeToTry>>>;
  deleteRecipeToTry?: Maybe<RecipeToTry>;
  deleteRecipes?: Maybe<Array<Maybe<Recipe>>>;
  deleteTag?: Maybe<Tag>;
  deleteTags?: Maybe<Array<Maybe<Tag>>>;
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
  updateRecipeToTries?: Maybe<Array<Maybe<RecipeToTry>>>;
  updateRecipeToTry?: Maybe<RecipeToTry>;
  updateRecipes?: Maybe<Array<Maybe<Recipe>>>;
  updateTag?: Maybe<Tag>;
  updateTags?: Maybe<Array<Maybe<Tag>>>;
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


export type MutationCreateRecipeToTriesArgs = {
  data: Array<RecipeToTryCreateInput>;
};


export type MutationCreateRecipeToTryArgs = {
  data: RecipeToTryCreateInput;
};


export type MutationCreateRecipesArgs = {
  data: Array<RecipeCreateInput>;
};


export type MutationCreateTagArgs = {
  data: TagCreateInput;
};


export type MutationCreateTagsArgs = {
  data: Array<TagCreateInput>;
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


export type MutationDeleteRecipeToTriesArgs = {
  where: Array<RecipeToTryWhereUniqueInput>;
};


export type MutationDeleteRecipeToTryArgs = {
  where: RecipeToTryWhereUniqueInput;
};


export type MutationDeleteRecipesArgs = {
  where: Array<RecipeWhereUniqueInput>;
};


export type MutationDeleteTagArgs = {
  where: TagWhereUniqueInput;
};


export type MutationDeleteTagsArgs = {
  where: Array<TagWhereUniqueInput>;
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


export type MutationUpdateRecipeToTriesArgs = {
  data: Array<RecipeToTryUpdateArgs>;
};


export type MutationUpdateRecipeToTryArgs = {
  data: RecipeToTryUpdateInput;
  where: RecipeToTryWhereUniqueInput;
};


export type MutationUpdateRecipesArgs = {
  data: Array<RecipeUpdateArgs>;
};


export type MutationUpdateTagArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};


export type MutationUpdateTagsArgs = {
  data: Array<TagUpdateArgs>;
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
  recipeToTries?: Maybe<Array<RecipeToTry>>;
  recipeToTriesCount?: Maybe<Scalars['Int']>;
  recipeToTry?: Maybe<RecipeToTry>;
  recipes?: Maybe<Array<Recipe>>;
  recipesCount?: Maybe<Scalars['Int']>;
  tag?: Maybe<Tag>;
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
  user?: Maybe<User>;
  users?: Maybe<Array<User>>;
  usersCount?: Maybe<Scalars['Int']>;
};


export type QueryCategoriesArgs = {
  cursor?: InputMaybe<CategoryWhereUniqueInput>;
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
  cursor?: InputMaybe<CloudImageWhereUniqueInput>;
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
  cursor?: InputMaybe<IngredientWhereUniqueInput>;
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


export type QueryRecipeToTriesArgs = {
  cursor?: InputMaybe<RecipeToTryWhereUniqueInput>;
  orderBy?: Array<RecipeToTryOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RecipeToTryWhereInput;
};


export type QueryRecipeToTriesCountArgs = {
  where?: RecipeToTryWhereInput;
};


export type QueryRecipeToTryArgs = {
  where: RecipeToTryWhereUniqueInput;
};


export type QueryRecipesArgs = {
  cursor?: InputMaybe<RecipeWhereUniqueInput>;
  orderBy?: Array<RecipeOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: RecipeWhereInput;
};


export type QueryRecipesCountArgs = {
  where?: RecipeWhereInput;
};


export type QueryTagArgs = {
  where: TagWhereUniqueInput;
};


export type QueryTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type QueryTagsCountArgs = {
  where?: TagWhereInput;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
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
  tags?: Maybe<Array<Tag>>;
  tagsCount?: Maybe<Scalars['Int']>;
};


export type RecipeIngredientsArgs = {
  cursor?: InputMaybe<IngredientWhereUniqueInput>;
  orderBy?: Array<IngredientOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: IngredientWhereInput;
};


export type RecipeIngredientsCountArgs = {
  where?: IngredientWhereInput;
};


export type RecipeTagsArgs = {
  cursor?: InputMaybe<TagWhereUniqueInput>;
  orderBy?: Array<TagOrderByInput>;
  skip?: Scalars['Int'];
  take?: InputMaybe<Scalars['Int']>;
  where?: TagWhereInput;
};


export type RecipeTagsCountArgs = {
  where?: TagWhereInput;
};

export type RecipeCreateInput = {
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  ingredients?: InputMaybe<IngredientRelateToManyForCreateInput>;
  instructions?: InputMaybe<Scalars['JSON']>;
  name?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<TagRelateToManyForCreateInput>;
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

export type RecipeToTry = {
  __typename?: 'RecipeToTry';
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  originalLink?: Maybe<Scalars['String']>;
};

export type RecipeToTryCreateInput = {
  name?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
};

export type RecipeToTryOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
  originalLink?: InputMaybe<OrderDirection>;
};

export type RecipeToTryUpdateArgs = {
  data: RecipeToTryUpdateInput;
  where: RecipeToTryWhereUniqueInput;
};

export type RecipeToTryUpdateInput = {
  name?: InputMaybe<Scalars['String']>;
  originalLink?: InputMaybe<Scalars['String']>;
};

export type RecipeToTryWhereInput = {
  AND?: InputMaybe<Array<RecipeToTryWhereInput>>;
  NOT?: InputMaybe<Array<RecipeToTryWhereInput>>;
  OR?: InputMaybe<Array<RecipeToTryWhereInput>>;
  id?: InputMaybe<IdFilter>;
  name?: InputMaybe<StringFilter>;
  originalLink?: InputMaybe<StringFilter>;
};

export type RecipeToTryWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
  tags?: InputMaybe<TagRelateToManyForUpdateInput>;
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
  tags?: InputMaybe<TagManyRelationFilter>;
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

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['ID'];
  image?: Maybe<CloudImage>;
  name?: Maybe<Scalars['String']>;
};

export type TagCreateInput = {
  image?: InputMaybe<CloudImageRelateToOneForCreateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type TagManyRelationFilter = {
  every?: InputMaybe<TagWhereInput>;
  none?: InputMaybe<TagWhereInput>;
  some?: InputMaybe<TagWhereInput>;
};

export type TagOrderByInput = {
  id?: InputMaybe<OrderDirection>;
  name?: InputMaybe<OrderDirection>;
};

export type TagRelateToManyForCreateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
};

export type TagRelateToManyForUpdateInput = {
  connect?: InputMaybe<Array<TagWhereUniqueInput>>;
  create?: InputMaybe<Array<TagCreateInput>>;
  disconnect?: InputMaybe<Array<TagWhereUniqueInput>>;
  set?: InputMaybe<Array<TagWhereUniqueInput>>;
};

export type TagUpdateArgs = {
  data: TagUpdateInput;
  where: TagWhereUniqueInput;
};

export type TagUpdateInput = {
  image?: InputMaybe<CloudImageRelateToOneForUpdateInput>;
  name?: InputMaybe<Scalars['String']>;
};

export type TagWhereInput = {
  AND?: InputMaybe<Array<TagWhereInput>>;
  NOT?: InputMaybe<Array<TagWhereInput>>;
  OR?: InputMaybe<Array<TagWhereInput>>;
  id?: InputMaybe<IdFilter>;
  image?: InputMaybe<CloudImageWhereInput>;
  name?: InputMaybe<StringFilter>;
};

export type TagWhereUniqueInput = {
  id?: InputMaybe<Scalars['ID']>;
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
