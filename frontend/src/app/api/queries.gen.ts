import * as Types from '../../shared/api/models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type CurrentUserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { readonly me?: { readonly id: string, readonly username: string, readonly email?: string | null, readonly confirmed?: boolean | null, readonly blocked?: boolean | null, readonly role?: { readonly id: string, readonly name: string, readonly type?: string | null, readonly description?: string | null } | null } | null };

export type GetGameHistoryQueryVariables = Types.Exact<{
  userID?: Types.InputMaybe<Types.Scalars['ID']['input']>;
}>;


export type GetGameHistoryQuery = { readonly gameHistrories?: { readonly data: ReadonlyArray<{ readonly id?: string | null, readonly attributes?: { readonly publishedAt?: any | null, readonly result?: any | null, readonly isWin?: boolean | null, readonly score?: number | null, readonly game?: { readonly data?: { readonly id?: string | null, readonly attributes?: { readonly name?: string | null, readonly createdAt?: any | null } | null } | null } | null } | null }> } | null };

export type GetAllGameStoriesQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetAllGameStoriesQuery = { readonly gameHistrories?: { readonly data: ReadonlyArray<{ readonly id?: string | null, readonly attributes?: { readonly result?: any | null, readonly isWin?: boolean | null, readonly score?: number | null, readonly game?: { readonly data?: { readonly id?: string | null, readonly attributes?: { readonly name?: string | null, readonly createdAt?: any | null } | null } | null } | null } | null }> } | null };


export const CurrentUserDocument = gql`
    query CurrentUser {
  me {
    id
    username
    email
    confirmed
    blocked
    role {
      id
      name
      type
      description
    }
  }
}
    `;

/**
 * __useCurrentUserQuery__
 *
 * To run a query within a React component, call `useCurrentUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useCurrentUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCurrentUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useCurrentUserQuery(baseOptions?: Apollo.QueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
      }
export function useCurrentUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CurrentUserQuery, CurrentUserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, options);
        }
export type CurrentUserQueryHookResult = ReturnType<typeof useCurrentUserQuery>;
export type CurrentUserLazyQueryHookResult = ReturnType<typeof useCurrentUserLazyQuery>;
export type CurrentUserQueryResult = Apollo.QueryResult<CurrentUserQuery, CurrentUserQueryVariables>;
export const GetGameHistoryDocument = gql`
    query GetGameHistory($userID: ID) {
  gameHistrories(filters: {user: {id: {eq: $userID}}}) {
    data {
      id
      attributes {
        publishedAt
        result
        game {
          data {
            id
            attributes {
              name
              createdAt
            }
          }
        }
        isWin
        score
      }
    }
  }
}
    `;

/**
 * __useGetGameHistoryQuery__
 *
 * To run a query within a React component, call `useGetGameHistoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetGameHistoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetGameHistoryQuery({
 *   variables: {
 *      userID: // value for 'userID'
 *   },
 * });
 */
export function useGetGameHistoryQuery(baseOptions?: Apollo.QueryHookOptions<GetGameHistoryQuery, GetGameHistoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetGameHistoryQuery, GetGameHistoryQueryVariables>(GetGameHistoryDocument, options);
      }
export function useGetGameHistoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetGameHistoryQuery, GetGameHistoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetGameHistoryQuery, GetGameHistoryQueryVariables>(GetGameHistoryDocument, options);
        }
export type GetGameHistoryQueryHookResult = ReturnType<typeof useGetGameHistoryQuery>;
export type GetGameHistoryLazyQueryHookResult = ReturnType<typeof useGetGameHistoryLazyQuery>;
export type GetGameHistoryQueryResult = Apollo.QueryResult<GetGameHistoryQuery, GetGameHistoryQueryVariables>;
export const GetAllGameStoriesDocument = gql`
    query GetAllGameStories {
  gameHistrories {
    data {
      id
      attributes {
        result
        game {
          data {
            id
            attributes {
              name
              createdAt
            }
          }
        }
        isWin
        score
      }
    }
  }
}
    `;

/**
 * __useGetAllGameStoriesQuery__
 *
 * To run a query within a React component, call `useGetAllGameStoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllGameStoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllGameStoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetAllGameStoriesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllGameStoriesQuery, GetAllGameStoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllGameStoriesQuery, GetAllGameStoriesQueryVariables>(GetAllGameStoriesDocument, options);
      }
export function useGetAllGameStoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllGameStoriesQuery, GetAllGameStoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllGameStoriesQuery, GetAllGameStoriesQueryVariables>(GetAllGameStoriesDocument, options);
        }
export type GetAllGameStoriesQueryHookResult = ReturnType<typeof useGetAllGameStoriesQuery>;
export type GetAllGameStoriesLazyQueryHookResult = ReturnType<typeof useGetAllGameStoriesLazyQuery>;
export type GetAllGameStoriesQueryResult = Apollo.QueryResult<GetAllGameStoriesQuery, GetAllGameStoriesQueryVariables>;