import { GraphQLClient } from 'graphql-request';
import * as Dom from 'graphql-request/dist/types.dom';
import { gql } from 'graphql-request';
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
  bigint: any;
  bytea: any;
  citext: any;
  date: any;
  jsonb: any;
  timestamptz: any;
  uuid: any;
};

/** Boolean expression to compare columns of type "Boolean". All fields are combined with logical 'AND'. */
export type BooleanComparisonExp = {
  _eq?: InputMaybe<Scalars['Boolean']>;
  _gt?: InputMaybe<Scalars['Boolean']>;
  _gte?: InputMaybe<Scalars['Boolean']>;
  _in?: InputMaybe<Array<Scalars['Boolean']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Boolean']>;
  _lte?: InputMaybe<Scalars['Boolean']>;
  _neq?: InputMaybe<Scalars['Boolean']>;
  _nin?: InputMaybe<Array<Scalars['Boolean']>>;
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type IntComparisonExp = {
  _eq?: InputMaybe<Scalars['Int']>;
  _gt?: InputMaybe<Scalars['Int']>;
  _gte?: InputMaybe<Scalars['Int']>;
  _in?: InputMaybe<Array<Scalars['Int']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['Int']>;
  _lte?: InputMaybe<Scalars['Int']>;
  _neq?: InputMaybe<Scalars['Int']>;
  _nin?: InputMaybe<Array<Scalars['Int']>>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type StringComparisonExp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequests = {
  __typename?: 'authProviderRequests';
  id: Scalars['uuid'];
  options?: Maybe<Scalars['jsonb']>;
};


/** Oauth requests, inserted before redirecting to the provider's site. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviderRequestsOptionsArgs = {
  path?: InputMaybe<Scalars['String']>;
};

/** aggregated selection of "auth.provider_requests" */
export type AuthProviderRequestsAggregate = {
  __typename?: 'authProviderRequests_aggregate';
  aggregate?: Maybe<AuthProviderRequestsAggregateFields>;
  nodes: Array<AuthProviderRequests>;
};

/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFields = {
  __typename?: 'authProviderRequests_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProviderRequestsMaxFields>;
  min?: Maybe<AuthProviderRequestsMinFields>;
};


/** aggregate fields of "auth.provider_requests" */
export type AuthProviderRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsAppendInput = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** Boolean expression to filter rows from the table "auth.provider_requests". All fields are combined with a logical 'AND'. */
export type AuthProviderRequestsBoolExp = {
  _and?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  _not?: InputMaybe<AuthProviderRequestsBoolExp>;
  _or?: InputMaybe<Array<AuthProviderRequestsBoolExp>>;
  id?: InputMaybe<UuidComparisonExp>;
  options?: InputMaybe<JsonbComparisonExp>;
};

/** unique or primary key constraints on table "auth.provider_requests" */
export enum AuthProviderRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  ProviderRequestsPkey = 'provider_requests_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type AuthProviderRequestsDeleteAtPathInput = {
  options?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type AuthProviderRequestsDeleteElemInput = {
  options?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type AuthProviderRequestsDeleteKeyInput = {
  options?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.provider_requests" */
export type AuthProviderRequestsInsertInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** aggregate max on columns */
export type AuthProviderRequestsMaxFields = {
  __typename?: 'authProviderRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** aggregate min on columns */
export type AuthProviderRequestsMinFields = {
  __typename?: 'authProviderRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
};

/** response of any mutation on the table "auth.provider_requests" */
export type AuthProviderRequestsMutationResponse = {
  __typename?: 'authProviderRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviderRequests>;
};

/** on_conflict condition type for table "auth.provider_requests" */
export type AuthProviderRequestsOnConflict = {
  constraint: AuthProviderRequestsConstraint;
  update_columns?: Array<AuthProviderRequestsUpdateColumn>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};

/** Ordering options when selecting data from "auth.provider_requests". */
export type AuthProviderRequestsOrderBy = {
  id?: InputMaybe<OrderBy>;
  options?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authProviderRequests */
export type AuthProviderRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type AuthProviderRequestsPrependInput = {
  options?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.provider_requests" */
export enum AuthProviderRequestsSelectColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

/** input type for updating data in table "auth.provider_requests" */
export type AuthProviderRequestsSetInput = {
  id?: InputMaybe<Scalars['uuid']>;
  options?: InputMaybe<Scalars['jsonb']>;
};

/** update columns of table "auth.provider_requests" */
export enum AuthProviderRequestsUpdateColumn {
  /** column name */
  Id = 'id',
  /** column name */
  Options = 'options'
}

export type AuthProviderRequestsUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};

/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProviders = {
  __typename?: 'authProviders';
  id: Scalars['String'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** List of available Oauth providers. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthProvidersUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.providers" */
export type AuthProvidersAggregate = {
  __typename?: 'authProviders_aggregate';
  aggregate?: Maybe<AuthProvidersAggregateFields>;
  nodes: Array<AuthProviders>;
};

/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFields = {
  __typename?: 'authProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthProvidersMaxFields>;
  min?: Maybe<AuthProvidersMinFields>;
};


/** aggregate fields of "auth.providers" */
export type AuthProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.providers". All fields are combined with a logical 'AND'. */
export type AuthProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthProvidersBoolExp>>;
  _not?: InputMaybe<AuthProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthProvidersBoolExp>>;
  id?: InputMaybe<StringComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.providers" */
export enum AuthProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  ProvidersPkey = 'providers_pkey'
}

/** input type for inserting data into table "auth.providers" */
export type AuthProvidersInsertInput = {
  id?: InputMaybe<Scalars['String']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthProvidersMaxFields = {
  __typename?: 'authProviders_max_fields';
  id?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthProvidersMinFields = {
  __typename?: 'authProviders_min_fields';
  id?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.providers" */
export type AuthProvidersMutationResponse = {
  __typename?: 'authProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthProviders>;
};

/** input type for inserting object relation for remote table "auth.providers" */
export type AuthProvidersObjRelInsertInput = {
  data: AuthProvidersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};

/** on_conflict condition type for table "auth.providers" */
export type AuthProvidersOnConflict = {
  constraint: AuthProvidersConstraint;
  update_columns?: Array<AuthProvidersUpdateColumn>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.providers". */
export type AuthProvidersOrderBy = {
  id?: InputMaybe<OrderBy>;
  userProviders_aggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: authProviders */
export type AuthProvidersPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "auth.providers" */
export enum AuthProvidersSelectColumn {
  /** column name */
  Id = 'id'
}

/** input type for updating data in table "auth.providers" */
export type AuthProvidersSetInput = {
  id?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.providers" */
export enum AuthProvidersUpdateColumn {
  /** column name */
  Id = 'id'
}

export type AuthProvidersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};

/** User refresh tokens. Hasura auth uses them to rotate new access tokens as long as the refresh token is not expired. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRefreshTokens = {
  __typename?: 'authRefreshTokens';
  createdAt: Scalars['timestamptz'];
  expiresAt: Scalars['timestamptz'];
  refreshToken: Scalars['uuid'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregate = {
  __typename?: 'authRefreshTokens_aggregate';
  aggregate?: Maybe<AuthRefreshTokensAggregateFields>;
  nodes: Array<AuthRefreshTokens>;
};

/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFields = {
  __typename?: 'authRefreshTokens_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRefreshTokensMaxFields>;
  min?: Maybe<AuthRefreshTokensMinFields>;
};


/** aggregate fields of "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.refresh_tokens" */
export type AuthRefreshTokensAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthRefreshTokensMaxOrderBy>;
  min?: InputMaybe<AuthRefreshTokensMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.refresh_tokens" */
export type AuthRefreshTokensArrRelInsertInput = {
  data: Array<AuthRefreshTokensInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.refresh_tokens". All fields are combined with a logical 'AND'. */
export type AuthRefreshTokensBoolExp = {
  _and?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  _not?: InputMaybe<AuthRefreshTokensBoolExp>;
  _or?: InputMaybe<Array<AuthRefreshTokensBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  expiresAt?: InputMaybe<TimestamptzComparisonExp>;
  refreshToken?: InputMaybe<UuidComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.refresh_tokens" */
export enum AuthRefreshTokensConstraint {
  /** unique or primary key constraint on columns "refresh_token" */
  RefreshTokensPkey = 'refresh_tokens_pkey'
}

/** input type for inserting data into table "auth.refresh_tokens" */
export type AuthRefreshTokensInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthRefreshTokensMaxFields = {
  __typename?: 'authRefreshTokens_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthRefreshTokensMinFields = {
  __typename?: 'authRefreshTokens_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  expiresAt?: Maybe<Scalars['timestamptz']>;
  refreshToken?: Maybe<Scalars['uuid']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.refresh_tokens" */
export type AuthRefreshTokensMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.refresh_tokens" */
export type AuthRefreshTokensMutationResponse = {
  __typename?: 'authRefreshTokens_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRefreshTokens>;
};

/** on_conflict condition type for table "auth.refresh_tokens" */
export type AuthRefreshTokensOnConflict = {
  constraint: AuthRefreshTokensConstraint;
  update_columns?: Array<AuthRefreshTokensUpdateColumn>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};

/** Ordering options when selecting data from "auth.refresh_tokens". */
export type AuthRefreshTokensOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  expiresAt?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authRefreshTokens */
export type AuthRefreshTokensPkColumnsInput = {
  refreshToken: Scalars['uuid'];
};

/** select columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.refresh_tokens" */
export type AuthRefreshTokensSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  expiresAt?: InputMaybe<Scalars['timestamptz']>;
  refreshToken?: InputMaybe<Scalars['uuid']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.refresh_tokens" */
export enum AuthRefreshTokensUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  ExpiresAt = 'expiresAt',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UserId = 'userId'
}

export type AuthRefreshTokensUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};

/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRoles = {
  __typename?: 'authRoles';
  role: Scalars['String'];
  /** An array relationship */
  userRoles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  userRoles_aggregate: AuthUserRolesAggregate;
  /** An array relationship */
  usersByDefaultRole: Array<Users>;
  /** An aggregate relationship */
  usersByDefaultRole_aggregate: UsersAggregate;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


/** Persistent Hasura roles for users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthRolesUsersByDefaultRoleAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};

/** aggregated selection of "auth.roles" */
export type AuthRolesAggregate = {
  __typename?: 'authRoles_aggregate';
  aggregate?: Maybe<AuthRolesAggregateFields>;
  nodes: Array<AuthRoles>;
};

/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFields = {
  __typename?: 'authRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthRolesMaxFields>;
  min?: Maybe<AuthRolesMinFields>;
};


/** aggregate fields of "auth.roles" */
export type AuthRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "auth.roles". All fields are combined with a logical 'AND'. */
export type AuthRolesBoolExp = {
  _and?: InputMaybe<Array<AuthRolesBoolExp>>;
  _not?: InputMaybe<AuthRolesBoolExp>;
  _or?: InputMaybe<Array<AuthRolesBoolExp>>;
  role?: InputMaybe<StringComparisonExp>;
  userRoles?: InputMaybe<AuthUserRolesBoolExp>;
  usersByDefaultRole?: InputMaybe<UsersBoolExp>;
};

/** unique or primary key constraints on table "auth.roles" */
export enum AuthRolesConstraint {
  /** unique or primary key constraint on columns "role" */
  RolesPkey = 'roles_pkey'
}

/** input type for inserting data into table "auth.roles" */
export type AuthRolesInsertInput = {
  role?: InputMaybe<Scalars['String']>;
  userRoles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  usersByDefaultRole?: InputMaybe<UsersArrRelInsertInput>;
};

/** aggregate max on columns */
export type AuthRolesMaxFields = {
  __typename?: 'authRoles_max_fields';
  role?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type AuthRolesMinFields = {
  __typename?: 'authRoles_min_fields';
  role?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "auth.roles" */
export type AuthRolesMutationResponse = {
  __typename?: 'authRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthRoles>;
};

/** input type for inserting object relation for remote table "auth.roles" */
export type AuthRolesObjRelInsertInput = {
  data: AuthRolesInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};

/** on_conflict condition type for table "auth.roles" */
export type AuthRolesOnConflict = {
  constraint: AuthRolesConstraint;
  update_columns?: Array<AuthRolesUpdateColumn>;
  where?: InputMaybe<AuthRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.roles". */
export type AuthRolesOrderBy = {
  role?: InputMaybe<OrderBy>;
  userRoles_aggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  usersByDefaultRole_aggregate?: InputMaybe<UsersAggregateOrderBy>;
};

/** primary key columns input for table: authRoles */
export type AuthRolesPkColumnsInput = {
  role: Scalars['String'];
};

/** select columns of table "auth.roles" */
export enum AuthRolesSelectColumn {
  /** column name */
  Role = 'role'
}

/** input type for updating data in table "auth.roles" */
export type AuthRolesSetInput = {
  role?: InputMaybe<Scalars['String']>;
};

/** update columns of table "auth.roles" */
export enum AuthRolesUpdateColumn {
  /** column name */
  Role = 'role'
}

export type AuthRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};

/** User webauthn authenticators. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserAuthenticators = {
  __typename?: 'authUserAuthenticators';
  counter: Scalars['bigint'];
  credentialId: Scalars['String'];
  credentialPublicKey?: Maybe<Scalars['bytea']>;
  id: Scalars['uuid'];
  transports: Scalars['String'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregate = {
  __typename?: 'authUserAuthenticators_aggregate';
  aggregate?: Maybe<AuthUserAuthenticatorsAggregateFields>;
  nodes: Array<AuthUserAuthenticators>;
};

/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateFields = {
  __typename?: 'authUserAuthenticators_aggregate_fields';
  avg?: Maybe<AuthUserAuthenticatorsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<AuthUserAuthenticatorsMaxFields>;
  min?: Maybe<AuthUserAuthenticatorsMinFields>;
  stddev?: Maybe<AuthUserAuthenticatorsStddevFields>;
  stddev_pop?: Maybe<AuthUserAuthenticatorsStddevPopFields>;
  stddev_samp?: Maybe<AuthUserAuthenticatorsStddevSampFields>;
  sum?: Maybe<AuthUserAuthenticatorsSumFields>;
  var_pop?: Maybe<AuthUserAuthenticatorsVarPopFields>;
  var_samp?: Maybe<AuthUserAuthenticatorsVarSampFields>;
  variance?: Maybe<AuthUserAuthenticatorsVarianceFields>;
};


/** aggregate fields of "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsAggregateOrderBy = {
  avg?: InputMaybe<AuthUserAuthenticatorsAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserAuthenticatorsMaxOrderBy>;
  min?: InputMaybe<AuthUserAuthenticatorsMinOrderBy>;
  stddev?: InputMaybe<AuthUserAuthenticatorsStddevOrderBy>;
  stddev_pop?: InputMaybe<AuthUserAuthenticatorsStddevPopOrderBy>;
  stddev_samp?: InputMaybe<AuthUserAuthenticatorsStddevSampOrderBy>;
  sum?: InputMaybe<AuthUserAuthenticatorsSumOrderBy>;
  var_pop?: InputMaybe<AuthUserAuthenticatorsVarPopOrderBy>;
  var_samp?: InputMaybe<AuthUserAuthenticatorsVarSampOrderBy>;
  variance?: InputMaybe<AuthUserAuthenticatorsVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_authenticators" */
export type AuthUserAuthenticatorsArrRelInsertInput = {
  data: Array<AuthUserAuthenticatorsInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};

/** aggregate avg on columns */
export type AuthUserAuthenticatorsAvgFields = {
  __typename?: 'authUserAuthenticators_avg_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsAvgOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "auth.user_authenticators". All fields are combined with a logical 'AND'. */
export type AuthUserAuthenticatorsBoolExp = {
  _and?: InputMaybe<Array<AuthUserAuthenticatorsBoolExp>>;
  _not?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
  _or?: InputMaybe<Array<AuthUserAuthenticatorsBoolExp>>;
  counter?: InputMaybe<BigintComparisonExp>;
  credentialId?: InputMaybe<StringComparisonExp>;
  credentialPublicKey?: InputMaybe<ByteaComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  transports?: InputMaybe<StringComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsConstraint {
  /** unique or primary key constraint on columns "credential_id" */
  UserAuthenticatorsCredentialIdKey = 'user_authenticators_credential_id_key',
  /** unique or primary key constraint on columns "id" */
  UserAuthenticatorsPkey = 'user_authenticators_pkey'
}

/** input type for incrementing numeric columns in table "auth.user_authenticators" */
export type AuthUserAuthenticatorsIncInput = {
  counter?: InputMaybe<Scalars['bigint']>;
};

/** input type for inserting data into table "auth.user_authenticators" */
export type AuthUserAuthenticatorsInsertInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserAuthenticatorsMaxFields = {
  __typename?: 'authUserAuthenticators_max_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMaxOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserAuthenticatorsMinFields = {
  __typename?: 'authUserAuthenticators_min_fields';
  counter?: Maybe<Scalars['bigint']>;
  credentialId?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  transports?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMinOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_authenticators" */
export type AuthUserAuthenticatorsMutationResponse = {
  __typename?: 'authUserAuthenticators_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserAuthenticators>;
};

/** on_conflict condition type for table "auth.user_authenticators" */
export type AuthUserAuthenticatorsOnConflict = {
  constraint: AuthUserAuthenticatorsConstraint;
  update_columns?: Array<AuthUserAuthenticatorsUpdateColumn>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};

/** Ordering options when selecting data from "auth.user_authenticators". */
export type AuthUserAuthenticatorsOrderBy = {
  counter?: InputMaybe<OrderBy>;
  credentialId?: InputMaybe<OrderBy>;
  credentialPublicKey?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  transports?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserAuthenticators */
export type AuthUserAuthenticatorsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsSelectColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_authenticators" */
export type AuthUserAuthenticatorsSetInput = {
  counter?: InputMaybe<Scalars['bigint']>;
  credentialId?: InputMaybe<Scalars['String']>;
  credentialPublicKey?: InputMaybe<Scalars['bytea']>;
  id?: InputMaybe<Scalars['uuid']>;
  transports?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type AuthUserAuthenticatorsStddevFields = {
  __typename?: 'authUserAuthenticators_stddev_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsStddevOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type AuthUserAuthenticatorsStddevPopFields = {
  __typename?: 'authUserAuthenticators_stddev_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsStddevPopOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type AuthUserAuthenticatorsStddevSampFields = {
  __typename?: 'authUserAuthenticators_stddev_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsStddevSampOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type AuthUserAuthenticatorsSumFields = {
  __typename?: 'authUserAuthenticators_sum_fields';
  counter?: Maybe<Scalars['bigint']>;
};

/** order by sum() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsSumOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** update columns of table "auth.user_authenticators" */
export enum AuthUserAuthenticatorsUpdateColumn {
  /** column name */
  Counter = 'counter',
  /** column name */
  CredentialId = 'credentialId',
  /** column name */
  CredentialPublicKey = 'credentialPublicKey',
  /** column name */
  Id = 'id',
  /** column name */
  Transports = 'transports',
  /** column name */
  UserId = 'userId'
}

export type AuthUserAuthenticatorsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  where: AuthUserAuthenticatorsBoolExp;
};

/** aggregate var_pop on columns */
export type AuthUserAuthenticatorsVarPopFields = {
  __typename?: 'authUserAuthenticators_var_pop_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsVarPopOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type AuthUserAuthenticatorsVarSampFields = {
  __typename?: 'authUserAuthenticators_var_samp_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsVarSampOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type AuthUserAuthenticatorsVarianceFields = {
  __typename?: 'authUserAuthenticators_variance_fields';
  counter?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "auth.user_authenticators" */
export type AuthUserAuthenticatorsVarianceOrderBy = {
  counter?: InputMaybe<OrderBy>;
};

/** Active providers for a given user. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserProviders = {
  __typename?: 'authUserProviders';
  accessToken: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  /** An object relationship */
  provider: AuthProviders;
  providerId: Scalars['String'];
  providerUserId: Scalars['String'];
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_providers" */
export type AuthUserProvidersAggregate = {
  __typename?: 'authUserProviders_aggregate';
  aggregate?: Maybe<AuthUserProvidersAggregateFields>;
  nodes: Array<AuthUserProviders>;
};

/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFields = {
  __typename?: 'authUserProviders_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserProvidersMaxFields>;
  min?: Maybe<AuthUserProvidersMinFields>;
};


/** aggregate fields of "auth.user_providers" */
export type AuthUserProvidersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_providers" */
export type AuthUserProvidersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserProvidersMaxOrderBy>;
  min?: InputMaybe<AuthUserProvidersMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_providers" */
export type AuthUserProvidersArrRelInsertInput = {
  data: Array<AuthUserProvidersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_providers". All fields are combined with a logical 'AND'. */
export type AuthUserProvidersBoolExp = {
  _and?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  _not?: InputMaybe<AuthUserProvidersBoolExp>;
  _or?: InputMaybe<Array<AuthUserProvidersBoolExp>>;
  accessToken?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  provider?: InputMaybe<AuthProvidersBoolExp>;
  providerId?: InputMaybe<StringComparisonExp>;
  providerUserId?: InputMaybe<StringComparisonExp>;
  refreshToken?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_providers" */
export enum AuthUserProvidersConstraint {
  /** unique or primary key constraint on columns "id" */
  UserProvidersPkey = 'user_providers_pkey',
  /** unique or primary key constraint on columns "provider_id", "provider_user_id" */
  UserProvidersProviderIdProviderUserIdKey = 'user_providers_provider_id_provider_user_id_key',
  /** unique or primary key constraint on columns "provider_id", "user_id" */
  UserProvidersUserIdProviderIdKey = 'user_providers_user_id_provider_id_key'
}

/** input type for inserting data into table "auth.user_providers" */
export type AuthUserProvidersInsertInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  provider?: InputMaybe<AuthProvidersObjRelInsertInput>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserProvidersMaxFields = {
  __typename?: 'authUserProviders_max_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_providers" */
export type AuthUserProvidersMaxOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserProvidersMinFields = {
  __typename?: 'authUserProviders_min_fields';
  accessToken?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  providerId?: Maybe<Scalars['String']>;
  providerUserId?: Maybe<Scalars['String']>;
  refreshToken?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_providers" */
export type AuthUserProvidersMinOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_providers" */
export type AuthUserProvidersMutationResponse = {
  __typename?: 'authUserProviders_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserProviders>;
};

/** on_conflict condition type for table "auth.user_providers" */
export type AuthUserProvidersOnConflict = {
  constraint: AuthUserProvidersConstraint;
  update_columns?: Array<AuthUserProvidersUpdateColumn>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** Ordering options when selecting data from "auth.user_providers". */
export type AuthUserProvidersOrderBy = {
  accessToken?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  provider?: InputMaybe<AuthProvidersOrderBy>;
  providerId?: InputMaybe<OrderBy>;
  providerUserId?: InputMaybe<OrderBy>;
  refreshToken?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserProviders */
export type AuthUserProvidersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_providers" */
export enum AuthUserProvidersSelectColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_providers" */
export type AuthUserProvidersSetInput = {
  accessToken?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  providerId?: InputMaybe<Scalars['String']>;
  providerUserId?: InputMaybe<Scalars['String']>;
  refreshToken?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_providers" */
export enum AuthUserProvidersUpdateColumn {
  /** column name */
  AccessToken = 'accessToken',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  ProviderId = 'providerId',
  /** column name */
  ProviderUserId = 'providerUserId',
  /** column name */
  RefreshToken = 'refreshToken',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UserId = 'userId'
}

export type AuthUserProvidersUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};

/** Roles of users. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type AuthUserRoles = {
  __typename?: 'authUserRoles';
  createdAt: Scalars['timestamptz'];
  id: Scalars['uuid'];
  role: Scalars['String'];
  /** An object relationship */
  roleByRole: AuthRoles;
  /** An object relationship */
  user: Users;
  userId: Scalars['uuid'];
};

/** aggregated selection of "auth.user_roles" */
export type AuthUserRolesAggregate = {
  __typename?: 'authUserRoles_aggregate';
  aggregate?: Maybe<AuthUserRolesAggregateFields>;
  nodes: Array<AuthUserRoles>;
};

/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFields = {
  __typename?: 'authUserRoles_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<AuthUserRolesMaxFields>;
  min?: Maybe<AuthUserRolesMinFields>;
};


/** aggregate fields of "auth.user_roles" */
export type AuthUserRolesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.user_roles" */
export type AuthUserRolesAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<AuthUserRolesMaxOrderBy>;
  min?: InputMaybe<AuthUserRolesMinOrderBy>;
};

/** input type for inserting array relation for remote table "auth.user_roles" */
export type AuthUserRolesArrRelInsertInput = {
  data: Array<AuthUserRolesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.user_roles". All fields are combined with a logical 'AND'. */
export type AuthUserRolesBoolExp = {
  _and?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  _not?: InputMaybe<AuthUserRolesBoolExp>;
  _or?: InputMaybe<Array<AuthUserRolesBoolExp>>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  role?: InputMaybe<StringComparisonExp>;
  roleByRole?: InputMaybe<AuthRolesBoolExp>;
  user?: InputMaybe<UsersBoolExp>;
  userId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "auth.user_roles" */
export enum AuthUserRolesConstraint {
  /** unique or primary key constraint on columns "id" */
  UserRolesPkey = 'user_roles_pkey',
  /** unique or primary key constraint on columns "user_id", "role" */
  UserRolesUserIdRoleKey = 'user_roles_user_id_role_key'
}

/** input type for inserting data into table "auth.user_roles" */
export type AuthUserRolesInsertInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  roleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  user?: InputMaybe<UsersObjRelInsertInput>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type AuthUserRolesMaxFields = {
  __typename?: 'authUserRoles_max_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "auth.user_roles" */
export type AuthUserRolesMaxOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type AuthUserRolesMinFields = {
  __typename?: 'authUserRoles_min_fields';
  createdAt?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  role?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "auth.user_roles" */
export type AuthUserRolesMinOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.user_roles" */
export type AuthUserRolesMutationResponse = {
  __typename?: 'authUserRoles_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<AuthUserRoles>;
};

/** on_conflict condition type for table "auth.user_roles" */
export type AuthUserRolesOnConflict = {
  constraint: AuthUserRolesConstraint;
  update_columns?: Array<AuthUserRolesUpdateColumn>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};

/** Ordering options when selecting data from "auth.user_roles". */
export type AuthUserRolesOrderBy = {
  createdAt?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  role?: InputMaybe<OrderBy>;
  roleByRole?: InputMaybe<AuthRolesOrderBy>;
  user?: InputMaybe<UsersOrderBy>;
  userId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: authUserRoles */
export type AuthUserRolesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "auth.user_roles" */
export enum AuthUserRolesSelectColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "auth.user_roles" */
export type AuthUserRolesSetInput = {
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  role?: InputMaybe<Scalars['String']>;
  userId?: InputMaybe<Scalars['uuid']>;
};

/** update columns of table "auth.user_roles" */
export enum AuthUserRolesUpdateColumn {
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Id = 'id',
  /** column name */
  Role = 'role',
  /** column name */
  UserId = 'userId'
}

export type AuthUserRolesUpdates = {
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};

/** Boolean expression to compare columns of type "bigint". All fields are combined with logical 'AND'. */
export type BigintComparisonExp = {
  _eq?: InputMaybe<Scalars['bigint']>;
  _gt?: InputMaybe<Scalars['bigint']>;
  _gte?: InputMaybe<Scalars['bigint']>;
  _in?: InputMaybe<Array<Scalars['bigint']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bigint']>;
  _lte?: InputMaybe<Scalars['bigint']>;
  _neq?: InputMaybe<Scalars['bigint']>;
  _nin?: InputMaybe<Array<Scalars['bigint']>>;
};

/** columns and relationships of "storage.buckets" */
export type Buckets = {
  __typename?: 'buckets';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt: Scalars['timestamptz'];
  downloadExpiration: Scalars['Int'];
  /** An array relationship */
  files: Array<Files>;
  /** An aggregate relationship */
  files_aggregate: FilesAggregate;
  id: Scalars['String'];
  maxUploadFileSize: Scalars['Int'];
  minUploadFileSize: Scalars['Int'];
  presignedUrlsEnabled: Scalars['Boolean'];
  updatedAt: Scalars['timestamptz'];
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


/** columns and relationships of "storage.buckets" */
export type BucketsFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};

/** aggregated selection of "storage.buckets" */
export type BucketsAggregate = {
  __typename?: 'buckets_aggregate';
  aggregate?: Maybe<BucketsAggregateFields>;
  nodes: Array<Buckets>;
};

/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFields = {
  __typename?: 'buckets_aggregate_fields';
  avg?: Maybe<BucketsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<BucketsMaxFields>;
  min?: Maybe<BucketsMinFields>;
  stddev?: Maybe<BucketsStddevFields>;
  stddev_pop?: Maybe<BucketsStddevPopFields>;
  stddev_samp?: Maybe<BucketsStddevSampFields>;
  sum?: Maybe<BucketsSumFields>;
  var_pop?: Maybe<BucketsVarPopFields>;
  var_samp?: Maybe<BucketsVarSampFields>;
  variance?: Maybe<BucketsVarianceFields>;
};


/** aggregate fields of "storage.buckets" */
export type BucketsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<BucketsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type BucketsAvgFields = {
  __typename?: 'buckets_avg_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "storage.buckets". All fields are combined with a logical 'AND'. */
export type BucketsBoolExp = {
  _and?: InputMaybe<Array<BucketsBoolExp>>;
  _not?: InputMaybe<BucketsBoolExp>;
  _or?: InputMaybe<Array<BucketsBoolExp>>;
  cacheControl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  downloadExpiration?: InputMaybe<IntComparisonExp>;
  files?: InputMaybe<FilesBoolExp>;
  id?: InputMaybe<StringComparisonExp>;
  maxUploadFileSize?: InputMaybe<IntComparisonExp>;
  minUploadFileSize?: InputMaybe<IntComparisonExp>;
  presignedUrlsEnabled?: InputMaybe<BooleanComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
};

/** unique or primary key constraints on table "storage.buckets" */
export enum BucketsConstraint {
  /** unique or primary key constraint on columns "id" */
  BucketsPkey = 'buckets_pkey'
}

/** input type for incrementing numeric columns in table "storage.buckets" */
export type BucketsIncInput = {
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.buckets" */
export type BucketsInsertInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  files?: InputMaybe<FilesArrRelInsertInput>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate max on columns */
export type BucketsMaxFields = {
  __typename?: 'buckets_max_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** aggregate min on columns */
export type BucketsMinFields = {
  __typename?: 'buckets_min_fields';
  cacheControl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  downloadExpiration?: Maybe<Scalars['Int']>;
  id?: Maybe<Scalars['String']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** response of any mutation on the table "storage.buckets" */
export type BucketsMutationResponse = {
  __typename?: 'buckets_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Buckets>;
};

/** input type for inserting object relation for remote table "storage.buckets" */
export type BucketsObjRelInsertInput = {
  data: BucketsInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<BucketsOnConflict>;
};

/** on_conflict condition type for table "storage.buckets" */
export type BucketsOnConflict = {
  constraint: BucketsConstraint;
  update_columns?: Array<BucketsUpdateColumn>;
  where?: InputMaybe<BucketsBoolExp>;
};

/** Ordering options when selecting data from "storage.buckets". */
export type BucketsOrderBy = {
  cacheControl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  downloadExpiration?: InputMaybe<OrderBy>;
  files_aggregate?: InputMaybe<FilesAggregateOrderBy>;
  id?: InputMaybe<OrderBy>;
  maxUploadFileSize?: InputMaybe<OrderBy>;
  minUploadFileSize?: InputMaybe<OrderBy>;
  presignedUrlsEnabled?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: buckets */
export type BucketsPkColumnsInput = {
  id: Scalars['String'];
};

/** select columns of table "storage.buckets" */
export enum BucketsSelectColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "storage.buckets" */
export type BucketsSetInput = {
  cacheControl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  downloadExpiration?: InputMaybe<Scalars['Int']>;
  id?: InputMaybe<Scalars['String']>;
  maxUploadFileSize?: InputMaybe<Scalars['Int']>;
  minUploadFileSize?: InputMaybe<Scalars['Int']>;
  presignedUrlsEnabled?: InputMaybe<Scalars['Boolean']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** aggregate stddev on columns */
export type BucketsStddevFields = {
  __typename?: 'buckets_stddev_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type BucketsStddevPopFields = {
  __typename?: 'buckets_stddev_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type BucketsStddevSampFields = {
  __typename?: 'buckets_stddev_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type BucketsSumFields = {
  __typename?: 'buckets_sum_fields';
  downloadExpiration?: Maybe<Scalars['Int']>;
  maxUploadFileSize?: Maybe<Scalars['Int']>;
  minUploadFileSize?: Maybe<Scalars['Int']>;
};

/** update columns of table "storage.buckets" */
export enum BucketsUpdateColumn {
  /** column name */
  CacheControl = 'cacheControl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  DownloadExpiration = 'downloadExpiration',
  /** column name */
  Id = 'id',
  /** column name */
  MaxUploadFileSize = 'maxUploadFileSize',
  /** column name */
  MinUploadFileSize = 'minUploadFileSize',
  /** column name */
  PresignedUrlsEnabled = 'presignedUrlsEnabled',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type BucketsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<BucketsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<BucketsSetInput>;
  where: BucketsBoolExp;
};

/** aggregate var_pop on columns */
export type BucketsVarPopFields = {
  __typename?: 'buckets_var_pop_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type BucketsVarSampFields = {
  __typename?: 'buckets_var_samp_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type BucketsVarianceFields = {
  __typename?: 'buckets_variance_fields';
  downloadExpiration?: Maybe<Scalars['Float']>;
  maxUploadFileSize?: Maybe<Scalars['Float']>;
  minUploadFileSize?: Maybe<Scalars['Float']>;
};

/** Boolean expression to compare columns of type "bytea". All fields are combined with logical 'AND'. */
export type ByteaComparisonExp = {
  _eq?: InputMaybe<Scalars['bytea']>;
  _gt?: InputMaybe<Scalars['bytea']>;
  _gte?: InputMaybe<Scalars['bytea']>;
  _in?: InputMaybe<Array<Scalars['bytea']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['bytea']>;
  _lte?: InputMaybe<Scalars['bytea']>;
  _neq?: InputMaybe<Scalars['bytea']>;
  _nin?: InputMaybe<Array<Scalars['bytea']>>;
};

/** Boolean expression to compare columns of type "citext". All fields are combined with logical 'AND'. */
export type CitextComparisonExp = {
  _eq?: InputMaybe<Scalars['citext']>;
  _gt?: InputMaybe<Scalars['citext']>;
  _gte?: InputMaybe<Scalars['citext']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['citext']>;
  _in?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['citext']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['citext']>;
  _lt?: InputMaybe<Scalars['citext']>;
  _lte?: InputMaybe<Scalars['citext']>;
  _neq?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['citext']>;
  _nin?: InputMaybe<Array<Scalars['citext']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['citext']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['citext']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['citext']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['citext']>;
};

/** Boolean expression to compare columns of type "date". All fields are combined with logical 'AND'. */
export type DateComparisonExp = {
  _eq?: InputMaybe<Scalars['date']>;
  _gt?: InputMaybe<Scalars['date']>;
  _gte?: InputMaybe<Scalars['date']>;
  _in?: InputMaybe<Array<Scalars['date']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['date']>;
  _lte?: InputMaybe<Scalars['date']>;
  _neq?: InputMaybe<Scalars['date']>;
  _nin?: InputMaybe<Array<Scalars['date']>>;
};

/** columns and relationships of "fetch_requests" */
export type FetchRequests = {
  __typename?: 'fetchRequests';
  all: Scalars['Boolean'];
  id: Scalars['uuid'];
  page: Scalars['Int'];
};

/** aggregated selection of "fetch_requests" */
export type FetchRequestsAggregate = {
  __typename?: 'fetchRequests_aggregate';
  aggregate?: Maybe<FetchRequestsAggregateFields>;
  nodes: Array<FetchRequests>;
};

/** aggregate fields of "fetch_requests" */
export type FetchRequestsAggregateFields = {
  __typename?: 'fetchRequests_aggregate_fields';
  avg?: Maybe<FetchRequestsAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FetchRequestsMaxFields>;
  min?: Maybe<FetchRequestsMinFields>;
  stddev?: Maybe<FetchRequestsStddevFields>;
  stddev_pop?: Maybe<FetchRequestsStddevPopFields>;
  stddev_samp?: Maybe<FetchRequestsStddevSampFields>;
  sum?: Maybe<FetchRequestsSumFields>;
  var_pop?: Maybe<FetchRequestsVarPopFields>;
  var_samp?: Maybe<FetchRequestsVarSampFields>;
  variance?: Maybe<FetchRequestsVarianceFields>;
};


/** aggregate fields of "fetch_requests" */
export type FetchRequestsAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FetchRequestsSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type FetchRequestsAvgFields = {
  __typename?: 'fetchRequests_avg_fields';
  page?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "fetch_requests". All fields are combined with a logical 'AND'. */
export type FetchRequestsBoolExp = {
  _and?: InputMaybe<Array<FetchRequestsBoolExp>>;
  _not?: InputMaybe<FetchRequestsBoolExp>;
  _or?: InputMaybe<Array<FetchRequestsBoolExp>>;
  all?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  page?: InputMaybe<IntComparisonExp>;
};

/** unique or primary key constraints on table "fetch_requests" */
export enum FetchRequestsConstraint {
  /** unique or primary key constraint on columns "id" */
  FetchRequestsPkey = 'fetch_requests_pkey'
}

/** input type for incrementing numeric columns in table "fetch_requests" */
export type FetchRequestsIncInput = {
  page?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "fetch_requests" */
export type FetchRequestsInsertInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** aggregate max on columns */
export type FetchRequestsMaxFields = {
  __typename?: 'fetchRequests_max_fields';
  id?: Maybe<Scalars['uuid']>;
  page?: Maybe<Scalars['Int']>;
};

/** aggregate min on columns */
export type FetchRequestsMinFields = {
  __typename?: 'fetchRequests_min_fields';
  id?: Maybe<Scalars['uuid']>;
  page?: Maybe<Scalars['Int']>;
};

/** response of any mutation on the table "fetch_requests" */
export type FetchRequestsMutationResponse = {
  __typename?: 'fetchRequests_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<FetchRequests>;
};

/** on_conflict condition type for table "fetch_requests" */
export type FetchRequestsOnConflict = {
  constraint: FetchRequestsConstraint;
  update_columns?: Array<FetchRequestsUpdateColumn>;
  where?: InputMaybe<FetchRequestsBoolExp>;
};

/** Ordering options when selecting data from "fetch_requests". */
export type FetchRequestsOrderBy = {
  all?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  page?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: fetchRequests */
export type FetchRequestsPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "fetch_requests" */
export enum FetchRequestsSelectColumn {
  /** column name */
  All = 'all',
  /** column name */
  Id = 'id',
  /** column name */
  Page = 'page'
}

/** input type for updating data in table "fetch_requests" */
export type FetchRequestsSetInput = {
  all?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  page?: InputMaybe<Scalars['Int']>;
};

/** aggregate stddev on columns */
export type FetchRequestsStddevFields = {
  __typename?: 'fetchRequests_stddev_fields';
  page?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type FetchRequestsStddevPopFields = {
  __typename?: 'fetchRequests_stddev_pop_fields';
  page?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type FetchRequestsStddevSampFields = {
  __typename?: 'fetchRequests_stddev_samp_fields';
  page?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type FetchRequestsSumFields = {
  __typename?: 'fetchRequests_sum_fields';
  page?: Maybe<Scalars['Int']>;
};

/** update columns of table "fetch_requests" */
export enum FetchRequestsUpdateColumn {
  /** column name */
  All = 'all',
  /** column name */
  Id = 'id',
  /** column name */
  Page = 'page'
}

export type FetchRequestsUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FetchRequestsIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FetchRequestsSetInput>;
  where: FetchRequestsBoolExp;
};

/** aggregate var_pop on columns */
export type FetchRequestsVarPopFields = {
  __typename?: 'fetchRequests_var_pop_fields';
  page?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type FetchRequestsVarSampFields = {
  __typename?: 'fetchRequests_var_samp_fields';
  page?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type FetchRequestsVarianceFields = {
  __typename?: 'fetchRequests_variance_fields';
  page?: Maybe<Scalars['Float']>;
};

/** columns and relationships of "storage.files" */
export type Files = {
  __typename?: 'files';
  /** An object relationship */
  bucket: Buckets;
  bucketId: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  etag?: Maybe<Scalars['String']>;
  id: Scalars['uuid'];
  isUploaded?: Maybe<Scalars['Boolean']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['timestamptz'];
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** aggregated selection of "storage.files" */
export type FilesAggregate = {
  __typename?: 'files_aggregate';
  aggregate?: Maybe<FilesAggregateFields>;
  nodes: Array<Files>;
};

/** aggregate fields of "storage.files" */
export type FilesAggregateFields = {
  __typename?: 'files_aggregate_fields';
  avg?: Maybe<FilesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<FilesMaxFields>;
  min?: Maybe<FilesMinFields>;
  stddev?: Maybe<FilesStddevFields>;
  stddev_pop?: Maybe<FilesStddevPopFields>;
  stddev_samp?: Maybe<FilesStddevSampFields>;
  sum?: Maybe<FilesSumFields>;
  var_pop?: Maybe<FilesVarPopFields>;
  var_samp?: Maybe<FilesVarSampFields>;
  variance?: Maybe<FilesVarianceFields>;
};


/** aggregate fields of "storage.files" */
export type FilesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<FilesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "storage.files" */
export type FilesAggregateOrderBy = {
  avg?: InputMaybe<FilesAvgOrderBy>;
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<FilesMaxOrderBy>;
  min?: InputMaybe<FilesMinOrderBy>;
  stddev?: InputMaybe<FilesStddevOrderBy>;
  stddev_pop?: InputMaybe<FilesStddevPopOrderBy>;
  stddev_samp?: InputMaybe<FilesStddevSampOrderBy>;
  sum?: InputMaybe<FilesSumOrderBy>;
  var_pop?: InputMaybe<FilesVarPopOrderBy>;
  var_samp?: InputMaybe<FilesVarSampOrderBy>;
  variance?: InputMaybe<FilesVarianceOrderBy>;
};

/** input type for inserting array relation for remote table "storage.files" */
export type FilesArrRelInsertInput = {
  data: Array<FilesInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<FilesOnConflict>;
};

/** aggregate avg on columns */
export type FilesAvgFields = {
  __typename?: 'files_avg_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by avg() on columns of table "storage.files" */
export type FilesAvgOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** Boolean expression to filter rows from the table "storage.files". All fields are combined with a logical 'AND'. */
export type FilesBoolExp = {
  _and?: InputMaybe<Array<FilesBoolExp>>;
  _not?: InputMaybe<FilesBoolExp>;
  _or?: InputMaybe<Array<FilesBoolExp>>;
  bucket?: InputMaybe<BucketsBoolExp>;
  bucketId?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  etag?: InputMaybe<StringComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isUploaded?: InputMaybe<BooleanComparisonExp>;
  mimeType?: InputMaybe<StringComparisonExp>;
  name?: InputMaybe<StringComparisonExp>;
  size?: InputMaybe<IntComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  uploadedByUserId?: InputMaybe<UuidComparisonExp>;
};

/** unique or primary key constraints on table "storage.files" */
export enum FilesConstraint {
  /** unique or primary key constraint on columns "id" */
  FilesPkey = 'files_pkey'
}

/** input type for incrementing numeric columns in table "storage.files" */
export type FilesIncInput = {
  size?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "storage.files" */
export type FilesInsertInput = {
  bucket?: InputMaybe<BucketsObjRelInsertInput>;
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate max on columns */
export type FilesMaxFields = {
  __typename?: 'files_max_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by max() on columns of table "storage.files" */
export type FilesMaxOrderBy = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type FilesMinFields = {
  __typename?: 'files_min_fields';
  bucketId?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  etag?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['uuid']>;
  mimeType?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  size?: Maybe<Scalars['Int']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
  uploadedByUserId?: Maybe<Scalars['uuid']>;
};

/** order by min() on columns of table "storage.files" */
export type FilesMinOrderBy = {
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "storage.files" */
export type FilesMutationResponse = {
  __typename?: 'files_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Files>;
};

/** on_conflict condition type for table "storage.files" */
export type FilesOnConflict = {
  constraint: FilesConstraint;
  update_columns?: Array<FilesUpdateColumn>;
  where?: InputMaybe<FilesBoolExp>;
};

/** Ordering options when selecting data from "storage.files". */
export type FilesOrderBy = {
  bucket?: InputMaybe<BucketsOrderBy>;
  bucketId?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  etag?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isUploaded?: InputMaybe<OrderBy>;
  mimeType?: InputMaybe<OrderBy>;
  name?: InputMaybe<OrderBy>;
  size?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  uploadedByUserId?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: files */
export type FilesPkColumnsInput = {
  id: Scalars['uuid'];
};

/** select columns of table "storage.files" */
export enum FilesSelectColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

/** input type for updating data in table "storage.files" */
export type FilesSetInput = {
  bucketId?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  etag?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['uuid']>;
  isUploaded?: InputMaybe<Scalars['Boolean']>;
  mimeType?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  size?: InputMaybe<Scalars['Int']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  uploadedByUserId?: InputMaybe<Scalars['uuid']>;
};

/** aggregate stddev on columns */
export type FilesStddevFields = {
  __typename?: 'files_stddev_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev() on columns of table "storage.files" */
export type FilesStddevOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddev_pop on columns */
export type FilesStddevPopFields = {
  __typename?: 'files_stddev_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_pop() on columns of table "storage.files" */
export type FilesStddevPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate stddev_samp on columns */
export type FilesStddevSampFields = {
  __typename?: 'files_stddev_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by stddev_samp() on columns of table "storage.files" */
export type FilesStddevSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate sum on columns */
export type FilesSumFields = {
  __typename?: 'files_sum_fields';
  size?: Maybe<Scalars['Int']>;
};

/** order by sum() on columns of table "storage.files" */
export type FilesSumOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** update columns of table "storage.files" */
export enum FilesUpdateColumn {
  /** column name */
  BucketId = 'bucketId',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  Etag = 'etag',
  /** column name */
  Id = 'id',
  /** column name */
  IsUploaded = 'isUploaded',
  /** column name */
  MimeType = 'mimeType',
  /** column name */
  Name = 'name',
  /** column name */
  Size = 'size',
  /** column name */
  UpdatedAt = 'updatedAt',
  /** column name */
  UploadedByUserId = 'uploadedByUserId'
}

export type FilesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<FilesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};

/** aggregate var_pop on columns */
export type FilesVarPopFields = {
  __typename?: 'files_var_pop_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_pop() on columns of table "storage.files" */
export type FilesVarPopOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate var_samp on columns */
export type FilesVarSampFields = {
  __typename?: 'files_var_samp_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by var_samp() on columns of table "storage.files" */
export type FilesVarSampOrderBy = {
  size?: InputMaybe<OrderBy>;
};

/** aggregate variance on columns */
export type FilesVarianceFields = {
  __typename?: 'files_variance_fields';
  size?: Maybe<Scalars['Float']>;
};

/** order by variance() on columns of table "storage.files" */
export type FilesVarianceOrderBy = {
  size?: InputMaybe<OrderBy>;
};

export type JsonbCastExp = {
  String?: InputMaybe<StringComparisonExp>;
};

/** Boolean expression to compare columns of type "jsonb". All fields are combined with logical 'AND'. */
export type JsonbComparisonExp = {
  _cast?: InputMaybe<JsonbCastExp>;
  /** is the column contained in the given json value */
  _contained_in?: InputMaybe<Scalars['jsonb']>;
  /** does the column contain the given json value at the top level */
  _contains?: InputMaybe<Scalars['jsonb']>;
  _eq?: InputMaybe<Scalars['jsonb']>;
  _gt?: InputMaybe<Scalars['jsonb']>;
  _gte?: InputMaybe<Scalars['jsonb']>;
  /** does the string exist as a top-level key in the column */
  _has_key?: InputMaybe<Scalars['String']>;
  /** do all of these strings exist as top-level keys in the column */
  _has_keys_all?: InputMaybe<Array<Scalars['String']>>;
  /** do any of these strings exist as top-level keys in the column */
  _has_keys_any?: InputMaybe<Array<Scalars['String']>>;
  _in?: InputMaybe<Array<Scalars['jsonb']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['jsonb']>;
  _lte?: InputMaybe<Scalars['jsonb']>;
  _neq?: InputMaybe<Scalars['jsonb']>;
  _nin?: InputMaybe<Array<Scalars['jsonb']>>;
};

/** mutation root */
export type MutationRoot = {
  __typename?: 'mutation_root';
  /** delete single row from the table: "auth.providers" */
  deleteAuthProvider?: Maybe<AuthProviders>;
  /** delete single row from the table: "auth.provider_requests" */
  deleteAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** delete data from the table: "auth.provider_requests" */
  deleteAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** delete data from the table: "auth.providers" */
  deleteAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** delete single row from the table: "auth.refresh_tokens" */
  deleteAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** delete data from the table: "auth.refresh_tokens" */
  deleteAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** delete single row from the table: "auth.roles" */
  deleteAuthRole?: Maybe<AuthRoles>;
  /** delete data from the table: "auth.roles" */
  deleteAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** delete single row from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** delete data from the table: "auth.user_authenticators" */
  deleteAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** delete single row from the table: "auth.user_providers" */
  deleteAuthUserProvider?: Maybe<AuthUserProviders>;
  /** delete data from the table: "auth.user_providers" */
  deleteAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** delete single row from the table: "auth.user_roles" */
  deleteAuthUserRole?: Maybe<AuthUserRoles>;
  /** delete data from the table: "auth.user_roles" */
  deleteAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** delete single row from the table: "storage.buckets" */
  deleteBucket?: Maybe<Buckets>;
  /** delete data from the table: "storage.buckets" */
  deleteBuckets?: Maybe<BucketsMutationResponse>;
  /** delete single row from the table: "fetch_requests" */
  deleteFetchRequest?: Maybe<FetchRequests>;
  /** delete data from the table: "fetch_requests" */
  deleteFetchRequests?: Maybe<FetchRequestsMutationResponse>;
  /** delete single row from the table: "storage.files" */
  deleteFile?: Maybe<Files>;
  /** delete data from the table: "storage.files" */
  deleteFiles?: Maybe<FilesMutationResponse>;
  /** delete single row from the table: "auth.users" */
  deleteUser?: Maybe<Users>;
  /** delete data from the table: "auth.users" */
  deleteUsers?: Maybe<UsersMutationResponse>;
  /** delete data from the table: "vacancies" */
  deleteVacancies?: Maybe<VacanciesMutationResponse>;
  /** delete single row from the table: "vacancies" */
  deleteVacancy?: Maybe<Vacancies>;
  /** insert a single row into the table: "auth.providers" */
  insertAuthProvider?: Maybe<AuthProviders>;
  /** insert a single row into the table: "auth.provider_requests" */
  insertAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** insert data into the table: "auth.provider_requests" */
  insertAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** insert data into the table: "auth.providers" */
  insertAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** insert a single row into the table: "auth.refresh_tokens" */
  insertAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** insert data into the table: "auth.refresh_tokens" */
  insertAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** insert a single row into the table: "auth.roles" */
  insertAuthRole?: Maybe<AuthRoles>;
  /** insert data into the table: "auth.roles" */
  insertAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** insert a single row into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** insert data into the table: "auth.user_authenticators" */
  insertAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** insert a single row into the table: "auth.user_providers" */
  insertAuthUserProvider?: Maybe<AuthUserProviders>;
  /** insert data into the table: "auth.user_providers" */
  insertAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** insert a single row into the table: "auth.user_roles" */
  insertAuthUserRole?: Maybe<AuthUserRoles>;
  /** insert data into the table: "auth.user_roles" */
  insertAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** insert a single row into the table: "storage.buckets" */
  insertBucket?: Maybe<Buckets>;
  /** insert data into the table: "storage.buckets" */
  insertBuckets?: Maybe<BucketsMutationResponse>;
  /** insert a single row into the table: "fetch_requests" */
  insertFetchRequest?: Maybe<FetchRequests>;
  /** insert data into the table: "fetch_requests" */
  insertFetchRequests?: Maybe<FetchRequestsMutationResponse>;
  /** insert a single row into the table: "storage.files" */
  insertFile?: Maybe<Files>;
  /** insert data into the table: "storage.files" */
  insertFiles?: Maybe<FilesMutationResponse>;
  /** insert a single row into the table: "auth.users" */
  insertUser?: Maybe<Users>;
  /** insert data into the table: "auth.users" */
  insertUsers?: Maybe<UsersMutationResponse>;
  /** insert data into the table: "vacancies" */
  insertVacancies?: Maybe<VacanciesMutationResponse>;
  /** insert a single row into the table: "vacancies" */
  insertVacancy?: Maybe<Vacancies>;
  /** update single row of the table: "auth.providers" */
  updateAuthProvider?: Maybe<AuthProviders>;
  /** update single row of the table: "auth.provider_requests" */
  updateAuthProviderRequest?: Maybe<AuthProviderRequests>;
  /** update data of the table: "auth.provider_requests" */
  updateAuthProviderRequests?: Maybe<AuthProviderRequestsMutationResponse>;
  /** update data of the table: "auth.providers" */
  updateAuthProviders?: Maybe<AuthProvidersMutationResponse>;
  /** update single row of the table: "auth.refresh_tokens" */
  updateAuthRefreshToken?: Maybe<AuthRefreshTokens>;
  /** update data of the table: "auth.refresh_tokens" */
  updateAuthRefreshTokens?: Maybe<AuthRefreshTokensMutationResponse>;
  /** update single row of the table: "auth.roles" */
  updateAuthRole?: Maybe<AuthRoles>;
  /** update data of the table: "auth.roles" */
  updateAuthRoles?: Maybe<AuthRolesMutationResponse>;
  /** update single row of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** update data of the table: "auth.user_authenticators" */
  updateAuthUserAuthenticators?: Maybe<AuthUserAuthenticatorsMutationResponse>;
  /** update single row of the table: "auth.user_providers" */
  updateAuthUserProvider?: Maybe<AuthUserProviders>;
  /** update data of the table: "auth.user_providers" */
  updateAuthUserProviders?: Maybe<AuthUserProvidersMutationResponse>;
  /** update single row of the table: "auth.user_roles" */
  updateAuthUserRole?: Maybe<AuthUserRoles>;
  /** update data of the table: "auth.user_roles" */
  updateAuthUserRoles?: Maybe<AuthUserRolesMutationResponse>;
  /** update single row of the table: "storage.buckets" */
  updateBucket?: Maybe<Buckets>;
  /** update data of the table: "storage.buckets" */
  updateBuckets?: Maybe<BucketsMutationResponse>;
  /** update single row of the table: "fetch_requests" */
  updateFetchRequest?: Maybe<FetchRequests>;
  /** update data of the table: "fetch_requests" */
  updateFetchRequests?: Maybe<FetchRequestsMutationResponse>;
  /** update single row of the table: "storage.files" */
  updateFile?: Maybe<Files>;
  /** update data of the table: "storage.files" */
  updateFiles?: Maybe<FilesMutationResponse>;
  /** update single row of the table: "auth.users" */
  updateUser?: Maybe<Users>;
  /** update data of the table: "auth.users" */
  updateUsers?: Maybe<UsersMutationResponse>;
  /** update data of the table: "vacancies" */
  updateVacancies?: Maybe<VacanciesMutationResponse>;
  /** update single row of the table: "vacancies" */
  updateVacancy?: Maybe<Vacancies>;
  /** update multiples rows of table: "auth.provider_requests" */
  update_authProviderRequests_many?: Maybe<Array<Maybe<AuthProviderRequestsMutationResponse>>>;
  /** update multiples rows of table: "auth.providers" */
  update_authProviders_many?: Maybe<Array<Maybe<AuthProvidersMutationResponse>>>;
  /** update multiples rows of table: "auth.refresh_tokens" */
  update_authRefreshTokens_many?: Maybe<Array<Maybe<AuthRefreshTokensMutationResponse>>>;
  /** update multiples rows of table: "auth.roles" */
  update_authRoles_many?: Maybe<Array<Maybe<AuthRolesMutationResponse>>>;
  /** update multiples rows of table: "auth.user_authenticators" */
  update_authUserAuthenticators_many?: Maybe<Array<Maybe<AuthUserAuthenticatorsMutationResponse>>>;
  /** update multiples rows of table: "auth.user_providers" */
  update_authUserProviders_many?: Maybe<Array<Maybe<AuthUserProvidersMutationResponse>>>;
  /** update multiples rows of table: "auth.user_roles" */
  update_authUserRoles_many?: Maybe<Array<Maybe<AuthUserRolesMutationResponse>>>;
  /** update multiples rows of table: "storage.buckets" */
  update_buckets_many?: Maybe<Array<Maybe<BucketsMutationResponse>>>;
  /** update multiples rows of table: "fetch_requests" */
  update_fetchRequests_many?: Maybe<Array<Maybe<FetchRequestsMutationResponse>>>;
  /** update multiples rows of table: "storage.files" */
  update_files_many?: Maybe<Array<Maybe<FilesMutationResponse>>>;
  /** update multiples rows of table: "auth.users" */
  update_users_many?: Maybe<Array<Maybe<UsersMutationResponse>>>;
  /** update multiples rows of table: "vacancies" */
  update_vacancies_many?: Maybe<Array<Maybe<VacanciesMutationResponse>>>;
};


/** mutation root */
export type MutationRootDeleteAuthProviderArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthProviderRequestsArgs = {
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthProvidersArgs = {
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthRefreshTokensArgs = {
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthRoleArgs = {
  role: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteAuthRolesArgs = {
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserAuthenticatorsArgs = {
  where: AuthUserAuthenticatorsBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserProvidersArgs = {
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type MutationRootDeleteAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteAuthUserRolesArgs = {
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type MutationRootDeleteBucketArgs = {
  id: Scalars['String'];
};


/** mutation root */
export type MutationRootDeleteBucketsArgs = {
  where: BucketsBoolExp;
};


/** mutation root */
export type MutationRootDeleteFetchRequestArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFetchRequestsArgs = {
  where: FetchRequestsBoolExp;
};


/** mutation root */
export type MutationRootDeleteFileArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteFilesArgs = {
  where: FilesBoolExp;
};


/** mutation root */
export type MutationRootDeleteUserArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type MutationRootDeleteUsersArgs = {
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootDeleteVacanciesArgs = {
  where: VacanciesBoolExp;
};


/** mutation root */
export type MutationRootDeleteVacancyArgs = {
  id: Scalars['Int'];
};


/** mutation root */
export type MutationRootInsertAuthProviderArgs = {
  object: AuthProvidersInsertInput;
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderRequestArgs = {
  object: AuthProviderRequestsInsertInput;
  on_conflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProviderRequestsArgs = {
  objects: Array<AuthProviderRequestsInsertInput>;
  on_conflict?: InputMaybe<AuthProviderRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthProvidersArgs = {
  objects: Array<AuthProvidersInsertInput>;
  on_conflict?: InputMaybe<AuthProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokenArgs = {
  object: AuthRefreshTokensInsertInput;
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRefreshTokensArgs = {
  objects: Array<AuthRefreshTokensInsertInput>;
  on_conflict?: InputMaybe<AuthRefreshTokensOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRoleArgs = {
  object: AuthRolesInsertInput;
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthRolesArgs = {
  objects: Array<AuthRolesInsertInput>;
  on_conflict?: InputMaybe<AuthRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserAuthenticatorArgs = {
  object: AuthUserAuthenticatorsInsertInput;
  on_conflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserAuthenticatorsArgs = {
  objects: Array<AuthUserAuthenticatorsInsertInput>;
  on_conflict?: InputMaybe<AuthUserAuthenticatorsOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserProviderArgs = {
  object: AuthUserProvidersInsertInput;
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserProvidersArgs = {
  objects: Array<AuthUserProvidersInsertInput>;
  on_conflict?: InputMaybe<AuthUserProvidersOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserRoleArgs = {
  object: AuthUserRolesInsertInput;
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertAuthUserRolesArgs = {
  objects: Array<AuthUserRolesInsertInput>;
  on_conflict?: InputMaybe<AuthUserRolesOnConflict>;
};


/** mutation root */
export type MutationRootInsertBucketArgs = {
  object: BucketsInsertInput;
  on_conflict?: InputMaybe<BucketsOnConflict>;
};


/** mutation root */
export type MutationRootInsertBucketsArgs = {
  objects: Array<BucketsInsertInput>;
  on_conflict?: InputMaybe<BucketsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFetchRequestArgs = {
  object: FetchRequestsInsertInput;
  on_conflict?: InputMaybe<FetchRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFetchRequestsArgs = {
  objects: Array<FetchRequestsInsertInput>;
  on_conflict?: InputMaybe<FetchRequestsOnConflict>;
};


/** mutation root */
export type MutationRootInsertFileArgs = {
  object: FilesInsertInput;
  on_conflict?: InputMaybe<FilesOnConflict>;
};


/** mutation root */
export type MutationRootInsertFilesArgs = {
  objects: Array<FilesInsertInput>;
  on_conflict?: InputMaybe<FilesOnConflict>;
};


/** mutation root */
export type MutationRootInsertUserArgs = {
  object: UsersInsertInput;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertUsersArgs = {
  objects: Array<UsersInsertInput>;
  on_conflict?: InputMaybe<UsersOnConflict>;
};


/** mutation root */
export type MutationRootInsertVacanciesArgs = {
  objects: Array<VacanciesInsertInput>;
  on_conflict?: InputMaybe<VacanciesOnConflict>;
};


/** mutation root */
export type MutationRootInsertVacancyArgs = {
  object: VacanciesInsertInput;
  on_conflict?: InputMaybe<VacanciesOnConflict>;
};


/** mutation root */
export type MutationRootUpdateAuthProviderArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  pk_columns: AuthProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _delete_at_path?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _delete_key?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  pk_columns: AuthProviderRequestsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestsArgs = {
  _append?: InputMaybe<AuthProviderRequestsAppendInput>;
  _delete_at_path?: InputMaybe<AuthProviderRequestsDeleteAtPathInput>;
  _delete_elem?: InputMaybe<AuthProviderRequestsDeleteElemInput>;
  _delete_key?: InputMaybe<AuthProviderRequestsDeleteKeyInput>;
  _prepend?: InputMaybe<AuthProviderRequestsPrependInput>;
  _set?: InputMaybe<AuthProviderRequestsSetInput>;
  where: AuthProviderRequestsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthProvidersArgs = {
  _set?: InputMaybe<AuthProvidersSetInput>;
  where: AuthProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokenArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  pk_columns: AuthRefreshTokensPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokensArgs = {
  _set?: InputMaybe<AuthRefreshTokensSetInput>;
  where: AuthRefreshTokensBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthRoleArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  pk_columns: AuthRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthRolesArgs = {
  _set?: InputMaybe<AuthRolesSetInput>;
  where: AuthRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserAuthenticatorArgs = {
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  pk_columns: AuthUserAuthenticatorsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserAuthenticatorsArgs = {
  _inc?: InputMaybe<AuthUserAuthenticatorsIncInput>;
  _set?: InputMaybe<AuthUserAuthenticatorsSetInput>;
  where: AuthUserAuthenticatorsBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserProviderArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  pk_columns: AuthUserProvidersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserProvidersArgs = {
  _set?: InputMaybe<AuthUserProvidersSetInput>;
  where: AuthUserProvidersBoolExp;
};


/** mutation root */
export type MutationRootUpdateAuthUserRoleArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  pk_columns: AuthUserRolesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthUserRolesArgs = {
  _set?: InputMaybe<AuthUserRolesSetInput>;
  where: AuthUserRolesBoolExp;
};


/** mutation root */
export type MutationRootUpdateBucketArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  pk_columns: BucketsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateBucketsArgs = {
  _inc?: InputMaybe<BucketsIncInput>;
  _set?: InputMaybe<BucketsSetInput>;
  where: BucketsBoolExp;
};


/** mutation root */
export type MutationRootUpdateFetchRequestArgs = {
  _inc?: InputMaybe<FetchRequestsIncInput>;
  _set?: InputMaybe<FetchRequestsSetInput>;
  pk_columns: FetchRequestsPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFetchRequestsArgs = {
  _inc?: InputMaybe<FetchRequestsIncInput>;
  _set?: InputMaybe<FetchRequestsSetInput>;
  where: FetchRequestsBoolExp;
};


/** mutation root */
export type MutationRootUpdateFileArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  pk_columns: FilesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateFilesArgs = {
  _inc?: InputMaybe<FilesIncInput>;
  _set?: InputMaybe<FilesSetInput>;
  where: FilesBoolExp;
};


/** mutation root */
export type MutationRootUpdateUserArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  pk_columns: UsersPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateUsersArgs = {
  _append?: InputMaybe<UsersAppendInput>;
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  _prepend?: InputMaybe<UsersPrependInput>;
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};


/** mutation root */
export type MutationRootUpdateVacanciesArgs = {
  _inc?: InputMaybe<VacanciesIncInput>;
  _set?: InputMaybe<VacanciesSetInput>;
  where: VacanciesBoolExp;
};


/** mutation root */
export type MutationRootUpdateVacancyArgs = {
  _inc?: InputMaybe<VacanciesIncInput>;
  _set?: InputMaybe<VacanciesSetInput>;
  pk_columns: VacanciesPkColumnsInput;
};


/** mutation root */
export type MutationRootUpdateAuthProviderRequestsManyArgs = {
  updates: Array<AuthProviderRequestsUpdates>;
};


/** mutation root */
export type MutationRootUpdateAuthProvidersManyArgs = {
  updates: Array<AuthProvidersUpdates>;
};


/** mutation root */
export type MutationRootUpdateAuthRefreshTokensManyArgs = {
  updates: Array<AuthRefreshTokensUpdates>;
};


/** mutation root */
export type MutationRootUpdateAuthRolesManyArgs = {
  updates: Array<AuthRolesUpdates>;
};


/** mutation root */
export type MutationRootUpdateAuthUserAuthenticatorsManyArgs = {
  updates: Array<AuthUserAuthenticatorsUpdates>;
};


/** mutation root */
export type MutationRootUpdateAuthUserProvidersManyArgs = {
  updates: Array<AuthUserProvidersUpdates>;
};


/** mutation root */
export type MutationRootUpdateAuthUserRolesManyArgs = {
  updates: Array<AuthUserRolesUpdates>;
};


/** mutation root */
export type MutationRootUpdateBucketsManyArgs = {
  updates: Array<BucketsUpdates>;
};


/** mutation root */
export type MutationRootUpdateFetchRequestsManyArgs = {
  updates: Array<FetchRequestsUpdates>;
};


/** mutation root */
export type MutationRootUpdateFilesManyArgs = {
  updates: Array<FilesUpdates>;
};


/** mutation root */
export type MutationRootUpdateUsersManyArgs = {
  updates: Array<UsersUpdates>;
};


/** mutation root */
export type MutationRootUpdateVacanciesManyArgs = {
  updates: Array<VacanciesUpdates>;
};

/** column ordering options */
export enum OrderBy {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type QueryRoot = {
  __typename?: 'query_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** fetch data from the table: "fetch_requests" using primary key columns */
  fetchRequest?: Maybe<FetchRequests>;
  /** fetch data from the table: "fetch_requests" */
  fetchRequests: Array<FetchRequests>;
  /** fetch aggregated fields from the table: "fetch_requests" */
  fetchRequestsAggregate: FetchRequestsAggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "vacancies" */
  vacancies: Array<Vacancies>;
  /** fetch aggregated fields from the table: "vacancies" */
  vacanciesAggregate: VacanciesAggregate;
  /** fetch data from the table: "vacancies" using primary key columns */
  vacancy?: Maybe<Vacancies>;
};


export type QueryRootAuthProviderArgs = {
  id: Scalars['String'];
};


export type QueryRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type QueryRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type QueryRootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type QueryRootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type QueryRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type QueryRootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type QueryRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type QueryRootAuthRoleArgs = {
  role: Scalars['String'];
};


export type QueryRootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type QueryRootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type QueryRootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type QueryRootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type QueryRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type QueryRootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type QueryRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type QueryRootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type QueryRootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type QueryRootBucketArgs = {
  id: Scalars['String'];
};


export type QueryRootBucketsArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type QueryRootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type QueryRootFetchRequestArgs = {
  id: Scalars['uuid'];
};


export type QueryRootFetchRequestsArgs = {
  distinct_on?: InputMaybe<Array<FetchRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FetchRequestsOrderBy>>;
  where?: InputMaybe<FetchRequestsBoolExp>;
};


export type QueryRootFetchRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FetchRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FetchRequestsOrderBy>>;
  where?: InputMaybe<FetchRequestsBoolExp>;
};


export type QueryRootFileArgs = {
  id: Scalars['uuid'];
};


export type QueryRootFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type QueryRootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type QueryRootUserArgs = {
  id: Scalars['uuid'];
};


export type QueryRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type QueryRootVacanciesArgs = {
  distinct_on?: InputMaybe<Array<VacanciesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VacanciesOrderBy>>;
  where?: InputMaybe<VacanciesBoolExp>;
};


export type QueryRootVacanciesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VacanciesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VacanciesOrderBy>>;
  where?: InputMaybe<VacanciesBoolExp>;
};


export type QueryRootVacancyArgs = {
  id: Scalars['Int'];
};

export type SubscriptionRoot = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "auth.providers" using primary key columns */
  authProvider?: Maybe<AuthProviders>;
  /** fetch data from the table: "auth.provider_requests" using primary key columns */
  authProviderRequest?: Maybe<AuthProviderRequests>;
  /** fetch data from the table: "auth.provider_requests" */
  authProviderRequests: Array<AuthProviderRequests>;
  /** fetch aggregated fields from the table: "auth.provider_requests" */
  authProviderRequestsAggregate: AuthProviderRequestsAggregate;
  /** fetch data from the table: "auth.providers" */
  authProviders: Array<AuthProviders>;
  /** fetch aggregated fields from the table: "auth.providers" */
  authProvidersAggregate: AuthProvidersAggregate;
  /** fetch data from the table: "auth.refresh_tokens" using primary key columns */
  authRefreshToken?: Maybe<AuthRefreshTokens>;
  /** fetch data from the table: "auth.refresh_tokens" */
  authRefreshTokens: Array<AuthRefreshTokens>;
  /** fetch aggregated fields from the table: "auth.refresh_tokens" */
  authRefreshTokensAggregate: AuthRefreshTokensAggregate;
  /** fetch data from the table: "auth.roles" using primary key columns */
  authRole?: Maybe<AuthRoles>;
  /** fetch data from the table: "auth.roles" */
  authRoles: Array<AuthRoles>;
  /** fetch aggregated fields from the table: "auth.roles" */
  authRolesAggregate: AuthRolesAggregate;
  /** fetch data from the table: "auth.user_authenticators" using primary key columns */
  authUserAuthenticator?: Maybe<AuthUserAuthenticators>;
  /** fetch data from the table: "auth.user_authenticators" */
  authUserAuthenticators: Array<AuthUserAuthenticators>;
  /** fetch aggregated fields from the table: "auth.user_authenticators" */
  authUserAuthenticatorsAggregate: AuthUserAuthenticatorsAggregate;
  /** fetch data from the table: "auth.user_providers" using primary key columns */
  authUserProvider?: Maybe<AuthUserProviders>;
  /** fetch data from the table: "auth.user_providers" */
  authUserProviders: Array<AuthUserProviders>;
  /** fetch aggregated fields from the table: "auth.user_providers" */
  authUserProvidersAggregate: AuthUserProvidersAggregate;
  /** fetch data from the table: "auth.user_roles" using primary key columns */
  authUserRole?: Maybe<AuthUserRoles>;
  /** fetch data from the table: "auth.user_roles" */
  authUserRoles: Array<AuthUserRoles>;
  /** fetch aggregated fields from the table: "auth.user_roles" */
  authUserRolesAggregate: AuthUserRolesAggregate;
  /** fetch data from the table: "storage.buckets" using primary key columns */
  bucket?: Maybe<Buckets>;
  /** fetch data from the table: "storage.buckets" */
  buckets: Array<Buckets>;
  /** fetch aggregated fields from the table: "storage.buckets" */
  bucketsAggregate: BucketsAggregate;
  /** fetch data from the table: "fetch_requests" using primary key columns */
  fetchRequest?: Maybe<FetchRequests>;
  /** fetch data from the table: "fetch_requests" */
  fetchRequests: Array<FetchRequests>;
  /** fetch aggregated fields from the table: "fetch_requests" */
  fetchRequestsAggregate: FetchRequestsAggregate;
  /** fetch data from the table: "storage.files" using primary key columns */
  file?: Maybe<Files>;
  /** An array relationship */
  files: Array<Files>;
  /** fetch aggregated fields from the table: "storage.files" */
  filesAggregate: FilesAggregate;
  /** fetch data from the table: "auth.users" using primary key columns */
  user?: Maybe<Users>;
  /** fetch data from the table: "auth.users" */
  users: Array<Users>;
  /** fetch aggregated fields from the table: "auth.users" */
  usersAggregate: UsersAggregate;
  /** fetch data from the table: "vacancies" */
  vacancies: Array<Vacancies>;
  /** fetch aggregated fields from the table: "vacancies" */
  vacanciesAggregate: VacanciesAggregate;
  /** fetch data from the table: "vacancies" using primary key columns */
  vacancy?: Maybe<Vacancies>;
};


export type SubscriptionRootAuthProviderArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootAuthProviderRequestArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthProviderRequestsArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type SubscriptionRootAuthProviderRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProviderRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProviderRequestsOrderBy>>;
  where?: InputMaybe<AuthProviderRequestsBoolExp>;
};


export type SubscriptionRootAuthProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type SubscriptionRootAuthProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthProvidersOrderBy>>;
  where?: InputMaybe<AuthProvidersBoolExp>;
};


export type SubscriptionRootAuthRefreshTokenArgs = {
  refreshToken: Scalars['uuid'];
};


export type SubscriptionRootAuthRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type SubscriptionRootAuthRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


export type SubscriptionRootAuthRoleArgs = {
  role: Scalars['String'];
};


export type SubscriptionRootAuthRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type SubscriptionRootAuthRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRolesOrderBy>>;
  where?: InputMaybe<AuthRolesBoolExp>;
};


export type SubscriptionRootAuthUserAuthenticatorArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type SubscriptionRootAuthUserAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


export type SubscriptionRootAuthUserProviderArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type SubscriptionRootAuthUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


export type SubscriptionRootAuthUserRoleArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootAuthUserRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type SubscriptionRootAuthUserRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


export type SubscriptionRootBucketArgs = {
  id: Scalars['String'];
};


export type SubscriptionRootBucketsArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type SubscriptionRootBucketsAggregateArgs = {
  distinct_on?: InputMaybe<Array<BucketsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<BucketsOrderBy>>;
  where?: InputMaybe<BucketsBoolExp>;
};


export type SubscriptionRootFetchRequestArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootFetchRequestsArgs = {
  distinct_on?: InputMaybe<Array<FetchRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FetchRequestsOrderBy>>;
  where?: InputMaybe<FetchRequestsBoolExp>;
};


export type SubscriptionRootFetchRequestsAggregateArgs = {
  distinct_on?: InputMaybe<Array<FetchRequestsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FetchRequestsOrderBy>>;
  where?: InputMaybe<FetchRequestsBoolExp>;
};


export type SubscriptionRootFileArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootFilesArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type SubscriptionRootFilesAggregateArgs = {
  distinct_on?: InputMaybe<Array<FilesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<FilesOrderBy>>;
  where?: InputMaybe<FilesBoolExp>;
};


export type SubscriptionRootUserArgs = {
  id: Scalars['uuid'];
};


export type SubscriptionRootUsersArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootUsersAggregateArgs = {
  distinct_on?: InputMaybe<Array<UsersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<UsersOrderBy>>;
  where?: InputMaybe<UsersBoolExp>;
};


export type SubscriptionRootVacanciesArgs = {
  distinct_on?: InputMaybe<Array<VacanciesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VacanciesOrderBy>>;
  where?: InputMaybe<VacanciesBoolExp>;
};


export type SubscriptionRootVacanciesAggregateArgs = {
  distinct_on?: InputMaybe<Array<VacanciesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<VacanciesOrderBy>>;
  where?: InputMaybe<VacanciesBoolExp>;
};


export type SubscriptionRootVacancyArgs = {
  id: Scalars['Int'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type TimestamptzComparisonExp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type Users = {
  __typename?: 'users';
  activeMfaType?: Maybe<Scalars['String']>;
  /** An array relationship */
  authenticators: Array<AuthUserAuthenticators>;
  /** An aggregate relationship */
  authenticators_aggregate: AuthUserAuthenticatorsAggregate;
  avatarUrl: Scalars['String'];
  createdAt: Scalars['timestamptz'];
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole: Scalars['String'];
  /** An object relationship */
  defaultRoleByRole: AuthRoles;
  disabled: Scalars['Boolean'];
  displayName: Scalars['String'];
  email?: Maybe<Scalars['citext']>;
  emailVerified: Scalars['Boolean'];
  id: Scalars['uuid'];
  isAnonymous: Scalars['Boolean'];
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale: Scalars['String'];
  metadata?: Maybe<Scalars['jsonb']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt: Scalars['timestamptz'];
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  phoneNumberVerified: Scalars['Boolean'];
  /** An array relationship */
  refreshTokens: Array<AuthRefreshTokens>;
  /** An aggregate relationship */
  refreshTokens_aggregate: AuthRefreshTokensAggregate;
  /** An array relationship */
  roles: Array<AuthUserRoles>;
  /** An aggregate relationship */
  roles_aggregate: AuthUserRolesAggregate;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt: Scalars['timestamptz'];
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt: Scalars['timestamptz'];
  /** An array relationship */
  userProviders: Array<AuthUserProviders>;
  /** An aggregate relationship */
  userProviders_aggregate: AuthUserProvidersAggregate;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersAuthenticatorsAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserAuthenticatorsSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserAuthenticatorsOrderBy>>;
  where?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersMetadataArgs = {
  path?: InputMaybe<Scalars['String']>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRefreshTokensAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthRefreshTokensSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthRefreshTokensOrderBy>>;
  where?: InputMaybe<AuthRefreshTokensBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersRolesAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserRolesSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserRolesOrderBy>>;
  where?: InputMaybe<AuthUserRolesBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};


/** User account information. Don't modify its structure as Hasura Auth relies on it to function properly. */
export type UsersUserProvidersAggregateArgs = {
  distinct_on?: InputMaybe<Array<AuthUserProvidersSelectColumn>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<AuthUserProvidersOrderBy>>;
  where?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** aggregated selection of "auth.users" */
export type UsersAggregate = {
  __typename?: 'users_aggregate';
  aggregate?: Maybe<UsersAggregateFields>;
  nodes: Array<Users>;
};

/** aggregate fields of "auth.users" */
export type UsersAggregateFields = {
  __typename?: 'users_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<UsersMaxFields>;
  min?: Maybe<UsersMinFields>;
};


/** aggregate fields of "auth.users" */
export type UsersAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<UsersSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** order by aggregate values of table "auth.users" */
export type UsersAggregateOrderBy = {
  count?: InputMaybe<OrderBy>;
  max?: InputMaybe<UsersMaxOrderBy>;
  min?: InputMaybe<UsersMinOrderBy>;
};

/** append existing jsonb value of filtered columns with new jsonb value */
export type UsersAppendInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** input type for inserting array relation for remote table "auth.users" */
export type UsersArrRelInsertInput = {
  data: Array<UsersInsertInput>;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** Boolean expression to filter rows from the table "auth.users". All fields are combined with a logical 'AND'. */
export type UsersBoolExp = {
  _and?: InputMaybe<Array<UsersBoolExp>>;
  _not?: InputMaybe<UsersBoolExp>;
  _or?: InputMaybe<Array<UsersBoolExp>>;
  activeMfaType?: InputMaybe<StringComparisonExp>;
  authenticators?: InputMaybe<AuthUserAuthenticatorsBoolExp>;
  avatarUrl?: InputMaybe<StringComparisonExp>;
  createdAt?: InputMaybe<TimestamptzComparisonExp>;
  currentChallenge?: InputMaybe<StringComparisonExp>;
  defaultRole?: InputMaybe<StringComparisonExp>;
  defaultRoleByRole?: InputMaybe<AuthRolesBoolExp>;
  disabled?: InputMaybe<BooleanComparisonExp>;
  displayName?: InputMaybe<StringComparisonExp>;
  email?: InputMaybe<CitextComparisonExp>;
  emailVerified?: InputMaybe<BooleanComparisonExp>;
  id?: InputMaybe<UuidComparisonExp>;
  isAnonymous?: InputMaybe<BooleanComparisonExp>;
  lastSeen?: InputMaybe<TimestamptzComparisonExp>;
  locale?: InputMaybe<StringComparisonExp>;
  metadata?: InputMaybe<JsonbComparisonExp>;
  newEmail?: InputMaybe<CitextComparisonExp>;
  otpHash?: InputMaybe<StringComparisonExp>;
  otpHashExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  otpMethodLastUsed?: InputMaybe<StringComparisonExp>;
  passwordHash?: InputMaybe<StringComparisonExp>;
  phoneNumber?: InputMaybe<StringComparisonExp>;
  phoneNumberVerified?: InputMaybe<BooleanComparisonExp>;
  refreshTokens?: InputMaybe<AuthRefreshTokensBoolExp>;
  roles?: InputMaybe<AuthUserRolesBoolExp>;
  ticket?: InputMaybe<StringComparisonExp>;
  ticketExpiresAt?: InputMaybe<TimestamptzComparisonExp>;
  totpSecret?: InputMaybe<StringComparisonExp>;
  updatedAt?: InputMaybe<TimestamptzComparisonExp>;
  userProviders?: InputMaybe<AuthUserProvidersBoolExp>;
};

/** unique or primary key constraints on table "auth.users" */
export enum UsersConstraint {
  /** unique or primary key constraint on columns "email" */
  UsersEmailKey = 'users_email_key',
  /** unique or primary key constraint on columns "phone_number" */
  UsersPhoneNumberKey = 'users_phone_number_key',
  /** unique or primary key constraint on columns "id" */
  UsersPkey = 'users_pkey'
}

/** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
export type UsersDeleteAtPathInput = {
  metadata?: InputMaybe<Array<Scalars['String']>>;
};

/** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
export type UsersDeleteElemInput = {
  metadata?: InputMaybe<Scalars['Int']>;
};

/** delete key/value pair or string element. key/value pairs are matched based on their key value */
export type UsersDeleteKeyInput = {
  metadata?: InputMaybe<Scalars['String']>;
};

/** input type for inserting data into table "auth.users" */
export type UsersInsertInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  authenticators?: InputMaybe<AuthUserAuthenticatorsArrRelInsertInput>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  defaultRoleByRole?: InputMaybe<AuthRolesObjRelInsertInput>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  refreshTokens?: InputMaybe<AuthRefreshTokensArrRelInsertInput>;
  roles?: InputMaybe<AuthUserRolesArrRelInsertInput>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
  userProviders?: InputMaybe<AuthUserProvidersArrRelInsertInput>;
};

/** aggregate max on columns */
export type UsersMaxFields = {
  __typename?: 'users_max_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by max() on columns of table "auth.users" */
export type UsersMaxOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** aggregate min on columns */
export type UsersMinFields = {
  __typename?: 'users_min_fields';
  activeMfaType?: Maybe<Scalars['String']>;
  avatarUrl?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['timestamptz']>;
  currentChallenge?: Maybe<Scalars['String']>;
  defaultRole?: Maybe<Scalars['String']>;
  displayName?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['citext']>;
  id?: Maybe<Scalars['uuid']>;
  lastSeen?: Maybe<Scalars['timestamptz']>;
  locale?: Maybe<Scalars['String']>;
  newEmail?: Maybe<Scalars['citext']>;
  otpHash?: Maybe<Scalars['String']>;
  otpHashExpiresAt?: Maybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: Maybe<Scalars['String']>;
  passwordHash?: Maybe<Scalars['String']>;
  phoneNumber?: Maybe<Scalars['String']>;
  ticket?: Maybe<Scalars['String']>;
  ticketExpiresAt?: Maybe<Scalars['timestamptz']>;
  totpSecret?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['timestamptz']>;
};

/** order by min() on columns of table "auth.users" */
export type UsersMinOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
};

/** response of any mutation on the table "auth.users" */
export type UsersMutationResponse = {
  __typename?: 'users_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Users>;
};

/** input type for inserting object relation for remote table "auth.users" */
export type UsersObjRelInsertInput = {
  data: UsersInsertInput;
  /** upsert condition */
  on_conflict?: InputMaybe<UsersOnConflict>;
};

/** on_conflict condition type for table "auth.users" */
export type UsersOnConflict = {
  constraint: UsersConstraint;
  update_columns?: Array<UsersUpdateColumn>;
  where?: InputMaybe<UsersBoolExp>;
};

/** Ordering options when selecting data from "auth.users". */
export type UsersOrderBy = {
  activeMfaType?: InputMaybe<OrderBy>;
  authenticators_aggregate?: InputMaybe<AuthUserAuthenticatorsAggregateOrderBy>;
  avatarUrl?: InputMaybe<OrderBy>;
  createdAt?: InputMaybe<OrderBy>;
  currentChallenge?: InputMaybe<OrderBy>;
  defaultRole?: InputMaybe<OrderBy>;
  defaultRoleByRole?: InputMaybe<AuthRolesOrderBy>;
  disabled?: InputMaybe<OrderBy>;
  displayName?: InputMaybe<OrderBy>;
  email?: InputMaybe<OrderBy>;
  emailVerified?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  isAnonymous?: InputMaybe<OrderBy>;
  lastSeen?: InputMaybe<OrderBy>;
  locale?: InputMaybe<OrderBy>;
  metadata?: InputMaybe<OrderBy>;
  newEmail?: InputMaybe<OrderBy>;
  otpHash?: InputMaybe<OrderBy>;
  otpHashExpiresAt?: InputMaybe<OrderBy>;
  otpMethodLastUsed?: InputMaybe<OrderBy>;
  passwordHash?: InputMaybe<OrderBy>;
  phoneNumber?: InputMaybe<OrderBy>;
  phoneNumberVerified?: InputMaybe<OrderBy>;
  refreshTokens_aggregate?: InputMaybe<AuthRefreshTokensAggregateOrderBy>;
  roles_aggregate?: InputMaybe<AuthUserRolesAggregateOrderBy>;
  ticket?: InputMaybe<OrderBy>;
  ticketExpiresAt?: InputMaybe<OrderBy>;
  totpSecret?: InputMaybe<OrderBy>;
  updatedAt?: InputMaybe<OrderBy>;
  userProviders_aggregate?: InputMaybe<AuthUserProvidersAggregateOrderBy>;
};

/** primary key columns input for table: users */
export type UsersPkColumnsInput = {
  id: Scalars['uuid'];
};

/** prepend existing jsonb value of filtered columns with new jsonb value */
export type UsersPrependInput = {
  metadata?: InputMaybe<Scalars['jsonb']>;
};

/** select columns of table "auth.users" */
export enum UsersSelectColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

/** input type for updating data in table "auth.users" */
export type UsersSetInput = {
  activeMfaType?: InputMaybe<Scalars['String']>;
  avatarUrl?: InputMaybe<Scalars['String']>;
  createdAt?: InputMaybe<Scalars['timestamptz']>;
  currentChallenge?: InputMaybe<Scalars['String']>;
  defaultRole?: InputMaybe<Scalars['String']>;
  disabled?: InputMaybe<Scalars['Boolean']>;
  displayName?: InputMaybe<Scalars['String']>;
  email?: InputMaybe<Scalars['citext']>;
  emailVerified?: InputMaybe<Scalars['Boolean']>;
  id?: InputMaybe<Scalars['uuid']>;
  isAnonymous?: InputMaybe<Scalars['Boolean']>;
  lastSeen?: InputMaybe<Scalars['timestamptz']>;
  locale?: InputMaybe<Scalars['String']>;
  metadata?: InputMaybe<Scalars['jsonb']>;
  newEmail?: InputMaybe<Scalars['citext']>;
  otpHash?: InputMaybe<Scalars['String']>;
  otpHashExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  otpMethodLastUsed?: InputMaybe<Scalars['String']>;
  passwordHash?: InputMaybe<Scalars['String']>;
  phoneNumber?: InputMaybe<Scalars['String']>;
  phoneNumberVerified?: InputMaybe<Scalars['Boolean']>;
  ticket?: InputMaybe<Scalars['String']>;
  ticketExpiresAt?: InputMaybe<Scalars['timestamptz']>;
  totpSecret?: InputMaybe<Scalars['String']>;
  updatedAt?: InputMaybe<Scalars['timestamptz']>;
};

/** update columns of table "auth.users" */
export enum UsersUpdateColumn {
  /** column name */
  ActiveMfaType = 'activeMfaType',
  /** column name */
  AvatarUrl = 'avatarUrl',
  /** column name */
  CreatedAt = 'createdAt',
  /** column name */
  CurrentChallenge = 'currentChallenge',
  /** column name */
  DefaultRole = 'defaultRole',
  /** column name */
  Disabled = 'disabled',
  /** column name */
  DisplayName = 'displayName',
  /** column name */
  Email = 'email',
  /** column name */
  EmailVerified = 'emailVerified',
  /** column name */
  Id = 'id',
  /** column name */
  IsAnonymous = 'isAnonymous',
  /** column name */
  LastSeen = 'lastSeen',
  /** column name */
  Locale = 'locale',
  /** column name */
  Metadata = 'metadata',
  /** column name */
  NewEmail = 'newEmail',
  /** column name */
  OtpHash = 'otpHash',
  /** column name */
  OtpHashExpiresAt = 'otpHashExpiresAt',
  /** column name */
  OtpMethodLastUsed = 'otpMethodLastUsed',
  /** column name */
  PasswordHash = 'passwordHash',
  /** column name */
  PhoneNumber = 'phoneNumber',
  /** column name */
  PhoneNumberVerified = 'phoneNumberVerified',
  /** column name */
  Ticket = 'ticket',
  /** column name */
  TicketExpiresAt = 'ticketExpiresAt',
  /** column name */
  TotpSecret = 'totpSecret',
  /** column name */
  UpdatedAt = 'updatedAt'
}

export type UsersUpdates = {
  /** append existing jsonb value of filtered columns with new jsonb value */
  _append?: InputMaybe<UsersAppendInput>;
  /** delete the field or element with specified path (for JSON arrays, negative integers count from the end) */
  _delete_at_path?: InputMaybe<UsersDeleteAtPathInput>;
  /** delete the array element with specified index (negative integers count from the end). throws an error if top level container is not an array */
  _delete_elem?: InputMaybe<UsersDeleteElemInput>;
  /** delete key/value pair or string element. key/value pairs are matched based on their key value */
  _delete_key?: InputMaybe<UsersDeleteKeyInput>;
  /** prepend existing jsonb value of filtered columns with new jsonb value */
  _prepend?: InputMaybe<UsersPrependInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<UsersSetInput>;
  where: UsersBoolExp;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type UuidComparisonExp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

/** columns and relationships of "vacancies" */
export type Vacancies = {
  __typename?: 'vacancies';
  agency: Scalars['String'];
  category: Scalars['String'];
  closingDate?: Maybe<Scalars['date']>;
  id: Scalars['Int'];
  jobRef: Scalars['String'];
  jobType?: Maybe<Scalars['String']>;
  posted?: Maybe<Scalars['date']>;
  salary: Scalars['String'];
  staffGroup: Scalars['String'];
  title: Scalars['String'];
};

/** aggregated selection of "vacancies" */
export type VacanciesAggregate = {
  __typename?: 'vacancies_aggregate';
  aggregate?: Maybe<VacanciesAggregateFields>;
  nodes: Array<Vacancies>;
};

/** aggregate fields of "vacancies" */
export type VacanciesAggregateFields = {
  __typename?: 'vacancies_aggregate_fields';
  avg?: Maybe<VacanciesAvgFields>;
  count: Scalars['Int'];
  max?: Maybe<VacanciesMaxFields>;
  min?: Maybe<VacanciesMinFields>;
  stddev?: Maybe<VacanciesStddevFields>;
  stddev_pop?: Maybe<VacanciesStddevPopFields>;
  stddev_samp?: Maybe<VacanciesStddevSampFields>;
  sum?: Maybe<VacanciesSumFields>;
  var_pop?: Maybe<VacanciesVarPopFields>;
  var_samp?: Maybe<VacanciesVarSampFields>;
  variance?: Maybe<VacanciesVarianceFields>;
};


/** aggregate fields of "vacancies" */
export type VacanciesAggregateFieldsCountArgs = {
  columns?: InputMaybe<Array<VacanciesSelectColumn>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** aggregate avg on columns */
export type VacanciesAvgFields = {
  __typename?: 'vacancies_avg_fields';
  id?: Maybe<Scalars['Float']>;
};

/** Boolean expression to filter rows from the table "vacancies". All fields are combined with a logical 'AND'. */
export type VacanciesBoolExp = {
  _and?: InputMaybe<Array<VacanciesBoolExp>>;
  _not?: InputMaybe<VacanciesBoolExp>;
  _or?: InputMaybe<Array<VacanciesBoolExp>>;
  agency?: InputMaybe<StringComparisonExp>;
  category?: InputMaybe<StringComparisonExp>;
  closingDate?: InputMaybe<DateComparisonExp>;
  id?: InputMaybe<IntComparisonExp>;
  jobRef?: InputMaybe<StringComparisonExp>;
  jobType?: InputMaybe<StringComparisonExp>;
  posted?: InputMaybe<DateComparisonExp>;
  salary?: InputMaybe<StringComparisonExp>;
  staffGroup?: InputMaybe<StringComparisonExp>;
  title?: InputMaybe<StringComparisonExp>;
};

/** unique or primary key constraints on table "vacancies" */
export enum VacanciesConstraint {
  /** unique or primary key constraint on columns "id" */
  VacanciesPkey = 'vacancies_pkey'
}

/** input type for incrementing numeric columns in table "vacancies" */
export type VacanciesIncInput = {
  id?: InputMaybe<Scalars['Int']>;
};

/** input type for inserting data into table "vacancies" */
export type VacanciesInsertInput = {
  agency?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  closingDate?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  jobRef?: InputMaybe<Scalars['String']>;
  jobType?: InputMaybe<Scalars['String']>;
  posted?: InputMaybe<Scalars['date']>;
  salary?: InputMaybe<Scalars['String']>;
  staffGroup?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type VacanciesMaxFields = {
  __typename?: 'vacancies_max_fields';
  agency?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  closingDate?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  jobRef?: Maybe<Scalars['String']>;
  jobType?: Maybe<Scalars['String']>;
  posted?: Maybe<Scalars['date']>;
  salary?: Maybe<Scalars['String']>;
  staffGroup?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type VacanciesMinFields = {
  __typename?: 'vacancies_min_fields';
  agency?: Maybe<Scalars['String']>;
  category?: Maybe<Scalars['String']>;
  closingDate?: Maybe<Scalars['date']>;
  id?: Maybe<Scalars['Int']>;
  jobRef?: Maybe<Scalars['String']>;
  jobType?: Maybe<Scalars['String']>;
  posted?: Maybe<Scalars['date']>;
  salary?: Maybe<Scalars['String']>;
  staffGroup?: Maybe<Scalars['String']>;
  title?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "vacancies" */
export type VacanciesMutationResponse = {
  __typename?: 'vacancies_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Vacancies>;
};

/** on_conflict condition type for table "vacancies" */
export type VacanciesOnConflict = {
  constraint: VacanciesConstraint;
  update_columns?: Array<VacanciesUpdateColumn>;
  where?: InputMaybe<VacanciesBoolExp>;
};

/** Ordering options when selecting data from "vacancies". */
export type VacanciesOrderBy = {
  agency?: InputMaybe<OrderBy>;
  category?: InputMaybe<OrderBy>;
  closingDate?: InputMaybe<OrderBy>;
  id?: InputMaybe<OrderBy>;
  jobRef?: InputMaybe<OrderBy>;
  jobType?: InputMaybe<OrderBy>;
  posted?: InputMaybe<OrderBy>;
  salary?: InputMaybe<OrderBy>;
  staffGroup?: InputMaybe<OrderBy>;
  title?: InputMaybe<OrderBy>;
};

/** primary key columns input for table: vacancies */
export type VacanciesPkColumnsInput = {
  id: Scalars['Int'];
};

/** select columns of table "vacancies" */
export enum VacanciesSelectColumn {
  /** column name */
  Agency = 'agency',
  /** column name */
  Category = 'category',
  /** column name */
  ClosingDate = 'closingDate',
  /** column name */
  Id = 'id',
  /** column name */
  JobRef = 'jobRef',
  /** column name */
  JobType = 'jobType',
  /** column name */
  Posted = 'posted',
  /** column name */
  Salary = 'salary',
  /** column name */
  StaffGroup = 'staffGroup',
  /** column name */
  Title = 'title'
}

/** input type for updating data in table "vacancies" */
export type VacanciesSetInput = {
  agency?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<Scalars['String']>;
  closingDate?: InputMaybe<Scalars['date']>;
  id?: InputMaybe<Scalars['Int']>;
  jobRef?: InputMaybe<Scalars['String']>;
  jobType?: InputMaybe<Scalars['String']>;
  posted?: InputMaybe<Scalars['date']>;
  salary?: InputMaybe<Scalars['String']>;
  staffGroup?: InputMaybe<Scalars['String']>;
  title?: InputMaybe<Scalars['String']>;
};

/** aggregate stddev on columns */
export type VacanciesStddevFields = {
  __typename?: 'vacancies_stddev_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_pop on columns */
export type VacanciesStddevPopFields = {
  __typename?: 'vacancies_stddev_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate stddev_samp on columns */
export type VacanciesStddevSampFields = {
  __typename?: 'vacancies_stddev_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate sum on columns */
export type VacanciesSumFields = {
  __typename?: 'vacancies_sum_fields';
  id?: Maybe<Scalars['Int']>;
};

/** update columns of table "vacancies" */
export enum VacanciesUpdateColumn {
  /** column name */
  Agency = 'agency',
  /** column name */
  Category = 'category',
  /** column name */
  ClosingDate = 'closingDate',
  /** column name */
  Id = 'id',
  /** column name */
  JobRef = 'jobRef',
  /** column name */
  JobType = 'jobType',
  /** column name */
  Posted = 'posted',
  /** column name */
  Salary = 'salary',
  /** column name */
  StaffGroup = 'staffGroup',
  /** column name */
  Title = 'title'
}

export type VacanciesUpdates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<VacanciesIncInput>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<VacanciesSetInput>;
  where: VacanciesBoolExp;
};

/** aggregate var_pop on columns */
export type VacanciesVarPopFields = {
  __typename?: 'vacancies_var_pop_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate var_samp on columns */
export type VacanciesVarSampFields = {
  __typename?: 'vacancies_var_samp_fields';
  id?: Maybe<Scalars['Float']>;
};

/** aggregate variance on columns */
export type VacanciesVarianceFields = {
  __typename?: 'vacancies_variance_fields';
  id?: Maybe<Scalars['Float']>;
};

export type InsertRequestMutationVariables = Exact<{
  all?: InputMaybe<Scalars['Boolean']>;
  page?: InputMaybe<Scalars['Int']>;
}>;


export type InsertRequestMutation = { __typename?: 'mutation_root', insertFetchRequest?: { __typename?: 'fetchRequests', id: any } | null };

export type UpsertVacanciesMutationVariables = Exact<{
  vacancies: Array<VacanciesInsertInput> | VacanciesInsertInput;
}>;


export type UpsertVacanciesMutation = { __typename?: 'mutation_root', insertVacancies?: { __typename?: 'vacancies_mutation_response', affected_rows: number } | null };


export const InsertRequestDocument = gql`
    mutation insertRequest($all: Boolean, $page: Int) {
  insertFetchRequest(object: {all: $all, page: $page}) {
    id
  }
}
    `;
export const UpsertVacanciesDocument = gql`
    mutation upsertVacancies($vacancies: [vacancies_insert_input!]!) {
  insertVacancies(
    objects: $vacancies
    on_conflict: {constraint: vacancies_pkey, update_columns: [title, category, agency, salary, posted, jobType, closingDate, staffGroup, jobRef]}
  ) {
    affected_rows
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    insertRequest(variables?: InsertRequestMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<InsertRequestMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<InsertRequestMutation>(InsertRequestDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'insertRequest', 'mutation');
    },
    upsertVacancies(variables: UpsertVacanciesMutationVariables, requestHeaders?: Dom.RequestInit["headers"]): Promise<UpsertVacanciesMutation> {
      return withWrapper((wrappedRequestHeaders) => client.request<UpsertVacanciesMutation>(UpsertVacanciesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'upsertVacancies', 'mutation');
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;