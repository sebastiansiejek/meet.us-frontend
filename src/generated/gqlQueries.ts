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
  accessTokenExpires: Scalars['Float'];
  refreshToken: Scalars['String'];
  user: User;
};

export type ActivateUserInput = {
  token: Scalars['String'];
};

export type Company = {
  __typename?: 'Company';
  address: Scalars['String'];
  city: Scalars['String'];
  id: Scalars['String'];
  name: Scalars['String'];
  nip: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CreateCompanyInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  name: Scalars['String'];
  nip: Scalars['String'];
  zipCode: Scalars['String'];
};

export type CreateEventAddressInput = {
  city: Scalars['String'];
  countryCode: Scalars['String'];
  countryName: Scalars['String'];
  county: Scalars['String'];
  district: Scalars['String'];
  label: Scalars['String'];
  postalCode: Scalars['String'];
  state: Scalars['String'];
};

export type CreateEventInput = {
  description: Scalars['String'];
  endDate: Scalars['DateTime'];
  eventAddress: CreateEventAddressInput;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  maxParticipants?: Maybe<Scalars['Int']>;
  startDate: Scalars['DateTime'];
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
  distance: Scalars['Float'];
  endDate: Scalars['DateTime'];
  eventAddress?: Maybe<EventAddress>;
  goingCount?: Maybe<Scalars['Float']>;
  id: Scalars['String'];
  interestedCount?: Maybe<Scalars['Float']>;
  isArchive: Scalars['Boolean'];
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  loggedInParticipants?: Maybe<Participant>;
  maxParticipants?: Maybe<Scalars['Int']>;
  participants?: Maybe<Array<Participant>>;
  rate?: Maybe<Scalars['Float']>;
  score: Scalars['Float'];
  startDate: Scalars['DateTime'];
  state?: Maybe<Scalars['String']>;
  title: Scalars['String'];
  type: Scalars['Float'];
  user: User;
  visitCount: Scalars['Float'];
};

export type EventAddress = {
  __typename?: 'EventAddress';
  city?: Maybe<Scalars['String']>;
  countryCode?: Maybe<Scalars['String']>;
  countryName?: Maybe<Scalars['String']>;
  county?: Maybe<Scalars['String']>;
  district?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  label?: Maybe<Scalars['String']>;
  postalCode?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
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
  confirmResetPassword: ResetResponse;
  createCompany: Company;
  createEvent: Event;
  createUser: User;
  login: AccessToken;
  participateInEvent: Participant;
  rateEvent: Rating;
  refresh: AccessToken;
  removeEvent: Event;
  removeUser: User;
  resetPassword: ResetResponse;
  updateCompany: Company;
  updateEvent: Event;
  updateUser: User;
};


export type MutationActivateUserArgs = {
  activateUser: ActivateUserInput;
};


export type MutationConfirmResetPasswordArgs = {
  confirmResetPassword: ResetPasswordTokenInput;
};


export type MutationCreateCompanyArgs = {
  createCompanyInput: CreateCompanyInput;
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


export type MutationParticipateInEventArgs = {
  participateInEvent: ParticipantUpdate;
};


export type MutationRateEventArgs = {
  rateEvent: RatingUpdate;
};


export type MutationRefreshArgs = {
  refreshToken: RefreshUserToken;
};


export type MutationRemoveEventArgs = {
  id: Scalars['String'];
};


export type MutationRemoveUserArgs = {
  id: Scalars['String'];
};


export type MutationResetPasswordArgs = {
  resetPasswordInput: ResetPasswordInput;
};


export type MutationUpdateCompanyArgs = {
  updateCompanyInput: UpdateCompanyInput;
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

export type Participant = {
  __typename?: 'Participant';
  event: Event;
  id: Scalars['String'];
  type: Scalars['Float'];
  user: User;
};

export type ParticipantConnection = {
  __typename?: 'ParticipantConnection';
  edges?: Maybe<Array<ParticipantEdge>>;
  pageInfo?: Maybe<ParticipantPageInfo>;
};

export type ParticipantEdge = {
  __typename?: 'ParticipantEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Participant>;
};

export type ParticipantListResponse = {
  __typename?: 'ParticipantListResponse';
  page: ParticipantConnection;
  pageData?: Maybe<PageData>;
};

export type ParticipantPageInfo = {
  __typename?: 'ParticipantPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type ParticipantUpdate = {
  eventId: Scalars['String'];
  type: Scalars['Float'];
};

export type Query = {
  __typename?: 'Query';
  currentUser: User;
  event: Event;
  events: EventResponse;
  findCompany: Company;
  findForEdit: Event;
  participantsEvents: ParticipantListResponse;
  ratingsEvents: RatingListResponse;
  tokenIsValid: IsValid;
  user: User;
  userEvents: EventResponse;
  userParticipation: ParticipantListResponse;
  userRates: RatingListResponse;
  users: UserResponse;
};


export type QueryEventArgs = {
  id: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
};


export type QueryEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type QueryFindForEditArgs = {
  id: Scalars['String'];
};


export type QueryParticipantsEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  eventId?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
};


export type QueryRatingsEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  eventId?: Maybe<Scalars['String']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  userId?: Maybe<Scalars['String']>;
};


export type QueryUserArgs = {
  id: Scalars['String'];
};


export type QueryUserEventsArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  userId: Scalars['String'];
};


export type QueryUserParticipationArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
};


export type QueryUserRatesArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
};


export type QueryUsersArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
};

export type Rating = {
  __typename?: 'Rating';
  event: Event;
  id: Scalars['String'];
  rate: Scalars['Float'];
  user: User;
};

export type RatingConnection = {
  __typename?: 'RatingConnection';
  edges?: Maybe<Array<RatingEdge>>;
  pageInfo?: Maybe<RatingPageInfo>;
};

export type RatingEdge = {
  __typename?: 'RatingEdge';
  cursor?: Maybe<Scalars['String']>;
  node?: Maybe<Rating>;
};

export type RatingListResponse = {
  __typename?: 'RatingListResponse';
  page: RatingConnection;
  pageData?: Maybe<PageData>;
};

export type RatingPageInfo = {
  __typename?: 'RatingPageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type RatingUpdate = {
  eventId: Scalars['String'];
  rate: Scalars['Float'];
};

export type RefreshUserToken = {
  token: Scalars['String'];
};

export type ResetPasswordInput = {
  email: Scalars['String'];
};

export type ResetPasswordTokenInput = {
  confirmPassword: Scalars['String'];
  newPassword: Scalars['String'];
  token: Scalars['String'];
};

export type ResetResponse = {
  __typename?: 'ResetResponse';
  message: Scalars['String'];
};

export type UpdateCompanyInput = {
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  nip?: Maybe<Scalars['String']>;
  zipCode?: Maybe<Scalars['String']>;
};

export type UpdateEventInput = {
  description?: Maybe<Scalars['String']>;
  endDate?: Maybe<Scalars['DateTime']>;
  eventAddress?: Maybe<CreateEventAddressInput>;
  id: Scalars['String'];
  lat?: Maybe<Scalars['Float']>;
  lng?: Maybe<Scalars['Float']>;
  maxParticipants?: Maybe<Scalars['Int']>;
  startDate?: Maybe<Scalars['DateTime']>;
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
  company?: Maybe<Company>;
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

export type IsValid = {
  __typename?: 'isValid';
  isValid: Scalars['Boolean'];
};

export type SingleEventPageQueryVariables = Exact<{
  id: Scalars['String'];
  userId?: Maybe<Scalars['String']>;
}>;


export type SingleEventPageQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, endDate: any, maxParticipants?: number | null | undefined, type: number, lat: number, lng: number, loggedInParticipants?: { __typename?: 'Participant', type: number } | null | undefined, eventAddress?: { __typename?: 'EventAddress', city?: string | null | undefined, state?: string | null | undefined, postalCode?: string | null | undefined, countryCode?: string | null | undefined, countryName?: string | null | undefined, county?: string | null | undefined, district?: string | null | undefined, label?: string | null | undefined } | null | undefined, user: { __typename?: 'User', id: string, firstName?: string | null | undefined, lastname?: string | null | undefined, nickname?: string | null | undefined } } };

export type EventsQueryVariables = Exact<{
  first: Scalars['Float'];
  query: Scalars['String'];
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
}>;


export type EventsQuery = { __typename?: 'Query', events: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', cursor?: string | null | undefined, node?: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, endDate: any, type: number, state?: string | null | undefined, lat: number, lng: number } | null | undefined }> | null | undefined, pageInfo?: { __typename?: 'EventPageInfo', startCursor?: string | null | undefined, endCursor?: string | null | undefined, hasNextPage: boolean } | null | undefined }, pageData?: { __typename?: 'PageData', count: number, offset: number, limit: number } | null | undefined } };

export type EventsOnMapQueryVariables = Exact<{
  first: Scalars['Float'];
  state?: Maybe<Scalars['String']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
}>;


export type EventsOnMapQuery = { __typename?: 'Query', events: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, title: string, type: number, state?: string | null | undefined, lat: number, lng: number } | null | undefined }> | null | undefined, pageInfo?: { __typename?: 'EventPageInfo', startCursor?: string | null | undefined, endCursor?: string | null | undefined, hasNextPage: boolean } | null | undefined }, pageData?: { __typename?: 'PageData', count: number } | null | undefined } };

export type FindUserEventsQueryVariables = Exact<{
  userId: Scalars['String'];
}>;


export type FindUserEventsQuery = { __typename?: 'Query', userEvents: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, endDate: any } | null | undefined }> | null | undefined } } };

export type DeleteEventMutationVariables = Exact<{
  id: Scalars['String'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', removeEvent: { __typename?: 'Event', title: string } };

export type UpdateEventMutationVariables = Exact<{
  id: Scalars['String'];
  title: Scalars['String'];
  description: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  maxParticipants: Scalars['Int'];
  type?: Maybe<Scalars['Float']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  eventAddress: CreateEventAddressInput;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string } };

export type CreateEventMutationVariables = Exact<{
  title: Scalars['String'];
  description: Scalars['String'];
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  maxParticipants: Scalars['Int'];
  type?: Maybe<Scalars['Float']>;
  lat: Scalars['Float'];
  lng: Scalars['Float'];
  eventAddress: CreateEventAddressInput;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, type: number } };

export type ParticipateInEventMutationVariables = Exact<{
  eventId: Scalars['String'];
  type: Scalars['Float'];
}>;


export type ParticipateInEventMutation = { __typename?: 'Mutation', participateInEvent: { __typename?: 'Participant', type: number } };

export type SingleUserQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type SingleUserQuery = { __typename?: 'Query', user: { __typename?: 'User', lastname?: string | null | undefined, firstName?: string | null | undefined, email: string, nickname?: string | null | undefined } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', lastname?: string | null | undefined, firstName?: string | null | undefined, email: string, nickname?: string | null | undefined } };

export type CurrentUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserIdQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string } };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserResponse', page: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node?: { __typename?: 'User', id: string, lastname?: string | null | undefined, firstName?: string | null | undefined, nickname?: string | null | undefined } | null | undefined }> | null | undefined } } };

export type LoginMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'AccessToken', accessToken: string } };

export type CreateUserMutationVariables = Exact<{
  email: Scalars['String'];
  password: Scalars['String'];
}>;


export type CreateUserMutation = { __typename?: 'Mutation', createUser: { __typename?: 'User', id: string } };

export type ActivateUserMutationVariables = Exact<{
  token: Scalars['String'];
}>;


export type ActivateUserMutation = { __typename?: 'Mutation', activateUser: { __typename?: 'User', email: string, firstName?: string | null | undefined } };

export type UpdateUserMutationVariables = Exact<{
  password?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };


export const SingleEventPageDocument = `
    query SingleEventPage($id: String!, $userId: String) {
  event(id: $id, userId: $userId) {
    id
    title
    description
    startDate
    endDate
    maxParticipants
    type
    lat
    lng
    loggedInParticipants {
      type
    }
    eventAddress {
      city
      state
      postalCode
      countryCode
      countryName
      county
      district
      label
    }
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
useSingleEventPageQuery.getKey = (variables: SingleEventPageQueryVariables) => ['SingleEventPage', variables];

export const EventsDocument = `
    query Events($first: Float!, $query: String!, $orderField: String, $orderSort: String, $after: String, $state: String) {
  events(
    first: $first
    query: $query
    orderField: $orderField
    orderSort: $orderSort
    state: $state
    after: $after
  ) {
    page {
      edges {
        node {
          id
          title
          description
          startDate
          endDate
          type
          state
          lat
          lng
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
export const useEventsQuery = <
      TData = EventsQuery,
      TError = unknown
    >(
      variables: EventsQueryVariables, 
      options?: UseQueryOptions<EventsQuery, TError, TData>
    ) => 
    useQuery<EventsQuery, TError, TData>(
      ['Events', variables],
      useFetchData<EventsQuery, EventsQueryVariables>(EventsDocument).bind(null, variables),
      options
    );
useEventsQuery.getKey = (variables: EventsQueryVariables) => ['Events', variables];

export const EventsOnMapDocument = `
    query EventsOnMap($first: Float!, $state: String, $latitude: Float, $longitude: Float, $distance: Float, $orderField: String, $after: String, $orderSort: String) {
  events(
    first: $first
    state: $state
    latitude: $latitude
    longitude: $longitude
    distance: $distance
    orderField: $orderField
    after: $after
    orderSort: $orderSort
  ) {
    page {
      edges {
        node {
          id
          title
          type
          state
          lat
          lng
        }
      }
      pageInfo {
        startCursor
        endCursor
        hasNextPage
      }
    }
    pageData {
      count
    }
  }
}
    `;
export const useEventsOnMapQuery = <
      TData = EventsOnMapQuery,
      TError = unknown
    >(
      variables: EventsOnMapQueryVariables, 
      options?: UseQueryOptions<EventsOnMapQuery, TError, TData>
    ) => 
    useQuery<EventsOnMapQuery, TError, TData>(
      ['EventsOnMap', variables],
      useFetchData<EventsOnMapQuery, EventsOnMapQueryVariables>(EventsOnMapDocument).bind(null, variables),
      options
    );
useEventsOnMapQuery.getKey = (variables: EventsOnMapQueryVariables) => ['EventsOnMap', variables];

export const FindUserEventsDocument = `
    query FindUserEvents($userId: String!) {
  userEvents(userId: $userId) {
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
      variables: FindUserEventsQueryVariables, 
      options?: UseQueryOptions<FindUserEventsQuery, TError, TData>
    ) => 
    useQuery<FindUserEventsQuery, TError, TData>(
      ['FindUserEvents', variables],
      useFetchData<FindUserEventsQuery, FindUserEventsQueryVariables>(FindUserEventsDocument).bind(null, variables),
      options
    );
useFindUserEventsQuery.getKey = (variables: FindUserEventsQueryVariables) => ['FindUserEvents', variables];

export const DeleteEventDocument = `
    mutation DeleteEvent($id: String!) {
  removeEvent(id: $id) {
    title
  }
}
    `;
export const useDeleteEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<DeleteEventMutation, TError, DeleteEventMutationVariables, TContext>) => 
    useMutation<DeleteEventMutation, TError, DeleteEventMutationVariables, TContext>(
      useFetchData<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument),
      options
    );
export const UpdateEventDocument = `
    mutation UpdateEvent($id: String!, $title: String!, $description: String!, $startDate: DateTime!, $endDate: DateTime!, $maxParticipants: Int!, $type: Float, $lat: Float!, $lng: Float!, $eventAddress: CreateEventAddressInput!) {
  updateEvent(
    updateEventInput: {id: $id, title: $title, description: $description, startDate: $startDate, endDate: $endDate, maxParticipants: $maxParticipants, type: $type, lat: $lat, lng: $lng, eventAddress: $eventAddress}
  ) {
    id
  }
}
    `;
export const useUpdateEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<UpdateEventMutation, TError, UpdateEventMutationVariables, TContext>) => 
    useMutation<UpdateEventMutation, TError, UpdateEventMutationVariables, TContext>(
      useFetchData<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument),
      options
    );
export const CreateEventDocument = `
    mutation CreateEvent($title: String!, $description: String!, $startDate: DateTime!, $endDate: DateTime!, $maxParticipants: Int!, $type: Float, $lat: Float!, $lng: Float!, $eventAddress: CreateEventAddressInput!) {
  createEvent(
    createEventInput: {title: $title, description: $description, startDate: $startDate, endDate: $endDate, maxParticipants: $maxParticipants, type: $type, lat: $lat, lng: $lng, eventAddress: $eventAddress}
  ) {
    id
    title
    description
    startDate
    type
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
export const ParticipateInEventDocument = `
    mutation participateInEvent($eventId: String!, $type: Float!) {
  participateInEvent(participateInEvent: {eventId: $eventId, type: $type}) {
    type
  }
}
    `;
export const useParticipateInEventMutation = <
      TError = unknown,
      TContext = unknown
    >(options?: UseMutationOptions<ParticipateInEventMutation, TError, ParticipateInEventMutationVariables, TContext>) => 
    useMutation<ParticipateInEventMutation, TError, ParticipateInEventMutationVariables, TContext>(
      useFetchData<ParticipateInEventMutation, ParticipateInEventMutationVariables>(ParticipateInEventDocument),
      options
    );
export const SingleUserDocument = `
    query singleUser($id: String!) {
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
      variables: SingleUserQueryVariables, 
      options?: UseQueryOptions<SingleUserQuery, TError, TData>
    ) => 
    useQuery<SingleUserQuery, TError, TData>(
      ['singleUser', variables],
      useFetchData<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument).bind(null, variables),
      options
    );
useSingleUserQuery.getKey = (variables: SingleUserQueryVariables) => ['singleUser', variables];

export const CurrentUserDocument = `
    query CurrentUser {
  currentUser {
    lastname
    firstName
    email
    nickname
  }
}
    `;
export const useCurrentUserQuery = <
      TData = CurrentUserQuery,
      TError = unknown
    >(
      variables?: CurrentUserQueryVariables, 
      options?: UseQueryOptions<CurrentUserQuery, TError, TData>
    ) => 
    useQuery<CurrentUserQuery, TError, TData>(
      variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables],
      useFetchData<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument).bind(null, variables),
      options
    );
useCurrentUserQuery.getKey = (variables?: CurrentUserQueryVariables) => variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables];

export const CurrentUserIdDocument = `
    query CurrentUserId {
  currentUser {
    id
  }
}
    `;
export const useCurrentUserIdQuery = <
      TData = CurrentUserIdQuery,
      TError = unknown
    >(
      variables?: CurrentUserIdQueryVariables, 
      options?: UseQueryOptions<CurrentUserIdQuery, TError, TData>
    ) => 
    useQuery<CurrentUserIdQuery, TError, TData>(
      variables === undefined ? ['CurrentUserId'] : ['CurrentUserId', variables],
      useFetchData<CurrentUserIdQuery, CurrentUserIdQueryVariables>(CurrentUserIdDocument).bind(null, variables),
      options
    );
useCurrentUserIdQuery.getKey = (variables?: CurrentUserIdQueryVariables) => variables === undefined ? ['CurrentUserId'] : ['CurrentUserId', variables];

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
      variables === undefined ? ['Users'] : ['Users', variables],
      useFetchData<UsersQuery, UsersQueryVariables>(UsersDocument).bind(null, variables),
      options
    );
useUsersQuery.getKey = (variables?: UsersQueryVariables) => variables === undefined ? ['Users'] : ['Users', variables];

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