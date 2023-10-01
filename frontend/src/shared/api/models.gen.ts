export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
  DateTime: { input: any; output: any; }
  JSON: { input: any; output: any; }
  Upload: { input: any; output: any; }
};

export type BooleanFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Boolean']['input']>;
  readonly containsi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Boolean']['input']>;
  readonly eq?: InputMaybe<Scalars['Boolean']['input']>;
  readonly eqi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly gte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Boolean']['input']>;
  readonly lte?: InputMaybe<Scalars['Boolean']['input']>;
  readonly ne?: InputMaybe<Scalars['Boolean']['input']>;
  readonly not?: InputMaybe<BooleanFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Boolean']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Boolean']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Boolean']['input']>;
};

export type DateTimeFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly contains?: InputMaybe<Scalars['DateTime']['input']>;
  readonly containsi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly endsWith?: InputMaybe<Scalars['DateTime']['input']>;
  readonly eq?: InputMaybe<Scalars['DateTime']['input']>;
  readonly eqi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly gte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly lt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly lte?: InputMaybe<Scalars['DateTime']['input']>;
  readonly ne?: InputMaybe<Scalars['DateTime']['input']>;
  readonly not?: InputMaybe<DateTimeFilterInput>;
  readonly notContains?: InputMaybe<Scalars['DateTime']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['DateTime']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['DateTime']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['DateTime']['input']>;
};

export type FileInfoInput = {
  readonly alternativeText?: InputMaybe<Scalars['String']['input']>;
  readonly caption?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
};

export type FloatFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Float']['input']>;
  readonly containsi?: InputMaybe<Scalars['Float']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Float']['input']>;
  readonly eq?: InputMaybe<Scalars['Float']['input']>;
  readonly eqi?: InputMaybe<Scalars['Float']['input']>;
  readonly gt?: InputMaybe<Scalars['Float']['input']>;
  readonly gte?: InputMaybe<Scalars['Float']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Float']['input']>;
  readonly lte?: InputMaybe<Scalars['Float']['input']>;
  readonly ne?: InputMaybe<Scalars['Float']['input']>;
  readonly not?: InputMaybe<FloatFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Float']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Float']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Float']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Float']['input']>;
};

export type Game = {
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly histrories?: Maybe<GameHistroryRelationResponseCollection>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly preview?: Maybe<UploadFileRelationResponseCollection>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type GameHistroriesArgs = {
  filters?: InputMaybe<GameHistroryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type GamePreviewArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type GameEntity = {
  readonly attributes?: Maybe<Game>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type GameEntityResponse = {
  readonly data?: Maybe<GameEntity>;
};

export type GameEntityResponseCollection = {
  readonly data: ReadonlyArray<GameEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type GameFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<GameFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly histrories?: InputMaybe<GameHistroryFiltersInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<GameFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<GameFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type GameHistrory = {
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly game?: Maybe<GameEntityResponse>;
  readonly isWin?: Maybe<Scalars['Boolean']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly result?: Maybe<Scalars['JSON']['output']>;
  readonly score?: Maybe<Scalars['Int']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly user?: Maybe<UsersPermissionsUserEntityResponse>;
};

export type GameHistroryEntity = {
  readonly attributes?: Maybe<GameHistrory>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type GameHistroryEntityResponse = {
  readonly data?: Maybe<GameHistroryEntity>;
};

export type GameHistroryEntityResponseCollection = {
  readonly data: ReadonlyArray<GameHistroryEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type GameHistroryFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<GameHistroryFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly game?: InputMaybe<GameFiltersInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly isWin?: InputMaybe<BooleanFilterInput>;
  readonly not?: InputMaybe<GameHistroryFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<GameHistroryFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly result?: InputMaybe<JsonFilterInput>;
  readonly score?: InputMaybe<IntFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly user?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type GameHistroryInput = {
  readonly game?: InputMaybe<Scalars['ID']['input']>;
  readonly isWin?: InputMaybe<Scalars['Boolean']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly result?: InputMaybe<Scalars['JSON']['input']>;
  readonly score?: InputMaybe<Scalars['Int']['input']>;
  readonly user?: InputMaybe<Scalars['ID']['input']>;
};

export type GameHistroryRelationResponseCollection = {
  readonly data: ReadonlyArray<GameHistroryEntity>;
};

export type GameInput = {
  readonly histrories?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly preview?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
};

export type GenericMorph = Game | GameHistrory | I18NLocale | School | UploadFile | UploadFolder | UsersPermissionsPermission | UsersPermissionsRole | UsersPermissionsUser;

export type I18NLocale = {
  readonly code?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type I18NLocaleEntity = {
  readonly attributes?: Maybe<I18NLocale>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type I18NLocaleEntityResponse = {
  readonly data?: Maybe<I18NLocaleEntity>;
};

export type I18NLocaleEntityResponseCollection = {
  readonly data: ReadonlyArray<I18NLocaleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type I18NLocaleFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly code?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<I18NLocaleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<I18NLocaleFiltersInput>>>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type IdFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly contains?: InputMaybe<Scalars['ID']['input']>;
  readonly containsi?: InputMaybe<Scalars['ID']['input']>;
  readonly endsWith?: InputMaybe<Scalars['ID']['input']>;
  readonly eq?: InputMaybe<Scalars['ID']['input']>;
  readonly eqi?: InputMaybe<Scalars['ID']['input']>;
  readonly gt?: InputMaybe<Scalars['ID']['input']>;
  readonly gte?: InputMaybe<Scalars['ID']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly lt?: InputMaybe<Scalars['ID']['input']>;
  readonly lte?: InputMaybe<Scalars['ID']['input']>;
  readonly ne?: InputMaybe<Scalars['ID']['input']>;
  readonly not?: InputMaybe<IdFilterInput>;
  readonly notContains?: InputMaybe<Scalars['ID']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['ID']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['ID']['input']>;
};

export type IntFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly contains?: InputMaybe<Scalars['Int']['input']>;
  readonly containsi?: InputMaybe<Scalars['Int']['input']>;
  readonly endsWith?: InputMaybe<Scalars['Int']['input']>;
  readonly eq?: InputMaybe<Scalars['Int']['input']>;
  readonly eqi?: InputMaybe<Scalars['Int']['input']>;
  readonly gt?: InputMaybe<Scalars['Int']['input']>;
  readonly gte?: InputMaybe<Scalars['Int']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly lt?: InputMaybe<Scalars['Int']['input']>;
  readonly lte?: InputMaybe<Scalars['Int']['input']>;
  readonly ne?: InputMaybe<Scalars['Int']['input']>;
  readonly not?: InputMaybe<IntFilterInput>;
  readonly notContains?: InputMaybe<Scalars['Int']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['Int']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['Int']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['Int']['input']>;
};

export type JsonFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly contains?: InputMaybe<Scalars['JSON']['input']>;
  readonly containsi?: InputMaybe<Scalars['JSON']['input']>;
  readonly endsWith?: InputMaybe<Scalars['JSON']['input']>;
  readonly eq?: InputMaybe<Scalars['JSON']['input']>;
  readonly eqi?: InputMaybe<Scalars['JSON']['input']>;
  readonly gt?: InputMaybe<Scalars['JSON']['input']>;
  readonly gte?: InputMaybe<Scalars['JSON']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly lt?: InputMaybe<Scalars['JSON']['input']>;
  readonly lte?: InputMaybe<Scalars['JSON']['input']>;
  readonly ne?: InputMaybe<Scalars['JSON']['input']>;
  readonly not?: InputMaybe<JsonFilterInput>;
  readonly notContains?: InputMaybe<Scalars['JSON']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['JSON']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['JSON']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['JSON']['input']>;
};

export type Mutation = {
  /** Change user password. Confirm with the current password. */
  readonly changePassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly createGame?: Maybe<GameEntityResponse>;
  readonly createGameHistrory?: Maybe<GameHistroryEntityResponse>;
  readonly createSchool?: Maybe<SchoolEntityResponse>;
  readonly createUploadFile?: Maybe<UploadFileEntityResponse>;
  readonly createUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Create a new role */
  readonly createUsersPermissionsRole?: Maybe<UsersPermissionsCreateRolePayload>;
  /** Create a new user */
  readonly createUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly deleteGame?: Maybe<GameEntityResponse>;
  readonly deleteGameHistrory?: Maybe<GameHistroryEntityResponse>;
  readonly deleteSchool?: Maybe<SchoolEntityResponse>;
  readonly deleteUploadFile?: Maybe<UploadFileEntityResponse>;
  readonly deleteUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Delete an existing role */
  readonly deleteUsersPermissionsRole?: Maybe<UsersPermissionsDeleteRolePayload>;
  /** Delete an existing user */
  readonly deleteUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  /** Confirm an email users email address */
  readonly emailConfirmation?: Maybe<UsersPermissionsLoginPayload>;
  /** Request a reset password token */
  readonly forgotPassword?: Maybe<UsersPermissionsPasswordPayload>;
  readonly login: UsersPermissionsLoginPayload;
  readonly multipleUpload: ReadonlyArray<Maybe<UploadFileEntityResponse>>;
  /** Register a user */
  readonly register: UsersPermissionsLoginPayload;
  readonly removeFile?: Maybe<UploadFileEntityResponse>;
  /** Reset user password. Confirm with a code (resetToken from forgotPassword) */
  readonly resetPassword?: Maybe<UsersPermissionsLoginPayload>;
  readonly updateFileInfo: UploadFileEntityResponse;
  readonly updateGame?: Maybe<GameEntityResponse>;
  readonly updateGameHistrory?: Maybe<GameHistroryEntityResponse>;
  readonly updateSchool?: Maybe<SchoolEntityResponse>;
  readonly updateUploadFile?: Maybe<UploadFileEntityResponse>;
  readonly updateUploadFolder?: Maybe<UploadFolderEntityResponse>;
  /** Update an existing role */
  readonly updateUsersPermissionsRole?: Maybe<UsersPermissionsUpdateRolePayload>;
  /** Update an existing user */
  readonly updateUsersPermissionsUser: UsersPermissionsUserEntityResponse;
  readonly upload: UploadFileEntityResponse;
};


export type MutationChangePasswordArgs = {
  currentPassword: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationCreateGameArgs = {
  data: GameInput;
};


export type MutationCreateGameHistroryArgs = {
  data: GameHistroryInput;
};


export type MutationCreateSchoolArgs = {
  data: SchoolInput;
};


export type MutationCreateUploadFileArgs = {
  data: UploadFileInput;
};


export type MutationCreateUploadFolderArgs = {
  data: UploadFolderInput;
};


export type MutationCreateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
};


export type MutationCreateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
};


export type MutationDeleteGameArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteGameHistroryArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteSchoolArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUploadFolderArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsRoleArgs = {
  id: Scalars['ID']['input'];
};


export type MutationDeleteUsersPermissionsUserArgs = {
  id: Scalars['ID']['input'];
};


export type MutationEmailConfirmationArgs = {
  confirmation: Scalars['String']['input'];
};


export type MutationForgotPasswordArgs = {
  email: Scalars['String']['input'];
};


export type MutationLoginArgs = {
  input: UsersPermissionsLoginInput;
};


export type MutationMultipleUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  files: ReadonlyArray<InputMaybe<Scalars['Upload']['input']>>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};


export type MutationRegisterArgs = {
  input: UsersPermissionsRegisterInput;
};


export type MutationRemoveFileArgs = {
  id: Scalars['ID']['input'];
};


export type MutationResetPasswordArgs = {
  code: Scalars['String']['input'];
  password: Scalars['String']['input'];
  passwordConfirmation: Scalars['String']['input'];
};


export type MutationUpdateFileInfoArgs = {
  id: Scalars['ID']['input'];
  info?: InputMaybe<FileInfoInput>;
};


export type MutationUpdateGameArgs = {
  data: GameInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateGameHistroryArgs = {
  data: GameHistroryInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateSchoolArgs = {
  data: SchoolInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFileArgs = {
  data: UploadFileInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUploadFolderArgs = {
  data: UploadFolderInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsRoleArgs = {
  data: UsersPermissionsRoleInput;
  id: Scalars['ID']['input'];
};


export type MutationUpdateUsersPermissionsUserArgs = {
  data: UsersPermissionsUserInput;
  id: Scalars['ID']['input'];
};


export type MutationUploadArgs = {
  field?: InputMaybe<Scalars['String']['input']>;
  file: Scalars['Upload']['input'];
  info?: InputMaybe<FileInfoInput>;
  ref?: InputMaybe<Scalars['String']['input']>;
  refId?: InputMaybe<Scalars['ID']['input']>;
};

export type Pagination = {
  readonly page: Scalars['Int']['output'];
  readonly pageCount: Scalars['Int']['output'];
  readonly pageSize: Scalars['Int']['output'];
  readonly total: Scalars['Int']['output'];
};

export type PaginationArg = {
  readonly limit?: InputMaybe<Scalars['Int']['input']>;
  readonly page?: InputMaybe<Scalars['Int']['input']>;
  readonly pageSize?: InputMaybe<Scalars['Int']['input']>;
  readonly start?: InputMaybe<Scalars['Int']['input']>;
};

export enum PublicationState {
  Live = 'LIVE',
  Preview = 'PREVIEW'
}

export type Query = {
  readonly game?: Maybe<GameEntityResponse>;
  readonly gameHistrories?: Maybe<GameHistroryEntityResponseCollection>;
  readonly gameHistrory?: Maybe<GameHistroryEntityResponse>;
  readonly games?: Maybe<GameEntityResponseCollection>;
  readonly i18NLocale?: Maybe<I18NLocaleEntityResponse>;
  readonly i18NLocales?: Maybe<I18NLocaleEntityResponseCollection>;
  readonly me?: Maybe<UsersPermissionsMe>;
  readonly school?: Maybe<SchoolEntityResponse>;
  readonly schools?: Maybe<SchoolEntityResponseCollection>;
  readonly uploadFile?: Maybe<UploadFileEntityResponse>;
  readonly uploadFiles?: Maybe<UploadFileEntityResponseCollection>;
  readonly uploadFolder?: Maybe<UploadFolderEntityResponse>;
  readonly uploadFolders?: Maybe<UploadFolderEntityResponseCollection>;
  readonly usersPermissionsRole?: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly usersPermissionsRoles?: Maybe<UsersPermissionsRoleEntityResponseCollection>;
  readonly usersPermissionsUser?: Maybe<UsersPermissionsUserEntityResponse>;
  readonly usersPermissionsUsers?: Maybe<UsersPermissionsUserEntityResponseCollection>;
};


export type QueryGameArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGameHistroriesArgs = {
  filters?: InputMaybe<GameHistroryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryGameHistroryArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryGamesArgs = {
  filters?: InputMaybe<GameFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryI18NLocaleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryI18NLocalesArgs = {
  filters?: InputMaybe<I18NLocaleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QuerySchoolArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QuerySchoolsArgs = {
  filters?: InputMaybe<SchoolFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFileArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUploadFolderArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUploadFoldersArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsRoleArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsRolesArgs = {
  filters?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type QueryUsersPermissionsUserArgs = {
  id?: InputMaybe<Scalars['ID']['input']>;
};


export type QueryUsersPermissionsUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type ResponseCollectionMeta = {
  readonly pagination: Pagination;
};

export type School = {
  readonly about?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly gallery?: Maybe<UploadFileRelationResponseCollection>;
  readonly logo?: Maybe<UploadFileEntityResponse>;
  readonly name?: Maybe<Scalars['String']['output']>;
  readonly publishedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type SchoolGalleryArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type SchoolUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type SchoolEntity = {
  readonly attributes?: Maybe<School>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type SchoolEntityResponse = {
  readonly data?: Maybe<SchoolEntity>;
};

export type SchoolEntityResponseCollection = {
  readonly data: ReadonlyArray<SchoolEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type SchoolFiltersInput = {
  readonly about?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<SchoolFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<SchoolFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<SchoolFiltersInput>>>;
  readonly publishedAt?: InputMaybe<DateTimeFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type SchoolInput = {
  readonly about?: InputMaybe<Scalars['String']['input']>;
  readonly gallery?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly logo?: InputMaybe<Scalars['ID']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly publishedAt?: InputMaybe<Scalars['DateTime']['input']>;
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type StringFilterInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly between?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly contains?: InputMaybe<Scalars['String']['input']>;
  readonly containsi?: InputMaybe<Scalars['String']['input']>;
  readonly endsWith?: InputMaybe<Scalars['String']['input']>;
  readonly eq?: InputMaybe<Scalars['String']['input']>;
  readonly eqi?: InputMaybe<Scalars['String']['input']>;
  readonly gt?: InputMaybe<Scalars['String']['input']>;
  readonly gte?: InputMaybe<Scalars['String']['input']>;
  readonly in?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly lt?: InputMaybe<Scalars['String']['input']>;
  readonly lte?: InputMaybe<Scalars['String']['input']>;
  readonly ne?: InputMaybe<Scalars['String']['input']>;
  readonly not?: InputMaybe<StringFilterInput>;
  readonly notContains?: InputMaybe<Scalars['String']['input']>;
  readonly notContainsi?: InputMaybe<Scalars['String']['input']>;
  readonly notIn?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly notNull?: InputMaybe<Scalars['Boolean']['input']>;
  readonly null?: InputMaybe<Scalars['Boolean']['input']>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
  readonly startsWith?: InputMaybe<Scalars['String']['input']>;
};

export type UploadFile = {
  readonly alternativeText?: Maybe<Scalars['String']['output']>;
  readonly caption?: Maybe<Scalars['String']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly ext?: Maybe<Scalars['String']['output']>;
  readonly formats?: Maybe<Scalars['JSON']['output']>;
  readonly hash: Scalars['String']['output'];
  readonly height?: Maybe<Scalars['Int']['output']>;
  readonly mime: Scalars['String']['output'];
  readonly name: Scalars['String']['output'];
  readonly previewUrl?: Maybe<Scalars['String']['output']>;
  readonly provider: Scalars['String']['output'];
  readonly provider_metadata?: Maybe<Scalars['JSON']['output']>;
  readonly related?: Maybe<ReadonlyArray<Maybe<GenericMorph>>>;
  readonly size: Scalars['Float']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly url: Scalars['String']['output'];
  readonly width?: Maybe<Scalars['Int']['output']>;
};

export type UploadFileEntity = {
  readonly attributes?: Maybe<UploadFile>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFileEntityResponse = {
  readonly data?: Maybe<UploadFileEntity>;
};

export type UploadFileEntityResponseCollection = {
  readonly data: ReadonlyArray<UploadFileEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFileFiltersInput = {
  readonly alternativeText?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly caption?: InputMaybe<StringFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly ext?: InputMaybe<StringFilterInput>;
  readonly folder?: InputMaybe<UploadFolderFiltersInput>;
  readonly folderPath?: InputMaybe<StringFilterInput>;
  readonly formats?: InputMaybe<JsonFilterInput>;
  readonly hash?: InputMaybe<StringFilterInput>;
  readonly height?: InputMaybe<IntFilterInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly mime?: InputMaybe<StringFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UploadFileFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UploadFileFiltersInput>>>;
  readonly previewUrl?: InputMaybe<StringFilterInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly provider_metadata?: InputMaybe<JsonFilterInput>;
  readonly size?: InputMaybe<FloatFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly url?: InputMaybe<StringFilterInput>;
  readonly width?: InputMaybe<IntFilterInput>;
};

export type UploadFileInput = {
  readonly alternativeText?: InputMaybe<Scalars['String']['input']>;
  readonly caption?: InputMaybe<Scalars['String']['input']>;
  readonly ext?: InputMaybe<Scalars['String']['input']>;
  readonly folder?: InputMaybe<Scalars['ID']['input']>;
  readonly folderPath?: InputMaybe<Scalars['String']['input']>;
  readonly formats?: InputMaybe<Scalars['JSON']['input']>;
  readonly hash?: InputMaybe<Scalars['String']['input']>;
  readonly height?: InputMaybe<Scalars['Int']['input']>;
  readonly mime?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly previewUrl?: InputMaybe<Scalars['String']['input']>;
  readonly provider?: InputMaybe<Scalars['String']['input']>;
  readonly provider_metadata?: InputMaybe<Scalars['JSON']['input']>;
  readonly size?: InputMaybe<Scalars['Float']['input']>;
  readonly url?: InputMaybe<Scalars['String']['input']>;
  readonly width?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFileRelationResponseCollection = {
  readonly data: ReadonlyArray<UploadFileEntity>;
};

export type UploadFolder = {
  readonly children?: Maybe<UploadFolderRelationResponseCollection>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly files?: Maybe<UploadFileRelationResponseCollection>;
  readonly name: Scalars['String']['output'];
  readonly parent?: Maybe<UploadFolderEntityResponse>;
  readonly path: Scalars['String']['output'];
  readonly pathId: Scalars['Int']['output'];
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};


export type UploadFolderChildrenArgs = {
  filters?: InputMaybe<UploadFolderFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UploadFolderFilesArgs = {
  filters?: InputMaybe<UploadFileFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UploadFolderEntity = {
  readonly attributes?: Maybe<UploadFolder>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type UploadFolderEntityResponse = {
  readonly data?: Maybe<UploadFolderEntity>;
};

export type UploadFolderEntityResponseCollection = {
  readonly data: ReadonlyArray<UploadFolderEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UploadFolderFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly children?: InputMaybe<UploadFolderFiltersInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly files?: InputMaybe<UploadFileFiltersInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UploadFolderFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UploadFolderFiltersInput>>>;
  readonly parent?: InputMaybe<UploadFolderFiltersInput>;
  readonly path?: InputMaybe<StringFilterInput>;
  readonly pathId?: InputMaybe<IntFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UploadFolderInput = {
  readonly children?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly files?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly parent?: InputMaybe<Scalars['ID']['input']>;
  readonly path?: InputMaybe<Scalars['String']['input']>;
  readonly pathId?: InputMaybe<Scalars['Int']['input']>;
};

export type UploadFolderRelationResponseCollection = {
  readonly data: ReadonlyArray<UploadFolderEntity>;
};

export type UsersPermissionsCreateRolePayload = {
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsDeleteRolePayload = {
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsLoginInput = {
  readonly identifier: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly provider?: Scalars['String']['input'];
};

export type UsersPermissionsLoginPayload = {
  readonly jwt?: Maybe<Scalars['String']['output']>;
  readonly user: UsersPermissionsMe;
};

export type UsersPermissionsMe = {
  readonly blocked?: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed?: Maybe<Scalars['Boolean']['output']>;
  readonly email?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly role?: Maybe<UsersPermissionsMeRole>;
  readonly username: Scalars['String']['output'];
};

export type UsersPermissionsMeRole = {
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly id: Scalars['ID']['output'];
  readonly name: Scalars['String']['output'];
  readonly type?: Maybe<Scalars['String']['output']>;
};

export type UsersPermissionsPasswordPayload = {
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsPermission = {
  readonly action: Scalars['String']['output'];
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly role?: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
};

export type UsersPermissionsPermissionEntity = {
  readonly attributes?: Maybe<UsersPermissionsPermission>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsPermissionFiltersInput = {
  readonly action?: InputMaybe<StringFilterInput>;
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsPermissionFiltersInput>>>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
};

export type UsersPermissionsPermissionRelationResponseCollection = {
  readonly data: ReadonlyArray<UsersPermissionsPermissionEntity>;
};

export type UsersPermissionsRegisterInput = {
  readonly email: Scalars['String']['input'];
  readonly password: Scalars['String']['input'];
  readonly username: Scalars['String']['input'];
};

export type UsersPermissionsRole = {
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly description?: Maybe<Scalars['String']['output']>;
  readonly name: Scalars['String']['output'];
  readonly permissions?: Maybe<UsersPermissionsPermissionRelationResponseCollection>;
  readonly type?: Maybe<Scalars['String']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly users?: Maybe<UsersPermissionsUserRelationResponseCollection>;
};


export type UsersPermissionsRolePermissionsArgs = {
  filters?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};


export type UsersPermissionsRoleUsersArgs = {
  filters?: InputMaybe<UsersPermissionsUserFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsRoleEntity = {
  readonly attributes?: Maybe<UsersPermissionsRole>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsRoleEntityResponse = {
  readonly data?: Maybe<UsersPermissionsRoleEntity>;
};

export type UsersPermissionsRoleEntityResponseCollection = {
  readonly data: ReadonlyArray<UsersPermissionsRoleEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsRoleFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly description?: InputMaybe<StringFilterInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly name?: InputMaybe<StringFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsRoleFiltersInput>>>;
  readonly permissions?: InputMaybe<UsersPermissionsPermissionFiltersInput>;
  readonly type?: InputMaybe<StringFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly users?: InputMaybe<UsersPermissionsUserFiltersInput>;
};

export type UsersPermissionsRoleInput = {
  readonly description?: InputMaybe<Scalars['String']['input']>;
  readonly name?: InputMaybe<Scalars['String']['input']>;
  readonly permissions?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly type?: InputMaybe<Scalars['String']['input']>;
  readonly users?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
};

export type UsersPermissionsUpdateRolePayload = {
  readonly ok: Scalars['Boolean']['output'];
};

export type UsersPermissionsUser = {
  readonly blocked?: Maybe<Scalars['Boolean']['output']>;
  readonly confirmed?: Maybe<Scalars['Boolean']['output']>;
  readonly createdAt?: Maybe<Scalars['DateTime']['output']>;
  readonly email: Scalars['String']['output'];
  readonly game_histrories?: Maybe<GameHistroryRelationResponseCollection>;
  readonly provider?: Maybe<Scalars['String']['output']>;
  readonly role?: Maybe<UsersPermissionsRoleEntityResponse>;
  readonly score?: Maybe<Scalars['Int']['output']>;
  readonly updatedAt?: Maybe<Scalars['DateTime']['output']>;
  readonly username: Scalars['String']['output'];
};


export type UsersPermissionsUserGame_HistroriesArgs = {
  filters?: InputMaybe<GameHistroryFiltersInput>;
  pagination?: InputMaybe<PaginationArg>;
  publicationState?: InputMaybe<PublicationState>;
  sort?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['String']['input']>>>;
};

export type UsersPermissionsUserEntity = {
  readonly attributes?: Maybe<UsersPermissionsUser>;
  readonly id?: Maybe<Scalars['ID']['output']>;
};

export type UsersPermissionsUserEntityResponse = {
  readonly data?: Maybe<UsersPermissionsUserEntity>;
};

export type UsersPermissionsUserEntityResponseCollection = {
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
  readonly meta: ResponseCollectionMeta;
};

export type UsersPermissionsUserFiltersInput = {
  readonly and?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly blocked?: InputMaybe<BooleanFilterInput>;
  readonly confirmationToken?: InputMaybe<StringFilterInput>;
  readonly confirmed?: InputMaybe<BooleanFilterInput>;
  readonly createdAt?: InputMaybe<DateTimeFilterInput>;
  readonly email?: InputMaybe<StringFilterInput>;
  readonly game_histrories?: InputMaybe<GameHistroryFiltersInput>;
  readonly id?: InputMaybe<IdFilterInput>;
  readonly not?: InputMaybe<UsersPermissionsUserFiltersInput>;
  readonly or?: InputMaybe<ReadonlyArray<InputMaybe<UsersPermissionsUserFiltersInput>>>;
  readonly password?: InputMaybe<StringFilterInput>;
  readonly provider?: InputMaybe<StringFilterInput>;
  readonly resetPasswordToken?: InputMaybe<StringFilterInput>;
  readonly role?: InputMaybe<UsersPermissionsRoleFiltersInput>;
  readonly score?: InputMaybe<IntFilterInput>;
  readonly updatedAt?: InputMaybe<DateTimeFilterInput>;
  readonly username?: InputMaybe<StringFilterInput>;
};

export type UsersPermissionsUserInput = {
  readonly blocked?: InputMaybe<Scalars['Boolean']['input']>;
  readonly confirmationToken?: InputMaybe<Scalars['String']['input']>;
  readonly confirmed?: InputMaybe<Scalars['Boolean']['input']>;
  readonly email?: InputMaybe<Scalars['String']['input']>;
  readonly game_histrories?: InputMaybe<ReadonlyArray<InputMaybe<Scalars['ID']['input']>>>;
  readonly password?: InputMaybe<Scalars['String']['input']>;
  readonly provider?: InputMaybe<Scalars['String']['input']>;
  readonly resetPasswordToken?: InputMaybe<Scalars['String']['input']>;
  readonly role?: InputMaybe<Scalars['ID']['input']>;
  readonly score?: InputMaybe<Scalars['Int']['input']>;
  readonly username?: InputMaybe<Scalars['String']['input']>;
};

export type UsersPermissionsUserRelationResponseCollection = {
  readonly data: ReadonlyArray<UsersPermissionsUserEntity>;
};
