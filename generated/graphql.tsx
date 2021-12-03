import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions =  {}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Admin = {
  __typename?: 'Admin';
  createdAt: Scalars['String'];
  id: Scalars['Float'];
  updatedAt: Scalars['String'];
  username: Scalars['String'];
};

export type AdminNamePasswordInput = {
  password: Scalars['String'];
  username: Scalars['String'];
};

export type AdminResponse = {
  __typename?: 'AdminResponse';
  admin?: Maybe<Admin>;
  errors?: Maybe<Array<FieldError>>;
};

export type AvailableTime = {
  __typename?: 'AvailableTime';
  availableTimeId: Scalars['String'];
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  timeFrom: Scalars['String'];
  timeTo: Scalars['String'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type AvailableTimeInput = {
  availableTimeId: Scalars['String'];
  date: Scalars['String'];
  timeFrom: Scalars['String'];
  timeTo: Scalars['String'];
  type: Scalars['String'];
};

export type CustomerInput = {
  availableTime: AvailableTimeInput;
  createdAt: Scalars['String'];
  customerId: Scalars['String'];
  email: Scalars['String'];
  fullName: Scalars['String'];
  id: Scalars['Float'];
  phoneNumber: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type FieldError = {
  __typename?: 'FieldError';
  field: Scalars['String'];
  message: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createAvailableTime: AvailableTime;
  deleteAvailableTime: Scalars['Boolean'];
  login: AdminResponse;
  logout: Scalars['Boolean'];
  register: AdminResponse;
  updateAvailableTime: AvailableTime;
};


export type MutationCreateAvailableTimeArgs = {
  input: AvailableTimeInput;
};


export type MutationDeleteAvailableTimeArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: AdminNamePasswordInput;
};


export type MutationRegisterArgs = {
  options: AdminNamePasswordInput;
};


export type MutationUpdateAvailableTimeArgs = {
  id: Scalars['Float'];
  input: CustomerInput;
};

export type Query = {
  __typename?: 'Query';
  Admin?: Maybe<Admin>;
  availableTime?: Maybe<AvailableTime>;
  availableTimeByMilliseconds?: Maybe<AvailableTime>;
  availableTimes: Array<AvailableTime>;
};


export type QueryAvailableTimeArgs = {
  id: Scalars['Float'];
};


export type QueryAvailableTimeByMillisecondsArgs = {
  date: Scalars['String'];
};

export type CreateAvailableTimeMutationVariables = Exact<{
  input: AvailableTimeInput;
}>;


export type CreateAvailableTimeMutation = { __typename?: 'Mutation', createAvailableTime: { __typename?: 'AvailableTime', id: number, availableTimeId: string, createdAt: string, updatedAt: string, timeTo: string, timeFrom: string, type: string, date: string } };

export type DeleteAvailableTimeMutationVariables = Exact<{
  deleteAvailableTimeId: Scalars['Float'];
}>;


export type DeleteAvailableTimeMutation = { __typename?: 'Mutation', deleteAvailableTime: boolean };

export type LoginMutationVariables = Exact<{
  options: AdminNamePasswordInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AdminResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, admin?: { __typename?: 'Admin', id: number, createdAt: string, updatedAt: string, username: string } | null | undefined } };

export type LogoutMutationVariables = Exact<{ [key: string]: never; }>;


export type LogoutMutation = { __typename?: 'Mutation', logout: boolean };

export type RegisterMutationVariables = Exact<{
  options: AdminNamePasswordInput;
}>;


export type RegisterMutation = { __typename?: 'Mutation', register: { __typename?: 'AdminResponse', errors?: Array<{ __typename?: 'FieldError', field: string, message: string }> | null | undefined, admin?: { __typename?: 'Admin', id: number, createdAt: string, updatedAt: string, username: string } | null | undefined } };

export type UpdateAvailableTimeMutationVariables = Exact<{
  input: CustomerInput;
  updateAvailableTimeId: Scalars['Float'];
}>;


export type UpdateAvailableTimeMutation = { __typename?: 'Mutation', updateAvailableTime: { __typename?: 'AvailableTime', id: number, availableTimeId: string, createdAt: string, updatedAt: string, timeTo: string, timeFrom: string, type: string, date: string } };

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = { __typename?: 'Query', Admin?: { __typename?: 'Admin', id: number, createdAt: string, updatedAt: string, username: string } | null | undefined };

export type AvailableTimeQueryVariables = Exact<{
  availableTimeId: Scalars['Float'];
}>;


export type AvailableTimeQuery = { __typename?: 'Query', availableTime?: { __typename?: 'AvailableTime', id: number, availableTimeId: string, createdAt: string, updatedAt: string, timeTo: string, timeFrom: string, type: string, date: string } | null | undefined };

export type AvailableTimeByMillisecondsQueryVariables = Exact<{
  date: Scalars['String'];
}>;


export type AvailableTimeByMillisecondsQuery = { __typename?: 'Query', availableTimeByMilliseconds?: { __typename?: 'AvailableTime', id: number, availableTimeId: string, createdAt: string, updatedAt: string, timeTo: string, timeFrom: string, type: string, date: string } | null | undefined };

export type AvailableTimesQueryVariables = Exact<{ [key: string]: never; }>;


export type AvailableTimesQuery = { __typename?: 'Query', availableTimes: Array<{ __typename?: 'AvailableTime', id: number, availableTimeId: string, createdAt: string, updatedAt: string, timeTo: string, timeFrom: string, date: string, type: string }> };


export const CreateAvailableTimeDocument = gql`
    mutation CreateAvailableTime($input: AvailableTimeInput!) {
  createAvailableTime(input: $input) {
    id
    availableTimeId
    createdAt
    updatedAt
    timeTo
    timeFrom
    type
    date
  }
}
    `;
export type CreateAvailableTimeMutationFn = Apollo.MutationFunction<CreateAvailableTimeMutation, CreateAvailableTimeMutationVariables>;

/**
 * __useCreateAvailableTimeMutation__
 *
 * To run a mutation, you first call `useCreateAvailableTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAvailableTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAvailableTimeMutation, { data, loading, error }] = useCreateAvailableTimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAvailableTimeMutation(baseOptions?: Apollo.MutationHookOptions<CreateAvailableTimeMutation, CreateAvailableTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAvailableTimeMutation, CreateAvailableTimeMutationVariables>(CreateAvailableTimeDocument, options);
      }
export type CreateAvailableTimeMutationHookResult = ReturnType<typeof useCreateAvailableTimeMutation>;
export type CreateAvailableTimeMutationResult = Apollo.MutationResult<CreateAvailableTimeMutation>;
export type CreateAvailableTimeMutationOptions = Apollo.BaseMutationOptions<CreateAvailableTimeMutation, CreateAvailableTimeMutationVariables>;
export const DeleteAvailableTimeDocument = gql`
    mutation DeleteAvailableTime($deleteAvailableTimeId: Float!) {
  deleteAvailableTime(id: $deleteAvailableTimeId)
}
    `;
export type DeleteAvailableTimeMutationFn = Apollo.MutationFunction<DeleteAvailableTimeMutation, DeleteAvailableTimeMutationVariables>;

/**
 * __useDeleteAvailableTimeMutation__
 *
 * To run a mutation, you first call `useDeleteAvailableTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteAvailableTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteAvailableTimeMutation, { data, loading, error }] = useDeleteAvailableTimeMutation({
 *   variables: {
 *      deleteAvailableTimeId: // value for 'deleteAvailableTimeId'
 *   },
 * });
 */
export function useDeleteAvailableTimeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteAvailableTimeMutation, DeleteAvailableTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteAvailableTimeMutation, DeleteAvailableTimeMutationVariables>(DeleteAvailableTimeDocument, options);
      }
export type DeleteAvailableTimeMutationHookResult = ReturnType<typeof useDeleteAvailableTimeMutation>;
export type DeleteAvailableTimeMutationResult = Apollo.MutationResult<DeleteAvailableTimeMutation>;
export type DeleteAvailableTimeMutationOptions = Apollo.BaseMutationOptions<DeleteAvailableTimeMutation, DeleteAvailableTimeMutationVariables>;
export const LoginDocument = gql`
    mutation Login($options: AdminNamePasswordInput!) {
  login(options: $options) {
    errors {
      field
      message
    }
    admin {
      id
      createdAt
      updatedAt
      username
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const LogoutDocument = gql`
    mutation Logout {
  logout
}
    `;
export type LogoutMutationFn = Apollo.MutationFunction<LogoutMutation, LogoutMutationVariables>;

/**
 * __useLogoutMutation__
 *
 * To run a mutation, you first call `useLogoutMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLogoutMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [logoutMutation, { data, loading, error }] = useLogoutMutation({
 *   variables: {
 *   },
 * });
 */
export function useLogoutMutation(baseOptions?: Apollo.MutationHookOptions<LogoutMutation, LogoutMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LogoutMutation, LogoutMutationVariables>(LogoutDocument, options);
      }
export type LogoutMutationHookResult = ReturnType<typeof useLogoutMutation>;
export type LogoutMutationResult = Apollo.MutationResult<LogoutMutation>;
export type LogoutMutationOptions = Apollo.BaseMutationOptions<LogoutMutation, LogoutMutationVariables>;
export const RegisterDocument = gql`
    mutation Register($options: AdminNamePasswordInput!) {
  register(options: $options) {
    errors {
      field
      message
    }
    admin {
      id
      createdAt
      updatedAt
      username
    }
  }
}
    `;
export type RegisterMutationFn = Apollo.MutationFunction<RegisterMutation, RegisterMutationVariables>;

/**
 * __useRegisterMutation__
 *
 * To run a mutation, you first call `useRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [registerMutation, { data, loading, error }] = useRegisterMutation({
 *   variables: {
 *      options: // value for 'options'
 *   },
 * });
 */
export function useRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RegisterMutation, RegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, options);
      }
export type RegisterMutationHookResult = ReturnType<typeof useRegisterMutation>;
export type RegisterMutationResult = Apollo.MutationResult<RegisterMutation>;
export type RegisterMutationOptions = Apollo.BaseMutationOptions<RegisterMutation, RegisterMutationVariables>;
export const UpdateAvailableTimeDocument = gql`
    mutation UpdateAvailableTime($input: CustomerInput!, $updateAvailableTimeId: Float!) {
  updateAvailableTime(input: $input, id: $updateAvailableTimeId) {
    id
    availableTimeId
    createdAt
    updatedAt
    timeTo
    timeFrom
    type
    date
  }
}
    `;
export type UpdateAvailableTimeMutationFn = Apollo.MutationFunction<UpdateAvailableTimeMutation, UpdateAvailableTimeMutationVariables>;

/**
 * __useUpdateAvailableTimeMutation__
 *
 * To run a mutation, you first call `useUpdateAvailableTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateAvailableTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateAvailableTimeMutation, { data, loading, error }] = useUpdateAvailableTimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      updateAvailableTimeId: // value for 'updateAvailableTimeId'
 *   },
 * });
 */
export function useUpdateAvailableTimeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateAvailableTimeMutation, UpdateAvailableTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateAvailableTimeMutation, UpdateAvailableTimeMutationVariables>(UpdateAvailableTimeDocument, options);
      }
export type UpdateAvailableTimeMutationHookResult = ReturnType<typeof useUpdateAvailableTimeMutation>;
export type UpdateAvailableTimeMutationResult = Apollo.MutationResult<UpdateAvailableTimeMutation>;
export type UpdateAvailableTimeMutationOptions = Apollo.BaseMutationOptions<UpdateAvailableTimeMutation, UpdateAvailableTimeMutationVariables>;
export const AdminDocument = gql`
    query Admin {
  Admin {
    id
    createdAt
    updatedAt
    username
  }
}
    `;

/**
 * __useAdminQuery__
 *
 * To run a query within a React component, call `useAdminQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminQuery(baseOptions?: Apollo.QueryHookOptions<AdminQuery, AdminQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminQuery, AdminQueryVariables>(AdminDocument, options);
      }
export function useAdminLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminQuery, AdminQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminQuery, AdminQueryVariables>(AdminDocument, options);
        }
export type AdminQueryHookResult = ReturnType<typeof useAdminQuery>;
export type AdminLazyQueryHookResult = ReturnType<typeof useAdminLazyQuery>;
export type AdminQueryResult = Apollo.QueryResult<AdminQuery, AdminQueryVariables>;
export const AvailableTimeDocument = gql`
    query AvailableTime($availableTimeId: Float!) {
  availableTime(id: $availableTimeId) {
    id
    availableTimeId
    createdAt
    updatedAt
    timeTo
    timeFrom
    type
    date
  }
}
    `;

/**
 * __useAvailableTimeQuery__
 *
 * To run a query within a React component, call `useAvailableTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableTimeQuery({
 *   variables: {
 *      availableTimeId: // value for 'availableTimeId'
 *   },
 * });
 */
export function useAvailableTimeQuery(baseOptions: Apollo.QueryHookOptions<AvailableTimeQuery, AvailableTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableTimeQuery, AvailableTimeQueryVariables>(AvailableTimeDocument, options);
      }
export function useAvailableTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableTimeQuery, AvailableTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableTimeQuery, AvailableTimeQueryVariables>(AvailableTimeDocument, options);
        }
export type AvailableTimeQueryHookResult = ReturnType<typeof useAvailableTimeQuery>;
export type AvailableTimeLazyQueryHookResult = ReturnType<typeof useAvailableTimeLazyQuery>;
export type AvailableTimeQueryResult = Apollo.QueryResult<AvailableTimeQuery, AvailableTimeQueryVariables>;
export const AvailableTimeByMillisecondsDocument = gql`
    query AvailableTimeByMilliseconds($date: String!) {
  availableTimeByMilliseconds(date: $date) {
    id
    availableTimeId
    createdAt
    updatedAt
    timeTo
    timeFrom
    type
    date
  }
}
    `;

/**
 * __useAvailableTimeByMillisecondsQuery__
 *
 * To run a query within a React component, call `useAvailableTimeByMillisecondsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableTimeByMillisecondsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableTimeByMillisecondsQuery({
 *   variables: {
 *      date: // value for 'date'
 *   },
 * });
 */
export function useAvailableTimeByMillisecondsQuery(baseOptions: Apollo.QueryHookOptions<AvailableTimeByMillisecondsQuery, AvailableTimeByMillisecondsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableTimeByMillisecondsQuery, AvailableTimeByMillisecondsQueryVariables>(AvailableTimeByMillisecondsDocument, options);
      }
export function useAvailableTimeByMillisecondsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableTimeByMillisecondsQuery, AvailableTimeByMillisecondsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableTimeByMillisecondsQuery, AvailableTimeByMillisecondsQueryVariables>(AvailableTimeByMillisecondsDocument, options);
        }
export type AvailableTimeByMillisecondsQueryHookResult = ReturnType<typeof useAvailableTimeByMillisecondsQuery>;
export type AvailableTimeByMillisecondsLazyQueryHookResult = ReturnType<typeof useAvailableTimeByMillisecondsLazyQuery>;
export type AvailableTimeByMillisecondsQueryResult = Apollo.QueryResult<AvailableTimeByMillisecondsQuery, AvailableTimeByMillisecondsQueryVariables>;
export const AvailableTimesDocument = gql`
    query AvailableTimes {
  availableTimes {
    id
    availableTimeId
    createdAt
    updatedAt
    timeTo
    timeFrom
    date
    type
  }
}
    `;

/**
 * __useAvailableTimesQuery__
 *
 * To run a query within a React component, call `useAvailableTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useAvailableTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAvailableTimesQuery({
 *   variables: {
 *   },
 * });
 */
export function useAvailableTimesQuery(baseOptions?: Apollo.QueryHookOptions<AvailableTimesQuery, AvailableTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AvailableTimesQuery, AvailableTimesQueryVariables>(AvailableTimesDocument, options);
      }
export function useAvailableTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AvailableTimesQuery, AvailableTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AvailableTimesQuery, AvailableTimesQueryVariables>(AvailableTimesDocument, options);
        }
export type AvailableTimesQueryHookResult = ReturnType<typeof useAvailableTimesQuery>;
export type AvailableTimesLazyQueryHookResult = ReturnType<typeof useAvailableTimesLazyQuery>;
export type AvailableTimesQueryResult = Apollo.QueryResult<AvailableTimesQuery, AvailableTimesQueryVariables>;