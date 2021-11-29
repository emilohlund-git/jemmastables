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

export type BookedTime = {
  __typename?: 'BookedTime';
  bookedTimeId: Scalars['String'];
  createdAt: Scalars['String'];
  date: Scalars['String'];
  id: Scalars['Float'];
  type: Scalars['String'];
  updatedAt: Scalars['String'];
};

export type BookedTimeInput = {
  date: Scalars['String'];
  type: Scalars['String'];
};

export type CustomerInput = {
  bookedTime: BookedTimeInput;
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
  createBookedTime: BookedTime;
  deleteBookedTime: Scalars['Boolean'];
  login: AdminResponse;
  logout: Scalars['Boolean'];
  register: AdminResponse;
  updateBookedTime: BookedTime;
};


export type MutationCreateBookedTimeArgs = {
  input: BookedTimeInput;
};


export type MutationDeleteBookedTimeArgs = {
  id: Scalars['Float'];
};


export type MutationLoginArgs = {
  options: AdminNamePasswordInput;
};


export type MutationRegisterArgs = {
  options: AdminNamePasswordInput;
};


export type MutationUpdateBookedTimeArgs = {
  id: Scalars['Float'];
  input: CustomerInput;
};

export type Query = {
  __typename?: 'Query';
  Admin?: Maybe<Admin>;
  bookedTime?: Maybe<BookedTime>;
  bookedTimes: Array<BookedTime>;
};


export type QueryBookedTimeArgs = {
  id: Scalars['Float'];
};

export type CreateBookedTimeMutationVariables = Exact<{
  input: BookedTimeInput;
}>;


export type CreateBookedTimeMutation = { __typename?: 'Mutation', createBookedTime: { __typename?: 'BookedTime', id: number, bookedTimeId: string, createdAt: string, updatedAt: string, type: string, date: string } };

export type DeleteBookedTimeMutationVariables = Exact<{
  deleteBookedTimeId: Scalars['Float'];
}>;


export type DeleteBookedTimeMutation = { __typename?: 'Mutation', deleteBookedTime: boolean };

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

export type UpdateBookedTimeMutationVariables = Exact<{
  input: CustomerInput;
  updateBookedTimeId: Scalars['Float'];
}>;


export type UpdateBookedTimeMutation = { __typename?: 'Mutation', updateBookedTime: { __typename?: 'BookedTime', id: number, bookedTimeId: string, createdAt: string, updatedAt: string, type: string, date: string } };

export type AdminQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminQuery = { __typename?: 'Query', Admin?: { __typename?: 'Admin', id: number, createdAt: string, updatedAt: string, username: string } | null | undefined };

export type BookedTimeQueryVariables = Exact<{
  bookedTimeId: Scalars['Float'];
}>;


export type BookedTimeQuery = { __typename?: 'Query', bookedTime?: { __typename?: 'BookedTime', id: number, bookedTimeId: string, createdAt: string, updatedAt: string, type: string, date: string } | null | undefined };

export type BookedTimesQueryVariables = Exact<{ [key: string]: never; }>;


export type BookedTimesQuery = { __typename?: 'Query', bookedTimes: Array<{ __typename?: 'BookedTime', id: number, bookedTimeId: string, createdAt: string, updatedAt: string, date: string, type: string }> };


export const CreateBookedTimeDocument = gql`
    mutation CreateBookedTime($input: BookedTimeInput!) {
  createBookedTime(input: $input) {
    id
    bookedTimeId
    createdAt
    updatedAt
    type
    date
  }
}
    `;
export type CreateBookedTimeMutationFn = Apollo.MutationFunction<CreateBookedTimeMutation, CreateBookedTimeMutationVariables>;

/**
 * __useCreateBookedTimeMutation__
 *
 * To run a mutation, you first call `useCreateBookedTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateBookedTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createBookedTimeMutation, { data, loading, error }] = useCreateBookedTimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateBookedTimeMutation(baseOptions?: Apollo.MutationHookOptions<CreateBookedTimeMutation, CreateBookedTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateBookedTimeMutation, CreateBookedTimeMutationVariables>(CreateBookedTimeDocument, options);
      }
export type CreateBookedTimeMutationHookResult = ReturnType<typeof useCreateBookedTimeMutation>;
export type CreateBookedTimeMutationResult = Apollo.MutationResult<CreateBookedTimeMutation>;
export type CreateBookedTimeMutationOptions = Apollo.BaseMutationOptions<CreateBookedTimeMutation, CreateBookedTimeMutationVariables>;
export const DeleteBookedTimeDocument = gql`
    mutation DeleteBookedTime($deleteBookedTimeId: Float!) {
  deleteBookedTime(id: $deleteBookedTimeId)
}
    `;
export type DeleteBookedTimeMutationFn = Apollo.MutationFunction<DeleteBookedTimeMutation, DeleteBookedTimeMutationVariables>;

/**
 * __useDeleteBookedTimeMutation__
 *
 * To run a mutation, you first call `useDeleteBookedTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteBookedTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteBookedTimeMutation, { data, loading, error }] = useDeleteBookedTimeMutation({
 *   variables: {
 *      deleteBookedTimeId: // value for 'deleteBookedTimeId'
 *   },
 * });
 */
export function useDeleteBookedTimeMutation(baseOptions?: Apollo.MutationHookOptions<DeleteBookedTimeMutation, DeleteBookedTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteBookedTimeMutation, DeleteBookedTimeMutationVariables>(DeleteBookedTimeDocument, options);
      }
export type DeleteBookedTimeMutationHookResult = ReturnType<typeof useDeleteBookedTimeMutation>;
export type DeleteBookedTimeMutationResult = Apollo.MutationResult<DeleteBookedTimeMutation>;
export type DeleteBookedTimeMutationOptions = Apollo.BaseMutationOptions<DeleteBookedTimeMutation, DeleteBookedTimeMutationVariables>;
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
export const UpdateBookedTimeDocument = gql`
    mutation UpdateBookedTime($input: CustomerInput!, $updateBookedTimeId: Float!) {
  updateBookedTime(input: $input, id: $updateBookedTimeId) {
    id
    bookedTimeId
    createdAt
    updatedAt
    type
    date
  }
}
    `;
export type UpdateBookedTimeMutationFn = Apollo.MutationFunction<UpdateBookedTimeMutation, UpdateBookedTimeMutationVariables>;

/**
 * __useUpdateBookedTimeMutation__
 *
 * To run a mutation, you first call `useUpdateBookedTimeMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateBookedTimeMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateBookedTimeMutation, { data, loading, error }] = useUpdateBookedTimeMutation({
 *   variables: {
 *      input: // value for 'input'
 *      updateBookedTimeId: // value for 'updateBookedTimeId'
 *   },
 * });
 */
export function useUpdateBookedTimeMutation(baseOptions?: Apollo.MutationHookOptions<UpdateBookedTimeMutation, UpdateBookedTimeMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateBookedTimeMutation, UpdateBookedTimeMutationVariables>(UpdateBookedTimeDocument, options);
      }
export type UpdateBookedTimeMutationHookResult = ReturnType<typeof useUpdateBookedTimeMutation>;
export type UpdateBookedTimeMutationResult = Apollo.MutationResult<UpdateBookedTimeMutation>;
export type UpdateBookedTimeMutationOptions = Apollo.BaseMutationOptions<UpdateBookedTimeMutation, UpdateBookedTimeMutationVariables>;
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
export const BookedTimeDocument = gql`
    query BookedTime($bookedTimeId: Float!) {
  bookedTime(id: $bookedTimeId) {
    id
    bookedTimeId
    createdAt
    updatedAt
    type
    date
  }
}
    `;

/**
 * __useBookedTimeQuery__
 *
 * To run a query within a React component, call `useBookedTimeQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookedTimeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookedTimeQuery({
 *   variables: {
 *      bookedTimeId: // value for 'bookedTimeId'
 *   },
 * });
 */
export function useBookedTimeQuery(baseOptions: Apollo.QueryHookOptions<BookedTimeQuery, BookedTimeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookedTimeQuery, BookedTimeQueryVariables>(BookedTimeDocument, options);
      }
export function useBookedTimeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookedTimeQuery, BookedTimeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookedTimeQuery, BookedTimeQueryVariables>(BookedTimeDocument, options);
        }
export type BookedTimeQueryHookResult = ReturnType<typeof useBookedTimeQuery>;
export type BookedTimeLazyQueryHookResult = ReturnType<typeof useBookedTimeLazyQuery>;
export type BookedTimeQueryResult = Apollo.QueryResult<BookedTimeQuery, BookedTimeQueryVariables>;
export const BookedTimesDocument = gql`
    query BookedTimes {
  bookedTimes {
    id
    bookedTimeId
    createdAt
    updatedAt
    date
    type
  }
}
    `;

/**
 * __useBookedTimesQuery__
 *
 * To run a query within a React component, call `useBookedTimesQuery` and pass it any options that fit your needs.
 * When your component renders, `useBookedTimesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBookedTimesQuery({
 *   variables: {
 *   },
 * });
 */
export function useBookedTimesQuery(baseOptions?: Apollo.QueryHookOptions<BookedTimesQuery, BookedTimesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<BookedTimesQuery, BookedTimesQueryVariables>(BookedTimesDocument, options);
      }
export function useBookedTimesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<BookedTimesQuery, BookedTimesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<BookedTimesQuery, BookedTimesQueryVariables>(BookedTimesDocument, options);
        }
export type BookedTimesQueryHookResult = ReturnType<typeof useBookedTimesQuery>;
export type BookedTimesLazyQueryHookResult = ReturnType<typeof useBookedTimesLazyQuery>;
export type BookedTimesQueryResult = Apollo.QueryResult<BookedTimesQuery, BookedTimesQueryVariables>;