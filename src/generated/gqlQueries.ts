import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
import { useFetchData } from '../utils/useFetchData';
export type Maybe<T> = T | null;
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
  maxParticipants?: Maybe<Scalars['Int']>;
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
  isArchive: Scalars['Boolean'];
  maxParticipants?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
  state: Scalars['Float'];
  title: Scalars['String'];
  type: Scalars['Float'];
  user: User;
};

export type EventConnection = {
  __typename?: 'EventConnection';
  edges?: Maybe<Array<EventEdge>>;
  pageInfo?: Maybe<EventPageInfo>;
};

export type EventEdge = {
  __typename?: 'EventEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Event>;
};

export type EventPageInfo = {
  __typename?: 'EventPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type EventResponse = {
  __typename?: 'EventResponse';
  page: EventConnection;
  pageData?: Maybe<PageData>;
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

export type PageData = {
  __typename?: 'PageData';
  count: Scalars['Float'];
  limit: Scalars['Float'];
  offset: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  event: Event;
  events: EventResponse;
  searchBar: EventResponse;
  user: User;
  userEvents: EventResponse;
  users: UserResponse;
};


export type QueryEventArgs = {
  id: Scalars['String'];
};


export type QueryEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  isArchive: Scalars['Boolean'];
  last?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
};


export type QuerySearchBarArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  isArchive: Scalars['Boolean'];
  last?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query: Scalars['String'];
};


export type QueryUserArgs = {
  id?: Maybe<Scalars['String']>;
};


export type QueryUserEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  isArchive: Scalars['Boolean'];
  last?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
};

export type UpdateEventInput = {
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  id: Scalars['String'];
  maxParticipants?: Maybe<Scalars['Int']>;
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

export type UserConnection = {
  __typename?: 'UserConnection';
  edges?: Maybe<Array<UserEdge>>;
  pageInfo?: Maybe<UserPageInfo>;
};

export type UserEdge = {
  __typename?: 'UserEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<User>;
};

export type UserPageInfo = {
  __typename?: 'UserPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type UserResponse = {
  __typename?: 'UserResponse';
  page: UserConnection;
  pageData?: Maybe<PageData>;
};

export type EventsQueryVariables = Exact<{
  first?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  isArchive?: Scalars['Boolean'];
}>;


export type EventsQuery = (
  { __typename?: 'Query' }
  & { events: (
    { __typename?: 'EventResponse' }
    & { page: (
      { __typename?: 'EventConnection' }
      & { edges?: Maybe<Array<(
        { __typename?: 'EventEdge' }
        & { node?: Maybe<(
          { __typename?: 'Event' }
          & Pick<Event, 'id' | 'title' | 'description' | 'startDate' | 'type'>
        )> }
      )>> }
    ) }
  ) }
);

export type SingleEventPageQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleEventPageQuery = (
  { __typename?: 'Query' }
  & { event: (
    { __typename?: 'Event' }
    & Pick<Event, 'id' | 'title' | 'description' | 'startDate' | 'endDate' | 'maxParticipants'>
    & { user: (
      { __typename?: 'User' }
      & Pick<User, 'id' | 'firstName' | 'lastname' | 'nickname'>
    ) }
  ) }
);

export type CreateEventMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  maxParticipants: Scalars['Int'];
}>;


export type CreateEventMutation = (
  { __typename?: 'Mutation' }
  & { createEvent: (
    { __typename?: 'Event' }
    & Pick<Event, 'id'>
  ) }
);

export type SearchEventsQueryVariables = Exact<{
  first: Scalars['Float'];
  query: Scalars['String'];
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  isArchive?: Scalars['Boolean'];
}>;


export type SearchEventsQuery = (
  { __typename?: 'Query' }
  & { searchBar: (
    { __typename?: 'EventResponse' }
    & { page: (
      { __typename?: 'EventConnection' }
      & { edges?: Maybe<Array<(
        { __typename?: 'EventEdge' }
        & Pick<EventEdge, 'cursor'>
        & { node?: Maybe<(
          { __typename?: 'Event' }
          & Pick<Event, 'id' | 'title' | 'description' | 'startDate' | 'type'>
        )> }
      )>>, pageInfo?: Maybe<(
        { __typename?: 'EventPageInfo' }
        & Pick<EventPageInfo, 'startCursor' | 'endCursor' | 'hasNextPage'>
      )> }
    ), pageData?: Maybe<(
      { __typename?: 'PageData' }
      & Pick<PageData, 'count' | 'offset' | 'limit'>
    )> }
  ) }
);

export type SingleUserQueryVariables = Exact<{
  id?: Maybe<Scalars['String']>;
}>;


export type SingleUserQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'lastname' | 'firstName' | 'email' | 'nickname'>
  ) }
);

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = (
  { __typename?: 'Query' }
  & { users: (
    { __typename?: 'UserResponse' }
    & { page: (
      { __typename?: 'UserConnection' }
      & { edges?: Maybe<Array<(
        { __typename?: 'UserEdge' }
        & { node?: Maybe<(
          { __typename?: 'User' }
          & Pick<User, 'id' | 'lastname' | 'firstName' | 'nickname'>
        )> }
      )>> }
    ) }
  ) }
);

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { login: (
    { __typename?: 'AccessToken' }
    & Pick<AccessToken, 'accessToken'>
  ) }
);

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = (
  { __typename?: 'Mutation' }
  & { createUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);

export type ActivateUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ActivateUserMutation = (
  { __typename?: 'Mutation' }
  & { activateUser: (
    { __typename?: 'User' }
    & Pick<User, 'email' | 'firstName'>
  ) }
);

export type FindUserEventsQueryVariables = Exact<{
  isArchive?: Scalars['Boolean'];
}>;


export type FindUserEventsQuery = (
  { __typename?: 'Query' }
  & { userEvents: (
    { __typename?: 'EventResponse' }
    & { page: (
      { __typename?: 'EventConnection' }
      & { edges?: Maybe<Array<(
        { __typename?: 'EventEdge' }
        & { node?: Maybe<(
          { __typename?: 'Event' }
          & Pick<Event, 'id' | 'title' | 'description' | 'startDate' | 'endDate'>
        )> }
      )>> }
    ) }
  ) }
);

export type CurrentUserDataQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserDataQuery = (
  { __typename?: 'Query' }
  & { user: (
    { __typename?: 'User' }
    & Pick<User, 'lastname' | 'firstName' | 'email' | 'nickname'>
  ) }
);

export type UpdateUserMutationVariables = Exact<{
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = (
  { __typename?: 'Mutation' }
  & { updateUser: (
    { __typename?: 'User' }
    & Pick<User, 'id'>
  ) }
);


export const EventsDocument = `
    query Events($first: Float, $orderField: String, $orderSort: String, $isArchive: Boolean! = false) {
  events(
    first: $first
    orderField: $orderField
    orderSort: $orderSort
    isArchive: $isArchive
  ) {
    page {
      edges {
        node {
          id
          title
          description
          startDate
          type
        }
      }
    }
  }
}
    `;
export const useEventsQuery = <
      TData = EventsQuery,
      TError = unknown
    >(
      variables?: EventsQueryVariables, 
      options?: UseQueryOptions<EventsQuery, TError, TData>
    ) => 
    useQuery<EventsQuery, TError, TData>(
      ['Events', variables],
      useFetchData<EventsQuery, EventsQueryVariables>(EventsDocument).bind(null, variables),
      options
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
      options?: UseQueryOptions<SingleEventPageQuery, TError, TData>
    ) => 
    useQuery<SingleEventPageQuery, TError, TData>(
      ['SingleEventPage', variables],
      useFetchData<SingleEventPageQuery, SingleEventPageQueryVariables>(SingleEventPageDocument).bind(null, variables),
      options
    );
export const CreateEventDocument = `
    mutation CreateEvent($title: String!, $description: String!, $startDate: DateTime!, $endDate: DateTime!, $maxParticipants: Int!) {
  createEvent(
    createEventInput: {title: $title, description: $description, startDate: $startDate, endDate: $endDate, maxParticipants: $maxParticipants}
  ) {
    id
  }
}
    `;
export const useCreateEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateEventMutation, TError, CreateEventMutationVariables, TContext>) => 
    useMutation<CreateEventMutation, TError, CreateEventMutationVariables, TContext>(
      useFetchData<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument),
      options
    );
export const SearchEventsDocument = `
    query SearchEvents($first: Float!, $query: String!, $orderField: String, $orderSort: String, $after: String, $isArchive: Boolean! = false) {
  searchBar(
    first: $first
    query: $query
    orderField: $orderField
    orderSort: $orderSort
    isArchive: $isArchive
    after: $after
  ) {
    page {
      edges {
        node {
          id
          title
          description
          startDate
          type
        }
        cursor
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
    pageData {
      count
      offset
      limit
    }
  }
}
    `;
export const useSearchEventsQuery = <
      TData = SearchEventsQuery,
      TError = unknown
    >(
      variables: SearchEventsQueryVariables, 
      options?: UseQueryOptions<SearchEventsQuery, TError, TData>
    ) => 
    useQuery<SearchEventsQuery, TError, TData>(
      ['SearchEvents', variables],
      useFetchData<SearchEventsQuery, SearchEventsQueryVariables>(SearchEventsDocument).bind(null, variables),
      options
    );
export const SingleUserDocument = `
    query singleUser($id: String) {
  user(id: $id) {
    lastname
    firstName
    email
    nickname
  }
}
    `;
export const useSingleUserQuery = <
      TData = SingleUserQuery,
      TError = unknown
    >(
      variables?: SingleUserQueryVariables, 
      options?: UseQueryOptions<SingleUserQuery, TError, TData>
    ) => 
    useQuery<SingleUserQuery, TError, TData>(
      ['singleUser', variables],
      useFetchData<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument).bind(null, variables),
      options
    );
export const UsersDocument = `
    query Users {
  users {
    page {
      edges {
        node {
          id
          lastname
          firstName
          nickname
        }
      }
    }
  }
}
    `;
export const useUsersQuery = <
      TData = UsersQuery,
      TError = unknown
    >(
      variables?: UsersQueryVariables, 
      options?: UseQueryOptions<UsersQuery, TError, TData>
    ) => 
    useQuery<UsersQuery, TError, TData>(
      ['Users', variables],
      useFetchData<UsersQuery, UsersQueryVariables>(UsersDocument).bind(null, variables),
      options
    );
export const LoginDocument = `
    mutation Login($email: String!, $password: String!) {
  login(loginUserInput: {email: $email, password: $password}) {
    accessToken
  }
}
    `;
export const useLoginMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<LoginMutation, TError, LoginMutationVariables, TContext>) => 
    useMutation<LoginMutation, TError, LoginMutationVariables, TContext>(
      useFetchData<LoginMutation, LoginMutationVariables>(LoginDocument),
      options
    );
export const CreateUserDocument = `
    mutation CreateUser($email: String!, $password: String!) {
  createUser(createUserInput: {email: $email, password: $password}) {
    id
  }
}
    `;
export const useCreateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<CreateUserMutation, TError, CreateUserMutationVariables, TContext>) => 
    useMutation<CreateUserMutation, TError, CreateUserMutationVariables, TContext>(
      useFetchData<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument),
      options
    );
export const ActivateUserDocument = `
    mutation ActivateUser($token: String!) {
  activateUser(activateUser: {token: $token}) {
    email
    firstName
  }
}
    `;
export const useActivateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ActivateUserMutation, TError, ActivateUserMutationVariables, TContext>) => 
    useMutation<ActivateUserMutation, TError, ActivateUserMutationVariables, TContext>(
      useFetchData<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument),
      options
    );
export const FindUserEventsDocument = `
    query FindUserEvents($isArchive: Boolean! = true) {
  userEvents(isArchive: $isArchive) {
    page {
      edges {
        node {
          id
          title
          description
          startDate
          endDate
        }
      }
    }
  }
}
    `;
export const useFindUserEventsQuery = <
      TData = FindUserEventsQuery,
      TError = unknown
    >(
      variables?: FindUserEventsQueryVariables, 
      options?: UseQueryOptions<FindUserEventsQuery, TError, TData>
    ) => 
    useQuery<FindUserEventsQuery, TError, TData>(
      ['FindUserEvents', variables],
      useFetchData<FindUserEventsQuery, FindUserEventsQueryVariables>(FindUserEventsDocument).bind(null, variables),
      options
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
      options?: UseQueryOptions<CurrentUserDataQuery, TError, TData>
    ) => 
    useQuery<CurrentUserDataQuery, TError, TData>(
      ['CurrentUserData', variables],
      useFetchData<CurrentUserDataQuery, CurrentUserDataQueryVariables>(CurrentUserDataDocument).bind(null, variables),
      options
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
export const useUpdateUserMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>) => 
    useMutation<UpdateUserMutation, TError, UpdateUserMutationVariables, TContext>(
      useFetchData<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument),
      options
    );