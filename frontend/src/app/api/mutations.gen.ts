import * as Types from '../../shared/api/models.gen';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UpdateUserRatingMutationVariables = Types.Exact<{
  id: Types.Scalars['ID']['input'];
  rating: Types.Scalars['Long']['input'];
}>;


export type UpdateUserRatingMutation = { readonly updateUsersPermissionsUser: { readonly data?: { readonly attributes?: { readonly rating?: any | null } | null } | null } };


export const UpdateUserRatingDocument = gql`
    mutation updateUserRating($id: ID!, $rating: Long!) {
  updateUsersPermissionsUser(id: $id, data: {rating: $rating}) {
    data {
      attributes {
        rating
      }
    }
  }
}
    `;
export type UpdateUserRatingMutationFn = Apollo.MutationFunction<UpdateUserRatingMutation, UpdateUserRatingMutationVariables>;

/**
 * __useUpdateUserRatingMutation__
 *
 * To run a mutation, you first call `useUpdateUserRatingMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUserRatingMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUserRatingMutation, { data, loading, error }] = useUpdateUserRatingMutation({
 *   variables: {
 *      id: // value for 'id'
 *      rating: // value for 'rating'
 *   },
 * });
 */
export function useUpdateUserRatingMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUserRatingMutation, UpdateUserRatingMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUserRatingMutation, UpdateUserRatingMutationVariables>(UpdateUserRatingDocument, options);
      }
export type UpdateUserRatingMutationHookResult = ReturnType<typeof useUpdateUserRatingMutation>;
export type UpdateUserRatingMutationResult = Apollo.MutationResult<UpdateUserRatingMutation>;
export type UpdateUserRatingMutationOptions = Apollo.BaseMutationOptions<UpdateUserRatingMutation, UpdateUserRatingMutationVariables>;