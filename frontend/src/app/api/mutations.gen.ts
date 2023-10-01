import * as Types from '../../shared/api/models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserScoreMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  score: Types.Scalars['Int']['input'];
}>;


export type UpdateUserScoreMutation = { readonly updateUsersPermissionsUser: { readonly data?: { readonly attributes?: { readonly score?: number | null } | null } | null } };

export type CrateGameHistoryMutationVariables = Types.Exact<{
  data: Types.GameHistroryInput;
}>;


export type CrateGameHistoryMutation = { readonly createGameHistrory?: { readonly data?: { readonly id?: string | null, readonly attributes?: { readonly result?: any | null, readonly isWin?: boolean | null, readonly score?: number | null } | null } | null } | null };


export const UpdateUserScoreDocument = gql`
    mutation updateUserScore($id: ID!, $score: Int!) {
  updateUsersPermissionsUser(id: $id, data: {score: $score}) {
    data {
      attributes {
        score
      }
    }
  }
}
    `;
export type UpdateUserScoreMutationFn = Apollo.MutationFunction<UpdateUserScoreMutation, UpdateUserScoreMutationVariables>;

/**
 * __useUpdateUserScoreMutation__
 *
 * To run a mutation, you first call `useUpdateUserScoreMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserScoreMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserScoreMutation, { data, loading, error }] = useUpdateUserScoreMutation({
 *   variables: {
 *      id: // value for 'id'
 *      score: // value for 'score'
 *   },
 * });
 */
export function useUpdateUserScoreMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserScoreMutation, UpdateUserScoreMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserScoreMutation, UpdateUserScoreMutationVariables>(UpdateUserScoreDocument, options);
      }
export type UpdateUserScoreMutationHookResult = ReturnType<typeof useUpdateUserScoreMutation>;
export type UpdateUserScoreMutationResult = Apollo.MutationResult<UpdateUserScoreMutation>;
export type UpdateUserScoreMutationOptions = Apollo.BaseMutationOptions<UpdateUserScoreMutation, UpdateUserScoreMutationVariables>;
export const CrateGameHistoryDocument = gql`
    mutation CrateGameHistory($data: GameHistroryInput!) {
  createGameHistrory(data: $data) {
    data {
      id
      attributes {
        result
        isWin
        score
      }
    }
  }
}
    `;
export type CrateGameHistoryMutationFn = Apollo.MutationFunction<CrateGameHistoryMutation, CrateGameHistoryMutationVariables>;

/**
 * __useCrateGameHistoryMutation__
 *
 * To run a mutation, you first call `useCrateGameHistoryMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCrateGameHistoryMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [crateGameHistoryMutation, { data, loading, error }] = useCrateGameHistoryMutation({
 *   variables: {
 *      data: // value for 'data'
 *   },
 * });
 */
export function useCrateGameHistoryMutation(baseOptions?: Apollo.MutationHookOptions<CrateGameHistoryMutation, CrateGameHistoryMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CrateGameHistoryMutation, CrateGameHistoryMutationVariables>(CrateGameHistoryDocument, options);
      }
export type CrateGameHistoryMutationHookResult = ReturnType<typeof useCrateGameHistoryMutation>;
export type CrateGameHistoryMutationResult = Apollo.MutationResult<CrateGameHistoryMutation>;
export type CrateGameHistoryMutationOptions = Apollo.BaseMutationOptions<CrateGameHistoryMutation, CrateGameHistoryMutationVariables>;