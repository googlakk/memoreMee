import * as Types from '../../../shared/api/models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type MeQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type MeQuery = { readonly me?: { readonly id: string, readonly email?: string | null } | null };

export type GetTeachersQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetTeachersQuery = { readonly usersPermissionsUsers?: { readonly data: ReadonlyArray<{ readonly id?: string | null, readonly attributes?: { readonly email: string, readonly score?: number | null, readonly username: string, readonly last_name: string, readonly first_name: string, readonly avatar?: string | null, readonly students?: { readonly data: ReadonlyArray<{ readonly id?: string | null, readonly attributes?: { readonly username: string, readonly score?: number | null, readonly email: string } | null }> } | null } | null }> } | null };

export type GetStudentsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type GetStudentsQuery = { readonly usersPermissionsUsers?: { readonly data: ReadonlyArray<{ readonly id?: string | null, readonly attributes?: { readonly email: string, readonly score?: number | null, readonly avatar?: string | null, readonly username: string, readonly last_name: string, readonly first_name: string, readonly teacher?: { readonly data?: { readonly id?: string | null, readonly attributes?: { readonly first_name: string, readonly last_name: string } | null } | null } | null, readonly role?: { readonly data?: { readonly id?: string | null, readonly attributes?: { readonly name: string } | null } | null } | null, readonly game_histrories?: { readonly data: ReadonlyArray<{ readonly id?: string | null, readonly attributes?: { readonly result?: any | null, readonly isWin?: boolean | null, readonly createdAt?: any | null, readonly score?: number | null } | null }> } | null } | null }> } | null };


export const MeDocument = gql`
    query Me {
  me {
    id
    email
  }
}
    `;

/**
 * __useMeQuery__
 *
 * To run a query within a React component, call `useMeQuery` and pass it any options that fit your needs.
 * When your component renders, `useMeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMeQuery({
 *   variables: {
 *   },
 * });
 */
export function useMeQuery(baseOptions?: Apollo.QueryHookOptions<MeQuery, MeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MeQuery, MeQueryVariables>(MeDocument, options);
      }
export function useMeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MeQuery, MeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MeQuery, MeQueryVariables>(MeDocument, options);
        }
export type MeQueryHookResult = ReturnType<typeof useMeQuery>;
export type MeLazyQueryHookResult = ReturnType<typeof useMeLazyQuery>;
export type MeQueryResult = Apollo.QueryResult<MeQuery, MeQueryVariables>;
export const GetTeachersDocument = gql`
    query getTeachers {
  usersPermissionsUsers(filters: {role: {id: {eq: 1}}, school: {id: {eq: 1}}}) {
    data {
      id
      attributes {
        email
        score
        username
        last_name
        first_name
        avatar
        students {
          data {
            id
            attributes {
              username
              score
              email
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetTeachersQuery__
 *
 * To run a query within a React component, call `useGetTeachersQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetTeachersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetTeachersQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetTeachersQuery(baseOptions?: Apollo.QueryHookOptions<GetTeachersQuery, GetTeachersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetTeachersQuery, GetTeachersQueryVariables>(GetTeachersDocument, options);
      }
export function useGetTeachersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetTeachersQuery, GetTeachersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetTeachersQuery, GetTeachersQueryVariables>(GetTeachersDocument, options);
        }
export type GetTeachersQueryHookResult = ReturnType<typeof useGetTeachersQuery>;
export type GetTeachersLazyQueryHookResult = ReturnType<typeof useGetTeachersLazyQuery>;
export type GetTeachersQueryResult = Apollo.QueryResult<GetTeachersQuery, GetTeachersQueryVariables>;
export const GetStudentsDocument = gql`
    query getStudents {
  usersPermissionsUsers(filters: {role: {id: {eq: 2}}, school: {id: {eq: 1}}}) {
    data {
      id
      attributes {
        email
        score
        avatar
        username
        last_name
        first_name
        teacher {
          data {
            id
            attributes {
              first_name
              last_name
            }
          }
        }
        role {
          data {
            id
            attributes {
              name
            }
          }
        }
        game_histrories {
          data {
            id
            attributes {
              result
              isWin
              createdAt
              score
            }
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetStudentsQuery__
 *
 * To run a query within a React component, call `useGetStudentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetStudentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetStudentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetStudentsQuery(baseOptions?: Apollo.QueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
      }
export function useGetStudentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetStudentsQuery, GetStudentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetStudentsQuery, GetStudentsQueryVariables>(GetStudentsDocument, options);
        }
export type GetStudentsQueryHookResult = ReturnType<typeof useGetStudentsQuery>;
export type GetStudentsLazyQueryHookResult = ReturnType<typeof useGetStudentsLazyQuery>;
export type GetStudentsQueryResult = Apollo.QueryResult<GetStudentsQuery, GetStudentsQueryVariables>;