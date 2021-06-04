import {
  useQuery,
  UseQueryOptions,
  useMutation,
  UseMutationOptions,
} from 'react-query';
import { useFetchData } from '../utils/useFetchData';
export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> &
  { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AccessToken = {
  __typename?: 'AccessToken';
  accessToken: Scalars['String'];
};

export type ActivateUserInput = {
  token: Scalars['String'];
};

export type CreateEventInput = {
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  startDate: Scalars['DateTime'];
  state?: Maybe<Scalars['Float']>;
  title: Scalars['String'];
  type?: Maybe<Scalars['Float']>;
};

export type CreateUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  id: Scalars['String'];
  maxParticipants: Scalars['Float'];
  startDate: Scalars['DateTime'];
  state: Scalars['Float'];
  title: Scalars['String'];
  type: Scalars['Float'];
  user: User;
};

export type LoginUserInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  activateUser: User;
  createEvent: Event;
  createUser: User;
  login: AccessToken;
  removeEvent: Event;
  removeUser: User;
  updateEvent: Event;
  updateUser: User;
};

export type MutationActivateUserArgs = {
  activateUser: ActivateUserInput;
};

export type MutationCreateEventArgs = {
  createEventInput: CreateEventInput;
};

export type MutationCreateUserArgs = {
  createUserInput: CreateUserInput;
};

export type MutationLoginArgs = {
  loginUserInput: LoginUserInput;
};

export type MutationRemoveEventArgs = {
  id: Scalars['String'];
};

export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};

export type MutationUpdateEventArgs = {
  updateEventInput: UpdateEventInput;
};

export type MutationUpdateUserArgs = {
  updateUserInput: UpdateUserInput;
};

export type Query = {
  __typename?: 'Query';
  event: Event;
  events: Array<Event>;
  findUserEvents: Array<Event>;
  searchBar: Array<Event>;
  user: User;
  users: Array<User>;
};

export type QueryEventArgs = {
  id: Scalars['String'];
};

export type QuerySearchBarArgs = {
  query: Scalars['String'];
};

export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};

export type UpdateEventInput = {
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  startDate?: Maybe<Scalars['DateTime']>;
  state?: Maybe<Scalars['Float']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
};

export type UpdateUserInput = {
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
};

export type EventsQueryVariables = Exact<{ [key: string]: never }>;

export type EventsQuery = { __typename?: 'Query' } & {
  events: Array<
    { __typename?: 'Event' } & Pick<Event, 'id' | 'title' | 'description'>
  >;
};

export type SingleEventPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;

export type SingleEventPageQuery = { __typename?: 'Query' } & {
  event: { __typename?: 'Event' } & Pick<
    Event,
    'id' | 'title' | 'description' | 'startDate' | 'endDate' | 'maxParticipants'
  > & {
      user: { __typename?: 'User' } & Pick<
        User,
        'id' | 'firstName' | 'lastname' | 'nickname'
      >;
    };
};

export type UsersQueryVariables = Exact<{ [key: string]: never }>;

export type UsersQuery = { __typename?: 'Query' } & {
  users: Array<{ __typename?: 'User' } & Pick<User, 'id'>>;
};

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type LoginMutation = { __typename?: 'Mutation' } & {
  login: { __typename?: 'AccessToken' } & Pick<AccessToken, 'accessToken'>;
};

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;

export type CreateUserMutation = { __typename?: 'Mutation' } & {
  createUser: { __typename?: 'User' } & Pick<User, 'id'>;
};

export type ActivateUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;

export type ActivateUserMutation = { __typename?: 'Mutation' } & {
  activateUser: { __typename?: 'User' } & Pick<User, 'email' | 'firstName'>;
};

export type FindUserEventsQueryVariables = Exact<{ [key: string]: never }>;

export type FindUserEventsQuery = { __typename?: 'Query' } & {
  findUserEvents: Array<
    { __typename?: 'Event' } & Pick<
      Event,
      'id' | 'title' | 'description' | 'startDate' | 'endDate'
    >
  >;
};

export type CurrentUserDataQueryVariables = Exact<{ [key: string]: never }>;

export type CurrentUserDataQuery = { __typename?: 'Query' } & {
  user: { __typename?: 'User' } & Pick<
    User,
    'lastname' | 'firstName' | 'email' | 'nickname'
  >;
};

export type UpdateUserMutationVariables = Exact<{
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
}>;

export type UpdateUserMutation = { __typename?: 'Mutation' } & {
  updateUser: { __typename?: 'User' } & Pick<User, 'id'>;
};

export const EventsDocument = `
    query Events {
  events {
    id
    title
    description
  }
}
    `;
export const useEventsQuery = <TData = EventsQuery, TError = unknown>(
  variables?: EventsQueryVariables,
  options?: UseQueryOptions<EventsQuery, TError, TData>,
) =>
  useQuery<EventsQuery, TError, TData>(
    ['Events', variables],
    useFetchData<EventsQuery, EventsQueryVariables>(EventsDocument).bind(
      null,
      variables,
    ),
    options,
  );
export const SingleEventPageDocument = `
    query SingleEventPage($id: String!) {
  event(id: $id) {
    id
    title
    description
    startDate
    endDate
    maxParticipants
    user {
      id
      firstName
      lastname
      nickname
    }
  }
}
    `;
export const useSingleEventPageQuery = <
  TData = SingleEventPageQuery,
  TError = unknown
>(
  variables: SingleEventPageQueryVariables,
  options?: UseQueryOptions<SingleEventPageQuery, TError, TData>,
) =>
  useQuery<SingleEventPageQuery, TError, TData>(
    ['SingleEventPage', variables],
    useFetchData<SingleEventPageQuery, SingleEventPageQueryVariables>(
      SingleEventPageDocument,
    ).bind(null, variables),
    options,
  );
export const UsersDocument = `
    query Users {
  users {
    id
  }
}
    `;
export const useUsersQuery = <TData = UsersQuery, TError = unknown>(
  variables?: UsersQueryVariables,
  options?: UseQueryOptions<UsersQuery, TError, TData>,
) =>
  useQuery<UsersQuery, TError, TData>(
    ['Users', variables],
    useFetchData<UsersQuery, UsersQueryVariables>(UsersDocument).bind(
      null,
      variables,
    ),
    options,
  );
export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  login(loginUserInput: {email: $email, password: $password}) {
    accessToken
  }
}
    `;
export const useLoginMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    LoginMutation,
    TError,
    LoginMutationVariables,
    TContext
  >,
) =>
  useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
    useFetchData<LoginMutation, LoginMutationVariables>(LoginDocument),
    options,
  );
export const CreateUserDocument = `
    mutation CreateUser($email: String!, $password: String!) {
  createUser(createUserInput: {email: $email, password: $password}) {
    id
  }
}
    `;
export const useCreateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    CreateUserMutation,
    TError,
    CreateUserMutationVariables,
    TContext
  >(
    useFetchData<CreateUserMutation, CreateUserMutationVariables>(
      CreateUserDocument,
    ),
    options,
  );
export const ActivateUserDocument = `
    mutation ActivateUser($token: String!) {
  activateUser(activateUser: {token: $token}) {
    email
    firstName
  }
}
    `;
export const useActivateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    ActivateUserMutation,
    TError,
    ActivateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    ActivateUserMutation,
    TError,
    ActivateUserMutationVariables,
    TContext
  >(
    useFetchData<ActivateUserMutation, ActivateUserMutationVariables>(
      ActivateUserDocument,
    ),
    options,
  );
export const FindUserEventsDocument = `
    query FindUserEvents {
  findUserEvents {
    id
    title
    description
    startDate
    endDate
  }
}
    `;
export const useFindUserEventsQuery = <
  TData = FindUserEventsQuery,
  TError = unknown
>(
  variables?: FindUserEventsQueryVariables,
  options?: UseQueryOptions<FindUserEventsQuery, TError, TData>,
) =>
  useQuery<FindUserEventsQuery, TError, TData>(
    ['FindUserEvents', variables],
    useFetchData<FindUserEventsQuery, FindUserEventsQueryVariables>(
      FindUserEventsDocument,
    ).bind(null, variables),
    options,
  );
export const CurrentUserDataDocument = `
    query CurrentUserData {
  user {
    lastname
    firstName
    email
    nickname
  }
}
    `;
export const useCurrentUserDataQuery = <
  TData = CurrentUserDataQuery,
  TError = unknown
>(
  variables?: CurrentUserDataQueryVariables,
  options?: UseQueryOptions<CurrentUserDataQuery, TError, TData>,
) =>
  useQuery<CurrentUserDataQuery, TError, TData>(
    ['CurrentUserData', variables],
    useFetchData<CurrentUserDataQuery, CurrentUserDataQueryVariables>(
      CurrentUserDataDocument,
    ).bind(null, variables),
    options,
  );
export const UpdateUserDocument = `
    mutation UpdateUser($password: String, $email: String, $firstName: String, $lastname: String, $nickname: String) {
  updateUser(
    updateUserInput: {password: $password, email: $email, firstName: $firstName, lastname: $lastname, nickname: $nickname}
  ) {
    id
  }
}
    `;
export const useUpdateUserMutation = <TError = unknown, TContext = unknown>(
  options?: UseMutationOptions<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >,
) =>
  useMutation<
    UpdateUserMutation,
    TError,
    UpdateUserMutationVariables,
    TContext
  >(
    useFetchData<UpdateUserMutation, UpdateUserMutationVariables>(
      UpdateUserDocument,
    ),
    options,
  );
