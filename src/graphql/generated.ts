import gql from 'graphql-tag';
import * as VueApolloComposable from '@vue/apollo-composable';
import * as VueCompositionApi from 'vue';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type ReactiveFunction<TParam> = () => TParam;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  date: any;
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
  /** fetch data from the table: "vacancies" */
  vacancies: Array<Vacancies>;
  /** fetch aggregated fields from the table: "vacancies" */
  vacanciesAggregate: VacanciesAggregate;
  /** fetch data from the table: "vacancies" using primary key columns */
  vacancy?: Maybe<Vacancies>;
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
  /** fetch data from the table: "vacancies" */
  vacancies: Array<Vacancies>;
  /** fetch aggregated fields from the table: "vacancies" */
  vacanciesAggregate: VacanciesAggregate;
  /** fetch data from the table: "vacancies" using primary key columns */
  vacancy?: Maybe<Vacancies>;
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

export type VacanciesOptionsQueryVariables = Exact<{ [key: string]: never; }>;


export type VacanciesOptionsQuery = { __typename?: 'query_root', staffGroups: Array<{ __typename?: 'vacancies', staffGroup: string }>, categories: Array<{ __typename?: 'vacancies', category: string }> };

export type VacanciesTableQueryVariables = Exact<{
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  where?: InputMaybe<VacanciesBoolExp>;
  orderBy?: InputMaybe<Array<VacanciesOrderBy> | VacanciesOrderBy>;
}>;


export type VacanciesTableQuery = { __typename?: 'query_root', vacancies: Array<{ __typename?: 'vacancies', id: number, title: string, agency: string, category: string, closingDate?: any | null, jobRef: string, jobType?: string | null, posted?: any | null, salary: string, staffGroup: string }>, vacanciesAggregate: { __typename?: 'vacancies_aggregate', aggregate?: { __typename?: 'vacancies_aggregate_fields', count: number } | null } };


export const VacanciesOptionsDocument = gql`
    query vacanciesOptions {
  staffGroups: vacancies(distinct_on: [staffGroup]) {
    staffGroup
  }
  categories: vacancies(distinct_on: [category]) {
    category
  }
}
    `;

/**
 * __useVacanciesOptionsQuery__
 *
 * To run a query within a Vue component, call `useVacanciesOptionsQuery` and pass it any options that fit your needs.
 * When your component renders, `useVacanciesOptionsQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useVacanciesOptionsQuery();
 */
export function useVacanciesOptionsQuery(options: VueApolloComposable.UseQueryOptions<VacanciesOptionsQuery, VacanciesOptionsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>(VacanciesOptionsDocument, {}, options);
}
export function useVacanciesOptionsLazyQuery(options: VueApolloComposable.UseQueryOptions<VacanciesOptionsQuery, VacanciesOptionsQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>(VacanciesOptionsDocument, {}, options);
}
export type VacanciesOptionsQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<VacanciesOptionsQuery, VacanciesOptionsQueryVariables>;
export const VacanciesTableDocument = gql`
    query vacanciesTable($limit: Int!, $offset: Int!, $where: vacancies_bool_exp, $orderBy: [vacancies_order_by!]) {
  vacancies(limit: $limit, offset: $offset, where: $where, order_by: $orderBy) {
    id
    title
    agency
    category
    closingDate
    jobRef
    jobType
    posted
    salary
    staffGroup
  }
  vacanciesAggregate(where: $where) {
    aggregate {
      count
    }
  }
}
    `;

/**
 * __useVacanciesTableQuery__
 *
 * To run a query within a Vue component, call `useVacanciesTableQuery` and pass it any options that fit your needs.
 * When your component renders, `useVacanciesTableQuery` returns an object from Apollo Client that contains result, loading and error properties
 * you can use to render your UI.
 *
 * @param variables that will be passed into the query
 * @param options that will be passed into the query, supported options are listed on: https://v4.apollo.vuejs.org/guide-composable/query.html#options;
 *
 * @example
 * const { result, loading, error } = useVacanciesTableQuery({
 *   limit: // value for 'limit'
 *   offset: // value for 'offset'
 *   where: // value for 'where'
 *   orderBy: // value for 'orderBy'
 * });
 */
export function useVacanciesTableQuery(variables: VacanciesTableQueryVariables | VueCompositionApi.Ref<VacanciesTableQueryVariables> | ReactiveFunction<VacanciesTableQueryVariables>, options: VueApolloComposable.UseQueryOptions<VacanciesTableQuery, VacanciesTableQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VacanciesTableQuery, VacanciesTableQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VacanciesTableQuery, VacanciesTableQueryVariables>> = {}) {
  return VueApolloComposable.useQuery<VacanciesTableQuery, VacanciesTableQueryVariables>(VacanciesTableDocument, variables, options);
}
export function useVacanciesTableLazyQuery(variables: VacanciesTableQueryVariables | VueCompositionApi.Ref<VacanciesTableQueryVariables> | ReactiveFunction<VacanciesTableQueryVariables>, options: VueApolloComposable.UseQueryOptions<VacanciesTableQuery, VacanciesTableQueryVariables> | VueCompositionApi.Ref<VueApolloComposable.UseQueryOptions<VacanciesTableQuery, VacanciesTableQueryVariables>> | ReactiveFunction<VueApolloComposable.UseQueryOptions<VacanciesTableQuery, VacanciesTableQueryVariables>> = {}) {
  return VueApolloComposable.useLazyQuery<VacanciesTableQuery, VacanciesTableQueryVariables>(VacanciesTableDocument, variables, options);
}
export type VacanciesTableQueryCompositionFunctionResult = VueApolloComposable.UseQueryReturn<VacanciesTableQuery, VacanciesTableQueryVariables>;