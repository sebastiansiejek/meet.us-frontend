import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions, useMutation, UseMutationOptions } from 'react-query';
import { fetcher } from '../utils/fetcher';
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
  /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
  JSON: any;
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
  tags?: Maybe<Scalars['JSON']>;
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
  participantRate?: Maybe<Rating>;
  participants?: Maybe<Array<Participant>>;
  rate?: Maybe<Scalars['Float']>;
  score?: Maybe<Scalars['Float']>;
  startDate: Scalars['DateTime'];
  state?: Maybe<Scalars['String']>;
  tags?: Maybe<Scalars['JSON']>;
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
  count: Scalars['Float'];
  date: Scalars['DateTime'];
  event: Event;
  id: Scalars['String'];
  type: Scalars['Float'];
  user: User;
};

export type ParticipantByDateResponse = {
  __typename?: 'ParticipantByDateResponse';
  count?: Maybe<Scalars['Float']>;
  date?: Maybe<Scalars['String']>;
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
  participantsByDate: Array<ParticipantByDateResponse>;
  participantsEvents: ParticipantListResponse;
  ratingsEvents: RatingListResponse;
  tags: Array<Tag>;
  tokenIsValid: IsValid;
  user: User;
  userEvents: EventResponse;
  userEventsCalendar: EventResponse;
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
  clientDate?: Maybe<Scalars['Float']>;
  distance?: Maybe<Scalars['Float']>;
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
  userId?: Maybe<Scalars['String']>;
};


export type QueryFindForEditArgs = {
  id: Scalars['String'];
};


export type QueryParticipantsByDateArgs = {
  eventId: Scalars['String'];
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


export type QueryTagsArgs = {
  type?: Maybe<Scalars['Float']>;
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
  type?: Maybe<Scalars['Float']>;
  userId: Scalars['String'];
};


export type QueryUserEventsCalendarArgs = {
  after?: Maybe<Scalars['String']>;
  before?: Maybe<Scalars['String']>;
  distance?: Maybe<Scalars['Float']>;
  endDate: Scalars['DateTime'];
  first?: Maybe<Scalars['Float']>;
  last?: Maybe<Scalars['Float']>;
  latitude?: Maybe<Scalars['Float']>;
  longitude?: Maybe<Scalars['Float']>;
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  query?: Maybe<Scalars['String']>;
  startDate: Scalars['DateTime'];
  type?: Maybe<Scalars['Float']>;
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

export type Tag = {
  __typename?: 'Tag';
  id: Scalars['String'];
  name: Scalars['String'];
  type: Scalars['Float'];
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
  tags?: Maybe<Scalars['JSON']>;
  title?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
};

export type UpdateUserInput = {
  description?: Maybe<Scalars['String']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  id?: Maybe<Scalars['String']>;
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  password?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['Float']>;
};

export type User = {
  __typename?: 'User';
  company?: Maybe<Company>;
  description?: Maybe<Scalars['String']>;
  email: Scalars['String'];
  firstName?: Maybe<Scalars['String']>;
  id: Scalars['String'];
  isActive: Scalars['Boolean'];
  lastname?: Maybe<Scalars['String']>;
  nickname?: Maybe<Scalars['String']>;
  sex?: Maybe<Scalars['Float']>;
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


export type SingleEventPageQuery = { __typename?: 'Query', event: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, endDate: any, maxParticipants?: number | null | undefined, type: number, lat: number, lng: number, goingCount?: number | null | undefined, interestedCount?: number | null | undefined, tags?: any | null | undefined, visitCount: number, loggedInParticipants?: { __typename?: 'Participant', type: number } | null | undefined, eventAddress?: { __typename?: 'EventAddress', city?: string | null | undefined, state?: string | null | undefined, postalCode?: string | null | undefined, countryCode?: string | null | undefined, countryName?: string | null | undefined, county?: string | null | undefined, district?: string | null | undefined, label?: string | null | undefined } | null | undefined, user: { __typename?: 'User', id: string, firstName?: string | null | undefined, lastname?: string | null | undefined, nickname?: string | null | undefined } } };

export type EventsQueryVariables = Exact<{
  first: Scalars['Float'];
  query: Scalars['String'];
  orderField?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  after?: Maybe<Scalars['String']>;
  state?: Maybe<Scalars['String']>;
  type?: Maybe<Scalars['Float']>;
  clientDate?: Maybe<Scalars['Float']>;
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

export type RecommendedUserEventsQueryVariables = Exact<{
  userId: Scalars['String'];
  first?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
  orderSort?: Maybe<Scalars['String']>;
  clientDate?: Maybe<Scalars['Float']>;
}>;


export type RecommendedUserEventsQuery = { __typename?: 'Query', events: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, endDate: any, type: number, state?: string | null | undefined } | null | undefined }> | null | undefined } } };

export type EventsSuggestionsQueryVariables = Exact<{
  query: Scalars['String'];
  first?: Maybe<Scalars['Float']>;
  state?: Maybe<Scalars['String']>;
}>;


export type EventsSuggestionsQuery = { __typename?: 'Query', events: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, title: string, type: number } | null | undefined }> | null | undefined } } };

export type ParticipantsByDateQueryVariables = Exact<{
  eventId: Scalars['String'];
}>;


export type ParticipantsByDateQuery = { __typename?: 'Query', participantsByDate: Array<{ __typename?: 'ParticipantByDateResponse', count?: number | null | undefined, date?: string | null | undefined }>, event: { __typename?: 'Event', visitCount: number } };

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
  tags?: Maybe<Scalars['JSON']>;
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, type: number } };

export type ParticipateInEventMutationVariables = Exact<{
  eventId: Scalars['String'];
  type: Scalars['Float'];
}>;


export type ParticipateInEventMutation = { __typename?: 'Mutation', participateInEvent: { __typename?: 'Participant', type: number } };

export type SingleUserQueryVariables = Exact<{
  id: Scalars['String'];
  first?: Maybe<Scalars['Float']>;
  orderSort?: Maybe<Scalars['String']>;
  orderField?: Maybe<Scalars['String']>;
}>;


export type SingleUserQuery = { __typename?: 'Query', user: { __typename?: 'User', lastname?: string | null | undefined, firstName?: string | null | undefined, email: string, nickname?: string | null | undefined, description?: string | null | undefined }, userEvents: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, title: string, description: string, startDate: any, endDate: any, type: number, state?: string | null | undefined } | null | undefined }> | null | undefined } } };

export type CurrentUserQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', lastname?: string | null | undefined, firstName?: string | null | undefined, email: string, nickname?: string | null | undefined, description?: string | null | undefined, sex?: number | null | undefined } };

export type CurrentUserIdQueryVariables = Exact<{ [key: string]: never; }>;


export type CurrentUserIdQuery = { __typename?: 'Query', currentUser: { __typename?: 'User', id: string } };

export type TagsQueryVariables = Exact<{
  type?: Maybe<Scalars['Float']>;
}>;


export type TagsQuery = { __typename?: 'Query', tags: Array<{ __typename?: 'Tag', id: string, name: string, type: number }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: { __typename?: 'UserResponse', page: { __typename?: 'UserConnection', edges?: Array<{ __typename?: 'UserEdge', node?: { __typename?: 'User', id: string, lastname?: string | null | undefined, firstName?: string | null | undefined, nickname?: string | null | undefined, description?: string | null | undefined } | null | undefined }> | null | undefined } } };

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
  description?: Maybe<Scalars['String']>;
  sex: Scalars['Float'];
}>;


export type UpdateUserMutation = { __typename?: 'Mutation', updateUser: { __typename?: 'User', id: string } };

export type UserEventsCalendarQueryVariables = Exact<{
  startDate: Scalars['DateTime'];
  endDate: Scalars['DateTime'];
  userId: Scalars['String'];
}>;


export type UserEventsCalendarQuery = { __typename?: 'Query', userEventsCalendar: { __typename?: 'EventResponse', page: { __typename?: 'EventConnection', edges?: Array<{ __typename?: 'EventEdge', node?: { __typename?: 'Event', id: string, title: string, type: number, startDate: any, endDate: any, loggedInParticipants?: { __typename?: 'Participant', type: number } | null | undefined } | null | undefined }> | null | undefined } } };


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
    goingCount
    interestedCount
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
    tags
    user {
      id
      firstName
      lastname
      nickname
    }
    visitCount
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
      fetcher<SingleEventPageQuery, SingleEventPageQueryVariables>(SingleEventPageDocument, variables),
      options
    );

useSingleEventPageQuery.getKey = (variables: SingleEventPageQueryVariables) => ['SingleEventPage', variables];
;

useSingleEventPageQuery.fetcher = (variables: SingleEventPageQueryVariables, options?: RequestInit['headers']) => fetcher<SingleEventPageQuery, SingleEventPageQueryVariables>(SingleEventPageDocument, variables, options);
export const EventsDocument = `
    query Events($first: Float!, $query: String!, $orderField: String, $orderSort: String, $after: String, $state: String, $type: Float, $clientDate: Float) {
  events(
    first: $first
    query: $query
    orderField: $orderField
    orderSort: $orderSort
    state: $state
    after: $after
    type: $type
    clientDate: $clientDate
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
      fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, variables),
      options
    );

useEventsQuery.getKey = (variables: EventsQueryVariables) => ['Events', variables];
;

useEventsQuery.fetcher = (variables: EventsQueryVariables, options?: RequestInit['headers']) => fetcher<EventsQuery, EventsQueryVariables>(EventsDocument, variables, options);
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
      fetcher<EventsOnMapQuery, EventsOnMapQueryVariables>(EventsOnMapDocument, variables),
      options
    );

useEventsOnMapQuery.getKey = (variables: EventsOnMapQueryVariables) => ['EventsOnMap', variables];
;

useEventsOnMapQuery.fetcher = (variables: EventsOnMapQueryVariables, options?: RequestInit['headers']) => fetcher<EventsOnMapQuery, EventsOnMapQueryVariables>(EventsOnMapDocument, variables, options);
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
      fetcher<FindUserEventsQuery, FindUserEventsQueryVariables>(FindUserEventsDocument, variables),
      options
    );

useFindUserEventsQuery.getKey = (variables: FindUserEventsQueryVariables) => ['FindUserEvents', variables];
;

useFindUserEventsQuery.fetcher = (variables: FindUserEventsQueryVariables, options?: RequestInit['headers']) => fetcher<FindUserEventsQuery, FindUserEventsQueryVariables>(FindUserEventsDocument, variables, options);
export const RecommendedUserEventsDocument = `
    query RecommendedUserEvents($userId: String!, $first: Float, $state: String, $orderSort: String, $clientDate: Float) {
  events(
    userId: $userId
    orderField: "score"
    first: $first
    state: $state
    orderSort: $orderSort
    clientDate: $clientDate
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
        }
      }
    }
  }
}
    `;
export const useRecommendedUserEventsQuery = <
      TData = RecommendedUserEventsQuery,
      TError = unknown
    >(
      variables: RecommendedUserEventsQueryVariables,
      options?: UseQueryOptions<RecommendedUserEventsQuery, TError, TData>
    ) =>
    useQuery<RecommendedUserEventsQuery, TError, TData>(
      ['RecommendedUserEvents', variables],
      fetcher<RecommendedUserEventsQuery, RecommendedUserEventsQueryVariables>(RecommendedUserEventsDocument, variables),
      options
    );

useRecommendedUserEventsQuery.getKey = (variables: RecommendedUserEventsQueryVariables) => ['RecommendedUserEvents', variables];
;

useRecommendedUserEventsQuery.fetcher = (variables: RecommendedUserEventsQueryVariables, options?: RequestInit['headers']) => fetcher<RecommendedUserEventsQuery, RecommendedUserEventsQueryVariables>(RecommendedUserEventsDocument, variables, options);
export const EventsSuggestionsDocument = `
    query EventsSuggestions($query: String!, $first: Float, $state: String) {
  events(query: $query, first: $first, state: $state) {
    page {
      edges {
        node {
          id
          title
          type
        }
      }
    }
  }
}
    `;
export const useEventsSuggestionsQuery = <
      TData = EventsSuggestionsQuery,
      TError = unknown
    >(
      variables: EventsSuggestionsQueryVariables,
      options?: UseQueryOptions<EventsSuggestionsQuery, TError, TData>
    ) =>
    useQuery<EventsSuggestionsQuery, TError, TData>(
      ['EventsSuggestions', variables],
      fetcher<EventsSuggestionsQuery, EventsSuggestionsQueryVariables>(EventsSuggestionsDocument, variables),
      options
    );

useEventsSuggestionsQuery.getKey = (variables: EventsSuggestionsQueryVariables) => ['EventsSuggestions', variables];
;

useEventsSuggestionsQuery.fetcher = (variables: EventsSuggestionsQueryVariables, options?: RequestInit['headers']) => fetcher<EventsSuggestionsQuery, EventsSuggestionsQueryVariables>(EventsSuggestionsDocument, variables, options);
export const ParticipantsByDateDocument = `
    query ParticipantsByDate($eventId: String!) {
  participantsByDate(eventId: $eventId) {
    count
    date
  }
  event(id: $eventId) {
    visitCount
  }
}
    `;
export const useParticipantsByDateQuery = <
      TData = ParticipantsByDateQuery,
      TError = unknown
    >(
      variables: ParticipantsByDateQueryVariables,
      options?: UseQueryOptions<ParticipantsByDateQuery, TError, TData>
    ) =>
    useQuery<ParticipantsByDateQuery, TError, TData>(
      ['ParticipantsByDate', variables],
      fetcher<ParticipantsByDateQuery, ParticipantsByDateQueryVariables>(ParticipantsByDateDocument, variables),
      options
    );

useParticipantsByDateQuery.getKey = (variables: ParticipantsByDateQueryVariables) => ['ParticipantsByDate', variables];
;

useParticipantsByDateQuery.fetcher = (variables: ParticipantsByDateQueryVariables, options?: RequestInit['headers']) => fetcher<ParticipantsByDateQuery, ParticipantsByDateQueryVariables>(ParticipantsByDateDocument, variables, options);
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
      ['DeleteEvent'],
      (variables?: DeleteEventMutationVariables) => fetcher<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, variables)(),
      options
    );
useDeleteEventMutation.fetcher = (variables: DeleteEventMutationVariables, options?: RequestInit['headers']) => fetcher<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, variables, options);
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
      ['UpdateEvent'],
      (variables?: UpdateEventMutationVariables) => fetcher<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, variables)(),
      options
    );
useUpdateEventMutation.fetcher = (variables: UpdateEventMutationVariables, options?: RequestInit['headers']) => fetcher<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, variables, options);
export const CreateEventDocument = `
    mutation CreateEvent($title: String!, $description: String!, $startDate: DateTime!, $endDate: DateTime!, $maxParticipants: Int!, $type: Float, $lat: Float!, $lng: Float!, $eventAddress: CreateEventAddressInput!, $tags: JSON) {
  createEvent(
    createEventInput: {title: $title, description: $description, startDate: $startDate, endDate: $endDate, maxParticipants: $maxParticipants, type: $type, lat: $lat, lng: $lng, eventAddress: $eventAddress, tags: $tags}
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
      ['CreateEvent'],
      (variables?: CreateEventMutationVariables) => fetcher<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, variables)(),
      options
    );
useCreateEventMutation.fetcher = (variables: CreateEventMutationVariables, options?: RequestInit['headers']) => fetcher<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, variables, options);
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
      ['participateInEvent'],
      (variables?: ParticipateInEventMutationVariables) => fetcher<ParticipateInEventMutation, ParticipateInEventMutationVariables>(ParticipateInEventDocument, variables)(),
      options
    );
useParticipateInEventMutation.fetcher = (variables: ParticipateInEventMutationVariables, options?: RequestInit['headers']) => fetcher<ParticipateInEventMutation, ParticipateInEventMutationVariables>(ParticipateInEventDocument, variables, options);
export const SingleUserDocument = `
    query singleUser($id: String!, $first: Float, $orderSort: String, $orderField: String) {
  user(id: $id) {
    lastname
    firstName
    email
    nickname
    description
  }
  userEvents(
    userId: $id
    first: $first
    orderSort: $orderSort
    orderField: $orderField
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
        }
      }
    }
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
      fetcher<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument, variables),
      options
    );

useSingleUserQuery.getKey = (variables: SingleUserQueryVariables) => ['singleUser', variables];
;

useSingleUserQuery.fetcher = (variables: SingleUserQueryVariables, options?: RequestInit['headers']) => fetcher<SingleUserQuery, SingleUserQueryVariables>(SingleUserDocument, variables, options);
export const CurrentUserDocument = `
    query CurrentUser {
  currentUser {
    lastname
    firstName
    email
    nickname
    description
    sex
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
      fetcher<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables),
      options
    );

useCurrentUserQuery.getKey = (variables?: CurrentUserQueryVariables) => variables === undefined ? ['CurrentUser'] : ['CurrentUser', variables];
;

useCurrentUserQuery.fetcher = (variables?: CurrentUserQueryVariables, options?: RequestInit['headers']) => fetcher<CurrentUserQuery, CurrentUserQueryVariables>(CurrentUserDocument, variables, options);
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
      fetcher<CurrentUserIdQuery, CurrentUserIdQueryVariables>(CurrentUserIdDocument, variables),
      options
    );

useCurrentUserIdQuery.getKey = (variables?: CurrentUserIdQueryVariables) => variables === undefined ? ['CurrentUserId'] : ['CurrentUserId', variables];
;

useCurrentUserIdQuery.fetcher = (variables?: CurrentUserIdQueryVariables, options?: RequestInit['headers']) => fetcher<CurrentUserIdQuery, CurrentUserIdQueryVariables>(CurrentUserIdDocument, variables, options);
export const TagsDocument = `
    query Tags($type: Float) {
  tags(type: $type) {
    id
    name
    type
  }
}
    `;
export const useTagsQuery = <
      TData = TagsQuery,
      TError = unknown
    >(
      variables?: TagsQueryVariables,
      options?: UseQueryOptions<TagsQuery, TError, TData>
    ) =>
    useQuery<TagsQuery, TError, TData>(
      variables === undefined ? ['Tags'] : ['Tags', variables],
      fetcher<TagsQuery, TagsQueryVariables>(TagsDocument, variables),
      options
    );

useTagsQuery.getKey = (variables?: TagsQueryVariables) => variables === undefined ? ['Tags'] : ['Tags', variables];
;

useTagsQuery.fetcher = (variables?: TagsQueryVariables, options?: RequestInit['headers']) => fetcher<TagsQuery, TagsQueryVariables>(TagsDocument, variables, options);
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
          description
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
      fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables),
      options
    );

useUsersQuery.getKey = (variables?: UsersQueryVariables) => variables === undefined ? ['Users'] : ['Users', variables];
;

useUsersQuery.fetcher = (variables?: UsersQueryVariables, options?: RequestInit['headers']) => fetcher<UsersQuery, UsersQueryVariables>(UsersDocument, variables, options);
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
      ['Login'],
      (variables?: LoginMutationVariables) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables)(),
      options
    );
useLoginMutation.fetcher = (variables: LoginMutationVariables, options?: RequestInit['headers']) => fetcher<LoginMutation, LoginMutationVariables>(LoginDocument, variables, options);
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
      ['CreateUser'],
      (variables?: CreateUserMutationVariables) => fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables)(),
      options
    );
useCreateUserMutation.fetcher = (variables: CreateUserMutationVariables, options?: RequestInit['headers']) => fetcher<CreateUserMutation, CreateUserMutationVariables>(CreateUserDocument, variables, options);
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
      ['ActivateUser'],
      (variables?: ActivateUserMutationVariables) => fetcher<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument, variables)(),
      options
    );
useActivateUserMutation.fetcher = (variables: ActivateUserMutationVariables, options?: RequestInit['headers']) => fetcher<ActivateUserMutation, ActivateUserMutationVariables>(ActivateUserDocument, variables, options);
export const UpdateUserDocument = `
    mutation UpdateUser($password: String, $email: String, $firstName: String, $lastname: String, $nickname: String, $description: String, $sex: Float!) {
  updateUser(
    updateUserInput: {password: $password, email: $email, firstName: $firstName, lastname: $lastname, nickname: $nickname, description: $description, sex: $sex}
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
      ['UpdateUser'],
      (variables?: UpdateUserMutationVariables) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables)(),
      options
    );
useUpdateUserMutation.fetcher = (variables: UpdateUserMutationVariables, options?: RequestInit['headers']) => fetcher<UpdateUserMutation, UpdateUserMutationVariables>(UpdateUserDocument, variables, options);
export const UserEventsCalendarDocument = `
    query UserEventsCalendar($startDate: DateTime!, $endDate: DateTime!, $userId: String!) {
  userEventsCalendar(startDate: $startDate, endDate: $endDate, userId: $userId) {
    page {
      edges {
        node {
          id
          title
          type
          startDate
          endDate
          loggedInParticipants {
            type
          }
        }
      }
    }
  }
}
    `;
export const useUserEventsCalendarQuery = <
      TData = UserEventsCalendarQuery,
      TError = unknown
    >(
      variables: UserEventsCalendarQueryVariables,
      options?: UseQueryOptions<UserEventsCalendarQuery, TError, TData>
    ) =>
    useQuery<UserEventsCalendarQuery, TError, TData>(
      ['UserEventsCalendar', variables],
      fetcher<UserEventsCalendarQuery, UserEventsCalendarQueryVariables>(UserEventsCalendarDocument, variables),
      options
    );

useUserEventsCalendarQuery.getKey = (variables: UserEventsCalendarQueryVariables) => ['UserEventsCalendar', variables];
;

useUserEventsCalendarQuery.fetcher = (variables: UserEventsCalendarQueryVariables, options?: RequestInit['headers']) => fetcher<UserEventsCalendarQuery, UserEventsCalendarQueryVariables>(UserEventsCalendarDocument, variables, options);