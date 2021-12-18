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

export type CreateDateSlotsMutationResponse = {
  __typename?: 'CreateDateSlotsMutationResponse';
  dateSlots: Array<DateSlot>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateTimeSlotTypesMutationResponse = {
  __typename?: 'CreateTimeSlotTypesMutationResponse';
  info: CreateInfo;
  timeSlotTypes: Array<TimeSlotType>;
};

export type CreateTimeSlotsMutationResponse = {
  __typename?: 'CreateTimeSlotsMutationResponse';
  info: CreateInfo;
  timeSlots: Array<TimeSlot>;
};

export type CreateUsersMutationResponse = {
  __typename?: 'CreateUsersMutationResponse';
  info: CreateInfo;
  users: Array<User>;
};

export type DateSlot = {
  __typename?: 'DateSlot';
  date: Scalars['String'];
  timeslots?: Maybe<Array<Maybe<TimeSlot>>>;
  timeslotsAggregate?: Maybe<DateSlotTimeSlotTimeslotsAggregationSelection>;
  timeslotsConnection: DateSlotTimeslotsConnection;
};


export type DateSlotTimeslotsArgs = {
  options?: InputMaybe<TimeSlotOptions>;
  where?: InputMaybe<TimeSlotWhere>;
};


export type DateSlotTimeslotsAggregateArgs = {
  where?: InputMaybe<TimeSlotWhere>;
};


export type DateSlotTimeslotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<DateSlotTimeslotsConnectionSort>>;
  where?: InputMaybe<DateSlotTimeslotsConnectionWhere>;
};

export type DateSlotAggregateSelection = {
  __typename?: 'DateSlotAggregateSelection';
  count: Scalars['Int'];
  date: StringAggregateSelection;
};

export type DateSlotConnectInput = {
  timeslots?: InputMaybe<Array<DateSlotTimeslotsConnectFieldInput>>;
};

export type DateSlotConnectOrCreateWhere = {
  node: DateSlotUniqueWhere;
};

export type DateSlotConnectWhere = {
  node: DateSlotWhere;
};

export type DateSlotCreateInput = {
  date: Scalars['String'];
  timeslots?: InputMaybe<DateSlotTimeslotsFieldInput>;
};

export type DateSlotDeleteInput = {
  timeslots?: InputMaybe<Array<DateSlotTimeslotsDeleteFieldInput>>;
};

export type DateSlotDisconnectInput = {
  timeslots?: InputMaybe<Array<DateSlotTimeslotsDisconnectFieldInput>>;
};

export type DateSlotOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more DateSlotSort objects to sort DateSlots by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<DateSlotSort>>>;
};

export type DateSlotRelationInput = {
  timeslots?: InputMaybe<Array<DateSlotTimeslotsCreateFieldInput>>;
};

/** Fields to sort DateSlots by. The order in which sorts are applied is not guaranteed when specifying many fields in one DateSlotSort object. */
export type DateSlotSort = {
  date?: InputMaybe<SortDirection>;
};

export type DateSlotTimeSlotTimeslotsAggregationSelection = {
  __typename?: 'DateSlotTimeSlotTimeslotsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<DateSlotTimeSlotTimeslotsNodeAggregateSelection>;
};

export type DateSlotTimeSlotTimeslotsNodeAggregateSelection = {
  __typename?: 'DateSlotTimeSlotTimeslotsNodeAggregateSelection';
  from: StringAggregateSelection;
  to: StringAggregateSelection;
};

export type DateSlotTimeslotsAggregateInput = {
  AND?: InputMaybe<Array<DateSlotTimeslotsAggregateInput>>;
  OR?: InputMaybe<Array<DateSlotTimeslotsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<DateSlotTimeslotsNodeAggregationWhereInput>;
};

export type DateSlotTimeslotsConnectFieldInput = {
  connect?: InputMaybe<Array<TimeSlotConnectInput>>;
  where?: InputMaybe<TimeSlotConnectWhere>;
};

export type DateSlotTimeslotsConnection = {
  __typename?: 'DateSlotTimeslotsConnection';
  edges: Array<DateSlotTimeslotsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type DateSlotTimeslotsConnectionSort = {
  node?: InputMaybe<TimeSlotSort>;
};

export type DateSlotTimeslotsConnectionWhere = {
  AND?: InputMaybe<Array<DateSlotTimeslotsConnectionWhere>>;
  OR?: InputMaybe<Array<DateSlotTimeslotsConnectionWhere>>;
  node?: InputMaybe<TimeSlotWhere>;
  node_NOT?: InputMaybe<TimeSlotWhere>;
};

export type DateSlotTimeslotsCreateFieldInput = {
  node: TimeSlotCreateInput;
};

export type DateSlotTimeslotsDeleteFieldInput = {
  delete?: InputMaybe<TimeSlotDeleteInput>;
  where?: InputMaybe<DateSlotTimeslotsConnectionWhere>;
};

export type DateSlotTimeslotsDisconnectFieldInput = {
  disconnect?: InputMaybe<TimeSlotDisconnectInput>;
  where?: InputMaybe<DateSlotTimeslotsConnectionWhere>;
};

export type DateSlotTimeslotsFieldInput = {
  connect?: InputMaybe<Array<DateSlotTimeslotsConnectFieldInput>>;
  create?: InputMaybe<Array<DateSlotTimeslotsCreateFieldInput>>;
};

export type DateSlotTimeslotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<DateSlotTimeslotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<DateSlotTimeslotsNodeAggregationWhereInput>>;
  from_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  from_EQUAL?: InputMaybe<Scalars['String']>;
  from_GT?: InputMaybe<Scalars['Int']>;
  from_GTE?: InputMaybe<Scalars['Int']>;
  from_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  from_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  from_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  from_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  from_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  from_LT?: InputMaybe<Scalars['Int']>;
  from_LTE?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  to_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  to_EQUAL?: InputMaybe<Scalars['String']>;
  to_GT?: InputMaybe<Scalars['Int']>;
  to_GTE?: InputMaybe<Scalars['Int']>;
  to_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  to_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  to_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  to_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  to_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  to_LT?: InputMaybe<Scalars['Int']>;
  to_LTE?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type DateSlotTimeslotsRelationship = {
  __typename?: 'DateSlotTimeslotsRelationship';
  cursor: Scalars['String'];
  node: TimeSlot;
};

export type DateSlotTimeslotsUpdateConnectionInput = {
  node?: InputMaybe<TimeSlotUpdateInput>;
};

export type DateSlotTimeslotsUpdateFieldInput = {
  connect?: InputMaybe<Array<DateSlotTimeslotsConnectFieldInput>>;
  create?: InputMaybe<Array<DateSlotTimeslotsCreateFieldInput>>;
  delete?: InputMaybe<Array<DateSlotTimeslotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<DateSlotTimeslotsDisconnectFieldInput>>;
  update?: InputMaybe<DateSlotTimeslotsUpdateConnectionInput>;
  where?: InputMaybe<DateSlotTimeslotsConnectionWhere>;
};

export type DateSlotUniqueWhere = {
  date?: InputMaybe<Scalars['String']>;
};

export type DateSlotUpdateInput = {
  date?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<Array<DateSlotTimeslotsUpdateFieldInput>>;
};

export type DateSlotWhere = {
  AND?: InputMaybe<Array<DateSlotWhere>>;
  OR?: InputMaybe<Array<DateSlotWhere>>;
  date?: InputMaybe<Scalars['String']>;
  date_CONTAINS?: InputMaybe<Scalars['String']>;
  date_ENDS_WITH?: InputMaybe<Scalars['String']>;
  date_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date_NOT?: InputMaybe<Scalars['String']>;
  date_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  date_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  date_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  date_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  date_STARTS_WITH?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<TimeSlotWhere>;
  timeslotsAggregate?: InputMaybe<DateSlotTimeslotsAggregateInput>;
  timeslotsConnection?: InputMaybe<DateSlotTimeslotsConnectionWhere>;
  timeslotsConnection_NOT?: InputMaybe<DateSlotTimeslotsConnectionWhere>;
  timeslots_NOT?: InputMaybe<TimeSlotWhere>;
};

export type DeleteInfo = {
  __typename?: 'DeleteInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesDeleted: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createDateSlots: CreateDateSlotsMutationResponse;
  createTimeSlotTypes: CreateTimeSlotTypesMutationResponse;
  createTimeSlots: CreateTimeSlotsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteDateSlots: DeleteInfo;
  deleteTimeSlotTypes: DeleteInfo;
  deleteTimeSlots: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateDateSlots: UpdateDateSlotsMutationResponse;
  updateTimeSlotTypes: UpdateTimeSlotTypesMutationResponse;
  updateTimeSlots: UpdateTimeSlotsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateDateSlotsArgs = {
  input: Array<DateSlotCreateInput>;
};


export type MutationCreateTimeSlotTypesArgs = {
  input: Array<TimeSlotTypeCreateInput>;
};


export type MutationCreateTimeSlotsArgs = {
  input: Array<TimeSlotCreateInput>;
};


export type MutationCreateUsersArgs = {
  input: Array<UserCreateInput>;
};


export type MutationDeleteDateSlotsArgs = {
  delete?: InputMaybe<DateSlotDeleteInput>;
  where?: InputMaybe<DateSlotWhere>;
};


export type MutationDeleteTimeSlotTypesArgs = {
  delete?: InputMaybe<TimeSlotTypeDeleteInput>;
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type MutationDeleteTimeSlotsArgs = {
  delete?: InputMaybe<TimeSlotDeleteInput>;
  where?: InputMaybe<TimeSlotWhere>;
};


export type MutationDeleteUsersArgs = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<UserWhere>;
};


export type MutationUpdateDateSlotsArgs = {
  connect?: InputMaybe<DateSlotConnectInput>;
  create?: InputMaybe<DateSlotRelationInput>;
  delete?: InputMaybe<DateSlotDeleteInput>;
  disconnect?: InputMaybe<DateSlotDisconnectInput>;
  update?: InputMaybe<DateSlotUpdateInput>;
  where?: InputMaybe<DateSlotWhere>;
};


export type MutationUpdateTimeSlotTypesArgs = {
  connect?: InputMaybe<TimeSlotTypeConnectInput>;
  create?: InputMaybe<TimeSlotTypeRelationInput>;
  delete?: InputMaybe<TimeSlotTypeDeleteInput>;
  disconnect?: InputMaybe<TimeSlotTypeDisconnectInput>;
  update?: InputMaybe<TimeSlotTypeUpdateInput>;
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type MutationUpdateTimeSlotsArgs = {
  connect?: InputMaybe<TimeSlotConnectInput>;
  connectOrCreate?: InputMaybe<TimeSlotConnectOrCreateInput>;
  create?: InputMaybe<TimeSlotRelationInput>;
  delete?: InputMaybe<TimeSlotDeleteInput>;
  disconnect?: InputMaybe<TimeSlotDisconnectInput>;
  update?: InputMaybe<TimeSlotUpdateInput>;
  where?: InputMaybe<TimeSlotWhere>;
};


export type MutationUpdateUsersArgs = {
  connect?: InputMaybe<UserConnectInput>;
  create?: InputMaybe<UserRelationInput>;
  delete?: InputMaybe<UserDeleteInput>;
  disconnect?: InputMaybe<UserDisconnectInput>;
  update?: InputMaybe<UserUpdateInput>;
  where?: InputMaybe<UserWhere>;
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  dateSlots: Array<DateSlot>;
  dateSlotsAggregate: DateSlotAggregateSelection;
  dateSlotsCount: Scalars['Int'];
  timeSlotTypes: Array<TimeSlotType>;
  timeSlotTypesAggregate: TimeSlotTypeAggregateSelection;
  timeSlotTypesCount: Scalars['Int'];
  timeSlots: Array<TimeSlot>;
  timeSlotsAggregate: TimeSlotAggregateSelection;
  timeSlotsCount: Scalars['Int'];
  users: Array<User>;
  usersAggregate: UserAggregateSelection;
  usersCount: Scalars['Int'];
};


export type QueryDateSlotsArgs = {
  options?: InputMaybe<DateSlotOptions>;
  where?: InputMaybe<DateSlotWhere>;
};


export type QueryDateSlotsAggregateArgs = {
  where?: InputMaybe<DateSlotWhere>;
};


export type QueryDateSlotsCountArgs = {
  where?: InputMaybe<DateSlotWhere>;
};


export type QueryTimeSlotTypesArgs = {
  options?: InputMaybe<TimeSlotTypeOptions>;
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type QueryTimeSlotTypesAggregateArgs = {
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type QueryTimeSlotTypesCountArgs = {
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type QueryTimeSlotsArgs = {
  options?: InputMaybe<TimeSlotOptions>;
  where?: InputMaybe<TimeSlotWhere>;
};


export type QueryTimeSlotsAggregateArgs = {
  where?: InputMaybe<TimeSlotWhere>;
};


export type QueryTimeSlotsCountArgs = {
  where?: InputMaybe<TimeSlotWhere>;
};


export type QueryUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type QueryUsersCountArgs = {
  where?: InputMaybe<UserWhere>;
};

export enum SortDirection {
  /** Sort by field values in ascending order. */
  Asc = 'ASC',
  /** Sort by field values in descending order. */
  Desc = 'DESC'
}

export type StringAggregateSelection = {
  __typename?: 'StringAggregateSelection';
  longest?: Maybe<Scalars['String']>;
  shortest?: Maybe<Scalars['String']>;
};

export type TimeSlot = {
  __typename?: 'TimeSlot';
  date: DateSlot;
  dateAggregate?: Maybe<TimeSlotDateSlotDateAggregationSelection>;
  dateConnection: TimeSlotDateConnection;
  from: Scalars['String'];
  to: Scalars['String'];
  type: TimeSlotType;
  typeAggregate?: Maybe<TimeSlotTimeSlotTypeTypeAggregationSelection>;
  typeConnection: TimeSlotTypeConnection;
  users?: Maybe<Array<Maybe<User>>>;
  usersAggregate?: Maybe<TimeSlotUserUsersAggregationSelection>;
  usersConnection: TimeSlotUsersConnection;
};


export type TimeSlotDateArgs = {
  options?: InputMaybe<DateSlotOptions>;
  where?: InputMaybe<DateSlotWhere>;
};


export type TimeSlotDateAggregateArgs = {
  where?: InputMaybe<DateSlotWhere>;
};


export type TimeSlotDateConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TimeSlotDateConnectionSort>>;
  where?: InputMaybe<TimeSlotDateConnectionWhere>;
};


export type TimeSlotTypeArgs = {
  options?: InputMaybe<TimeSlotTypeOptions>;
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type TimeSlotTypeAggregateArgs = {
  where?: InputMaybe<TimeSlotTypeWhere>;
};


export type TimeSlotTypeConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TimeSlotTypeConnectionSort>>;
  where?: InputMaybe<TimeSlotTypeConnectionWhere>;
};


export type TimeSlotUsersArgs = {
  options?: InputMaybe<UserOptions>;
  where?: InputMaybe<UserWhere>;
};


export type TimeSlotUsersAggregateArgs = {
  where?: InputMaybe<UserWhere>;
};


export type TimeSlotUsersConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TimeSlotUsersConnectionSort>>;
  where?: InputMaybe<TimeSlotUsersConnectionWhere>;
};

export type TimeSlotAggregateSelection = {
  __typename?: 'TimeSlotAggregateSelection';
  count: Scalars['Int'];
  from: StringAggregateSelection;
  to: StringAggregateSelection;
};

export type TimeSlotConnectInput = {
  date?: InputMaybe<TimeSlotDateConnectFieldInput>;
  type?: InputMaybe<TimeSlotTypeConnectFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersConnectFieldInput>>;
};

export type TimeSlotConnectOrCreateInput = {
  date?: InputMaybe<TimeSlotDateConnectOrCreateFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersConnectOrCreateFieldInput>>;
};

export type TimeSlotConnectWhere = {
  node: TimeSlotWhere;
};

export type TimeSlotCreateInput = {
  date?: InputMaybe<TimeSlotDateFieldInput>;
  from: Scalars['String'];
  to: Scalars['String'];
  type?: InputMaybe<TimeSlotTypeFieldInput>;
  users?: InputMaybe<TimeSlotUsersFieldInput>;
};

export type TimeSlotDateAggregateInput = {
  AND?: InputMaybe<Array<TimeSlotDateAggregateInput>>;
  OR?: InputMaybe<Array<TimeSlotDateAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TimeSlotDateNodeAggregationWhereInput>;
};

export type TimeSlotDateConnectFieldInput = {
  connect?: InputMaybe<DateSlotConnectInput>;
  where?: InputMaybe<DateSlotConnectWhere>;
};

export type TimeSlotDateConnectOrCreateFieldInput = {
  onCreate: TimeSlotDateConnectOrCreateFieldInputOnCreate;
  where: DateSlotConnectOrCreateWhere;
};

export type TimeSlotDateConnectOrCreateFieldInputOnCreate = {
  node: DateSlotCreateInput;
};

export type TimeSlotDateConnection = {
  __typename?: 'TimeSlotDateConnection';
  edges: Array<TimeSlotDateRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TimeSlotDateConnectionSort = {
  node?: InputMaybe<DateSlotSort>;
};

export type TimeSlotDateConnectionWhere = {
  AND?: InputMaybe<Array<TimeSlotDateConnectionWhere>>;
  OR?: InputMaybe<Array<TimeSlotDateConnectionWhere>>;
  node?: InputMaybe<DateSlotWhere>;
  node_NOT?: InputMaybe<DateSlotWhere>;
};

export type TimeSlotDateCreateFieldInput = {
  node: DateSlotCreateInput;
};

export type TimeSlotDateDeleteFieldInput = {
  delete?: InputMaybe<DateSlotDeleteInput>;
  where?: InputMaybe<TimeSlotDateConnectionWhere>;
};

export type TimeSlotDateDisconnectFieldInput = {
  disconnect?: InputMaybe<DateSlotDisconnectInput>;
  where?: InputMaybe<TimeSlotDateConnectionWhere>;
};

export type TimeSlotDateFieldInput = {
  connect?: InputMaybe<TimeSlotDateConnectFieldInput>;
  connectOrCreate?: InputMaybe<TimeSlotDateConnectOrCreateFieldInput>;
  create?: InputMaybe<TimeSlotDateCreateFieldInput>;
};

export type TimeSlotDateNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TimeSlotDateNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TimeSlotDateNodeAggregationWhereInput>>;
  date_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  date_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  date_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  date_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  date_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  date_EQUAL?: InputMaybe<Scalars['String']>;
  date_GT?: InputMaybe<Scalars['Int']>;
  date_GTE?: InputMaybe<Scalars['Int']>;
  date_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  date_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  date_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  date_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  date_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  date_LT?: InputMaybe<Scalars['Int']>;
  date_LTE?: InputMaybe<Scalars['Int']>;
  date_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  date_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  date_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  date_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  date_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TimeSlotDateRelationship = {
  __typename?: 'TimeSlotDateRelationship';
  cursor: Scalars['String'];
  node: DateSlot;
};

export type TimeSlotDateSlotDateAggregationSelection = {
  __typename?: 'TimeSlotDateSlotDateAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TimeSlotDateSlotDateNodeAggregateSelection>;
};

export type TimeSlotDateSlotDateNodeAggregateSelection = {
  __typename?: 'TimeSlotDateSlotDateNodeAggregateSelection';
  date: StringAggregateSelection;
};

export type TimeSlotDateUpdateConnectionInput = {
  node?: InputMaybe<DateSlotUpdateInput>;
};

export type TimeSlotDateUpdateFieldInput = {
  connect?: InputMaybe<TimeSlotDateConnectFieldInput>;
  connectOrCreate?: InputMaybe<TimeSlotDateConnectOrCreateFieldInput>;
  create?: InputMaybe<TimeSlotDateCreateFieldInput>;
  delete?: InputMaybe<TimeSlotDateDeleteFieldInput>;
  disconnect?: InputMaybe<TimeSlotDateDisconnectFieldInput>;
  update?: InputMaybe<TimeSlotDateUpdateConnectionInput>;
  where?: InputMaybe<TimeSlotDateConnectionWhere>;
};

export type TimeSlotDeleteInput = {
  date?: InputMaybe<TimeSlotDateDeleteFieldInput>;
  type?: InputMaybe<TimeSlotTypeDeleteFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersDeleteFieldInput>>;
};

export type TimeSlotDisconnectInput = {
  date?: InputMaybe<TimeSlotDateDisconnectFieldInput>;
  type?: InputMaybe<TimeSlotTypeDisconnectFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersDisconnectFieldInput>>;
};

export type TimeSlotOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TimeSlotSort objects to sort TimeSlots by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<TimeSlotSort>>>;
};

export type TimeSlotRelationInput = {
  date?: InputMaybe<TimeSlotDateCreateFieldInput>;
  type?: InputMaybe<TimeSlotTypeCreateFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersCreateFieldInput>>;
};

/** Fields to sort TimeSlots by. The order in which sorts are applied is not guaranteed when specifying many fields in one TimeSlotSort object. */
export type TimeSlotSort = {
  from?: InputMaybe<SortDirection>;
  to?: InputMaybe<SortDirection>;
};

export type TimeSlotTimeSlotTypeTypeAggregationSelection = {
  __typename?: 'TimeSlotTimeSlotTypeTypeAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TimeSlotTimeSlotTypeTypeNodeAggregateSelection>;
};

export type TimeSlotTimeSlotTypeTypeNodeAggregateSelection = {
  __typename?: 'TimeSlotTimeSlotTypeTypeNodeAggregateSelection';
  type: StringAggregateSelection;
};

export type TimeSlotType = {
  __typename?: 'TimeSlotType';
  timeslot: TimeSlot;
  timeslotAggregate?: Maybe<TimeSlotTypeTimeSlotTimeslotAggregationSelection>;
  timeslotConnection: TimeSlotTypeTimeslotConnection;
  type: Scalars['String'];
};


export type TimeSlotTypeTimeslotArgs = {
  options?: InputMaybe<TimeSlotOptions>;
  where?: InputMaybe<TimeSlotWhere>;
};


export type TimeSlotTypeTimeslotAggregateArgs = {
  where?: InputMaybe<TimeSlotWhere>;
};


export type TimeSlotTypeTimeslotConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<TimeSlotTypeTimeslotConnectionSort>>;
  where?: InputMaybe<TimeSlotTypeTimeslotConnectionWhere>;
};

export type TimeSlotTypeAggregateInput = {
  AND?: InputMaybe<Array<TimeSlotTypeAggregateInput>>;
  OR?: InputMaybe<Array<TimeSlotTypeAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TimeSlotTypeNodeAggregationWhereInput>;
};

export type TimeSlotTypeAggregateSelection = {
  __typename?: 'TimeSlotTypeAggregateSelection';
  count: Scalars['Int'];
  type: StringAggregateSelection;
};

export type TimeSlotTypeConnectFieldInput = {
  connect?: InputMaybe<TimeSlotTypeConnectInput>;
  where?: InputMaybe<TimeSlotTypeConnectWhere>;
};

export type TimeSlotTypeConnectInput = {
  timeslot?: InputMaybe<TimeSlotTypeTimeslotConnectFieldInput>;
};

export type TimeSlotTypeConnectWhere = {
  node: TimeSlotTypeWhere;
};

export type TimeSlotTypeConnection = {
  __typename?: 'TimeSlotTypeConnection';
  edges: Array<TimeSlotTypeRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TimeSlotTypeConnectionSort = {
  node?: InputMaybe<TimeSlotTypeSort>;
};

export type TimeSlotTypeConnectionWhere = {
  AND?: InputMaybe<Array<TimeSlotTypeConnectionWhere>>;
  OR?: InputMaybe<Array<TimeSlotTypeConnectionWhere>>;
  node?: InputMaybe<TimeSlotTypeWhere>;
  node_NOT?: InputMaybe<TimeSlotTypeWhere>;
};

export type TimeSlotTypeCreateFieldInput = {
  node: TimeSlotTypeCreateInput;
};

export type TimeSlotTypeCreateInput = {
  timeslot?: InputMaybe<TimeSlotTypeTimeslotFieldInput>;
  type: Scalars['String'];
};

export type TimeSlotTypeDeleteFieldInput = {
  delete?: InputMaybe<TimeSlotTypeDeleteInput>;
  where?: InputMaybe<TimeSlotTypeConnectionWhere>;
};

export type TimeSlotTypeDeleteInput = {
  timeslot?: InputMaybe<TimeSlotTypeTimeslotDeleteFieldInput>;
};

export type TimeSlotTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<TimeSlotTypeDisconnectInput>;
  where?: InputMaybe<TimeSlotTypeConnectionWhere>;
};

export type TimeSlotTypeDisconnectInput = {
  timeslot?: InputMaybe<TimeSlotTypeTimeslotDisconnectFieldInput>;
};

export type TimeSlotTypeFieldInput = {
  connect?: InputMaybe<TimeSlotTypeConnectFieldInput>;
  create?: InputMaybe<TimeSlotTypeCreateFieldInput>;
};

export type TimeSlotTypeNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TimeSlotTypeNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TimeSlotTypeNodeAggregationWhereInput>>;
  type_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  type_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  type_EQUAL?: InputMaybe<Scalars['String']>;
  type_GT?: InputMaybe<Scalars['Int']>;
  type_GTE?: InputMaybe<Scalars['Int']>;
  type_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  type_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  type_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  type_LT?: InputMaybe<Scalars['Int']>;
  type_LTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  type_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TimeSlotTypeOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more TimeSlotTypeSort objects to sort TimeSlotTypes by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<TimeSlotTypeSort>>>;
};

export type TimeSlotTypeRelationInput = {
  timeslot?: InputMaybe<TimeSlotTypeTimeslotCreateFieldInput>;
};

export type TimeSlotTypeRelationship = {
  __typename?: 'TimeSlotTypeRelationship';
  cursor: Scalars['String'];
  node: TimeSlotType;
};

/** Fields to sort TimeSlotTypes by. The order in which sorts are applied is not guaranteed when specifying many fields in one TimeSlotTypeSort object. */
export type TimeSlotTypeSort = {
  type?: InputMaybe<SortDirection>;
};

export type TimeSlotTypeTimeSlotTimeslotAggregationSelection = {
  __typename?: 'TimeSlotTypeTimeSlotTimeslotAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TimeSlotTypeTimeSlotTimeslotNodeAggregateSelection>;
};

export type TimeSlotTypeTimeSlotTimeslotNodeAggregateSelection = {
  __typename?: 'TimeSlotTypeTimeSlotTimeslotNodeAggregateSelection';
  from: StringAggregateSelection;
  to: StringAggregateSelection;
};

export type TimeSlotTypeTimeslotAggregateInput = {
  AND?: InputMaybe<Array<TimeSlotTypeTimeslotAggregateInput>>;
  OR?: InputMaybe<Array<TimeSlotTypeTimeslotAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TimeSlotTypeTimeslotNodeAggregationWhereInput>;
};

export type TimeSlotTypeTimeslotConnectFieldInput = {
  connect?: InputMaybe<TimeSlotConnectInput>;
  where?: InputMaybe<TimeSlotConnectWhere>;
};

export type TimeSlotTypeTimeslotConnection = {
  __typename?: 'TimeSlotTypeTimeslotConnection';
  edges: Array<TimeSlotTypeTimeslotRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TimeSlotTypeTimeslotConnectionSort = {
  node?: InputMaybe<TimeSlotSort>;
};

export type TimeSlotTypeTimeslotConnectionWhere = {
  AND?: InputMaybe<Array<TimeSlotTypeTimeslotConnectionWhere>>;
  OR?: InputMaybe<Array<TimeSlotTypeTimeslotConnectionWhere>>;
  node?: InputMaybe<TimeSlotWhere>;
  node_NOT?: InputMaybe<TimeSlotWhere>;
};

export type TimeSlotTypeTimeslotCreateFieldInput = {
  node: TimeSlotCreateInput;
};

export type TimeSlotTypeTimeslotDeleteFieldInput = {
  delete?: InputMaybe<TimeSlotDeleteInput>;
  where?: InputMaybe<TimeSlotTypeTimeslotConnectionWhere>;
};

export type TimeSlotTypeTimeslotDisconnectFieldInput = {
  disconnect?: InputMaybe<TimeSlotDisconnectInput>;
  where?: InputMaybe<TimeSlotTypeTimeslotConnectionWhere>;
};

export type TimeSlotTypeTimeslotFieldInput = {
  connect?: InputMaybe<TimeSlotTypeTimeslotConnectFieldInput>;
  create?: InputMaybe<TimeSlotTypeTimeslotCreateFieldInput>;
};

export type TimeSlotTypeTimeslotNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TimeSlotTypeTimeslotNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TimeSlotTypeTimeslotNodeAggregationWhereInput>>;
  from_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  from_EQUAL?: InputMaybe<Scalars['String']>;
  from_GT?: InputMaybe<Scalars['Int']>;
  from_GTE?: InputMaybe<Scalars['Int']>;
  from_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  from_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  from_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  from_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  from_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  from_LT?: InputMaybe<Scalars['Int']>;
  from_LTE?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  to_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  to_EQUAL?: InputMaybe<Scalars['String']>;
  to_GT?: InputMaybe<Scalars['Int']>;
  to_GTE?: InputMaybe<Scalars['Int']>;
  to_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  to_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  to_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  to_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  to_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  to_LT?: InputMaybe<Scalars['Int']>;
  to_LTE?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TimeSlotTypeTimeslotRelationship = {
  __typename?: 'TimeSlotTypeTimeslotRelationship';
  cursor: Scalars['String'];
  node: TimeSlot;
};

export type TimeSlotTypeTimeslotUpdateConnectionInput = {
  node?: InputMaybe<TimeSlotUpdateInput>;
};

export type TimeSlotTypeTimeslotUpdateFieldInput = {
  connect?: InputMaybe<TimeSlotTypeTimeslotConnectFieldInput>;
  create?: InputMaybe<TimeSlotTypeTimeslotCreateFieldInput>;
  delete?: InputMaybe<TimeSlotTypeTimeslotDeleteFieldInput>;
  disconnect?: InputMaybe<TimeSlotTypeTimeslotDisconnectFieldInput>;
  update?: InputMaybe<TimeSlotTypeTimeslotUpdateConnectionInput>;
  where?: InputMaybe<TimeSlotTypeTimeslotConnectionWhere>;
};

export type TimeSlotTypeUpdateConnectionInput = {
  node?: InputMaybe<TimeSlotTypeUpdateInput>;
};

export type TimeSlotTypeUpdateFieldInput = {
  connect?: InputMaybe<TimeSlotTypeConnectFieldInput>;
  create?: InputMaybe<TimeSlotTypeCreateFieldInput>;
  delete?: InputMaybe<TimeSlotTypeDeleteFieldInput>;
  disconnect?: InputMaybe<TimeSlotTypeDisconnectFieldInput>;
  update?: InputMaybe<TimeSlotTypeUpdateConnectionInput>;
  where?: InputMaybe<TimeSlotTypeConnectionWhere>;
};

export type TimeSlotTypeUpdateInput = {
  timeslot?: InputMaybe<TimeSlotTypeTimeslotUpdateFieldInput>;
  type?: InputMaybe<Scalars['String']>;
};

export type TimeSlotTypeWhere = {
  AND?: InputMaybe<Array<TimeSlotTypeWhere>>;
  OR?: InputMaybe<Array<TimeSlotTypeWhere>>;
  timeslot?: InputMaybe<TimeSlotWhere>;
  timeslotAggregate?: InputMaybe<TimeSlotTypeTimeslotAggregateInput>;
  timeslotConnection?: InputMaybe<TimeSlotTypeTimeslotConnectionWhere>;
  timeslotConnection_NOT?: InputMaybe<TimeSlotTypeTimeslotConnectionWhere>;
  timeslot_NOT?: InputMaybe<TimeSlotWhere>;
  type?: InputMaybe<Scalars['String']>;
  type_CONTAINS?: InputMaybe<Scalars['String']>;
  type_ENDS_WITH?: InputMaybe<Scalars['String']>;
  type_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_NOT?: InputMaybe<Scalars['String']>;
  type_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  type_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  type_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  type_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  type_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type TimeSlotUpdateInput = {
  date?: InputMaybe<TimeSlotDateUpdateFieldInput>;
  from?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TimeSlotTypeUpdateFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersUpdateFieldInput>>;
};

export type TimeSlotUserUsersAggregationSelection = {
  __typename?: 'TimeSlotUserUsersAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<TimeSlotUserUsersNodeAggregateSelection>;
};

export type TimeSlotUserUsersNodeAggregateSelection = {
  __typename?: 'TimeSlotUserUsersNodeAggregateSelection';
  email: StringAggregateSelection;
  name: StringAggregateSelection;
  phonenumber: StringAggregateSelection;
};

export type TimeSlotUsersAggregateInput = {
  AND?: InputMaybe<Array<TimeSlotUsersAggregateInput>>;
  OR?: InputMaybe<Array<TimeSlotUsersAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<TimeSlotUsersNodeAggregationWhereInput>;
};

export type TimeSlotUsersConnectFieldInput = {
  connect?: InputMaybe<Array<UserConnectInput>>;
  where?: InputMaybe<UserConnectWhere>;
};

export type TimeSlotUsersConnectOrCreateFieldInput = {
  onCreate: TimeSlotUsersConnectOrCreateFieldInputOnCreate;
  where: UserConnectOrCreateWhere;
};

export type TimeSlotUsersConnectOrCreateFieldInputOnCreate = {
  node: UserCreateInput;
};

export type TimeSlotUsersConnection = {
  __typename?: 'TimeSlotUsersConnection';
  edges: Array<TimeSlotUsersRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type TimeSlotUsersConnectionSort = {
  node?: InputMaybe<UserSort>;
};

export type TimeSlotUsersConnectionWhere = {
  AND?: InputMaybe<Array<TimeSlotUsersConnectionWhere>>;
  OR?: InputMaybe<Array<TimeSlotUsersConnectionWhere>>;
  node?: InputMaybe<UserWhere>;
  node_NOT?: InputMaybe<UserWhere>;
};

export type TimeSlotUsersCreateFieldInput = {
  node: UserCreateInput;
};

export type TimeSlotUsersDeleteFieldInput = {
  delete?: InputMaybe<UserDeleteInput>;
  where?: InputMaybe<TimeSlotUsersConnectionWhere>;
};

export type TimeSlotUsersDisconnectFieldInput = {
  disconnect?: InputMaybe<UserDisconnectInput>;
  where?: InputMaybe<TimeSlotUsersConnectionWhere>;
};

export type TimeSlotUsersFieldInput = {
  connect?: InputMaybe<Array<TimeSlotUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TimeSlotUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TimeSlotUsersCreateFieldInput>>;
};

export type TimeSlotUsersNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<TimeSlotUsersNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<TimeSlotUsersNodeAggregationWhereInput>>;
  email_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  email_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  email_EQUAL?: InputMaybe<Scalars['String']>;
  email_GT?: InputMaybe<Scalars['Int']>;
  email_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  email_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  email_LT?: InputMaybe<Scalars['Int']>;
  email_LTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  email_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  name_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  name_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  name_EQUAL?: InputMaybe<Scalars['String']>;
  name_GT?: InputMaybe<Scalars['Int']>;
  name_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  name_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  name_LT?: InputMaybe<Scalars['Int']>;
  name_LTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  name_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  phonenumber_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  phonenumber_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  phonenumber_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  phonenumber_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  phonenumber_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  phonenumber_EQUAL?: InputMaybe<Scalars['String']>;
  phonenumber_GT?: InputMaybe<Scalars['Int']>;
  phonenumber_GTE?: InputMaybe<Scalars['Int']>;
  phonenumber_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  phonenumber_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  phonenumber_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  phonenumber_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  phonenumber_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  phonenumber_LT?: InputMaybe<Scalars['Int']>;
  phonenumber_LTE?: InputMaybe<Scalars['Int']>;
  phonenumber_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  phonenumber_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  phonenumber_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  phonenumber_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  phonenumber_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type TimeSlotUsersRelationship = {
  __typename?: 'TimeSlotUsersRelationship';
  cursor: Scalars['String'];
  node: User;
};

export type TimeSlotUsersUpdateConnectionInput = {
  node?: InputMaybe<UserUpdateInput>;
};

export type TimeSlotUsersUpdateFieldInput = {
  connect?: InputMaybe<Array<TimeSlotUsersConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<TimeSlotUsersConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<TimeSlotUsersCreateFieldInput>>;
  delete?: InputMaybe<Array<TimeSlotUsersDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TimeSlotUsersDisconnectFieldInput>>;
  update?: InputMaybe<TimeSlotUsersUpdateConnectionInput>;
  where?: InputMaybe<TimeSlotUsersConnectionWhere>;
};

export type TimeSlotWhere = {
  AND?: InputMaybe<Array<TimeSlotWhere>>;
  OR?: InputMaybe<Array<TimeSlotWhere>>;
  date?: InputMaybe<DateSlotWhere>;
  dateAggregate?: InputMaybe<TimeSlotDateAggregateInput>;
  dateConnection?: InputMaybe<TimeSlotDateConnectionWhere>;
  dateConnection_NOT?: InputMaybe<TimeSlotDateConnectionWhere>;
  date_NOT?: InputMaybe<DateSlotWhere>;
  from?: InputMaybe<Scalars['String']>;
  from_CONTAINS?: InputMaybe<Scalars['String']>;
  from_ENDS_WITH?: InputMaybe<Scalars['String']>;
  from_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from_NOT?: InputMaybe<Scalars['String']>;
  from_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  from_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  from_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  from_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  from_STARTS_WITH?: InputMaybe<Scalars['String']>;
  to?: InputMaybe<Scalars['String']>;
  to_CONTAINS?: InputMaybe<Scalars['String']>;
  to_ENDS_WITH?: InputMaybe<Scalars['String']>;
  to_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_NOT?: InputMaybe<Scalars['String']>;
  to_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  to_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  to_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  to_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  to_STARTS_WITH?: InputMaybe<Scalars['String']>;
  type?: InputMaybe<TimeSlotTypeWhere>;
  typeAggregate?: InputMaybe<TimeSlotTypeAggregateInput>;
  typeConnection?: InputMaybe<TimeSlotTypeConnectionWhere>;
  typeConnection_NOT?: InputMaybe<TimeSlotTypeConnectionWhere>;
  type_NOT?: InputMaybe<TimeSlotTypeWhere>;
  users?: InputMaybe<UserWhere>;
  usersAggregate?: InputMaybe<TimeSlotUsersAggregateInput>;
  usersConnection?: InputMaybe<TimeSlotUsersConnectionWhere>;
  usersConnection_NOT?: InputMaybe<TimeSlotUsersConnectionWhere>;
  users_NOT?: InputMaybe<UserWhere>;
};

export type UpdateDateSlotsMutationResponse = {
  __typename?: 'UpdateDateSlotsMutationResponse';
  dateSlots: Array<DateSlot>;
  info: UpdateInfo;
};

export type UpdateInfo = {
  __typename?: 'UpdateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  nodesDeleted: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
  relationshipsDeleted: Scalars['Int'];
};

export type UpdateTimeSlotTypesMutationResponse = {
  __typename?: 'UpdateTimeSlotTypesMutationResponse';
  info: UpdateInfo;
  timeSlotTypes: Array<TimeSlotType>;
};

export type UpdateTimeSlotsMutationResponse = {
  __typename?: 'UpdateTimeSlotsMutationResponse';
  info: UpdateInfo;
  timeSlots: Array<TimeSlot>;
};

export type UpdateUsersMutationResponse = {
  __typename?: 'UpdateUsersMutationResponse';
  info: UpdateInfo;
  users: Array<User>;
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  name: Scalars['String'];
  phonenumber: Scalars['String'];
  timeslots?: Maybe<Array<Maybe<TimeSlot>>>;
  timeslotsAggregate?: Maybe<UserTimeSlotTimeslotsAggregationSelection>;
  timeslotsConnection: UserTimeslotsConnection;
};


export type UserTimeslotsArgs = {
  options?: InputMaybe<TimeSlotOptions>;
  where?: InputMaybe<TimeSlotWhere>;
};


export type UserTimeslotsAggregateArgs = {
  where?: InputMaybe<TimeSlotWhere>;
};


export type UserTimeslotsConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<UserTimeslotsConnectionSort>>;
  where?: InputMaybe<UserTimeslotsConnectionWhere>;
};

export type UserAggregateSelection = {
  __typename?: 'UserAggregateSelection';
  count: Scalars['Int'];
  email: StringAggregateSelection;
  name: StringAggregateSelection;
  phonenumber: StringAggregateSelection;
};

export type UserConnectInput = {
  timeslots?: InputMaybe<Array<UserTimeslotsConnectFieldInput>>;
};

export type UserConnectOrCreateWhere = {
  node: UserUniqueWhere;
};

export type UserConnectWhere = {
  node: UserWhere;
};

export type UserCreateInput = {
  email: Scalars['String'];
  name: Scalars['String'];
  phonenumber: Scalars['String'];
  timeslots?: InputMaybe<UserTimeslotsFieldInput>;
};

export type UserDeleteInput = {
  timeslots?: InputMaybe<Array<UserTimeslotsDeleteFieldInput>>;
};

export type UserDisconnectInput = {
  timeslots?: InputMaybe<Array<UserTimeslotsDisconnectFieldInput>>;
};

export type UserOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more UserSort objects to sort Users by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<UserSort>>>;
};

export type UserRelationInput = {
  timeslots?: InputMaybe<Array<UserTimeslotsCreateFieldInput>>;
};

/** Fields to sort Users by. The order in which sorts are applied is not guaranteed when specifying many fields in one UserSort object. */
export type UserSort = {
  email?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  phonenumber?: InputMaybe<SortDirection>;
};

export type UserTimeSlotTimeslotsAggregationSelection = {
  __typename?: 'UserTimeSlotTimeslotsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UserTimeSlotTimeslotsNodeAggregateSelection>;
};

export type UserTimeSlotTimeslotsNodeAggregateSelection = {
  __typename?: 'UserTimeSlotTimeslotsNodeAggregateSelection';
  from: StringAggregateSelection;
  to: StringAggregateSelection;
};

export type UserTimeslotsAggregateInput = {
  AND?: InputMaybe<Array<UserTimeslotsAggregateInput>>;
  OR?: InputMaybe<Array<UserTimeslotsAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<UserTimeslotsNodeAggregationWhereInput>;
};

export type UserTimeslotsConnectFieldInput = {
  connect?: InputMaybe<Array<TimeSlotConnectInput>>;
  where?: InputMaybe<TimeSlotConnectWhere>;
};

export type UserTimeslotsConnection = {
  __typename?: 'UserTimeslotsConnection';
  edges: Array<UserTimeslotsRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type UserTimeslotsConnectionSort = {
  node?: InputMaybe<TimeSlotSort>;
};

export type UserTimeslotsConnectionWhere = {
  AND?: InputMaybe<Array<UserTimeslotsConnectionWhere>>;
  OR?: InputMaybe<Array<UserTimeslotsConnectionWhere>>;
  node?: InputMaybe<TimeSlotWhere>;
  node_NOT?: InputMaybe<TimeSlotWhere>;
};

export type UserTimeslotsCreateFieldInput = {
  node: TimeSlotCreateInput;
};

export type UserTimeslotsDeleteFieldInput = {
  delete?: InputMaybe<TimeSlotDeleteInput>;
  where?: InputMaybe<UserTimeslotsConnectionWhere>;
};

export type UserTimeslotsDisconnectFieldInput = {
  disconnect?: InputMaybe<TimeSlotDisconnectInput>;
  where?: InputMaybe<UserTimeslotsConnectionWhere>;
};

export type UserTimeslotsFieldInput = {
  connect?: InputMaybe<Array<UserTimeslotsConnectFieldInput>>;
  create?: InputMaybe<Array<UserTimeslotsCreateFieldInput>>;
};

export type UserTimeslotsNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<UserTimeslotsNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<UserTimeslotsNodeAggregationWhereInput>>;
  from_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  from_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  from_EQUAL?: InputMaybe<Scalars['String']>;
  from_GT?: InputMaybe<Scalars['Int']>;
  from_GTE?: InputMaybe<Scalars['Int']>;
  from_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  from_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  from_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  from_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  from_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  from_LT?: InputMaybe<Scalars['Int']>;
  from_LTE?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  from_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  to_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  to_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  to_EQUAL?: InputMaybe<Scalars['String']>;
  to_GT?: InputMaybe<Scalars['Int']>;
  to_GTE?: InputMaybe<Scalars['Int']>;
  to_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  to_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  to_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  to_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  to_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  to_LT?: InputMaybe<Scalars['Int']>;
  to_LTE?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  to_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type UserTimeslotsRelationship = {
  __typename?: 'UserTimeslotsRelationship';
  cursor: Scalars['String'];
  node: TimeSlot;
};

export type UserTimeslotsUpdateConnectionInput = {
  node?: InputMaybe<TimeSlotUpdateInput>;
};

export type UserTimeslotsUpdateFieldInput = {
  connect?: InputMaybe<Array<UserTimeslotsConnectFieldInput>>;
  create?: InputMaybe<Array<UserTimeslotsCreateFieldInput>>;
  delete?: InputMaybe<Array<UserTimeslotsDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<UserTimeslotsDisconnectFieldInput>>;
  update?: InputMaybe<UserTimeslotsUpdateConnectionInput>;
  where?: InputMaybe<UserTimeslotsConnectionWhere>;
};

export type UserUniqueWhere = {
  email?: InputMaybe<Scalars['String']>;
  phonenumber?: InputMaybe<Scalars['String']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phonenumber?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<Array<UserTimeslotsUpdateFieldInput>>;
};

export type UserWhere = {
  AND?: InputMaybe<Array<UserWhere>>;
  OR?: InputMaybe<Array<UserWhere>>;
  email?: InputMaybe<Scalars['String']>;
  email_CONTAINS?: InputMaybe<Scalars['String']>;
  email_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT?: InputMaybe<Scalars['String']>;
  email_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  email_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  email_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  email_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  email_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  name_CONTAINS?: InputMaybe<Scalars['String']>;
  name_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT?: InputMaybe<Scalars['String']>;
  name_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  name_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  name_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  name_STARTS_WITH?: InputMaybe<Scalars['String']>;
  phonenumber?: InputMaybe<Scalars['String']>;
  phonenumber_CONTAINS?: InputMaybe<Scalars['String']>;
  phonenumber_ENDS_WITH?: InputMaybe<Scalars['String']>;
  phonenumber_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phonenumber_NOT?: InputMaybe<Scalars['String']>;
  phonenumber_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  phonenumber_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  phonenumber_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  phonenumber_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  phonenumber_STARTS_WITH?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<TimeSlotWhere>;
  timeslotsAggregate?: InputMaybe<UserTimeslotsAggregateInput>;
  timeslotsConnection?: InputMaybe<UserTimeslotsConnectionWhere>;
  timeslotsConnection_NOT?: InputMaybe<UserTimeslotsConnectionWhere>;
  timeslots_NOT?: InputMaybe<TimeSlotWhere>;
};

export type RegularDateSlotFragment = { __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, users?: Array<{ __typename?: 'User', name: string, email: string, phonenumber: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type RegularTimeSlotFragment = { __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string } | null | undefined> | null | undefined };

export type RegularUserFragment = { __typename?: 'User', name: string, phonenumber: string, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined };

export type CreateDateSlotsMutationVariables = Exact<{
  input: Array<DateSlotCreateInput> | DateSlotCreateInput;
}>;


export type CreateDateSlotsMutation = { __typename?: 'Mutation', createDateSlots: { __typename?: 'CreateDateSlotsMutationResponse', dateSlots: Array<{ __typename?: 'DateSlot', date: string }> } };

export type CreateTimeSlotsMutationVariables = Exact<{
  input: Array<TimeSlotCreateInput> | TimeSlotCreateInput;
}>;


export type CreateTimeSlotsMutation = { __typename?: 'Mutation', createTimeSlots: { __typename?: 'CreateTimeSlotsMutationResponse', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string } | null | undefined> | null | undefined }> } };

export type CreateUsersMutationVariables = Exact<{
  input: Array<UserCreateInput> | UserCreateInput;
}>;


export type CreateUsersMutation = { __typename?: 'Mutation', createUsers: { __typename?: 'CreateUsersMutationResponse', users: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> } };

export type DateSlotQueryVariables = Exact<{
  where?: InputMaybe<DateSlotWhere>;
}>;


export type DateSlotQuery = { __typename?: 'Query', dateSlots: Array<{ __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, users?: Array<{ __typename?: 'User', name: string, email: string, phonenumber: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined }> };

export type DateSlotsQueryVariables = Exact<{ [key: string]: never; }>;


export type DateSlotsQuery = { __typename?: 'Query', dateSlots: Array<{ __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, users?: Array<{ __typename?: 'User', name: string, email: string, phonenumber: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined }> };

export type TimeSlotQueryVariables = Exact<{
  where?: InputMaybe<TimeSlotWhere>;
}>;


export type TimeSlotQuery = { __typename?: 'Query', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string } | null | undefined> | null | undefined }> };

export type TimeSlotsQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeSlotsQuery = { __typename?: 'Query', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string } | null | undefined> | null | undefined }> };

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UserWhere>;
}>;


export type UserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', name: string, phonenumber: string, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> };

export const RegularDateSlotFragmentDoc = gql`
    fragment RegularDateSlot on DateSlot {
  date
  timeslots {
    to
    from
    type {
      type
    }
    users {
      name
      email
      phonenumber
    }
  }
}
    `;
export const RegularTimeSlotFragmentDoc = gql`
    fragment RegularTimeSlot on TimeSlot {
  to
  from
  type {
    type
  }
  date {
    date
  }
  users {
    name
    phonenumber
    email
  }
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  name
  phonenumber
  email
  timeslots {
    to
    from
    type {
      type
    }
    date {
      date
    }
  }
}
    `;
export const CreateDateSlotsDocument = gql`
    mutation CreateDateSlots($input: [DateSlotCreateInput!]!) {
  createDateSlots(input: $input) {
    dateSlots {
      date
    }
  }
}
    `;
export type CreateDateSlotsMutationFn = Apollo.MutationFunction<CreateDateSlotsMutation, CreateDateSlotsMutationVariables>;

/**
 * __useCreateDateSlotsMutation__
 *
 * To run a mutation, you first call `useCreateDateSlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateDateSlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createDateSlotsMutation, { data, loading, error }] = useCreateDateSlotsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateDateSlotsMutation(baseOptions?: Apollo.MutationHookOptions<CreateDateSlotsMutation, CreateDateSlotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateDateSlotsMutation, CreateDateSlotsMutationVariables>(CreateDateSlotsDocument, options);
      }
export type CreateDateSlotsMutationHookResult = ReturnType<typeof useCreateDateSlotsMutation>;
export type CreateDateSlotsMutationResult = Apollo.MutationResult<CreateDateSlotsMutation>;
export type CreateDateSlotsMutationOptions = Apollo.BaseMutationOptions<CreateDateSlotsMutation, CreateDateSlotsMutationVariables>;
export const CreateTimeSlotsDocument = gql`
    mutation CreateTimeSlots($input: [TimeSlotCreateInput!]!) {
  createTimeSlots(input: $input) {
    timeSlots {
      ...RegularTimeSlot
    }
  }
}
    ${RegularTimeSlotFragmentDoc}`;
export type CreateTimeSlotsMutationFn = Apollo.MutationFunction<CreateTimeSlotsMutation, CreateTimeSlotsMutationVariables>;

/**
 * __useCreateTimeSlotsMutation__
 *
 * To run a mutation, you first call `useCreateTimeSlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimeSlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimeSlotsMutation, { data, loading, error }] = useCreateTimeSlotsMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTimeSlotsMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimeSlotsMutation, CreateTimeSlotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimeSlotsMutation, CreateTimeSlotsMutationVariables>(CreateTimeSlotsDocument, options);
      }
export type CreateTimeSlotsMutationHookResult = ReturnType<typeof useCreateTimeSlotsMutation>;
export type CreateTimeSlotsMutationResult = Apollo.MutationResult<CreateTimeSlotsMutation>;
export type CreateTimeSlotsMutationOptions = Apollo.BaseMutationOptions<CreateTimeSlotsMutation, CreateTimeSlotsMutationVariables>;
export const CreateUsersDocument = gql`
    mutation CreateUsers($input: [UserCreateInput!]!) {
  createUsers(input: $input) {
    users {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type CreateUsersMutationFn = Apollo.MutationFunction<CreateUsersMutation, CreateUsersMutationVariables>;

/**
 * __useCreateUsersMutation__
 *
 * To run a mutation, you first call `useCreateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createUsersMutation, { data, loading, error }] = useCreateUsersMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateUsersMutation(baseOptions?: Apollo.MutationHookOptions<CreateUsersMutation, CreateUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateUsersMutation, CreateUsersMutationVariables>(CreateUsersDocument, options);
      }
export type CreateUsersMutationHookResult = ReturnType<typeof useCreateUsersMutation>;
export type CreateUsersMutationResult = Apollo.MutationResult<CreateUsersMutation>;
export type CreateUsersMutationOptions = Apollo.BaseMutationOptions<CreateUsersMutation, CreateUsersMutationVariables>;
export const DateSlotDocument = gql`
    query DateSlot($where: DateSlotWhere) {
  dateSlots(where: $where) {
    ...RegularDateSlot
  }
}
    ${RegularDateSlotFragmentDoc}`;

/**
 * __useDateSlotQuery__
 *
 * To run a query within a React component, call `useDateSlotQuery` and pass it any options that fit your needs.
 * When your component renders, `useDateSlotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDateSlotQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDateSlotQuery(baseOptions?: Apollo.QueryHookOptions<DateSlotQuery, DateSlotQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DateSlotQuery, DateSlotQueryVariables>(DateSlotDocument, options);
      }
export function useDateSlotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DateSlotQuery, DateSlotQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DateSlotQuery, DateSlotQueryVariables>(DateSlotDocument, options);
        }
export type DateSlotQueryHookResult = ReturnType<typeof useDateSlotQuery>;
export type DateSlotLazyQueryHookResult = ReturnType<typeof useDateSlotLazyQuery>;
export type DateSlotQueryResult = Apollo.QueryResult<DateSlotQuery, DateSlotQueryVariables>;
export const DateSlotsDocument = gql`
    query DateSlots {
  dateSlots {
    ...RegularDateSlot
  }
}
    ${RegularDateSlotFragmentDoc}`;

/**
 * __useDateSlotsQuery__
 *
 * To run a query within a React component, call `useDateSlotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useDateSlotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useDateSlotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useDateSlotsQuery(baseOptions?: Apollo.QueryHookOptions<DateSlotsQuery, DateSlotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<DateSlotsQuery, DateSlotsQueryVariables>(DateSlotsDocument, options);
      }
export function useDateSlotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<DateSlotsQuery, DateSlotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<DateSlotsQuery, DateSlotsQueryVariables>(DateSlotsDocument, options);
        }
export type DateSlotsQueryHookResult = ReturnType<typeof useDateSlotsQuery>;
export type DateSlotsLazyQueryHookResult = ReturnType<typeof useDateSlotsLazyQuery>;
export type DateSlotsQueryResult = Apollo.QueryResult<DateSlotsQuery, DateSlotsQueryVariables>;
export const TimeSlotDocument = gql`
    query TimeSlot($where: TimeSlotWhere) {
  timeSlots(where: $where) {
    ...RegularTimeSlot
  }
}
    ${RegularTimeSlotFragmentDoc}`;

/**
 * __useTimeSlotQuery__
 *
 * To run a query within a React component, call `useTimeSlotQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeSlotQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeSlotQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTimeSlotQuery(baseOptions?: Apollo.QueryHookOptions<TimeSlotQuery, TimeSlotQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeSlotQuery, TimeSlotQueryVariables>(TimeSlotDocument, options);
      }
export function useTimeSlotLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeSlotQuery, TimeSlotQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeSlotQuery, TimeSlotQueryVariables>(TimeSlotDocument, options);
        }
export type TimeSlotQueryHookResult = ReturnType<typeof useTimeSlotQuery>;
export type TimeSlotLazyQueryHookResult = ReturnType<typeof useTimeSlotLazyQuery>;
export type TimeSlotQueryResult = Apollo.QueryResult<TimeSlotQuery, TimeSlotQueryVariables>;
export const TimeSlotsDocument = gql`
    query TimeSlots {
  timeSlots {
    ...RegularTimeSlot
  }
}
    ${RegularTimeSlotFragmentDoc}`;

/**
 * __useTimeSlotsQuery__
 *
 * To run a query within a React component, call `useTimeSlotsQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeSlotsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeSlotsQuery({
 *   variables: {
 *   },
 * });
 */
export function useTimeSlotsQuery(baseOptions?: Apollo.QueryHookOptions<TimeSlotsQuery, TimeSlotsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeSlotsQuery, TimeSlotsQueryVariables>(TimeSlotsDocument, options);
      }
export function useTimeSlotsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeSlotsQuery, TimeSlotsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeSlotsQuery, TimeSlotsQueryVariables>(TimeSlotsDocument, options);
        }
export type TimeSlotsQueryHookResult = ReturnType<typeof useTimeSlotsQuery>;
export type TimeSlotsLazyQueryHookResult = ReturnType<typeof useTimeSlotsLazyQuery>;
export type TimeSlotsQueryResult = Apollo.QueryResult<TimeSlotsQuery, TimeSlotsQueryVariables>;
export const UserDocument = gql`
    query User($where: UserWhere) {
  users(where: $where) {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const UsersDocument = gql`
    query Users {
  users {
    ...RegularUser
  }
}
    ${RegularUserFragmentDoc}`;

/**
 * __useUsersQuery__
 *
 * To run a query within a React component, call `useUsersQuery` and pass it any options that fit your needs.
 * When your component renders, `useUsersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUsersQuery({
 *   variables: {
 *   },
 * });
 */
export function useUsersQuery(baseOptions?: Apollo.QueryHookOptions<UsersQuery, UsersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
      }
export function useUsersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UsersQuery, UsersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UsersQuery, UsersQueryVariables>(UsersDocument, options);
        }
export type UsersQueryHookResult = ReturnType<typeof useUsersQuery>;
export type UsersLazyQueryHookResult = ReturnType<typeof useUsersLazyQuery>;
export type UsersQueryResult = Apollo.QueryResult<UsersQuery, UsersQueryVariables>;