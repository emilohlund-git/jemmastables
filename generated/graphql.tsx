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
  id?: Maybe<Scalars['ID']>;
  uid: Scalars['String'];
};

export type AdminAggregateSelection = {
  __typename?: 'AdminAggregateSelection';
  count: Scalars['Int'];
  id: IdAggregateSelection;
  uid: StringAggregateSelection;
};

export type AdminCreateInput = {
  uid: Scalars['String'];
};

export type AdminOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more AdminSort objects to sort Admins by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<AdminSort>>>;
};

/** Fields to sort Admins by. The order in which sorts are applied is not guaranteed when specifying many fields in one AdminSort object. */
export type AdminSort = {
  id?: InputMaybe<SortDirection>;
  uid?: InputMaybe<SortDirection>;
};

export type AdminUpdateInput = {
  uid?: InputMaybe<Scalars['String']>;
};

export type AdminWhere = {
  AND?: InputMaybe<Array<AdminWhere>>;
  OR?: InputMaybe<Array<AdminWhere>>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  uid?: InputMaybe<Scalars['String']>;
  uid_CONTAINS?: InputMaybe<Scalars['String']>;
  uid_ENDS_WITH?: InputMaybe<Scalars['String']>;
  uid_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_NOT?: InputMaybe<Scalars['String']>;
  uid_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  uid_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  uid_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  uid_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Component = {
  __typename?: 'Component';
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type ComponentAggregateSelection = {
  __typename?: 'ComponentAggregateSelection';
  count: Scalars['Int'];
  name: StringAggregateSelection;
};

export type ComponentCreateInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type ComponentOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more ComponentSort objects to sort Components by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<ComponentSort>>>;
};

/** Fields to sort Components by. The order in which sorts are applied is not guaranteed when specifying many fields in one ComponentSort object. */
export type ComponentSort = {
  name?: InputMaybe<SortDirection>;
};

export type ComponentUpdateInput = {
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type ComponentWhere = {
  AND?: InputMaybe<Array<ComponentWhere>>;
  OR?: InputMaybe<Array<ComponentWhere>>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_INCLUDES?: InputMaybe<Scalars['String']>;
  images_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
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
};

export type CreateAdminsMutationResponse = {
  __typename?: 'CreateAdminsMutationResponse';
  admins: Array<Admin>;
  info: CreateInfo;
};

export type CreateComponentsMutationResponse = {
  __typename?: 'CreateComponentsMutationResponse';
  components: Array<Component>;
  info: CreateInfo;
};

export type CreateDateSlotsMutationResponse = {
  __typename?: 'CreateDateSlotsMutationResponse';
  dateSlots: Array<DateSlot>;
  info: CreateInfo;
};

export type CreateFacilitiesMutationResponse = {
  __typename?: 'CreateFacilitiesMutationResponse';
  facilities: Array<Facility>;
  info: CreateInfo;
};

export type CreateFacilityImagesMutationResponse = {
  __typename?: 'CreateFacilityImagesMutationResponse';
  facilityImages: Array<FacilityImage>;
  info: CreateInfo;
};

export type CreateHorseCategoriesMutationResponse = {
  __typename?: 'CreateHorseCategoriesMutationResponse';
  horseCategories: Array<HorseCategory>;
  info: CreateInfo;
};

export type CreateHorseImagesMutationResponse = {
  __typename?: 'CreateHorseImagesMutationResponse';
  horseImages: Array<HorseImage>;
  info: CreateInfo;
};

export type CreateHorsesMutationResponse = {
  __typename?: 'CreateHorsesMutationResponse';
  horses: Array<Horse>;
  info: CreateInfo;
};

export type CreateInfo = {
  __typename?: 'CreateInfo';
  bookmark?: Maybe<Scalars['String']>;
  nodesCreated: Scalars['Int'];
  relationshipsCreated: Scalars['Int'];
};

export type CreateLogosMutationResponse = {
  __typename?: 'CreateLogosMutationResponse';
  info: CreateInfo;
  logos: Array<Logo>;
};

export type CreatePagesMutationResponse = {
  __typename?: 'CreatePagesMutationResponse';
  info: CreateInfo;
  pages: Array<Page>;
};

export type CreatePartnerLogosMutationResponse = {
  __typename?: 'CreatePartnerLogosMutationResponse';
  info: CreateInfo;
  partnerLogos: Array<PartnerLogo>;
};

export type CreatePartnersMutationResponse = {
  __typename?: 'CreatePartnersMutationResponse';
  info: CreateInfo;
  partners: Array<Partner>;
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
  slots: IntAggregateSelection;
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
  slots_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  slots_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_GT?: InputMaybe<Scalars['Int']>;
  slots_GTE?: InputMaybe<Scalars['Int']>;
  slots_LT?: InputMaybe<Scalars['Int']>;
  slots_LTE?: InputMaybe<Scalars['Int']>;
  slots_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_MAX_GT?: InputMaybe<Scalars['Int']>;
  slots_MAX_GTE?: InputMaybe<Scalars['Int']>;
  slots_MAX_LT?: InputMaybe<Scalars['Int']>;
  slots_MAX_LTE?: InputMaybe<Scalars['Int']>;
  slots_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_MIN_GT?: InputMaybe<Scalars['Int']>;
  slots_MIN_GTE?: InputMaybe<Scalars['Int']>;
  slots_MIN_LT?: InputMaybe<Scalars['Int']>;
  slots_MIN_LTE?: InputMaybe<Scalars['Int']>;
  slots_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_SUM_GT?: InputMaybe<Scalars['Int']>;
  slots_SUM_GTE?: InputMaybe<Scalars['Int']>;
  slots_SUM_LT?: InputMaybe<Scalars['Int']>;
  slots_SUM_LTE?: InputMaybe<Scalars['Int']>;
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

export type Facility = {
  __typename?: 'Facility';
  description: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  images: Array<Maybe<FacilityImage>>;
  imagesAggregate?: Maybe<FacilityFacilityImageImagesAggregationSelection>;
  imagesConnection: FacilityImagesConnection;
  name: Scalars['String'];
};


export type FacilityImagesArgs = {
  options?: InputMaybe<FacilityImageOptions>;
  where?: InputMaybe<FacilityImageWhere>;
};


export type FacilityImagesAggregateArgs = {
  where?: InputMaybe<FacilityImageWhere>;
};


export type FacilityImagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FacilityImagesConnectionSort>>;
  where?: InputMaybe<FacilityImagesConnectionWhere>;
};

export type FacilityAggregateSelection = {
  __typename?: 'FacilityAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FacilityConnectInput = {
  images?: InputMaybe<Array<FacilityImagesConnectFieldInput>>;
};

export type FacilityConnectOrCreateWhere = {
  node: FacilityUniqueWhere;
};

export type FacilityConnectWhere = {
  node: FacilityWhere;
};

export type FacilityCreateInput = {
  description: Scalars['String'];
  images?: InputMaybe<FacilityImagesFieldInput>;
  name: Scalars['String'];
};

export type FacilityDeleteInput = {
  images?: InputMaybe<Array<FacilityImagesDeleteFieldInput>>;
};

export type FacilityDisconnectInput = {
  images?: InputMaybe<Array<FacilityImagesDisconnectFieldInput>>;
};

export type FacilityFacilityImageImagesAggregationSelection = {
  __typename?: 'FacilityFacilityImageImagesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<FacilityFacilityImageImagesNodeAggregateSelection>;
};

export type FacilityFacilityImageImagesNodeAggregateSelection = {
  __typename?: 'FacilityFacilityImageImagesNodeAggregateSelection';
  height: IntAggregateSelection;
  path: StringAggregateSelection;
  url: StringAggregateSelection;
  width: IntAggregateSelection;
};

export type FacilityImage = {
  __typename?: 'FacilityImage';
  height: Scalars['Int'];
  owner?: Maybe<Facility>;
  ownerAggregate?: Maybe<FacilityImageFacilityOwnerAggregationSelection>;
  ownerConnection: FacilityImageOwnerConnection;
  path: Scalars['String'];
  profile: Scalars['Boolean'];
  url: Scalars['String'];
  width: Scalars['Int'];
};


export type FacilityImageOwnerArgs = {
  options?: InputMaybe<FacilityOptions>;
  where?: InputMaybe<FacilityWhere>;
};


export type FacilityImageOwnerAggregateArgs = {
  where?: InputMaybe<FacilityWhere>;
};


export type FacilityImageOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<FacilityImageOwnerConnectionSort>>;
  where?: InputMaybe<FacilityImageOwnerConnectionWhere>;
};

export type FacilityImageAggregateSelection = {
  __typename?: 'FacilityImageAggregateSelection';
  count: Scalars['Int'];
  height: IntAggregateSelection;
  path: StringAggregateSelection;
  url: StringAggregateSelection;
  width: IntAggregateSelection;
};

export type FacilityImageConnectInput = {
  owner?: InputMaybe<FacilityImageOwnerConnectFieldInput>;
};

export type FacilityImageConnectOrCreateInput = {
  owner?: InputMaybe<FacilityImageOwnerConnectOrCreateFieldInput>;
};

export type FacilityImageConnectWhere = {
  node: FacilityImageWhere;
};

export type FacilityImageCreateInput = {
  height: Scalars['Int'];
  owner?: InputMaybe<FacilityImageOwnerFieldInput>;
  path: Scalars['String'];
  profile: Scalars['Boolean'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type FacilityImageDeleteInput = {
  owner?: InputMaybe<FacilityImageOwnerDeleteFieldInput>;
};

export type FacilityImageDisconnectInput = {
  owner?: InputMaybe<FacilityImageOwnerDisconnectFieldInput>;
};

export type FacilityImageFacilityOwnerAggregationSelection = {
  __typename?: 'FacilityImageFacilityOwnerAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<FacilityImageFacilityOwnerNodeAggregateSelection>;
};

export type FacilityImageFacilityOwnerNodeAggregateSelection = {
  __typename?: 'FacilityImageFacilityOwnerNodeAggregateSelection';
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
};

export type FacilityImageOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more FacilityImageSort objects to sort FacilityImages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<FacilityImageSort>>>;
};

export type FacilityImageOwnerAggregateInput = {
  AND?: InputMaybe<Array<FacilityImageOwnerAggregateInput>>;
  OR?: InputMaybe<Array<FacilityImageOwnerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<FacilityImageOwnerNodeAggregationWhereInput>;
};

export type FacilityImageOwnerConnectFieldInput = {
  connect?: InputMaybe<FacilityConnectInput>;
  where?: InputMaybe<FacilityConnectWhere>;
};

export type FacilityImageOwnerConnectOrCreateFieldInput = {
  onCreate: FacilityImageOwnerConnectOrCreateFieldInputOnCreate;
  where: FacilityConnectOrCreateWhere;
};

export type FacilityImageOwnerConnectOrCreateFieldInputOnCreate = {
  node: FacilityCreateInput;
};

export type FacilityImageOwnerConnection = {
  __typename?: 'FacilityImageOwnerConnection';
  edges: Array<FacilityImageOwnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FacilityImageOwnerConnectionSort = {
  node?: InputMaybe<FacilitySort>;
};

export type FacilityImageOwnerConnectionWhere = {
  AND?: InputMaybe<Array<FacilityImageOwnerConnectionWhere>>;
  OR?: InputMaybe<Array<FacilityImageOwnerConnectionWhere>>;
  node?: InputMaybe<FacilityWhere>;
  node_NOT?: InputMaybe<FacilityWhere>;
};

export type FacilityImageOwnerCreateFieldInput = {
  node: FacilityCreateInput;
};

export type FacilityImageOwnerDeleteFieldInput = {
  delete?: InputMaybe<FacilityDeleteInput>;
  where?: InputMaybe<FacilityImageOwnerConnectionWhere>;
};

export type FacilityImageOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<FacilityDisconnectInput>;
  where?: InputMaybe<FacilityImageOwnerConnectionWhere>;
};

export type FacilityImageOwnerFieldInput = {
  connect?: InputMaybe<FacilityImageOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<FacilityImageOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<FacilityImageOwnerCreateFieldInput>;
};

export type FacilityImageOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FacilityImageOwnerNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FacilityImageOwnerNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
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
};

export type FacilityImageOwnerRelationship = {
  __typename?: 'FacilityImageOwnerRelationship';
  cursor: Scalars['String'];
  node: Facility;
};

export type FacilityImageOwnerUpdateConnectionInput = {
  node?: InputMaybe<FacilityUpdateInput>;
};

export type FacilityImageOwnerUpdateFieldInput = {
  connect?: InputMaybe<FacilityImageOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<FacilityImageOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<FacilityImageOwnerCreateFieldInput>;
  delete?: InputMaybe<FacilityImageOwnerDeleteFieldInput>;
  disconnect?: InputMaybe<FacilityImageOwnerDisconnectFieldInput>;
  update?: InputMaybe<FacilityImageOwnerUpdateConnectionInput>;
  where?: InputMaybe<FacilityImageOwnerConnectionWhere>;
};

export type FacilityImageRelationInput = {
  owner?: InputMaybe<FacilityImageOwnerCreateFieldInput>;
};

/** Fields to sort FacilityImages by. The order in which sorts are applied is not guaranteed when specifying many fields in one FacilityImageSort object. */
export type FacilityImageSort = {
  height?: InputMaybe<SortDirection>;
  path?: InputMaybe<SortDirection>;
  profile?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  width?: InputMaybe<SortDirection>;
};

export type FacilityImageUpdateInput = {
  height?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<FacilityImageOwnerUpdateFieldInput>;
  path?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type FacilityImageWhere = {
  AND?: InputMaybe<Array<FacilityImageWhere>>;
  OR?: InputMaybe<Array<FacilityImageWhere>>;
  height?: InputMaybe<Scalars['Int']>;
  height_GT?: InputMaybe<Scalars['Int']>;
  height_GTE?: InputMaybe<Scalars['Int']>;
  height_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_LT?: InputMaybe<Scalars['Int']>;
  height_LTE?: InputMaybe<Scalars['Int']>;
  height_NOT?: InputMaybe<Scalars['Int']>;
  height_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  owner?: InputMaybe<FacilityWhere>;
  ownerAggregate?: InputMaybe<FacilityImageOwnerAggregateInput>;
  ownerConnection?: InputMaybe<FacilityImageOwnerConnectionWhere>;
  ownerConnection_NOT?: InputMaybe<FacilityImageOwnerConnectionWhere>;
  owner_NOT?: InputMaybe<FacilityWhere>;
  path?: InputMaybe<Scalars['String']>;
  path_CONTAINS?: InputMaybe<Scalars['String']>;
  path_ENDS_WITH?: InputMaybe<Scalars['String']>;
  path_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_NOT?: InputMaybe<Scalars['String']>;
  path_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  path_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  path_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  path_STARTS_WITH?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['Boolean']>;
  profile_NOT?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  url_CONTAINS?: InputMaybe<Scalars['String']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_NOT?: InputMaybe<Scalars['String']>;
  url_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  url_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  width_GT?: InputMaybe<Scalars['Int']>;
  width_GTE?: InputMaybe<Scalars['Int']>;
  width_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_LT?: InputMaybe<Scalars['Int']>;
  width_LTE?: InputMaybe<Scalars['Int']>;
  width_NOT?: InputMaybe<Scalars['Int']>;
  width_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type FacilityImagesAggregateInput = {
  AND?: InputMaybe<Array<FacilityImagesAggregateInput>>;
  OR?: InputMaybe<Array<FacilityImagesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<FacilityImagesNodeAggregationWhereInput>;
};

export type FacilityImagesConnectFieldInput = {
  connect?: InputMaybe<Array<FacilityImageConnectInput>>;
  where?: InputMaybe<FacilityImageConnectWhere>;
};

export type FacilityImagesConnection = {
  __typename?: 'FacilityImagesConnection';
  edges: Array<FacilityImagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type FacilityImagesConnectionSort = {
  node?: InputMaybe<FacilityImageSort>;
};

export type FacilityImagesConnectionWhere = {
  AND?: InputMaybe<Array<FacilityImagesConnectionWhere>>;
  OR?: InputMaybe<Array<FacilityImagesConnectionWhere>>;
  node?: InputMaybe<FacilityImageWhere>;
  node_NOT?: InputMaybe<FacilityImageWhere>;
};

export type FacilityImagesCreateFieldInput = {
  node: FacilityImageCreateInput;
};

export type FacilityImagesDeleteFieldInput = {
  delete?: InputMaybe<FacilityImageDeleteInput>;
  where?: InputMaybe<FacilityImagesConnectionWhere>;
};

export type FacilityImagesDisconnectFieldInput = {
  disconnect?: InputMaybe<FacilityImageDisconnectInput>;
  where?: InputMaybe<FacilityImagesConnectionWhere>;
};

export type FacilityImagesFieldInput = {
  connect?: InputMaybe<Array<FacilityImagesConnectFieldInput>>;
  create?: InputMaybe<Array<FacilityImagesCreateFieldInput>>;
};

export type FacilityImagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<FacilityImagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<FacilityImagesNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  height_EQUAL?: InputMaybe<Scalars['Int']>;
  height_GT?: InputMaybe<Scalars['Int']>;
  height_GTE?: InputMaybe<Scalars['Int']>;
  height_LT?: InputMaybe<Scalars['Int']>;
  height_LTE?: InputMaybe<Scalars['Int']>;
  height_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  height_MAX_GT?: InputMaybe<Scalars['Int']>;
  height_MAX_GTE?: InputMaybe<Scalars['Int']>;
  height_MAX_LT?: InputMaybe<Scalars['Int']>;
  height_MAX_LTE?: InputMaybe<Scalars['Int']>;
  height_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  height_MIN_GT?: InputMaybe<Scalars['Int']>;
  height_MIN_GTE?: InputMaybe<Scalars['Int']>;
  height_MIN_LT?: InputMaybe<Scalars['Int']>;
  height_MIN_LTE?: InputMaybe<Scalars['Int']>;
  height_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  height_SUM_GT?: InputMaybe<Scalars['Int']>;
  height_SUM_GTE?: InputMaybe<Scalars['Int']>;
  height_SUM_LT?: InputMaybe<Scalars['Int']>;
  height_SUM_LTE?: InputMaybe<Scalars['Int']>;
  path_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  path_EQUAL?: InputMaybe<Scalars['String']>;
  path_GT?: InputMaybe<Scalars['Int']>;
  path_GTE?: InputMaybe<Scalars['Int']>;
  path_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  path_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  path_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  path_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  path_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  path_LT?: InputMaybe<Scalars['Int']>;
  path_LTE?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  url_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  url_EQUAL?: InputMaybe<Scalars['String']>;
  url_GT?: InputMaybe<Scalars['Int']>;
  url_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  url_LT?: InputMaybe<Scalars['Int']>;
  url_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  width_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  width_EQUAL?: InputMaybe<Scalars['Int']>;
  width_GT?: InputMaybe<Scalars['Int']>;
  width_GTE?: InputMaybe<Scalars['Int']>;
  width_LT?: InputMaybe<Scalars['Int']>;
  width_LTE?: InputMaybe<Scalars['Int']>;
  width_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  width_MAX_GT?: InputMaybe<Scalars['Int']>;
  width_MAX_GTE?: InputMaybe<Scalars['Int']>;
  width_MAX_LT?: InputMaybe<Scalars['Int']>;
  width_MAX_LTE?: InputMaybe<Scalars['Int']>;
  width_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  width_MIN_GT?: InputMaybe<Scalars['Int']>;
  width_MIN_GTE?: InputMaybe<Scalars['Int']>;
  width_MIN_LT?: InputMaybe<Scalars['Int']>;
  width_MIN_LTE?: InputMaybe<Scalars['Int']>;
  width_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  width_SUM_GT?: InputMaybe<Scalars['Int']>;
  width_SUM_GTE?: InputMaybe<Scalars['Int']>;
  width_SUM_LT?: InputMaybe<Scalars['Int']>;
  width_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type FacilityImagesRelationship = {
  __typename?: 'FacilityImagesRelationship';
  cursor: Scalars['String'];
  node: FacilityImage;
};

export type FacilityImagesUpdateConnectionInput = {
  node?: InputMaybe<FacilityImageUpdateInput>;
};

export type FacilityImagesUpdateFieldInput = {
  connect?: InputMaybe<Array<FacilityImagesConnectFieldInput>>;
  create?: InputMaybe<Array<FacilityImagesCreateFieldInput>>;
  delete?: InputMaybe<Array<FacilityImagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<FacilityImagesDisconnectFieldInput>>;
  update?: InputMaybe<FacilityImagesUpdateConnectionInput>;
  where?: InputMaybe<FacilityImagesConnectionWhere>;
};

export type FacilityOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more FacilitySort objects to sort Facilities by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<FacilitySort>>>;
};

export type FacilityRelationInput = {
  images?: InputMaybe<Array<FacilityImagesCreateFieldInput>>;
};

/** Fields to sort Facilities by. The order in which sorts are applied is not guaranteed when specifying many fields in one FacilitySort object. */
export type FacilitySort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type FacilityUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type FacilityUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<FacilityImagesUpdateFieldInput>>;
  name?: InputMaybe<Scalars['String']>;
};

export type FacilityWhere = {
  AND?: InputMaybe<Array<FacilityWhere>>;
  OR?: InputMaybe<Array<FacilityWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<FacilityImageWhere>;
  imagesAggregate?: InputMaybe<FacilityImagesAggregateInput>;
  imagesConnection?: InputMaybe<FacilityImagesConnectionWhere>;
  imagesConnection_NOT?: InputMaybe<FacilityImagesConnectionWhere>;
  images_NOT?: InputMaybe<FacilityImageWhere>;
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
};

export type Horse = {
  __typename?: 'Horse';
  after: Scalars['String'];
  birthyear: Scalars['String'];
  category: HorseCategory;
  categoryAggregate?: Maybe<HorseHorseCategoryCategoryAggregationSelection>;
  categoryConnection: HorseCategoryConnection;
  color: Scalars['String'];
  gender: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  images?: Maybe<Array<Maybe<HorseImage>>>;
  imagesAggregate?: Maybe<HorseHorseImageImagesAggregationSelection>;
  imagesConnection: HorseImagesConnection;
  movie?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: Maybe<Scalars['String']>;
  owner: Scalars['String'];
};


export type HorseCategoryArgs = {
  options?: InputMaybe<HorseCategoryOptions>;
  where?: InputMaybe<HorseCategoryWhere>;
};


export type HorseCategoryAggregateArgs = {
  where?: InputMaybe<HorseCategoryWhere>;
};


export type HorseCategoryConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HorseCategoryConnectionSort>>;
  where?: InputMaybe<HorseCategoryConnectionWhere>;
};


export type HorseImagesArgs = {
  options?: InputMaybe<HorseImageOptions>;
  where?: InputMaybe<HorseImageWhere>;
};


export type HorseImagesAggregateArgs = {
  where?: InputMaybe<HorseImageWhere>;
};


export type HorseImagesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HorseImagesConnectionSort>>;
  where?: InputMaybe<HorseImagesConnectionWhere>;
};

export type HorseAggregateSelection = {
  __typename?: 'HorseAggregateSelection';
  after: StringAggregateSelection;
  birthyear: StringAggregateSelection;
  color: StringAggregateSelection;
  count: Scalars['Int'];
  gender: StringAggregateSelection;
  id: IdAggregateSelection;
  movie: StringAggregateSelection;
  name: StringAggregateSelection;
  nickname: StringAggregateSelection;
  owner: StringAggregateSelection;
};

export type HorseCategory = {
  __typename?: 'HorseCategory';
  category: Scalars['String'];
  horses?: Maybe<Array<Maybe<Horse>>>;
  horsesAggregate?: Maybe<HorseCategoryHorseHorsesAggregationSelection>;
  horsesConnection: HorseCategoryHorsesConnection;
  image: Scalars['String'];
};


export type HorseCategoryHorsesArgs = {
  options?: InputMaybe<HorseOptions>;
  where?: InputMaybe<HorseWhere>;
};


export type HorseCategoryHorsesAggregateArgs = {
  where?: InputMaybe<HorseWhere>;
};


export type HorseCategoryHorsesConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HorseCategoryHorsesConnectionSort>>;
  where?: InputMaybe<HorseCategoryHorsesConnectionWhere>;
};

export type HorseCategoryAggregateInput = {
  AND?: InputMaybe<Array<HorseCategoryAggregateInput>>;
  OR?: InputMaybe<Array<HorseCategoryAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<HorseCategoryNodeAggregationWhereInput>;
};

export type HorseCategoryAggregateSelection = {
  __typename?: 'HorseCategoryAggregateSelection';
  category: StringAggregateSelection;
  count: Scalars['Int'];
  image: StringAggregateSelection;
};

export type HorseCategoryConnectFieldInput = {
  connect?: InputMaybe<HorseCategoryConnectInput>;
  where?: InputMaybe<HorseCategoryConnectWhere>;
};

export type HorseCategoryConnectInput = {
  horses?: InputMaybe<Array<HorseCategoryHorsesConnectFieldInput>>;
};

export type HorseCategoryConnectOrCreateInput = {
  horses?: InputMaybe<Array<HorseCategoryHorsesConnectOrCreateFieldInput>>;
};

export type HorseCategoryConnectWhere = {
  node: HorseCategoryWhere;
};

export type HorseCategoryConnection = {
  __typename?: 'HorseCategoryConnection';
  edges: Array<HorseCategoryRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HorseCategoryConnectionSort = {
  node?: InputMaybe<HorseCategorySort>;
};

export type HorseCategoryConnectionWhere = {
  AND?: InputMaybe<Array<HorseCategoryConnectionWhere>>;
  OR?: InputMaybe<Array<HorseCategoryConnectionWhere>>;
  node?: InputMaybe<HorseCategoryWhere>;
  node_NOT?: InputMaybe<HorseCategoryWhere>;
};

export type HorseCategoryCreateFieldInput = {
  node: HorseCategoryCreateInput;
};

export type HorseCategoryCreateInput = {
  category: Scalars['String'];
  horses?: InputMaybe<HorseCategoryHorsesFieldInput>;
  image: Scalars['String'];
};

export type HorseCategoryDeleteFieldInput = {
  delete?: InputMaybe<HorseCategoryDeleteInput>;
  where?: InputMaybe<HorseCategoryConnectionWhere>;
};

export type HorseCategoryDeleteInput = {
  horses?: InputMaybe<Array<HorseCategoryHorsesDeleteFieldInput>>;
};

export type HorseCategoryDisconnectFieldInput = {
  disconnect?: InputMaybe<HorseCategoryDisconnectInput>;
  where?: InputMaybe<HorseCategoryConnectionWhere>;
};

export type HorseCategoryDisconnectInput = {
  horses?: InputMaybe<Array<HorseCategoryHorsesDisconnectFieldInput>>;
};

export type HorseCategoryFieldInput = {
  connect?: InputMaybe<HorseCategoryConnectFieldInput>;
  create?: InputMaybe<HorseCategoryCreateFieldInput>;
};

export type HorseCategoryHorseHorsesAggregationSelection = {
  __typename?: 'HorseCategoryHorseHorsesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<HorseCategoryHorseHorsesNodeAggregateSelection>;
};

export type HorseCategoryHorseHorsesNodeAggregateSelection = {
  __typename?: 'HorseCategoryHorseHorsesNodeAggregateSelection';
  after: StringAggregateSelection;
  birthyear: StringAggregateSelection;
  color: StringAggregateSelection;
  gender: StringAggregateSelection;
  id: IdAggregateSelection;
  movie: StringAggregateSelection;
  name: StringAggregateSelection;
  nickname: StringAggregateSelection;
  owner: StringAggregateSelection;
};

export type HorseCategoryHorsesAggregateInput = {
  AND?: InputMaybe<Array<HorseCategoryHorsesAggregateInput>>;
  OR?: InputMaybe<Array<HorseCategoryHorsesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<HorseCategoryHorsesNodeAggregationWhereInput>;
};

export type HorseCategoryHorsesConnectFieldInput = {
  connect?: InputMaybe<Array<HorseConnectInput>>;
  where?: InputMaybe<HorseConnectWhere>;
};

export type HorseCategoryHorsesConnectOrCreateFieldInput = {
  onCreate: HorseCategoryHorsesConnectOrCreateFieldInputOnCreate;
  where: HorseConnectOrCreateWhere;
};

export type HorseCategoryHorsesConnectOrCreateFieldInputOnCreate = {
  node: HorseCreateInput;
};

export type HorseCategoryHorsesConnection = {
  __typename?: 'HorseCategoryHorsesConnection';
  edges: Array<HorseCategoryHorsesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HorseCategoryHorsesConnectionSort = {
  node?: InputMaybe<HorseSort>;
};

export type HorseCategoryHorsesConnectionWhere = {
  AND?: InputMaybe<Array<HorseCategoryHorsesConnectionWhere>>;
  OR?: InputMaybe<Array<HorseCategoryHorsesConnectionWhere>>;
  node?: InputMaybe<HorseWhere>;
  node_NOT?: InputMaybe<HorseWhere>;
};

export type HorseCategoryHorsesCreateFieldInput = {
  node: HorseCreateInput;
};

export type HorseCategoryHorsesDeleteFieldInput = {
  delete?: InputMaybe<HorseDeleteInput>;
  where?: InputMaybe<HorseCategoryHorsesConnectionWhere>;
};

export type HorseCategoryHorsesDisconnectFieldInput = {
  disconnect?: InputMaybe<HorseDisconnectInput>;
  where?: InputMaybe<HorseCategoryHorsesConnectionWhere>;
};

export type HorseCategoryHorsesFieldInput = {
  connect?: InputMaybe<Array<HorseCategoryHorsesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HorseCategoryHorsesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HorseCategoryHorsesCreateFieldInput>>;
};

export type HorseCategoryHorsesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HorseCategoryHorsesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HorseCategoryHorsesNodeAggregationWhereInput>>;
  after_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  after_EQUAL?: InputMaybe<Scalars['String']>;
  after_GT?: InputMaybe<Scalars['Int']>;
  after_GTE?: InputMaybe<Scalars['Int']>;
  after_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  after_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  after_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  after_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  after_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  after_LT?: InputMaybe<Scalars['Int']>;
  after_LTE?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  birthyear_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  birthyear_EQUAL?: InputMaybe<Scalars['String']>;
  birthyear_GT?: InputMaybe<Scalars['Int']>;
  birthyear_GTE?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  birthyear_LT?: InputMaybe<Scalars['Int']>;
  birthyear_LTE?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  color_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  color_EQUAL?: InputMaybe<Scalars['String']>;
  color_GT?: InputMaybe<Scalars['Int']>;
  color_GTE?: InputMaybe<Scalars['Int']>;
  color_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  color_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  color_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  color_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  color_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  color_LT?: InputMaybe<Scalars['Int']>;
  color_LTE?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  gender_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  gender_EQUAL?: InputMaybe<Scalars['String']>;
  gender_GT?: InputMaybe<Scalars['Int']>;
  gender_GTE?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  gender_LT?: InputMaybe<Scalars['Int']>;
  gender_LTE?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  movie_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  movie_EQUAL?: InputMaybe<Scalars['String']>;
  movie_GT?: InputMaybe<Scalars['Int']>;
  movie_GTE?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  movie_LT?: InputMaybe<Scalars['Int']>;
  movie_LTE?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
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
  nickname_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  nickname_EQUAL?: InputMaybe<Scalars['String']>;
  nickname_GT?: InputMaybe<Scalars['Int']>;
  nickname_GTE?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  nickname_LT?: InputMaybe<Scalars['Int']>;
  nickname_LTE?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  owner_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  owner_EQUAL?: InputMaybe<Scalars['String']>;
  owner_GT?: InputMaybe<Scalars['Int']>;
  owner_GTE?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  owner_LT?: InputMaybe<Scalars['Int']>;
  owner_LTE?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type HorseCategoryHorsesRelationship = {
  __typename?: 'HorseCategoryHorsesRelationship';
  cursor: Scalars['String'];
  node: Horse;
};

export type HorseCategoryHorsesUpdateConnectionInput = {
  node?: InputMaybe<HorseUpdateInput>;
};

export type HorseCategoryHorsesUpdateFieldInput = {
  connect?: InputMaybe<Array<HorseCategoryHorsesConnectFieldInput>>;
  connectOrCreate?: InputMaybe<Array<HorseCategoryHorsesConnectOrCreateFieldInput>>;
  create?: InputMaybe<Array<HorseCategoryHorsesCreateFieldInput>>;
  delete?: InputMaybe<Array<HorseCategoryHorsesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HorseCategoryHorsesDisconnectFieldInput>>;
  update?: InputMaybe<HorseCategoryHorsesUpdateConnectionInput>;
  where?: InputMaybe<HorseCategoryHorsesConnectionWhere>;
};

export type HorseCategoryNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HorseCategoryNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HorseCategoryNodeAggregationWhereInput>>;
  category_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  category_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  category_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  category_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  category_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  category_EQUAL?: InputMaybe<Scalars['String']>;
  category_GT?: InputMaybe<Scalars['Int']>;
  category_GTE?: InputMaybe<Scalars['Int']>;
  category_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  category_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  category_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  category_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  category_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  category_LT?: InputMaybe<Scalars['Int']>;
  category_LTE?: InputMaybe<Scalars['Int']>;
  category_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  category_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  category_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  category_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  category_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  image_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  image_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  image_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  image_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  image_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  image_EQUAL?: InputMaybe<Scalars['String']>;
  image_GT?: InputMaybe<Scalars['Int']>;
  image_GTE?: InputMaybe<Scalars['Int']>;
  image_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  image_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  image_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  image_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  image_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  image_LT?: InputMaybe<Scalars['Int']>;
  image_LTE?: InputMaybe<Scalars['Int']>;
  image_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  image_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  image_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  image_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  image_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type HorseCategoryOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more HorseCategorySort objects to sort HorseCategories by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<HorseCategorySort>>>;
};

export type HorseCategoryRelationInput = {
  horses?: InputMaybe<Array<HorseCategoryHorsesCreateFieldInput>>;
};

export type HorseCategoryRelationship = {
  __typename?: 'HorseCategoryRelationship';
  cursor: Scalars['String'];
  node: HorseCategory;
};

/** Fields to sort HorseCategories by. The order in which sorts are applied is not guaranteed when specifying many fields in one HorseCategorySort object. */
export type HorseCategorySort = {
  category?: InputMaybe<SortDirection>;
  image?: InputMaybe<SortDirection>;
};

export type HorseCategoryUpdateConnectionInput = {
  node?: InputMaybe<HorseCategoryUpdateInput>;
};

export type HorseCategoryUpdateFieldInput = {
  connect?: InputMaybe<HorseCategoryConnectFieldInput>;
  create?: InputMaybe<HorseCategoryCreateFieldInput>;
  delete?: InputMaybe<HorseCategoryDeleteFieldInput>;
  disconnect?: InputMaybe<HorseCategoryDisconnectFieldInput>;
  update?: InputMaybe<HorseCategoryUpdateConnectionInput>;
  where?: InputMaybe<HorseCategoryConnectionWhere>;
};

export type HorseCategoryUpdateInput = {
  category?: InputMaybe<Scalars['String']>;
  horses?: InputMaybe<Array<HorseCategoryHorsesUpdateFieldInput>>;
  image?: InputMaybe<Scalars['String']>;
};

export type HorseCategoryWhere = {
  AND?: InputMaybe<Array<HorseCategoryWhere>>;
  OR?: InputMaybe<Array<HorseCategoryWhere>>;
  category?: InputMaybe<Scalars['String']>;
  category_CONTAINS?: InputMaybe<Scalars['String']>;
  category_ENDS_WITH?: InputMaybe<Scalars['String']>;
  category_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_NOT?: InputMaybe<Scalars['String']>;
  category_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  category_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  category_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  category_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  category_STARTS_WITH?: InputMaybe<Scalars['String']>;
  horses?: InputMaybe<HorseWhere>;
  horsesAggregate?: InputMaybe<HorseCategoryHorsesAggregateInput>;
  horsesConnection?: InputMaybe<HorseCategoryHorsesConnectionWhere>;
  horsesConnection_NOT?: InputMaybe<HorseCategoryHorsesConnectionWhere>;
  horses_NOT?: InputMaybe<HorseWhere>;
  image?: InputMaybe<Scalars['String']>;
  image_CONTAINS?: InputMaybe<Scalars['String']>;
  image_ENDS_WITH?: InputMaybe<Scalars['String']>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_NOT?: InputMaybe<Scalars['String']>;
  image_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  image_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  image_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  image_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type HorseConnectInput = {
  category?: InputMaybe<HorseCategoryConnectFieldInput>;
  images?: InputMaybe<Array<HorseImagesConnectFieldInput>>;
};

export type HorseConnectOrCreateWhere = {
  node: HorseUniqueWhere;
};

export type HorseConnectWhere = {
  node: HorseWhere;
};

export type HorseCreateInput = {
  after: Scalars['String'];
  birthyear: Scalars['String'];
  category?: InputMaybe<HorseCategoryFieldInput>;
  color: Scalars['String'];
  gender: Scalars['String'];
  images?: InputMaybe<HorseImagesFieldInput>;
  movie?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
  nickname?: InputMaybe<Scalars['String']>;
  owner: Scalars['String'];
};

export type HorseDeleteInput = {
  category?: InputMaybe<HorseCategoryDeleteFieldInput>;
  images?: InputMaybe<Array<HorseImagesDeleteFieldInput>>;
};

export type HorseDisconnectInput = {
  category?: InputMaybe<HorseCategoryDisconnectFieldInput>;
  images?: InputMaybe<Array<HorseImagesDisconnectFieldInput>>;
};

export type HorseHorseCategoryCategoryAggregationSelection = {
  __typename?: 'HorseHorseCategoryCategoryAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<HorseHorseCategoryCategoryNodeAggregateSelection>;
};

export type HorseHorseCategoryCategoryNodeAggregateSelection = {
  __typename?: 'HorseHorseCategoryCategoryNodeAggregateSelection';
  category: StringAggregateSelection;
  image: StringAggregateSelection;
};

export type HorseHorseImageImagesAggregationSelection = {
  __typename?: 'HorseHorseImageImagesAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<HorseHorseImageImagesNodeAggregateSelection>;
};

export type HorseHorseImageImagesNodeAggregateSelection = {
  __typename?: 'HorseHorseImageImagesNodeAggregateSelection';
  height: IntAggregateSelection;
  path: StringAggregateSelection;
  url: StringAggregateSelection;
  width: IntAggregateSelection;
};

export type HorseImage = {
  __typename?: 'HorseImage';
  height: Scalars['Int'];
  owner?: Maybe<Horse>;
  ownerAggregate?: Maybe<HorseImageHorseOwnerAggregationSelection>;
  ownerConnection: HorseImageOwnerConnection;
  path: Scalars['String'];
  profile: Scalars['Boolean'];
  url: Scalars['String'];
  width: Scalars['Int'];
};


export type HorseImageOwnerArgs = {
  options?: InputMaybe<HorseOptions>;
  where?: InputMaybe<HorseWhere>;
};


export type HorseImageOwnerAggregateArgs = {
  where?: InputMaybe<HorseWhere>;
};


export type HorseImageOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<HorseImageOwnerConnectionSort>>;
  where?: InputMaybe<HorseImageOwnerConnectionWhere>;
};

export type HorseImageAggregateSelection = {
  __typename?: 'HorseImageAggregateSelection';
  count: Scalars['Int'];
  height: IntAggregateSelection;
  path: StringAggregateSelection;
  url: StringAggregateSelection;
  width: IntAggregateSelection;
};

export type HorseImageConnectInput = {
  owner?: InputMaybe<HorseImageOwnerConnectFieldInput>;
};

export type HorseImageConnectOrCreateInput = {
  owner?: InputMaybe<HorseImageOwnerConnectOrCreateFieldInput>;
};

export type HorseImageConnectWhere = {
  node: HorseImageWhere;
};

export type HorseImageCreateInput = {
  height: Scalars['Int'];
  owner?: InputMaybe<HorseImageOwnerFieldInput>;
  path: Scalars['String'];
  profile: Scalars['Boolean'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type HorseImageDeleteInput = {
  owner?: InputMaybe<HorseImageOwnerDeleteFieldInput>;
};

export type HorseImageDisconnectInput = {
  owner?: InputMaybe<HorseImageOwnerDisconnectFieldInput>;
};

export type HorseImageHorseOwnerAggregationSelection = {
  __typename?: 'HorseImageHorseOwnerAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<HorseImageHorseOwnerNodeAggregateSelection>;
};

export type HorseImageHorseOwnerNodeAggregateSelection = {
  __typename?: 'HorseImageHorseOwnerNodeAggregateSelection';
  after: StringAggregateSelection;
  birthyear: StringAggregateSelection;
  color: StringAggregateSelection;
  gender: StringAggregateSelection;
  id: IdAggregateSelection;
  movie: StringAggregateSelection;
  name: StringAggregateSelection;
  nickname: StringAggregateSelection;
  owner: StringAggregateSelection;
};

export type HorseImageOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more HorseImageSort objects to sort HorseImages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<HorseImageSort>>>;
};

export type HorseImageOwnerAggregateInput = {
  AND?: InputMaybe<Array<HorseImageOwnerAggregateInput>>;
  OR?: InputMaybe<Array<HorseImageOwnerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<HorseImageOwnerNodeAggregationWhereInput>;
};

export type HorseImageOwnerConnectFieldInput = {
  connect?: InputMaybe<HorseConnectInput>;
  where?: InputMaybe<HorseConnectWhere>;
};

export type HorseImageOwnerConnectOrCreateFieldInput = {
  onCreate: HorseImageOwnerConnectOrCreateFieldInputOnCreate;
  where: HorseConnectOrCreateWhere;
};

export type HorseImageOwnerConnectOrCreateFieldInputOnCreate = {
  node: HorseCreateInput;
};

export type HorseImageOwnerConnection = {
  __typename?: 'HorseImageOwnerConnection';
  edges: Array<HorseImageOwnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HorseImageOwnerConnectionSort = {
  node?: InputMaybe<HorseSort>;
};

export type HorseImageOwnerConnectionWhere = {
  AND?: InputMaybe<Array<HorseImageOwnerConnectionWhere>>;
  OR?: InputMaybe<Array<HorseImageOwnerConnectionWhere>>;
  node?: InputMaybe<HorseWhere>;
  node_NOT?: InputMaybe<HorseWhere>;
};

export type HorseImageOwnerCreateFieldInput = {
  node: HorseCreateInput;
};

export type HorseImageOwnerDeleteFieldInput = {
  delete?: InputMaybe<HorseDeleteInput>;
  where?: InputMaybe<HorseImageOwnerConnectionWhere>;
};

export type HorseImageOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<HorseDisconnectInput>;
  where?: InputMaybe<HorseImageOwnerConnectionWhere>;
};

export type HorseImageOwnerFieldInput = {
  connect?: InputMaybe<HorseImageOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<HorseImageOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<HorseImageOwnerCreateFieldInput>;
};

export type HorseImageOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HorseImageOwnerNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HorseImageOwnerNodeAggregationWhereInput>>;
  after_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  after_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  after_EQUAL?: InputMaybe<Scalars['String']>;
  after_GT?: InputMaybe<Scalars['Int']>;
  after_GTE?: InputMaybe<Scalars['Int']>;
  after_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  after_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  after_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  after_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  after_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  after_LT?: InputMaybe<Scalars['Int']>;
  after_LTE?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  after_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  birthyear_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  birthyear_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  birthyear_EQUAL?: InputMaybe<Scalars['String']>;
  birthyear_GT?: InputMaybe<Scalars['Int']>;
  birthyear_GTE?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  birthyear_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  birthyear_LT?: InputMaybe<Scalars['Int']>;
  birthyear_LTE?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  birthyear_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  color_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  color_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  color_EQUAL?: InputMaybe<Scalars['String']>;
  color_GT?: InputMaybe<Scalars['Int']>;
  color_GTE?: InputMaybe<Scalars['Int']>;
  color_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  color_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  color_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  color_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  color_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  color_LT?: InputMaybe<Scalars['Int']>;
  color_LTE?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  color_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  gender_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  gender_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  gender_EQUAL?: InputMaybe<Scalars['String']>;
  gender_GT?: InputMaybe<Scalars['Int']>;
  gender_GTE?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  gender_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  gender_LT?: InputMaybe<Scalars['Int']>;
  gender_LTE?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  gender_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
  movie_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  movie_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  movie_EQUAL?: InputMaybe<Scalars['String']>;
  movie_GT?: InputMaybe<Scalars['Int']>;
  movie_GTE?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  movie_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  movie_LT?: InputMaybe<Scalars['Int']>;
  movie_LTE?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  movie_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
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
  nickname_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  nickname_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  nickname_EQUAL?: InputMaybe<Scalars['String']>;
  nickname_GT?: InputMaybe<Scalars['Int']>;
  nickname_GTE?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  nickname_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  nickname_LT?: InputMaybe<Scalars['Int']>;
  nickname_LTE?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  nickname_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  owner_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  owner_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  owner_EQUAL?: InputMaybe<Scalars['String']>;
  owner_GT?: InputMaybe<Scalars['Int']>;
  owner_GTE?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  owner_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  owner_LT?: InputMaybe<Scalars['Int']>;
  owner_LTE?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  owner_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type HorseImageOwnerRelationship = {
  __typename?: 'HorseImageOwnerRelationship';
  cursor: Scalars['String'];
  node: Horse;
};

export type HorseImageOwnerUpdateConnectionInput = {
  node?: InputMaybe<HorseUpdateInput>;
};

export type HorseImageOwnerUpdateFieldInput = {
  connect?: InputMaybe<HorseImageOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<HorseImageOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<HorseImageOwnerCreateFieldInput>;
  delete?: InputMaybe<HorseImageOwnerDeleteFieldInput>;
  disconnect?: InputMaybe<HorseImageOwnerDisconnectFieldInput>;
  update?: InputMaybe<HorseImageOwnerUpdateConnectionInput>;
  where?: InputMaybe<HorseImageOwnerConnectionWhere>;
};

export type HorseImageRelationInput = {
  owner?: InputMaybe<HorseImageOwnerCreateFieldInput>;
};

/** Fields to sort HorseImages by. The order in which sorts are applied is not guaranteed when specifying many fields in one HorseImageSort object. */
export type HorseImageSort = {
  height?: InputMaybe<SortDirection>;
  path?: InputMaybe<SortDirection>;
  profile?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  width?: InputMaybe<SortDirection>;
};

export type HorseImageUpdateInput = {
  height?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<HorseImageOwnerUpdateFieldInput>;
  path?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type HorseImageWhere = {
  AND?: InputMaybe<Array<HorseImageWhere>>;
  OR?: InputMaybe<Array<HorseImageWhere>>;
  height?: InputMaybe<Scalars['Int']>;
  height_GT?: InputMaybe<Scalars['Int']>;
  height_GTE?: InputMaybe<Scalars['Int']>;
  height_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_LT?: InputMaybe<Scalars['Int']>;
  height_LTE?: InputMaybe<Scalars['Int']>;
  height_NOT?: InputMaybe<Scalars['Int']>;
  height_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  owner?: InputMaybe<HorseWhere>;
  ownerAggregate?: InputMaybe<HorseImageOwnerAggregateInput>;
  ownerConnection?: InputMaybe<HorseImageOwnerConnectionWhere>;
  ownerConnection_NOT?: InputMaybe<HorseImageOwnerConnectionWhere>;
  owner_NOT?: InputMaybe<HorseWhere>;
  path?: InputMaybe<Scalars['String']>;
  path_CONTAINS?: InputMaybe<Scalars['String']>;
  path_ENDS_WITH?: InputMaybe<Scalars['String']>;
  path_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_NOT?: InputMaybe<Scalars['String']>;
  path_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  path_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  path_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  path_STARTS_WITH?: InputMaybe<Scalars['String']>;
  profile?: InputMaybe<Scalars['Boolean']>;
  profile_NOT?: InputMaybe<Scalars['Boolean']>;
  url?: InputMaybe<Scalars['String']>;
  url_CONTAINS?: InputMaybe<Scalars['String']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_NOT?: InputMaybe<Scalars['String']>;
  url_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  url_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  width_GT?: InputMaybe<Scalars['Int']>;
  width_GTE?: InputMaybe<Scalars['Int']>;
  width_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_LT?: InputMaybe<Scalars['Int']>;
  width_LTE?: InputMaybe<Scalars['Int']>;
  width_NOT?: InputMaybe<Scalars['Int']>;
  width_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type HorseImagesAggregateInput = {
  AND?: InputMaybe<Array<HorseImagesAggregateInput>>;
  OR?: InputMaybe<Array<HorseImagesAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<HorseImagesNodeAggregationWhereInput>;
};

export type HorseImagesConnectFieldInput = {
  connect?: InputMaybe<Array<HorseImageConnectInput>>;
  where?: InputMaybe<HorseImageConnectWhere>;
};

export type HorseImagesConnection = {
  __typename?: 'HorseImagesConnection';
  edges: Array<HorseImagesRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type HorseImagesConnectionSort = {
  node?: InputMaybe<HorseImageSort>;
};

export type HorseImagesConnectionWhere = {
  AND?: InputMaybe<Array<HorseImagesConnectionWhere>>;
  OR?: InputMaybe<Array<HorseImagesConnectionWhere>>;
  node?: InputMaybe<HorseImageWhere>;
  node_NOT?: InputMaybe<HorseImageWhere>;
};

export type HorseImagesCreateFieldInput = {
  node: HorseImageCreateInput;
};

export type HorseImagesDeleteFieldInput = {
  delete?: InputMaybe<HorseImageDeleteInput>;
  where?: InputMaybe<HorseImagesConnectionWhere>;
};

export type HorseImagesDisconnectFieldInput = {
  disconnect?: InputMaybe<HorseImageDisconnectInput>;
  where?: InputMaybe<HorseImagesConnectionWhere>;
};

export type HorseImagesFieldInput = {
  connect?: InputMaybe<Array<HorseImagesConnectFieldInput>>;
  create?: InputMaybe<Array<HorseImagesCreateFieldInput>>;
};

export type HorseImagesNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<HorseImagesNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<HorseImagesNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  height_EQUAL?: InputMaybe<Scalars['Int']>;
  height_GT?: InputMaybe<Scalars['Int']>;
  height_GTE?: InputMaybe<Scalars['Int']>;
  height_LT?: InputMaybe<Scalars['Int']>;
  height_LTE?: InputMaybe<Scalars['Int']>;
  height_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  height_MAX_GT?: InputMaybe<Scalars['Int']>;
  height_MAX_GTE?: InputMaybe<Scalars['Int']>;
  height_MAX_LT?: InputMaybe<Scalars['Int']>;
  height_MAX_LTE?: InputMaybe<Scalars['Int']>;
  height_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  height_MIN_GT?: InputMaybe<Scalars['Int']>;
  height_MIN_GTE?: InputMaybe<Scalars['Int']>;
  height_MIN_LT?: InputMaybe<Scalars['Int']>;
  height_MIN_LTE?: InputMaybe<Scalars['Int']>;
  height_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  height_SUM_GT?: InputMaybe<Scalars['Int']>;
  height_SUM_GTE?: InputMaybe<Scalars['Int']>;
  height_SUM_LT?: InputMaybe<Scalars['Int']>;
  height_SUM_LTE?: InputMaybe<Scalars['Int']>;
  path_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  path_EQUAL?: InputMaybe<Scalars['String']>;
  path_GT?: InputMaybe<Scalars['Int']>;
  path_GTE?: InputMaybe<Scalars['Int']>;
  path_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  path_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  path_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  path_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  path_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  path_LT?: InputMaybe<Scalars['Int']>;
  path_LTE?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  url_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  url_EQUAL?: InputMaybe<Scalars['String']>;
  url_GT?: InputMaybe<Scalars['Int']>;
  url_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  url_LT?: InputMaybe<Scalars['Int']>;
  url_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  width_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  width_EQUAL?: InputMaybe<Scalars['Int']>;
  width_GT?: InputMaybe<Scalars['Int']>;
  width_GTE?: InputMaybe<Scalars['Int']>;
  width_LT?: InputMaybe<Scalars['Int']>;
  width_LTE?: InputMaybe<Scalars['Int']>;
  width_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  width_MAX_GT?: InputMaybe<Scalars['Int']>;
  width_MAX_GTE?: InputMaybe<Scalars['Int']>;
  width_MAX_LT?: InputMaybe<Scalars['Int']>;
  width_MAX_LTE?: InputMaybe<Scalars['Int']>;
  width_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  width_MIN_GT?: InputMaybe<Scalars['Int']>;
  width_MIN_GTE?: InputMaybe<Scalars['Int']>;
  width_MIN_LT?: InputMaybe<Scalars['Int']>;
  width_MIN_LTE?: InputMaybe<Scalars['Int']>;
  width_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  width_SUM_GT?: InputMaybe<Scalars['Int']>;
  width_SUM_GTE?: InputMaybe<Scalars['Int']>;
  width_SUM_LT?: InputMaybe<Scalars['Int']>;
  width_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type HorseImagesRelationship = {
  __typename?: 'HorseImagesRelationship';
  cursor: Scalars['String'];
  node: HorseImage;
};

export type HorseImagesUpdateConnectionInput = {
  node?: InputMaybe<HorseImageUpdateInput>;
};

export type HorseImagesUpdateFieldInput = {
  connect?: InputMaybe<Array<HorseImagesConnectFieldInput>>;
  create?: InputMaybe<Array<HorseImagesCreateFieldInput>>;
  delete?: InputMaybe<Array<HorseImagesDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<HorseImagesDisconnectFieldInput>>;
  update?: InputMaybe<HorseImagesUpdateConnectionInput>;
  where?: InputMaybe<HorseImagesConnectionWhere>;
};

export type HorseOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more HorseSort objects to sort Horses by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<HorseSort>>>;
};

export type HorseRelationInput = {
  category?: InputMaybe<HorseCategoryCreateFieldInput>;
  images?: InputMaybe<Array<HorseImagesCreateFieldInput>>;
};

/** Fields to sort Horses by. The order in which sorts are applied is not guaranteed when specifying many fields in one HorseSort object. */
export type HorseSort = {
  after?: InputMaybe<SortDirection>;
  birthyear?: InputMaybe<SortDirection>;
  color?: InputMaybe<SortDirection>;
  gender?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  movie?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  nickname?: InputMaybe<SortDirection>;
  owner?: InputMaybe<SortDirection>;
};

export type HorseUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type HorseUpdateInput = {
  after?: InputMaybe<Scalars['String']>;
  birthyear?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<HorseCategoryUpdateFieldInput>;
  color?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<HorseImagesUpdateFieldInput>>;
  movie?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  nickname?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
};

export type HorseWhere = {
  AND?: InputMaybe<Array<HorseWhere>>;
  OR?: InputMaybe<Array<HorseWhere>>;
  after?: InputMaybe<Scalars['String']>;
  after_CONTAINS?: InputMaybe<Scalars['String']>;
  after_ENDS_WITH?: InputMaybe<Scalars['String']>;
  after_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after_NOT?: InputMaybe<Scalars['String']>;
  after_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  after_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  after_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  after_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  after_STARTS_WITH?: InputMaybe<Scalars['String']>;
  birthyear?: InputMaybe<Scalars['String']>;
  birthyear_CONTAINS?: InputMaybe<Scalars['String']>;
  birthyear_ENDS_WITH?: InputMaybe<Scalars['String']>;
  birthyear_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  birthyear_NOT?: InputMaybe<Scalars['String']>;
  birthyear_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  birthyear_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  birthyear_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  birthyear_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  birthyear_STARTS_WITH?: InputMaybe<Scalars['String']>;
  category?: InputMaybe<HorseCategoryWhere>;
  categoryAggregate?: InputMaybe<HorseCategoryAggregateInput>;
  categoryConnection?: InputMaybe<HorseCategoryConnectionWhere>;
  categoryConnection_NOT?: InputMaybe<HorseCategoryConnectionWhere>;
  category_NOT?: InputMaybe<HorseCategoryWhere>;
  color?: InputMaybe<Scalars['String']>;
  color_CONTAINS?: InputMaybe<Scalars['String']>;
  color_ENDS_WITH?: InputMaybe<Scalars['String']>;
  color_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_NOT?: InputMaybe<Scalars['String']>;
  color_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  color_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  color_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  color_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  color_STARTS_WITH?: InputMaybe<Scalars['String']>;
  gender?: InputMaybe<Scalars['String']>;
  gender_CONTAINS?: InputMaybe<Scalars['String']>;
  gender_ENDS_WITH?: InputMaybe<Scalars['String']>;
  gender_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender_NOT?: InputMaybe<Scalars['String']>;
  gender_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  gender_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  gender_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  gender_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  gender_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  images?: InputMaybe<HorseImageWhere>;
  imagesAggregate?: InputMaybe<HorseImagesAggregateInput>;
  imagesConnection?: InputMaybe<HorseImagesConnectionWhere>;
  imagesConnection_NOT?: InputMaybe<HorseImagesConnectionWhere>;
  images_NOT?: InputMaybe<HorseImageWhere>;
  movie?: InputMaybe<Scalars['String']>;
  movie_CONTAINS?: InputMaybe<Scalars['String']>;
  movie_ENDS_WITH?: InputMaybe<Scalars['String']>;
  movie_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  movie_NOT?: InputMaybe<Scalars['String']>;
  movie_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  movie_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  movie_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  movie_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  movie_STARTS_WITH?: InputMaybe<Scalars['String']>;
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
  nickname?: InputMaybe<Scalars['String']>;
  nickname_CONTAINS?: InputMaybe<Scalars['String']>;
  nickname_ENDS_WITH?: InputMaybe<Scalars['String']>;
  nickname_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nickname_NOT?: InputMaybe<Scalars['String']>;
  nickname_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  nickname_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  nickname_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  nickname_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  nickname_STARTS_WITH?: InputMaybe<Scalars['String']>;
  owner?: InputMaybe<Scalars['String']>;
  owner_CONTAINS?: InputMaybe<Scalars['String']>;
  owner_ENDS_WITH?: InputMaybe<Scalars['String']>;
  owner_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  owner_NOT?: InputMaybe<Scalars['String']>;
  owner_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  owner_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  owner_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  owner_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  owner_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type IdAggregateSelection = {
  __typename?: 'IDAggregateSelection';
  longest?: Maybe<Scalars['ID']>;
  shortest?: Maybe<Scalars['ID']>;
};

export type IntAggregateSelection = {
  __typename?: 'IntAggregateSelection';
  average?: Maybe<Scalars['Float']>;
  max?: Maybe<Scalars['Int']>;
  min?: Maybe<Scalars['Int']>;
  sum?: Maybe<Scalars['Int']>;
};

export type Logo = {
  __typename?: 'Logo';
  image: Scalars['String'];
};

export type LogoAggregateSelection = {
  __typename?: 'LogoAggregateSelection';
  count: Scalars['Int'];
  image: StringAggregateSelection;
};

export type LogoCreateInput = {
  image: Scalars['String'];
};

export type LogoOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more LogoSort objects to sort Logos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<LogoSort>>>;
};

/** Fields to sort Logos by. The order in which sorts are applied is not guaranteed when specifying many fields in one LogoSort object. */
export type LogoSort = {
  image?: InputMaybe<SortDirection>;
};

export type LogoUpdateInput = {
  image?: InputMaybe<Scalars['String']>;
};

export type LogoWhere = {
  AND?: InputMaybe<Array<LogoWhere>>;
  OR?: InputMaybe<Array<LogoWhere>>;
  image?: InputMaybe<Scalars['String']>;
  image_CONTAINS?: InputMaybe<Scalars['String']>;
  image_ENDS_WITH?: InputMaybe<Scalars['String']>;
  image_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_NOT?: InputMaybe<Scalars['String']>;
  image_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  image_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  image_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  image_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  image_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createAdmins: CreateAdminsMutationResponse;
  createComponents: CreateComponentsMutationResponse;
  createDateSlots: CreateDateSlotsMutationResponse;
  createFacilities: CreateFacilitiesMutationResponse;
  createFacilityImages: CreateFacilityImagesMutationResponse;
  createHorseCategories: CreateHorseCategoriesMutationResponse;
  createHorseImages: CreateHorseImagesMutationResponse;
  createHorses: CreateHorsesMutationResponse;
  createLogos: CreateLogosMutationResponse;
  createPages: CreatePagesMutationResponse;
  createPartnerLogos: CreatePartnerLogosMutationResponse;
  createPartners: CreatePartnersMutationResponse;
  createTimeSlotTypes: CreateTimeSlotTypesMutationResponse;
  createTimeSlots: CreateTimeSlotsMutationResponse;
  createUsers: CreateUsersMutationResponse;
  deleteAdmins: DeleteInfo;
  deleteComponents: DeleteInfo;
  deleteDateSlots: DeleteInfo;
  deleteFacilities: DeleteInfo;
  deleteFacilityImages: DeleteInfo;
  deleteHorseCategories: DeleteInfo;
  deleteHorseImages: DeleteInfo;
  deleteHorses: DeleteInfo;
  deleteLogos: DeleteInfo;
  deletePages: DeleteInfo;
  deletePartnerLogos: DeleteInfo;
  deletePartners: DeleteInfo;
  deleteTimeSlotTypes: DeleteInfo;
  deleteTimeSlots: DeleteInfo;
  deleteUsers: DeleteInfo;
  updateAdmins: UpdateAdminsMutationResponse;
  updateComponents: UpdateComponentsMutationResponse;
  updateDateSlots: UpdateDateSlotsMutationResponse;
  updateFacilities: UpdateFacilitiesMutationResponse;
  updateFacilityImages: UpdateFacilityImagesMutationResponse;
  updateHorseCategories: UpdateHorseCategoriesMutationResponse;
  updateHorseImages: UpdateHorseImagesMutationResponse;
  updateHorses: UpdateHorsesMutationResponse;
  updateLogos: UpdateLogosMutationResponse;
  updatePages: UpdatePagesMutationResponse;
  updatePartnerLogos: UpdatePartnerLogosMutationResponse;
  updatePartners: UpdatePartnersMutationResponse;
  updateTimeSlotTypes: UpdateTimeSlotTypesMutationResponse;
  updateTimeSlots: UpdateTimeSlotsMutationResponse;
  updateUsers: UpdateUsersMutationResponse;
};


export type MutationCreateAdminsArgs = {
  input: Array<AdminCreateInput>;
};


export type MutationCreateComponentsArgs = {
  input: Array<ComponentCreateInput>;
};


export type MutationCreateDateSlotsArgs = {
  input: Array<DateSlotCreateInput>;
};


export type MutationCreateFacilitiesArgs = {
  input: Array<FacilityCreateInput>;
};


export type MutationCreateFacilityImagesArgs = {
  input: Array<FacilityImageCreateInput>;
};


export type MutationCreateHorseCategoriesArgs = {
  input: Array<HorseCategoryCreateInput>;
};


export type MutationCreateHorseImagesArgs = {
  input: Array<HorseImageCreateInput>;
};


export type MutationCreateHorsesArgs = {
  input: Array<HorseCreateInput>;
};


export type MutationCreateLogosArgs = {
  input: Array<LogoCreateInput>;
};


export type MutationCreatePagesArgs = {
  input: Array<PageCreateInput>;
};


export type MutationCreatePartnerLogosArgs = {
  input: Array<PartnerLogoCreateInput>;
};


export type MutationCreatePartnersArgs = {
  input: Array<PartnerCreateInput>;
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


export type MutationDeleteAdminsArgs = {
  where?: InputMaybe<AdminWhere>;
};


export type MutationDeleteComponentsArgs = {
  where?: InputMaybe<ComponentWhere>;
};


export type MutationDeleteDateSlotsArgs = {
  delete?: InputMaybe<DateSlotDeleteInput>;
  where?: InputMaybe<DateSlotWhere>;
};


export type MutationDeleteFacilitiesArgs = {
  delete?: InputMaybe<FacilityDeleteInput>;
  where?: InputMaybe<FacilityWhere>;
};


export type MutationDeleteFacilityImagesArgs = {
  delete?: InputMaybe<FacilityImageDeleteInput>;
  where?: InputMaybe<FacilityImageWhere>;
};


export type MutationDeleteHorseCategoriesArgs = {
  delete?: InputMaybe<HorseCategoryDeleteInput>;
  where?: InputMaybe<HorseCategoryWhere>;
};


export type MutationDeleteHorseImagesArgs = {
  delete?: InputMaybe<HorseImageDeleteInput>;
  where?: InputMaybe<HorseImageWhere>;
};


export type MutationDeleteHorsesArgs = {
  delete?: InputMaybe<HorseDeleteInput>;
  where?: InputMaybe<HorseWhere>;
};


export type MutationDeleteLogosArgs = {
  where?: InputMaybe<LogoWhere>;
};


export type MutationDeletePagesArgs = {
  where?: InputMaybe<PageWhere>;
};


export type MutationDeletePartnerLogosArgs = {
  delete?: InputMaybe<PartnerLogoDeleteInput>;
  where?: InputMaybe<PartnerLogoWhere>;
};


export type MutationDeletePartnersArgs = {
  delete?: InputMaybe<PartnerDeleteInput>;
  where?: InputMaybe<PartnerWhere>;
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


export type MutationUpdateAdminsArgs = {
  update?: InputMaybe<AdminUpdateInput>;
  where?: InputMaybe<AdminWhere>;
};


export type MutationUpdateComponentsArgs = {
  update?: InputMaybe<ComponentUpdateInput>;
  where?: InputMaybe<ComponentWhere>;
};


export type MutationUpdateDateSlotsArgs = {
  connect?: InputMaybe<DateSlotConnectInput>;
  create?: InputMaybe<DateSlotRelationInput>;
  delete?: InputMaybe<DateSlotDeleteInput>;
  disconnect?: InputMaybe<DateSlotDisconnectInput>;
  update?: InputMaybe<DateSlotUpdateInput>;
  where?: InputMaybe<DateSlotWhere>;
};


export type MutationUpdateFacilitiesArgs = {
  connect?: InputMaybe<FacilityConnectInput>;
  create?: InputMaybe<FacilityRelationInput>;
  delete?: InputMaybe<FacilityDeleteInput>;
  disconnect?: InputMaybe<FacilityDisconnectInput>;
  update?: InputMaybe<FacilityUpdateInput>;
  where?: InputMaybe<FacilityWhere>;
};


export type MutationUpdateFacilityImagesArgs = {
  connect?: InputMaybe<FacilityImageConnectInput>;
  connectOrCreate?: InputMaybe<FacilityImageConnectOrCreateInput>;
  create?: InputMaybe<FacilityImageRelationInput>;
  delete?: InputMaybe<FacilityImageDeleteInput>;
  disconnect?: InputMaybe<FacilityImageDisconnectInput>;
  update?: InputMaybe<FacilityImageUpdateInput>;
  where?: InputMaybe<FacilityImageWhere>;
};


export type MutationUpdateHorseCategoriesArgs = {
  connect?: InputMaybe<HorseCategoryConnectInput>;
  connectOrCreate?: InputMaybe<HorseCategoryConnectOrCreateInput>;
  create?: InputMaybe<HorseCategoryRelationInput>;
  delete?: InputMaybe<HorseCategoryDeleteInput>;
  disconnect?: InputMaybe<HorseCategoryDisconnectInput>;
  update?: InputMaybe<HorseCategoryUpdateInput>;
  where?: InputMaybe<HorseCategoryWhere>;
};


export type MutationUpdateHorseImagesArgs = {
  connect?: InputMaybe<HorseImageConnectInput>;
  connectOrCreate?: InputMaybe<HorseImageConnectOrCreateInput>;
  create?: InputMaybe<HorseImageRelationInput>;
  delete?: InputMaybe<HorseImageDeleteInput>;
  disconnect?: InputMaybe<HorseImageDisconnectInput>;
  update?: InputMaybe<HorseImageUpdateInput>;
  where?: InputMaybe<HorseImageWhere>;
};


export type MutationUpdateHorsesArgs = {
  connect?: InputMaybe<HorseConnectInput>;
  create?: InputMaybe<HorseRelationInput>;
  delete?: InputMaybe<HorseDeleteInput>;
  disconnect?: InputMaybe<HorseDisconnectInput>;
  update?: InputMaybe<HorseUpdateInput>;
  where?: InputMaybe<HorseWhere>;
};


export type MutationUpdateLogosArgs = {
  update?: InputMaybe<LogoUpdateInput>;
  where?: InputMaybe<LogoWhere>;
};


export type MutationUpdatePagesArgs = {
  update?: InputMaybe<PageUpdateInput>;
  where?: InputMaybe<PageWhere>;
};


export type MutationUpdatePartnerLogosArgs = {
  connect?: InputMaybe<PartnerLogoConnectInput>;
  connectOrCreate?: InputMaybe<PartnerLogoConnectOrCreateInput>;
  create?: InputMaybe<PartnerLogoRelationInput>;
  delete?: InputMaybe<PartnerLogoDeleteInput>;
  disconnect?: InputMaybe<PartnerLogoDisconnectInput>;
  update?: InputMaybe<PartnerLogoUpdateInput>;
  where?: InputMaybe<PartnerLogoWhere>;
};


export type MutationUpdatePartnersArgs = {
  connect?: InputMaybe<PartnerConnectInput>;
  create?: InputMaybe<PartnerRelationInput>;
  delete?: InputMaybe<PartnerDeleteInput>;
  disconnect?: InputMaybe<PartnerDisconnectInput>;
  update?: InputMaybe<PartnerUpdateInput>;
  where?: InputMaybe<PartnerWhere>;
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

export type Page = {
  __typename?: 'Page';
  content?: Maybe<Scalars['String']>;
  images?: Maybe<Array<Maybe<Scalars['String']>>>;
  name: Scalars['String'];
};

export type PageAggregateSelection = {
  __typename?: 'PageAggregateSelection';
  content: StringAggregateSelection;
  count: Scalars['Int'];
  name: StringAggregateSelection;
};

export type PageCreateInput = {
  content?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name: Scalars['String'];
};

/** Pagination information (Relay) */
export type PageInfo = {
  __typename?: 'PageInfo';
  endCursor?: Maybe<Scalars['String']>;
  hasNextPage: Scalars['Boolean'];
  hasPreviousPage: Scalars['Boolean'];
  startCursor?: Maybe<Scalars['String']>;
};

export type PageOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PageSort objects to sort Pages by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PageSort>>>;
};

/** Fields to sort Pages by. The order in which sorts are applied is not guaranteed when specifying many fields in one PageSort object. */
export type PageSort = {
  content?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
};

export type PageUpdateInput = {
  content?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  name?: InputMaybe<Scalars['String']>;
};

export type PageWhere = {
  AND?: InputMaybe<Array<PageWhere>>;
  OR?: InputMaybe<Array<PageWhere>>;
  content?: InputMaybe<Scalars['String']>;
  content_CONTAINS?: InputMaybe<Scalars['String']>;
  content_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_NOT?: InputMaybe<Scalars['String']>;
  content_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  content_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  content_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  content_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  content_STARTS_WITH?: InputMaybe<Scalars['String']>;
  images?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_INCLUDES?: InputMaybe<Scalars['String']>;
  images_NOT?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  images_NOT_INCLUDES?: InputMaybe<Scalars['String']>;
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
};

export type Partner = {
  __typename?: 'Partner';
  description: Scalars['String'];
  id?: Maybe<Scalars['ID']>;
  logo?: Maybe<PartnerLogo>;
  logoAggregate?: Maybe<PartnerPartnerLogoLogoAggregationSelection>;
  logoConnection: PartnerLogoConnection;
  name: Scalars['String'];
  website?: Maybe<Scalars['String']>;
};


export type PartnerLogoArgs = {
  options?: InputMaybe<PartnerLogoOptions>;
  where?: InputMaybe<PartnerLogoWhere>;
};


export type PartnerLogoAggregateArgs = {
  where?: InputMaybe<PartnerLogoWhere>;
};


export type PartnerLogoConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PartnerLogoConnectionSort>>;
  where?: InputMaybe<PartnerLogoConnectionWhere>;
};

export type PartnerAggregateSelection = {
  __typename?: 'PartnerAggregateSelection';
  count: Scalars['Int'];
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  website: StringAggregateSelection;
};

export type PartnerConnectInput = {
  logo?: InputMaybe<PartnerLogoConnectFieldInput>;
};

export type PartnerConnectOrCreateWhere = {
  node: PartnerUniqueWhere;
};

export type PartnerConnectWhere = {
  node: PartnerWhere;
};

export type PartnerCreateInput = {
  description: Scalars['String'];
  logo?: InputMaybe<PartnerLogoFieldInput>;
  name: Scalars['String'];
  website?: InputMaybe<Scalars['String']>;
};

export type PartnerDeleteInput = {
  logo?: InputMaybe<PartnerLogoDeleteFieldInput>;
};

export type PartnerDisconnectInput = {
  logo?: InputMaybe<PartnerLogoDisconnectFieldInput>;
};

export type PartnerLogo = {
  __typename?: 'PartnerLogo';
  height: Scalars['Int'];
  owner?: Maybe<Partner>;
  ownerAggregate?: Maybe<PartnerLogoPartnerOwnerAggregationSelection>;
  ownerConnection: PartnerLogoOwnerConnection;
  path: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};


export type PartnerLogoOwnerArgs = {
  options?: InputMaybe<PartnerOptions>;
  where?: InputMaybe<PartnerWhere>;
};


export type PartnerLogoOwnerAggregateArgs = {
  where?: InputMaybe<PartnerWhere>;
};


export type PartnerLogoOwnerConnectionArgs = {
  after?: InputMaybe<Scalars['String']>;
  first?: InputMaybe<Scalars['Int']>;
  sort?: InputMaybe<Array<PartnerLogoOwnerConnectionSort>>;
  where?: InputMaybe<PartnerLogoOwnerConnectionWhere>;
};

export type PartnerLogoAggregateInput = {
  AND?: InputMaybe<Array<PartnerLogoAggregateInput>>;
  OR?: InputMaybe<Array<PartnerLogoAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PartnerLogoNodeAggregationWhereInput>;
};

export type PartnerLogoAggregateSelection = {
  __typename?: 'PartnerLogoAggregateSelection';
  count: Scalars['Int'];
  height: IntAggregateSelection;
  path: StringAggregateSelection;
  url: StringAggregateSelection;
  width: IntAggregateSelection;
};

export type PartnerLogoConnectFieldInput = {
  connect?: InputMaybe<PartnerLogoConnectInput>;
  where?: InputMaybe<PartnerLogoConnectWhere>;
};

export type PartnerLogoConnectInput = {
  owner?: InputMaybe<PartnerLogoOwnerConnectFieldInput>;
};

export type PartnerLogoConnectOrCreateInput = {
  owner?: InputMaybe<PartnerLogoOwnerConnectOrCreateFieldInput>;
};

export type PartnerLogoConnectWhere = {
  node: PartnerLogoWhere;
};

export type PartnerLogoConnection = {
  __typename?: 'PartnerLogoConnection';
  edges: Array<PartnerLogoRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PartnerLogoConnectionSort = {
  node?: InputMaybe<PartnerLogoSort>;
};

export type PartnerLogoConnectionWhere = {
  AND?: InputMaybe<Array<PartnerLogoConnectionWhere>>;
  OR?: InputMaybe<Array<PartnerLogoConnectionWhere>>;
  node?: InputMaybe<PartnerLogoWhere>;
  node_NOT?: InputMaybe<PartnerLogoWhere>;
};

export type PartnerLogoCreateFieldInput = {
  node: PartnerLogoCreateInput;
};

export type PartnerLogoCreateInput = {
  height: Scalars['Int'];
  owner?: InputMaybe<PartnerLogoOwnerFieldInput>;
  path: Scalars['String'];
  url: Scalars['String'];
  width: Scalars['Int'];
};

export type PartnerLogoDeleteFieldInput = {
  delete?: InputMaybe<PartnerLogoDeleteInput>;
  where?: InputMaybe<PartnerLogoConnectionWhere>;
};

export type PartnerLogoDeleteInput = {
  owner?: InputMaybe<PartnerLogoOwnerDeleteFieldInput>;
};

export type PartnerLogoDisconnectFieldInput = {
  disconnect?: InputMaybe<PartnerLogoDisconnectInput>;
  where?: InputMaybe<PartnerLogoConnectionWhere>;
};

export type PartnerLogoDisconnectInput = {
  owner?: InputMaybe<PartnerLogoOwnerDisconnectFieldInput>;
};

export type PartnerLogoFieldInput = {
  connect?: InputMaybe<PartnerLogoConnectFieldInput>;
  create?: InputMaybe<PartnerLogoCreateFieldInput>;
};

export type PartnerLogoNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PartnerLogoNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PartnerLogoNodeAggregationWhereInput>>;
  height_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  height_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  height_EQUAL?: InputMaybe<Scalars['Int']>;
  height_GT?: InputMaybe<Scalars['Int']>;
  height_GTE?: InputMaybe<Scalars['Int']>;
  height_LT?: InputMaybe<Scalars['Int']>;
  height_LTE?: InputMaybe<Scalars['Int']>;
  height_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  height_MAX_GT?: InputMaybe<Scalars['Int']>;
  height_MAX_GTE?: InputMaybe<Scalars['Int']>;
  height_MAX_LT?: InputMaybe<Scalars['Int']>;
  height_MAX_LTE?: InputMaybe<Scalars['Int']>;
  height_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  height_MIN_GT?: InputMaybe<Scalars['Int']>;
  height_MIN_GTE?: InputMaybe<Scalars['Int']>;
  height_MIN_LT?: InputMaybe<Scalars['Int']>;
  height_MIN_LTE?: InputMaybe<Scalars['Int']>;
  height_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  height_SUM_GT?: InputMaybe<Scalars['Int']>;
  height_SUM_GTE?: InputMaybe<Scalars['Int']>;
  height_SUM_LT?: InputMaybe<Scalars['Int']>;
  height_SUM_LTE?: InputMaybe<Scalars['Int']>;
  path_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  path_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  path_EQUAL?: InputMaybe<Scalars['String']>;
  path_GT?: InputMaybe<Scalars['Int']>;
  path_GTE?: InputMaybe<Scalars['Int']>;
  path_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  path_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  path_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  path_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  path_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  path_LT?: InputMaybe<Scalars['Int']>;
  path_LTE?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  path_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  url_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  url_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  url_EQUAL?: InputMaybe<Scalars['String']>;
  url_GT?: InputMaybe<Scalars['Int']>;
  url_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  url_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  url_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  url_LT?: InputMaybe<Scalars['Int']>;
  url_LTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  url_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  width_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  width_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  width_EQUAL?: InputMaybe<Scalars['Int']>;
  width_GT?: InputMaybe<Scalars['Int']>;
  width_GTE?: InputMaybe<Scalars['Int']>;
  width_LT?: InputMaybe<Scalars['Int']>;
  width_LTE?: InputMaybe<Scalars['Int']>;
  width_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  width_MAX_GT?: InputMaybe<Scalars['Int']>;
  width_MAX_GTE?: InputMaybe<Scalars['Int']>;
  width_MAX_LT?: InputMaybe<Scalars['Int']>;
  width_MAX_LTE?: InputMaybe<Scalars['Int']>;
  width_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  width_MIN_GT?: InputMaybe<Scalars['Int']>;
  width_MIN_GTE?: InputMaybe<Scalars['Int']>;
  width_MIN_LT?: InputMaybe<Scalars['Int']>;
  width_MIN_LTE?: InputMaybe<Scalars['Int']>;
  width_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  width_SUM_GT?: InputMaybe<Scalars['Int']>;
  width_SUM_GTE?: InputMaybe<Scalars['Int']>;
  width_SUM_LT?: InputMaybe<Scalars['Int']>;
  width_SUM_LTE?: InputMaybe<Scalars['Int']>;
};

export type PartnerLogoOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PartnerLogoSort objects to sort PartnerLogos by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PartnerLogoSort>>>;
};

export type PartnerLogoOwnerAggregateInput = {
  AND?: InputMaybe<Array<PartnerLogoOwnerAggregateInput>>;
  OR?: InputMaybe<Array<PartnerLogoOwnerAggregateInput>>;
  count?: InputMaybe<Scalars['Int']>;
  count_GT?: InputMaybe<Scalars['Int']>;
  count_GTE?: InputMaybe<Scalars['Int']>;
  count_LT?: InputMaybe<Scalars['Int']>;
  count_LTE?: InputMaybe<Scalars['Int']>;
  node?: InputMaybe<PartnerLogoOwnerNodeAggregationWhereInput>;
};

export type PartnerLogoOwnerConnectFieldInput = {
  connect?: InputMaybe<PartnerConnectInput>;
  where?: InputMaybe<PartnerConnectWhere>;
};

export type PartnerLogoOwnerConnectOrCreateFieldInput = {
  onCreate: PartnerLogoOwnerConnectOrCreateFieldInputOnCreate;
  where: PartnerConnectOrCreateWhere;
};

export type PartnerLogoOwnerConnectOrCreateFieldInputOnCreate = {
  node: PartnerCreateInput;
};

export type PartnerLogoOwnerConnection = {
  __typename?: 'PartnerLogoOwnerConnection';
  edges: Array<PartnerLogoOwnerRelationship>;
  pageInfo: PageInfo;
  totalCount: Scalars['Int'];
};

export type PartnerLogoOwnerConnectionSort = {
  node?: InputMaybe<PartnerSort>;
};

export type PartnerLogoOwnerConnectionWhere = {
  AND?: InputMaybe<Array<PartnerLogoOwnerConnectionWhere>>;
  OR?: InputMaybe<Array<PartnerLogoOwnerConnectionWhere>>;
  node?: InputMaybe<PartnerWhere>;
  node_NOT?: InputMaybe<PartnerWhere>;
};

export type PartnerLogoOwnerCreateFieldInput = {
  node: PartnerCreateInput;
};

export type PartnerLogoOwnerDeleteFieldInput = {
  delete?: InputMaybe<PartnerDeleteInput>;
  where?: InputMaybe<PartnerLogoOwnerConnectionWhere>;
};

export type PartnerLogoOwnerDisconnectFieldInput = {
  disconnect?: InputMaybe<PartnerDisconnectInput>;
  where?: InputMaybe<PartnerLogoOwnerConnectionWhere>;
};

export type PartnerLogoOwnerFieldInput = {
  connect?: InputMaybe<PartnerLogoOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<PartnerLogoOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<PartnerLogoOwnerCreateFieldInput>;
};

export type PartnerLogoOwnerNodeAggregationWhereInput = {
  AND?: InputMaybe<Array<PartnerLogoOwnerNodeAggregationWhereInput>>;
  OR?: InputMaybe<Array<PartnerLogoOwnerNodeAggregationWhereInput>>;
  description_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  description_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  description_EQUAL?: InputMaybe<Scalars['String']>;
  description_GT?: InputMaybe<Scalars['Int']>;
  description_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  description_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  description_LT?: InputMaybe<Scalars['Int']>;
  description_LTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  description_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  id_EQUAL?: InputMaybe<Scalars['ID']>;
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
  website_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  website_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  website_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  website_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  website_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  website_EQUAL?: InputMaybe<Scalars['String']>;
  website_GT?: InputMaybe<Scalars['Int']>;
  website_GTE?: InputMaybe<Scalars['Int']>;
  website_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  website_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  website_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  website_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  website_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  website_LT?: InputMaybe<Scalars['Int']>;
  website_LTE?: InputMaybe<Scalars['Int']>;
  website_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  website_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  website_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  website_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  website_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
};

export type PartnerLogoOwnerRelationship = {
  __typename?: 'PartnerLogoOwnerRelationship';
  cursor: Scalars['String'];
  node: Partner;
};

export type PartnerLogoOwnerUpdateConnectionInput = {
  node?: InputMaybe<PartnerUpdateInput>;
};

export type PartnerLogoOwnerUpdateFieldInput = {
  connect?: InputMaybe<PartnerLogoOwnerConnectFieldInput>;
  connectOrCreate?: InputMaybe<PartnerLogoOwnerConnectOrCreateFieldInput>;
  create?: InputMaybe<PartnerLogoOwnerCreateFieldInput>;
  delete?: InputMaybe<PartnerLogoOwnerDeleteFieldInput>;
  disconnect?: InputMaybe<PartnerLogoOwnerDisconnectFieldInput>;
  update?: InputMaybe<PartnerLogoOwnerUpdateConnectionInput>;
  where?: InputMaybe<PartnerLogoOwnerConnectionWhere>;
};

export type PartnerLogoPartnerOwnerAggregationSelection = {
  __typename?: 'PartnerLogoPartnerOwnerAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PartnerLogoPartnerOwnerNodeAggregateSelection>;
};

export type PartnerLogoPartnerOwnerNodeAggregateSelection = {
  __typename?: 'PartnerLogoPartnerOwnerNodeAggregateSelection';
  description: StringAggregateSelection;
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  website: StringAggregateSelection;
};

export type PartnerLogoRelationInput = {
  owner?: InputMaybe<PartnerLogoOwnerCreateFieldInput>;
};

export type PartnerLogoRelationship = {
  __typename?: 'PartnerLogoRelationship';
  cursor: Scalars['String'];
  node: PartnerLogo;
};

/** Fields to sort PartnerLogos by. The order in which sorts are applied is not guaranteed when specifying many fields in one PartnerLogoSort object. */
export type PartnerLogoSort = {
  height?: InputMaybe<SortDirection>;
  path?: InputMaybe<SortDirection>;
  url?: InputMaybe<SortDirection>;
  width?: InputMaybe<SortDirection>;
};

export type PartnerLogoUpdateConnectionInput = {
  node?: InputMaybe<PartnerLogoUpdateInput>;
};

export type PartnerLogoUpdateFieldInput = {
  connect?: InputMaybe<PartnerLogoConnectFieldInput>;
  create?: InputMaybe<PartnerLogoCreateFieldInput>;
  delete?: InputMaybe<PartnerLogoDeleteFieldInput>;
  disconnect?: InputMaybe<PartnerLogoDisconnectFieldInput>;
  update?: InputMaybe<PartnerLogoUpdateConnectionInput>;
  where?: InputMaybe<PartnerLogoConnectionWhere>;
};

export type PartnerLogoUpdateInput = {
  height?: InputMaybe<Scalars['Int']>;
  owner?: InputMaybe<PartnerLogoOwnerUpdateFieldInput>;
  path?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
};

export type PartnerLogoWhere = {
  AND?: InputMaybe<Array<PartnerLogoWhere>>;
  OR?: InputMaybe<Array<PartnerLogoWhere>>;
  height?: InputMaybe<Scalars['Int']>;
  height_GT?: InputMaybe<Scalars['Int']>;
  height_GTE?: InputMaybe<Scalars['Int']>;
  height_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  height_LT?: InputMaybe<Scalars['Int']>;
  height_LTE?: InputMaybe<Scalars['Int']>;
  height_NOT?: InputMaybe<Scalars['Int']>;
  height_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  owner?: InputMaybe<PartnerWhere>;
  ownerAggregate?: InputMaybe<PartnerLogoOwnerAggregateInput>;
  ownerConnection?: InputMaybe<PartnerLogoOwnerConnectionWhere>;
  ownerConnection_NOT?: InputMaybe<PartnerLogoOwnerConnectionWhere>;
  owner_NOT?: InputMaybe<PartnerWhere>;
  path?: InputMaybe<Scalars['String']>;
  path_CONTAINS?: InputMaybe<Scalars['String']>;
  path_ENDS_WITH?: InputMaybe<Scalars['String']>;
  path_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_NOT?: InputMaybe<Scalars['String']>;
  path_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  path_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  path_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  path_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  path_STARTS_WITH?: InputMaybe<Scalars['String']>;
  url?: InputMaybe<Scalars['String']>;
  url_CONTAINS?: InputMaybe<Scalars['String']>;
  url_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_NOT?: InputMaybe<Scalars['String']>;
  url_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  url_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  url_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  url_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  url_STARTS_WITH?: InputMaybe<Scalars['String']>;
  width?: InputMaybe<Scalars['Int']>;
  width_GT?: InputMaybe<Scalars['Int']>;
  width_GTE?: InputMaybe<Scalars['Int']>;
  width_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  width_LT?: InputMaybe<Scalars['Int']>;
  width_LTE?: InputMaybe<Scalars['Int']>;
  width_NOT?: InputMaybe<Scalars['Int']>;
  width_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
};

export type PartnerOptions = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  /** Specify one or more PartnerSort objects to sort Partners by. The sorts will be applied in the order in which they are arranged in the array. */
  sort?: InputMaybe<Array<InputMaybe<PartnerSort>>>;
};

export type PartnerPartnerLogoLogoAggregationSelection = {
  __typename?: 'PartnerPartnerLogoLogoAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<PartnerPartnerLogoLogoNodeAggregateSelection>;
};

export type PartnerPartnerLogoLogoNodeAggregateSelection = {
  __typename?: 'PartnerPartnerLogoLogoNodeAggregateSelection';
  height: IntAggregateSelection;
  path: StringAggregateSelection;
  url: StringAggregateSelection;
  width: IntAggregateSelection;
};

export type PartnerRelationInput = {
  logo?: InputMaybe<PartnerLogoCreateFieldInput>;
};

/** Fields to sort Partners by. The order in which sorts are applied is not guaranteed when specifying many fields in one PartnerSort object. */
export type PartnerSort = {
  description?: InputMaybe<SortDirection>;
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  website?: InputMaybe<SortDirection>;
};

export type PartnerUniqueWhere = {
  id?: InputMaybe<Scalars['ID']>;
};

export type PartnerUpdateInput = {
  description?: InputMaybe<Scalars['String']>;
  logo?: InputMaybe<PartnerLogoUpdateFieldInput>;
  name?: InputMaybe<Scalars['String']>;
  website?: InputMaybe<Scalars['String']>;
};

export type PartnerWhere = {
  AND?: InputMaybe<Array<PartnerWhere>>;
  OR?: InputMaybe<Array<PartnerWhere>>;
  description?: InputMaybe<Scalars['String']>;
  description_CONTAINS?: InputMaybe<Scalars['String']>;
  description_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT?: InputMaybe<Scalars['String']>;
  description_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  description_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  description_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  description_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  description_STARTS_WITH?: InputMaybe<Scalars['String']>;
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  logo?: InputMaybe<PartnerLogoWhere>;
  logoAggregate?: InputMaybe<PartnerLogoAggregateInput>;
  logoConnection?: InputMaybe<PartnerLogoConnectionWhere>;
  logoConnection_NOT?: InputMaybe<PartnerLogoConnectionWhere>;
  logo_NOT?: InputMaybe<PartnerLogoWhere>;
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
  website?: InputMaybe<Scalars['String']>;
  website_CONTAINS?: InputMaybe<Scalars['String']>;
  website_ENDS_WITH?: InputMaybe<Scalars['String']>;
  website_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_NOT?: InputMaybe<Scalars['String']>;
  website_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  website_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  website_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  website_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  website_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  admins: Array<Admin>;
  adminsAggregate: AdminAggregateSelection;
  adminsCount: Scalars['Int'];
  components: Array<Component>;
  componentsAggregate: ComponentAggregateSelection;
  componentsCount: Scalars['Int'];
  dateSlots: Array<DateSlot>;
  dateSlotsAggregate: DateSlotAggregateSelection;
  dateSlotsCount: Scalars['Int'];
  facilities: Array<Facility>;
  facilitiesAggregate: FacilityAggregateSelection;
  facilitiesCount: Scalars['Int'];
  facilityImages: Array<FacilityImage>;
  facilityImagesAggregate: FacilityImageAggregateSelection;
  facilityImagesCount: Scalars['Int'];
  horseCategories: Array<HorseCategory>;
  horseCategoriesAggregate: HorseCategoryAggregateSelection;
  horseCategoriesCount: Scalars['Int'];
  horseImages: Array<HorseImage>;
  horseImagesAggregate: HorseImageAggregateSelection;
  horseImagesCount: Scalars['Int'];
  horses: Array<Horse>;
  horsesAggregate: HorseAggregateSelection;
  horsesCount: Scalars['Int'];
  logos: Array<Logo>;
  logosAggregate: LogoAggregateSelection;
  logosCount: Scalars['Int'];
  pages: Array<Page>;
  pagesAggregate: PageAggregateSelection;
  pagesCount: Scalars['Int'];
  partnerLogos: Array<PartnerLogo>;
  partnerLogosAggregate: PartnerLogoAggregateSelection;
  partnerLogosCount: Scalars['Int'];
  partners: Array<Partner>;
  partnersAggregate: PartnerAggregateSelection;
  partnersCount: Scalars['Int'];
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


export type QueryAdminsArgs = {
  options?: InputMaybe<AdminOptions>;
  where?: InputMaybe<AdminWhere>;
};


export type QueryAdminsAggregateArgs = {
  where?: InputMaybe<AdminWhere>;
};


export type QueryAdminsCountArgs = {
  where?: InputMaybe<AdminWhere>;
};


export type QueryComponentsArgs = {
  options?: InputMaybe<ComponentOptions>;
  where?: InputMaybe<ComponentWhere>;
};


export type QueryComponentsAggregateArgs = {
  where?: InputMaybe<ComponentWhere>;
};


export type QueryComponentsCountArgs = {
  where?: InputMaybe<ComponentWhere>;
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


export type QueryFacilitiesArgs = {
  options?: InputMaybe<FacilityOptions>;
  where?: InputMaybe<FacilityWhere>;
};


export type QueryFacilitiesAggregateArgs = {
  where?: InputMaybe<FacilityWhere>;
};


export type QueryFacilitiesCountArgs = {
  where?: InputMaybe<FacilityWhere>;
};


export type QueryFacilityImagesArgs = {
  options?: InputMaybe<FacilityImageOptions>;
  where?: InputMaybe<FacilityImageWhere>;
};


export type QueryFacilityImagesAggregateArgs = {
  where?: InputMaybe<FacilityImageWhere>;
};


export type QueryFacilityImagesCountArgs = {
  where?: InputMaybe<FacilityImageWhere>;
};


export type QueryHorseCategoriesArgs = {
  options?: InputMaybe<HorseCategoryOptions>;
  where?: InputMaybe<HorseCategoryWhere>;
};


export type QueryHorseCategoriesAggregateArgs = {
  where?: InputMaybe<HorseCategoryWhere>;
};


export type QueryHorseCategoriesCountArgs = {
  where?: InputMaybe<HorseCategoryWhere>;
};


export type QueryHorseImagesArgs = {
  options?: InputMaybe<HorseImageOptions>;
  where?: InputMaybe<HorseImageWhere>;
};


export type QueryHorseImagesAggregateArgs = {
  where?: InputMaybe<HorseImageWhere>;
};


export type QueryHorseImagesCountArgs = {
  where?: InputMaybe<HorseImageWhere>;
};


export type QueryHorsesArgs = {
  options?: InputMaybe<HorseOptions>;
  where?: InputMaybe<HorseWhere>;
};


export type QueryHorsesAggregateArgs = {
  where?: InputMaybe<HorseWhere>;
};


export type QueryHorsesCountArgs = {
  where?: InputMaybe<HorseWhere>;
};


export type QueryLogosArgs = {
  options?: InputMaybe<LogoOptions>;
  where?: InputMaybe<LogoWhere>;
};


export type QueryLogosAggregateArgs = {
  where?: InputMaybe<LogoWhere>;
};


export type QueryLogosCountArgs = {
  where?: InputMaybe<LogoWhere>;
};


export type QueryPagesArgs = {
  options?: InputMaybe<PageOptions>;
  where?: InputMaybe<PageWhere>;
};


export type QueryPagesAggregateArgs = {
  where?: InputMaybe<PageWhere>;
};


export type QueryPagesCountArgs = {
  where?: InputMaybe<PageWhere>;
};


export type QueryPartnerLogosArgs = {
  options?: InputMaybe<PartnerLogoOptions>;
  where?: InputMaybe<PartnerLogoWhere>;
};


export type QueryPartnerLogosAggregateArgs = {
  where?: InputMaybe<PartnerLogoWhere>;
};


export type QueryPartnerLogosCountArgs = {
  where?: InputMaybe<PartnerLogoWhere>;
};


export type QueryPartnersArgs = {
  options?: InputMaybe<PartnerOptions>;
  where?: InputMaybe<PartnerWhere>;
};


export type QueryPartnersAggregateArgs = {
  where?: InputMaybe<PartnerWhere>;
};


export type QueryPartnersCountArgs = {
  where?: InputMaybe<PartnerWhere>;
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
  slots?: Maybe<Scalars['Int']>;
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
  slots: IntAggregateSelection;
  to: StringAggregateSelection;
};

export type TimeSlotConnectInput = {
  date?: InputMaybe<TimeSlotDateConnectFieldInput>;
  type?: InputMaybe<TimeSlotTypeConnectFieldInput>;
  users?: InputMaybe<Array<TimeSlotUsersConnectFieldInput>>;
};

export type TimeSlotConnectOrCreateInput = {
  users?: InputMaybe<Array<TimeSlotUsersConnectOrCreateFieldInput>>;
};

export type TimeSlotConnectWhere = {
  node: TimeSlotWhere;
};

export type TimeSlotCreateInput = {
  date?: InputMaybe<TimeSlotDateFieldInput>;
  from: Scalars['String'];
  slots?: InputMaybe<Scalars['Int']>;
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
  slots?: InputMaybe<SortDirection>;
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
  timeslot: Array<Maybe<TimeSlot>>;
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
  timeslot?: InputMaybe<Array<TimeSlotTypeTimeslotConnectFieldInput>>;
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
  timeslot?: InputMaybe<Array<TimeSlotTypeTimeslotDeleteFieldInput>>;
};

export type TimeSlotTypeDisconnectFieldInput = {
  disconnect?: InputMaybe<TimeSlotTypeDisconnectInput>;
  where?: InputMaybe<TimeSlotTypeConnectionWhere>;
};

export type TimeSlotTypeDisconnectInput = {
  timeslot?: InputMaybe<Array<TimeSlotTypeTimeslotDisconnectFieldInput>>;
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
  timeslot?: InputMaybe<Array<TimeSlotTypeTimeslotCreateFieldInput>>;
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
  slots: IntAggregateSelection;
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
  connect?: InputMaybe<Array<TimeSlotConnectInput>>;
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
  connect?: InputMaybe<Array<TimeSlotTypeTimeslotConnectFieldInput>>;
  create?: InputMaybe<Array<TimeSlotTypeTimeslotCreateFieldInput>>;
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
  slots_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  slots_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_GT?: InputMaybe<Scalars['Int']>;
  slots_GTE?: InputMaybe<Scalars['Int']>;
  slots_LT?: InputMaybe<Scalars['Int']>;
  slots_LTE?: InputMaybe<Scalars['Int']>;
  slots_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_MAX_GT?: InputMaybe<Scalars['Int']>;
  slots_MAX_GTE?: InputMaybe<Scalars['Int']>;
  slots_MAX_LT?: InputMaybe<Scalars['Int']>;
  slots_MAX_LTE?: InputMaybe<Scalars['Int']>;
  slots_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_MIN_GT?: InputMaybe<Scalars['Int']>;
  slots_MIN_GTE?: InputMaybe<Scalars['Int']>;
  slots_MIN_LT?: InputMaybe<Scalars['Int']>;
  slots_MIN_LTE?: InputMaybe<Scalars['Int']>;
  slots_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_SUM_GT?: InputMaybe<Scalars['Int']>;
  slots_SUM_GTE?: InputMaybe<Scalars['Int']>;
  slots_SUM_LT?: InputMaybe<Scalars['Int']>;
  slots_SUM_LTE?: InputMaybe<Scalars['Int']>;
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
  connect?: InputMaybe<Array<TimeSlotTypeTimeslotConnectFieldInput>>;
  create?: InputMaybe<Array<TimeSlotTypeTimeslotCreateFieldInput>>;
  delete?: InputMaybe<Array<TimeSlotTypeTimeslotDeleteFieldInput>>;
  disconnect?: InputMaybe<Array<TimeSlotTypeTimeslotDisconnectFieldInput>>;
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
  timeslot?: InputMaybe<Array<TimeSlotTypeTimeslotUpdateFieldInput>>;
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
  slots?: InputMaybe<Scalars['Int']>;
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
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  phonenumber: StringAggregateSelection;
  profilePicture: StringAggregateSelection;
  uid: StringAggregateSelection;
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
  id_EQUAL?: InputMaybe<Scalars['ID']>;
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
  profilePicture_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  profilePicture_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  profilePicture_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  profilePicture_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  profilePicture_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  profilePicture_EQUAL?: InputMaybe<Scalars['String']>;
  profilePicture_GT?: InputMaybe<Scalars['Int']>;
  profilePicture_GTE?: InputMaybe<Scalars['Int']>;
  profilePicture_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  profilePicture_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  profilePicture_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  profilePicture_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  profilePicture_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  profilePicture_LT?: InputMaybe<Scalars['Int']>;
  profilePicture_LTE?: InputMaybe<Scalars['Int']>;
  profilePicture_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  profilePicture_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  profilePicture_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  profilePicture_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  profilePicture_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
  uid_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  uid_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  uid_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  uid_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  uid_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  uid_EQUAL?: InputMaybe<Scalars['String']>;
  uid_GT?: InputMaybe<Scalars['Int']>;
  uid_GTE?: InputMaybe<Scalars['Int']>;
  uid_LONGEST_EQUAL?: InputMaybe<Scalars['Int']>;
  uid_LONGEST_GT?: InputMaybe<Scalars['Int']>;
  uid_LONGEST_GTE?: InputMaybe<Scalars['Int']>;
  uid_LONGEST_LT?: InputMaybe<Scalars['Int']>;
  uid_LONGEST_LTE?: InputMaybe<Scalars['Int']>;
  uid_LT?: InputMaybe<Scalars['Int']>;
  uid_LTE?: InputMaybe<Scalars['Int']>;
  uid_SHORTEST_EQUAL?: InputMaybe<Scalars['Int']>;
  uid_SHORTEST_GT?: InputMaybe<Scalars['Int']>;
  uid_SHORTEST_GTE?: InputMaybe<Scalars['Int']>;
  uid_SHORTEST_LT?: InputMaybe<Scalars['Int']>;
  uid_SHORTEST_LTE?: InputMaybe<Scalars['Int']>;
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
  slots?: InputMaybe<Scalars['Int']>;
  slots_GT?: InputMaybe<Scalars['Int']>;
  slots_GTE?: InputMaybe<Scalars['Int']>;
  slots_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
  slots_LT?: InputMaybe<Scalars['Int']>;
  slots_LTE?: InputMaybe<Scalars['Int']>;
  slots_NOT?: InputMaybe<Scalars['Int']>;
  slots_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['Int']>>>;
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

export type UpdateAdminsMutationResponse = {
  __typename?: 'UpdateAdminsMutationResponse';
  admins: Array<Admin>;
  info: UpdateInfo;
};

export type UpdateComponentsMutationResponse = {
  __typename?: 'UpdateComponentsMutationResponse';
  components: Array<Component>;
  info: UpdateInfo;
};

export type UpdateDateSlotsMutationResponse = {
  __typename?: 'UpdateDateSlotsMutationResponse';
  dateSlots: Array<DateSlot>;
  info: UpdateInfo;
};

export type UpdateFacilitiesMutationResponse = {
  __typename?: 'UpdateFacilitiesMutationResponse';
  facilities: Array<Facility>;
  info: UpdateInfo;
};

export type UpdateFacilityImagesMutationResponse = {
  __typename?: 'UpdateFacilityImagesMutationResponse';
  facilityImages: Array<FacilityImage>;
  info: UpdateInfo;
};

export type UpdateHorseCategoriesMutationResponse = {
  __typename?: 'UpdateHorseCategoriesMutationResponse';
  horseCategories: Array<HorseCategory>;
  info: UpdateInfo;
};

export type UpdateHorseImagesMutationResponse = {
  __typename?: 'UpdateHorseImagesMutationResponse';
  horseImages: Array<HorseImage>;
  info: UpdateInfo;
};

export type UpdateHorsesMutationResponse = {
  __typename?: 'UpdateHorsesMutationResponse';
  horses: Array<Horse>;
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

export type UpdateLogosMutationResponse = {
  __typename?: 'UpdateLogosMutationResponse';
  info: UpdateInfo;
  logos: Array<Logo>;
};

export type UpdatePagesMutationResponse = {
  __typename?: 'UpdatePagesMutationResponse';
  info: UpdateInfo;
  pages: Array<Page>;
};

export type UpdatePartnerLogosMutationResponse = {
  __typename?: 'UpdatePartnerLogosMutationResponse';
  info: UpdateInfo;
  partnerLogos: Array<PartnerLogo>;
};

export type UpdatePartnersMutationResponse = {
  __typename?: 'UpdatePartnersMutationResponse';
  info: UpdateInfo;
  partners: Array<Partner>;
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
  id?: Maybe<Scalars['ID']>;
  name: Scalars['String'];
  phonenumber?: Maybe<Scalars['String']>;
  profilePicture?: Maybe<Scalars['String']>;
  timeslots?: Maybe<Array<Maybe<TimeSlot>>>;
  timeslotsAggregate?: Maybe<UserTimeSlotTimeslotsAggregationSelection>;
  timeslotsConnection: UserTimeslotsConnection;
  uid: Scalars['String'];
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
  id: IdAggregateSelection;
  name: StringAggregateSelection;
  phonenumber: StringAggregateSelection;
  profilePicture: StringAggregateSelection;
  uid: StringAggregateSelection;
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
  phonenumber?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<UserTimeslotsFieldInput>;
  uid: Scalars['String'];
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
  id?: InputMaybe<SortDirection>;
  name?: InputMaybe<SortDirection>;
  phonenumber?: InputMaybe<SortDirection>;
  profilePicture?: InputMaybe<SortDirection>;
  uid?: InputMaybe<SortDirection>;
};

export type UserTimeSlotTimeslotsAggregationSelection = {
  __typename?: 'UserTimeSlotTimeslotsAggregationSelection';
  count: Scalars['Int'];
  node?: Maybe<UserTimeSlotTimeslotsNodeAggregateSelection>;
};

export type UserTimeSlotTimeslotsNodeAggregateSelection = {
  __typename?: 'UserTimeSlotTimeslotsNodeAggregateSelection';
  from: StringAggregateSelection;
  slots: IntAggregateSelection;
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
  slots_AVERAGE_EQUAL?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_GT?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_GTE?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_LT?: InputMaybe<Scalars['Float']>;
  slots_AVERAGE_LTE?: InputMaybe<Scalars['Float']>;
  slots_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_GT?: InputMaybe<Scalars['Int']>;
  slots_GTE?: InputMaybe<Scalars['Int']>;
  slots_LT?: InputMaybe<Scalars['Int']>;
  slots_LTE?: InputMaybe<Scalars['Int']>;
  slots_MAX_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_MAX_GT?: InputMaybe<Scalars['Int']>;
  slots_MAX_GTE?: InputMaybe<Scalars['Int']>;
  slots_MAX_LT?: InputMaybe<Scalars['Int']>;
  slots_MAX_LTE?: InputMaybe<Scalars['Int']>;
  slots_MIN_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_MIN_GT?: InputMaybe<Scalars['Int']>;
  slots_MIN_GTE?: InputMaybe<Scalars['Int']>;
  slots_MIN_LT?: InputMaybe<Scalars['Int']>;
  slots_MIN_LTE?: InputMaybe<Scalars['Int']>;
  slots_SUM_EQUAL?: InputMaybe<Scalars['Int']>;
  slots_SUM_GT?: InputMaybe<Scalars['Int']>;
  slots_SUM_GTE?: InputMaybe<Scalars['Int']>;
  slots_SUM_LT?: InputMaybe<Scalars['Int']>;
  slots_SUM_LTE?: InputMaybe<Scalars['Int']>;
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
  id?: InputMaybe<Scalars['ID']>;
};

export type UserUpdateInput = {
  email?: InputMaybe<Scalars['String']>;
  name?: InputMaybe<Scalars['String']>;
  phonenumber?: InputMaybe<Scalars['String']>;
  profilePicture?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<Array<UserTimeslotsUpdateFieldInput>>;
  uid?: InputMaybe<Scalars['String']>;
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
  id?: InputMaybe<Scalars['ID']>;
  id_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT?: InputMaybe<Scalars['ID']>;
  id_NOT_CONTAINS?: InputMaybe<Scalars['ID']>;
  id_NOT_ENDS_WITH?: InputMaybe<Scalars['ID']>;
  id_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['ID']>>>;
  id_NOT_STARTS_WITH?: InputMaybe<Scalars['ID']>;
  id_STARTS_WITH?: InputMaybe<Scalars['ID']>;
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
  profilePicture?: InputMaybe<Scalars['String']>;
  profilePicture_CONTAINS?: InputMaybe<Scalars['String']>;
  profilePicture_ENDS_WITH?: InputMaybe<Scalars['String']>;
  profilePicture_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture_NOT?: InputMaybe<Scalars['String']>;
  profilePicture_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  profilePicture_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  profilePicture_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  profilePicture_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  profilePicture_STARTS_WITH?: InputMaybe<Scalars['String']>;
  timeslots?: InputMaybe<TimeSlotWhere>;
  timeslotsAggregate?: InputMaybe<UserTimeslotsAggregateInput>;
  timeslotsConnection?: InputMaybe<UserTimeslotsConnectionWhere>;
  timeslotsConnection_NOT?: InputMaybe<UserTimeslotsConnectionWhere>;
  timeslots_NOT?: InputMaybe<TimeSlotWhere>;
  uid?: InputMaybe<Scalars['String']>;
  uid_CONTAINS?: InputMaybe<Scalars['String']>;
  uid_ENDS_WITH?: InputMaybe<Scalars['String']>;
  uid_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_NOT?: InputMaybe<Scalars['String']>;
  uid_NOT_CONTAINS?: InputMaybe<Scalars['String']>;
  uid_NOT_ENDS_WITH?: InputMaybe<Scalars['String']>;
  uid_NOT_IN?: InputMaybe<Array<InputMaybe<Scalars['String']>>>;
  uid_NOT_STARTS_WITH?: InputMaybe<Scalars['String']>;
  uid_STARTS_WITH?: InputMaybe<Scalars['String']>;
};

export type RegularAdminFragment = { __typename?: 'Admin', uid: string };

export type RegularDateSlotFragment = { __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined };

export type RegularFacilityFragment = { __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> };

export type RegularFacilityImageFragment = { __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> } | null | undefined };

export type RegularHorseFragment = { __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } };

export type RegularHorseImageFragment = { __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined };

export type RegularPartnerFragment = { __typename?: 'Partner', id?: string | null | undefined, name: string, description: string, website?: string | null | undefined, logo?: { __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number } | null | undefined };

export type RegularPartnerLogoFragment = { __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number, owner?: { __typename?: 'Partner', name: string, description: string, website?: string | null | undefined } | null | undefined };

export type RegularTimeSlotFragment = { __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined };

export type RegularUserFragment = { __typename?: 'User', id?: string | null | undefined, uid: string, name: string, phonenumber?: string | null | undefined, profilePicture?: string | null | undefined, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined };

export type CreateAdminMutationVariables = Exact<{
  input: Array<AdminCreateInput> | AdminCreateInput;
}>;


export type CreateAdminMutation = { __typename?: 'Mutation', createAdmins: { __typename?: 'CreateAdminsMutationResponse', admins: Array<{ __typename?: 'Admin', uid: string }> } };

export type CreateDateSlotsMutationVariables = Exact<{
  input: Array<DateSlotCreateInput> | DateSlotCreateInput;
}>;


export type CreateDateSlotsMutation = { __typename?: 'Mutation', createDateSlots: { __typename?: 'CreateDateSlotsMutationResponse', dateSlots: Array<{ __typename?: 'DateSlot', date: string }> } };

export type CreateFacilityMutationVariables = Exact<{
  input: Array<FacilityCreateInput> | FacilityCreateInput;
}>;


export type CreateFacilityMutation = { __typename?: 'Mutation', createFacilities: { __typename?: 'CreateFacilitiesMutationResponse', facilities: Array<{ __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> }> } };

export type CreateFacilityImagesMutationVariables = Exact<{
  input: Array<FacilityImageCreateInput> | FacilityImageCreateInput;
}>;


export type CreateFacilityImagesMutation = { __typename?: 'Mutation', createFacilityImages: { __typename?: 'CreateFacilityImagesMutationResponse', facilityImages: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> } | null | undefined }> } };

export type CreateHorseMutationVariables = Exact<{
  input: Array<HorseCreateInput> | HorseCreateInput;
}>;


export type CreateHorseMutation = { __typename?: 'Mutation', createHorses: { __typename?: 'CreateHorsesMutationResponse', horses: Array<{ __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } }> } };

export type CreateHorseCategoriesMutationVariables = Exact<{
  input: Array<HorseCategoryCreateInput> | HorseCategoryCreateInput;
}>;


export type CreateHorseCategoriesMutation = { __typename?: 'Mutation', createHorseCategories: { __typename?: 'CreateHorseCategoriesMutationResponse', horseCategories: Array<{ __typename?: 'HorseCategory', category: string, horses?: Array<{ __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined> | null | undefined }> } };

export type CreateHorseImagesMutationVariables = Exact<{
  input: Array<HorseImageCreateInput> | HorseImageCreateInput;
}>;


export type CreateHorseImagesMutation = { __typename?: 'Mutation', createHorseImages: { __typename?: 'CreateHorseImagesMutationResponse', horseImages: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined }> } };

export type CreateLogoMutationVariables = Exact<{
  input: Array<LogoCreateInput> | LogoCreateInput;
}>;


export type CreateLogoMutation = { __typename?: 'Mutation', createLogos: { __typename?: 'CreateLogosMutationResponse', logos: Array<{ __typename?: 'Logo', image: string }> } };

export type CreatePartnerMutationVariables = Exact<{
  input: Array<PartnerCreateInput> | PartnerCreateInput;
}>;


export type CreatePartnerMutation = { __typename?: 'Mutation', createPartners: { __typename?: 'CreatePartnersMutationResponse', partners: Array<{ __typename?: 'Partner', id?: string | null | undefined, name: string, description: string, website?: string | null | undefined, logo?: { __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number } | null | undefined }> } };

export type CreatePartnerLogoMutationVariables = Exact<{
  input: Array<PartnerLogoCreateInput> | PartnerLogoCreateInput;
}>;


export type CreatePartnerLogoMutation = { __typename?: 'Mutation', createPartnerLogos: { __typename?: 'CreatePartnerLogosMutationResponse', partnerLogos: Array<{ __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number, owner?: { __typename?: 'Partner', name: string, description: string, website?: string | null | undefined } | null | undefined }> } };

export type CreateTimeSlotTypesMutationVariables = Exact<{
  input: Array<TimeSlotTypeCreateInput> | TimeSlotTypeCreateInput;
}>;


export type CreateTimeSlotTypesMutation = { __typename?: 'Mutation', createTimeSlotTypes: { __typename?: 'CreateTimeSlotTypesMutationResponse', timeSlotTypes: Array<{ __typename?: 'TimeSlotType', type: string }> } };

export type CreateTimeSlotsMutationVariables = Exact<{
  input: Array<TimeSlotCreateInput> | TimeSlotCreateInput;
}>;


export type CreateTimeSlotsMutation = { __typename?: 'Mutation', createTimeSlots: { __typename?: 'CreateTimeSlotsMutationResponse', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined }> } };

export type CreateUsersMutationVariables = Exact<{
  input: Array<UserCreateInput> | UserCreateInput;
}>;


export type CreateUsersMutation = { __typename?: 'Mutation', createUsers: { __typename?: 'CreateUsersMutationResponse', users: Array<{ __typename?: 'User', id?: string | null | undefined, uid: string, name: string, phonenumber?: string | null | undefined, profilePicture?: string | null | undefined, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> } };

export type DeleteDateSlotsMutationVariables = Exact<{
  where?: InputMaybe<DateSlotWhere>;
  delete?: InputMaybe<DateSlotDeleteInput>;
}>;


export type DeleteDateSlotsMutation = { __typename?: 'Mutation', deleteDateSlots: { __typename?: 'DeleteInfo', relationshipsDeleted: number, nodesDeleted: number } };

export type DeleteFacilityMutationVariables = Exact<{
  where?: InputMaybe<FacilityWhere>;
}>;


export type DeleteFacilityMutation = { __typename?: 'Mutation', deleteFacilities: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteFacilityImagesMutationVariables = Exact<{
  where?: InputMaybe<FacilityImageWhere>;
}>;


export type DeleteFacilityImagesMutation = { __typename?: 'Mutation', deleteFacilityImages: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteHorsesMutationVariables = Exact<{
  where?: InputMaybe<HorseWhere>;
}>;


export type DeleteHorsesMutation = { __typename?: 'Mutation', deleteHorses: { __typename?: 'DeleteInfo', nodesDeleted: number } };

export type DeleteHorseImagesMutationVariables = Exact<{
  where?: InputMaybe<HorseImageWhere>;
}>;


export type DeleteHorseImagesMutation = { __typename?: 'Mutation', deleteHorseImages: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type DeletePartnerMutationVariables = Exact<{
  where?: InputMaybe<PartnerWhere>;
}>;


export type DeletePartnerMutation = { __typename?: 'Mutation', deletePartners: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type DeletePartnerLogoMutationVariables = Exact<{
  where?: InputMaybe<PartnerLogoWhere>;
}>;


export type DeletePartnerLogoMutation = { __typename?: 'Mutation', deletePartnerLogos: { __typename?: 'DeleteInfo', nodesDeleted: number, relationshipsDeleted: number } };

export type DeleteTimeSlotsMutationVariables = Exact<{
  where?: InputMaybe<TimeSlotWhere>;
}>;


export type DeleteTimeSlotsMutation = { __typename?: 'Mutation', deleteTimeSlots: { __typename?: 'DeleteInfo', nodesDeleted: number } };

export type UpdateDateSlotsMutationVariables = Exact<{
  where?: InputMaybe<DateSlotWhere>;
  update?: InputMaybe<DateSlotUpdateInput>;
}>;


export type UpdateDateSlotsMutation = { __typename?: 'Mutation', updateDateSlots: { __typename?: 'UpdateDateSlotsMutationResponse', dateSlots: Array<{ __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined }> } };

export type UpdateFacilityMutationVariables = Exact<{
  where?: InputMaybe<FacilityWhere>;
  update?: InputMaybe<FacilityUpdateInput>;
}>;


export type UpdateFacilityMutation = { __typename?: 'Mutation', updateFacilities: { __typename?: 'UpdateFacilitiesMutationResponse', facilities: Array<{ __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> }> } };

export type UpdateFacilityImagesMutationVariables = Exact<{
  where?: InputMaybe<FacilityImageWhere>;
  update?: InputMaybe<FacilityImageUpdateInput>;
}>;


export type UpdateFacilityImagesMutation = { __typename?: 'Mutation', updateFacilityImages: { __typename?: 'UpdateFacilityImagesMutationResponse', facilityImages: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> } | null | undefined }> } };

export type UpdateHorsesMutationVariables = Exact<{
  where?: InputMaybe<HorseWhere>;
  update?: InputMaybe<HorseUpdateInput>;
}>;


export type UpdateHorsesMutation = { __typename?: 'Mutation', updateHorses: { __typename?: 'UpdateHorsesMutationResponse', horses: Array<{ __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } }> } };

export type UpdateHorseImagesMutationVariables = Exact<{
  where?: InputMaybe<HorseImageWhere>;
  update?: InputMaybe<HorseImageUpdateInput>;
}>;


export type UpdateHorseImagesMutation = { __typename?: 'Mutation', updateHorseImages: { __typename?: 'UpdateHorseImagesMutationResponse', horseImages: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined }> } };

export type UpdateLogoMutationVariables = Exact<{
  where?: InputMaybe<LogoWhere>;
  update?: InputMaybe<LogoUpdateInput>;
}>;


export type UpdateLogoMutation = { __typename?: 'Mutation', updateLogos: { __typename?: 'UpdateLogosMutationResponse', logos: Array<{ __typename?: 'Logo', image: string }> } };

export type UpdatePartnerMutationVariables = Exact<{
  where?: InputMaybe<PartnerWhere>;
  update?: InputMaybe<PartnerUpdateInput>;
}>;


export type UpdatePartnerMutation = { __typename?: 'Mutation', updatePartners: { __typename?: 'UpdatePartnersMutationResponse', partners: Array<{ __typename?: 'Partner', id?: string | null | undefined, name: string, description: string, website?: string | null | undefined, logo?: { __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number } | null | undefined }> } };

export type UpdatePartnerLogoMutationVariables = Exact<{
  where?: InputMaybe<PartnerLogoWhere>;
}>;


export type UpdatePartnerLogoMutation = { __typename?: 'Mutation', updatePartnerLogos: { __typename?: 'UpdatePartnerLogosMutationResponse', partnerLogos: Array<{ __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number, owner?: { __typename?: 'Partner', name: string, description: string, website?: string | null | undefined } | null | undefined }> } };

export type UpdateTimeSlotsMutationVariables = Exact<{
  where?: InputMaybe<TimeSlotWhere>;
  update?: InputMaybe<TimeSlotUpdateInput>;
}>;


export type UpdateTimeSlotsMutation = { __typename?: 'Mutation', updateTimeSlots: { __typename?: 'UpdateTimeSlotsMutationResponse', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined }> } };

export type UpdateTimeSlotTypesMutationVariables = Exact<{
  where?: InputMaybe<TimeSlotTypeWhere>;
}>;


export type UpdateTimeSlotTypesMutation = { __typename?: 'Mutation', updateTimeSlotTypes: { __typename?: 'UpdateTimeSlotTypesMutationResponse', timeSlotTypes: Array<{ __typename?: 'TimeSlotType', type: string }> } };

export type UpdateUsersMutationVariables = Exact<{
  where?: InputMaybe<UserWhere>;
  update?: InputMaybe<UserUpdateInput>;
}>;


export type UpdateUsersMutation = { __typename?: 'Mutation', updateUsers: { __typename?: 'UpdateUsersMutationResponse', users: Array<{ __typename?: 'User', id?: string | null | undefined, uid: string, name: string, phonenumber?: string | null | undefined, profilePicture?: string | null | undefined, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> } };

export type AdminQueryVariables = Exact<{
  where?: InputMaybe<AdminWhere>;
}>;


export type AdminQuery = { __typename?: 'Query', admins: Array<{ __typename?: 'Admin', uid: string }> };

export type AdminsQueryVariables = Exact<{ [key: string]: never; }>;


export type AdminsQuery = { __typename?: 'Query', admins: Array<{ __typename?: 'Admin', uid: string }> };

export type DateSlotQueryVariables = Exact<{
  where?: InputMaybe<DateSlotWhere>;
}>;


export type DateSlotQuery = { __typename?: 'Query', dateSlots: Array<{ __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined }> };

export type DateSlotsQueryVariables = Exact<{ [key: string]: never; }>;


export type DateSlotsQuery = { __typename?: 'Query', dateSlots: Array<{ __typename?: 'DateSlot', date: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined } | null | undefined> | null | undefined }> };

export type FacilitiesQueryVariables = Exact<{ [key: string]: never; }>;


export type FacilitiesQuery = { __typename?: 'Query', facilities: Array<{ __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> }> };

export type FacilityQueryVariables = Exact<{
  where?: InputMaybe<FacilityWhere>;
}>;


export type FacilityQuery = { __typename?: 'Query', facilities: Array<{ __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> }> };

export type FacilityImageQueryVariables = Exact<{ [key: string]: never; }>;


export type FacilityImageQuery = { __typename?: 'Query', facilityImages: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> } | null | undefined }> };

export type FacilityImagesQueryVariables = Exact<{
  where?: InputMaybe<FacilityImageWhere>;
}>;


export type FacilityImagesQuery = { __typename?: 'Query', facilityImages: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Facility', id?: string | null | undefined, name: string, description: string, images: Array<{ __typename?: 'FacilityImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> } | null | undefined }> };

export type HorseQueryVariables = Exact<{
  where?: InputMaybe<HorseWhere>;
}>;


export type HorseQuery = { __typename?: 'Query', horses: Array<{ __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } }> };

export type HorseCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type HorseCategoriesQuery = { __typename?: 'Query', horseCategories: Array<{ __typename?: 'HorseCategory', category: string, image: string, horses?: Array<{ __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined> | null | undefined }> };

export type HorseCategoryQueryVariables = Exact<{
  where?: InputMaybe<HorseCategoryWhere>;
}>;


export type HorseCategoryQuery = { __typename?: 'Query', horseCategories: Array<{ __typename?: 'HorseCategory', category: string, image: string }> };

export type HorseImageQueryVariables = Exact<{
  where?: InputMaybe<HorseImageWhere>;
}>;


export type HorseImageQuery = { __typename?: 'Query', horseImages: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined }> };

export type HorseImagesQueryVariables = Exact<{ [key: string]: never; }>;


export type HorseImagesQuery = { __typename?: 'Query', horseImages: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean, owner?: { __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } } | null | undefined }> };

export type HorsesQueryVariables = Exact<{
  where?: InputMaybe<HorseWhere>;
}>;


export type HorsesQuery = { __typename?: 'Query', horses: Array<{ __typename?: 'Horse', name: string, nickname?: string | null | undefined, movie?: string | null | undefined, owner: string, after: string, birthyear: string, gender: string, color: string, images?: Array<{ __typename?: 'HorseImage', url: string, path: string, width: number, height: number, profile: boolean } | null | undefined> | null | undefined, category: { __typename?: 'HorseCategory', category: string, image: string } }> };

export type LogoQueryVariables = Exact<{ [key: string]: never; }>;


export type LogoQuery = { __typename?: 'Query', logos: Array<{ __typename?: 'Logo', image: string }> };

export type PartnerQueryVariables = Exact<{
  where?: InputMaybe<PartnerWhere>;
}>;


export type PartnerQuery = { __typename?: 'Query', partners: Array<{ __typename?: 'Partner', id?: string | null | undefined, name: string, description: string, website?: string | null | undefined, logo?: { __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number } | null | undefined }> };

export type PartnerLogoQueryVariables = Exact<{
  where?: InputMaybe<PartnerLogoWhere>;
}>;


export type PartnerLogoQuery = { __typename?: 'Query', partnerLogos: Array<{ __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number, owner?: { __typename?: 'Partner', name: string, description: string, website?: string | null | undefined } | null | undefined }> };

export type PartnerLogosQueryVariables = Exact<{ [key: string]: never; }>;


export type PartnerLogosQuery = { __typename?: 'Query', partnerLogos: Array<{ __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number, owner?: { __typename?: 'Partner', name: string, description: string, website?: string | null | undefined } | null | undefined }> };

export type PartnersQueryVariables = Exact<{ [key: string]: never; }>;


export type PartnersQuery = { __typename?: 'Query', partners: Array<{ __typename?: 'Partner', id?: string | null | undefined, name: string, description: string, website?: string | null | undefined, logo?: { __typename?: 'PartnerLogo', url: string, path: string, width: number, height: number } | null | undefined }> };

export type TimeSlotQueryVariables = Exact<{
  where?: InputMaybe<TimeSlotWhere>;
}>;


export type TimeSlotQuery = { __typename?: 'Query', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined }> };

export type TimeSlotTypeQueryVariables = Exact<{
  where?: InputMaybe<TimeSlotTypeWhere>;
}>;


export type TimeSlotTypeQuery = { __typename?: 'Query', timeSlotTypes: Array<{ __typename?: 'TimeSlotType', type: string, timeslot: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined } | null | undefined> }> };

export type TimeSlotTypesQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeSlotTypesQuery = { __typename?: 'Query', timeSlotTypes: Array<{ __typename?: 'TimeSlotType', type: string }> };

export type TimeSlotsQueryVariables = Exact<{ [key: string]: never; }>;


export type TimeSlotsQuery = { __typename?: 'Query', timeSlots: Array<{ __typename?: 'TimeSlot', to: string, from: string, slots?: number | null | undefined, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string }, users?: Array<{ __typename?: 'User', name: string, phonenumber?: string | null | undefined, email: string } | null | undefined> | null | undefined }> };

export type TimeSlotsCountQueryVariables = Exact<{
  where?: InputMaybe<TimeSlotWhere>;
}>;


export type TimeSlotsCountQuery = { __typename?: 'Query', timeSlotsCount: number };

export type UserQueryVariables = Exact<{
  where?: InputMaybe<UserWhere>;
}>;


export type UserQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id?: string | null | undefined, uid: string, name: string, phonenumber?: string | null | undefined, profilePicture?: string | null | undefined, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> };

export type UsersQueryVariables = Exact<{ [key: string]: never; }>;


export type UsersQuery = { __typename?: 'Query', users: Array<{ __typename?: 'User', id?: string | null | undefined, uid: string, name: string, phonenumber?: string | null | undefined, profilePicture?: string | null | undefined, email: string, timeslots?: Array<{ __typename?: 'TimeSlot', to: string, from: string, type: { __typename?: 'TimeSlotType', type: string }, date: { __typename?: 'DateSlot', date: string } } | null | undefined> | null | undefined }> };

export const RegularAdminFragmentDoc = gql`
    fragment RegularAdmin on Admin {
  uid
}
    `;
export const RegularTimeSlotFragmentDoc = gql`
    fragment RegularTimeSlot on TimeSlot {
  to
  from
  slots
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
export const RegularDateSlotFragmentDoc = gql`
    fragment RegularDateSlot on DateSlot {
  date
  timeslots {
    ...RegularTimeSlot
  }
}
    ${RegularTimeSlotFragmentDoc}`;
export const RegularFacilityFragmentDoc = gql`
    fragment RegularFacility on Facility {
  id
  name
  description
  images {
    url
    path
    width
    height
    profile
  }
}
    `;
export const RegularFacilityImageFragmentDoc = gql`
    fragment RegularFacilityImage on FacilityImage {
  url
  path
  width
  height
  profile
  owner {
    ...RegularFacility
  }
}
    ${RegularFacilityFragmentDoc}`;
export const RegularHorseFragmentDoc = gql`
    fragment RegularHorse on Horse {
  name
  nickname
  movie
  images {
    url
    path
    width
    height
    profile
  }
  owner
  after
  birthyear
  gender
  color
  category {
    category
    image
  }
}
    `;
export const RegularHorseImageFragmentDoc = gql`
    fragment RegularHorseImage on HorseImage {
  url
  path
  width
  height
  profile
  owner {
    ...RegularHorse
  }
}
    ${RegularHorseFragmentDoc}`;
export const RegularPartnerFragmentDoc = gql`
    fragment RegularPartner on Partner {
  id
  name
  description
  website
  logo {
    url
    path
    width
    height
  }
}
    `;
export const RegularPartnerLogoFragmentDoc = gql`
    fragment RegularPartnerLogo on PartnerLogo {
  url
  path
  width
  height
  owner {
    name
    description
    website
  }
}
    `;
export const RegularUserFragmentDoc = gql`
    fragment RegularUser on User {
  id
  uid
  name
  phonenumber
  profilePicture
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
export const CreateAdminDocument = gql`
    mutation CreateAdmin($input: [AdminCreateInput!]!) {
  createAdmins(input: $input) {
    admins {
      ...RegularAdmin
    }
  }
}
    ${RegularAdminFragmentDoc}`;
export type CreateAdminMutationFn = Apollo.MutationFunction<CreateAdminMutation, CreateAdminMutationVariables>;

/**
 * __useCreateAdminMutation__
 *
 * To run a mutation, you first call `useCreateAdminMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateAdminMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createAdminMutation, { data, loading, error }] = useCreateAdminMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateAdminMutation(baseOptions?: Apollo.MutationHookOptions<CreateAdminMutation, CreateAdminMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateAdminMutation, CreateAdminMutationVariables>(CreateAdminDocument, options);
      }
export type CreateAdminMutationHookResult = ReturnType<typeof useCreateAdminMutation>;
export type CreateAdminMutationResult = Apollo.MutationResult<CreateAdminMutation>;
export type CreateAdminMutationOptions = Apollo.BaseMutationOptions<CreateAdminMutation, CreateAdminMutationVariables>;
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
export const CreateFacilityDocument = gql`
    mutation CreateFacility($input: [FacilityCreateInput!]!) {
  createFacilities(input: $input) {
    facilities {
      ...RegularFacility
    }
  }
}
    ${RegularFacilityFragmentDoc}`;
export type CreateFacilityMutationFn = Apollo.MutationFunction<CreateFacilityMutation, CreateFacilityMutationVariables>;

/**
 * __useCreateFacilityMutation__
 *
 * To run a mutation, you first call `useCreateFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFacilityMutation, { data, loading, error }] = useCreateFacilityMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFacilityMutation(baseOptions?: Apollo.MutationHookOptions<CreateFacilityMutation, CreateFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFacilityMutation, CreateFacilityMutationVariables>(CreateFacilityDocument, options);
      }
export type CreateFacilityMutationHookResult = ReturnType<typeof useCreateFacilityMutation>;
export type CreateFacilityMutationResult = Apollo.MutationResult<CreateFacilityMutation>;
export type CreateFacilityMutationOptions = Apollo.BaseMutationOptions<CreateFacilityMutation, CreateFacilityMutationVariables>;
export const CreateFacilityImagesDocument = gql`
    mutation CreateFacilityImages($input: [FacilityImageCreateInput!]!) {
  createFacilityImages(input: $input) {
    facilityImages {
      ...RegularFacilityImage
    }
  }
}
    ${RegularFacilityImageFragmentDoc}`;
export type CreateFacilityImagesMutationFn = Apollo.MutationFunction<CreateFacilityImagesMutation, CreateFacilityImagesMutationVariables>;

/**
 * __useCreateFacilityImagesMutation__
 *
 * To run a mutation, you first call `useCreateFacilityImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateFacilityImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createFacilityImagesMutation, { data, loading, error }] = useCreateFacilityImagesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateFacilityImagesMutation(baseOptions?: Apollo.MutationHookOptions<CreateFacilityImagesMutation, CreateFacilityImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateFacilityImagesMutation, CreateFacilityImagesMutationVariables>(CreateFacilityImagesDocument, options);
      }
export type CreateFacilityImagesMutationHookResult = ReturnType<typeof useCreateFacilityImagesMutation>;
export type CreateFacilityImagesMutationResult = Apollo.MutationResult<CreateFacilityImagesMutation>;
export type CreateFacilityImagesMutationOptions = Apollo.BaseMutationOptions<CreateFacilityImagesMutation, CreateFacilityImagesMutationVariables>;
export const CreateHorseDocument = gql`
    mutation CreateHorse($input: [HorseCreateInput!]!) {
  createHorses(input: $input) {
    horses {
      ...RegularHorse
    }
  }
}
    ${RegularHorseFragmentDoc}`;
export type CreateHorseMutationFn = Apollo.MutationFunction<CreateHorseMutation, CreateHorseMutationVariables>;

/**
 * __useCreateHorseMutation__
 *
 * To run a mutation, you first call `useCreateHorseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHorseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHorseMutation, { data, loading, error }] = useCreateHorseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHorseMutation(baseOptions?: Apollo.MutationHookOptions<CreateHorseMutation, CreateHorseMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHorseMutation, CreateHorseMutationVariables>(CreateHorseDocument, options);
      }
export type CreateHorseMutationHookResult = ReturnType<typeof useCreateHorseMutation>;
export type CreateHorseMutationResult = Apollo.MutationResult<CreateHorseMutation>;
export type CreateHorseMutationOptions = Apollo.BaseMutationOptions<CreateHorseMutation, CreateHorseMutationVariables>;
export const CreateHorseCategoriesDocument = gql`
    mutation CreateHorseCategories($input: [HorseCategoryCreateInput!]!) {
  createHorseCategories(input: $input) {
    horseCategories {
      category
      horses {
        ...RegularHorse
      }
    }
  }
}
    ${RegularHorseFragmentDoc}`;
export type CreateHorseCategoriesMutationFn = Apollo.MutationFunction<CreateHorseCategoriesMutation, CreateHorseCategoriesMutationVariables>;

/**
 * __useCreateHorseCategoriesMutation__
 *
 * To run a mutation, you first call `useCreateHorseCategoriesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHorseCategoriesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHorseCategoriesMutation, { data, loading, error }] = useCreateHorseCategoriesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHorseCategoriesMutation(baseOptions?: Apollo.MutationHookOptions<CreateHorseCategoriesMutation, CreateHorseCategoriesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHorseCategoriesMutation, CreateHorseCategoriesMutationVariables>(CreateHorseCategoriesDocument, options);
      }
export type CreateHorseCategoriesMutationHookResult = ReturnType<typeof useCreateHorseCategoriesMutation>;
export type CreateHorseCategoriesMutationResult = Apollo.MutationResult<CreateHorseCategoriesMutation>;
export type CreateHorseCategoriesMutationOptions = Apollo.BaseMutationOptions<CreateHorseCategoriesMutation, CreateHorseCategoriesMutationVariables>;
export const CreateHorseImagesDocument = gql`
    mutation CreateHorseImages($input: [HorseImageCreateInput!]!) {
  createHorseImages(input: $input) {
    horseImages {
      ...RegularHorseImage
    }
  }
}
    ${RegularHorseImageFragmentDoc}`;
export type CreateHorseImagesMutationFn = Apollo.MutationFunction<CreateHorseImagesMutation, CreateHorseImagesMutationVariables>;

/**
 * __useCreateHorseImagesMutation__
 *
 * To run a mutation, you first call `useCreateHorseImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHorseImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHorseImagesMutation, { data, loading, error }] = useCreateHorseImagesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateHorseImagesMutation(baseOptions?: Apollo.MutationHookOptions<CreateHorseImagesMutation, CreateHorseImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHorseImagesMutation, CreateHorseImagesMutationVariables>(CreateHorseImagesDocument, options);
      }
export type CreateHorseImagesMutationHookResult = ReturnType<typeof useCreateHorseImagesMutation>;
export type CreateHorseImagesMutationResult = Apollo.MutationResult<CreateHorseImagesMutation>;
export type CreateHorseImagesMutationOptions = Apollo.BaseMutationOptions<CreateHorseImagesMutation, CreateHorseImagesMutationVariables>;
export const CreateLogoDocument = gql`
    mutation CreateLogo($input: [LogoCreateInput!]!) {
  createLogos(input: $input) {
    logos {
      image
    }
  }
}
    `;
export type CreateLogoMutationFn = Apollo.MutationFunction<CreateLogoMutation, CreateLogoMutationVariables>;

/**
 * __useCreateLogoMutation__
 *
 * To run a mutation, you first call `useCreateLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createLogoMutation, { data, loading, error }] = useCreateLogoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateLogoMutation(baseOptions?: Apollo.MutationHookOptions<CreateLogoMutation, CreateLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateLogoMutation, CreateLogoMutationVariables>(CreateLogoDocument, options);
      }
export type CreateLogoMutationHookResult = ReturnType<typeof useCreateLogoMutation>;
export type CreateLogoMutationResult = Apollo.MutationResult<CreateLogoMutation>;
export type CreateLogoMutationOptions = Apollo.BaseMutationOptions<CreateLogoMutation, CreateLogoMutationVariables>;
export const CreatePartnerDocument = gql`
    mutation CreatePartner($input: [PartnerCreateInput!]!) {
  createPartners(input: $input) {
    partners {
      ...RegularPartner
    }
  }
}
    ${RegularPartnerFragmentDoc}`;
export type CreatePartnerMutationFn = Apollo.MutationFunction<CreatePartnerMutation, CreatePartnerMutationVariables>;

/**
 * __useCreatePartnerMutation__
 *
 * To run a mutation, you first call `useCreatePartnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePartnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPartnerMutation, { data, loading, error }] = useCreatePartnerMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePartnerMutation(baseOptions?: Apollo.MutationHookOptions<CreatePartnerMutation, CreatePartnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePartnerMutation, CreatePartnerMutationVariables>(CreatePartnerDocument, options);
      }
export type CreatePartnerMutationHookResult = ReturnType<typeof useCreatePartnerMutation>;
export type CreatePartnerMutationResult = Apollo.MutationResult<CreatePartnerMutation>;
export type CreatePartnerMutationOptions = Apollo.BaseMutationOptions<CreatePartnerMutation, CreatePartnerMutationVariables>;
export const CreatePartnerLogoDocument = gql`
    mutation CreatePartnerLogo($input: [PartnerLogoCreateInput!]!) {
  createPartnerLogos(input: $input) {
    partnerLogos {
      ...RegularPartnerLogo
    }
  }
}
    ${RegularPartnerLogoFragmentDoc}`;
export type CreatePartnerLogoMutationFn = Apollo.MutationFunction<CreatePartnerLogoMutation, CreatePartnerLogoMutationVariables>;

/**
 * __useCreatePartnerLogoMutation__
 *
 * To run a mutation, you first call `useCreatePartnerLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreatePartnerLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createPartnerLogoMutation, { data, loading, error }] = useCreatePartnerLogoMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreatePartnerLogoMutation(baseOptions?: Apollo.MutationHookOptions<CreatePartnerLogoMutation, CreatePartnerLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreatePartnerLogoMutation, CreatePartnerLogoMutationVariables>(CreatePartnerLogoDocument, options);
      }
export type CreatePartnerLogoMutationHookResult = ReturnType<typeof useCreatePartnerLogoMutation>;
export type CreatePartnerLogoMutationResult = Apollo.MutationResult<CreatePartnerLogoMutation>;
export type CreatePartnerLogoMutationOptions = Apollo.BaseMutationOptions<CreatePartnerLogoMutation, CreatePartnerLogoMutationVariables>;
export const CreateTimeSlotTypesDocument = gql`
    mutation CreateTimeSlotTypes($input: [TimeSlotTypeCreateInput!]!) {
  createTimeSlotTypes(input: $input) {
    timeSlotTypes {
      type
    }
  }
}
    `;
export type CreateTimeSlotTypesMutationFn = Apollo.MutationFunction<CreateTimeSlotTypesMutation, CreateTimeSlotTypesMutationVariables>;

/**
 * __useCreateTimeSlotTypesMutation__
 *
 * To run a mutation, you first call `useCreateTimeSlotTypesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTimeSlotTypesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTimeSlotTypesMutation, { data, loading, error }] = useCreateTimeSlotTypesMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateTimeSlotTypesMutation(baseOptions?: Apollo.MutationHookOptions<CreateTimeSlotTypesMutation, CreateTimeSlotTypesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTimeSlotTypesMutation, CreateTimeSlotTypesMutationVariables>(CreateTimeSlotTypesDocument, options);
      }
export type CreateTimeSlotTypesMutationHookResult = ReturnType<typeof useCreateTimeSlotTypesMutation>;
export type CreateTimeSlotTypesMutationResult = Apollo.MutationResult<CreateTimeSlotTypesMutation>;
export type CreateTimeSlotTypesMutationOptions = Apollo.BaseMutationOptions<CreateTimeSlotTypesMutation, CreateTimeSlotTypesMutationVariables>;
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
export const DeleteDateSlotsDocument = gql`
    mutation DeleteDateSlots($where: DateSlotWhere, $delete: DateSlotDeleteInput) {
  deleteDateSlots(where: $where, delete: $delete) {
    relationshipsDeleted
    nodesDeleted
  }
}
    `;
export type DeleteDateSlotsMutationFn = Apollo.MutationFunction<DeleteDateSlotsMutation, DeleteDateSlotsMutationVariables>;

/**
 * __useDeleteDateSlotsMutation__
 *
 * To run a mutation, you first call `useDeleteDateSlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteDateSlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteDateSlotsMutation, { data, loading, error }] = useDeleteDateSlotsMutation({
 *   variables: {
 *      where: // value for 'where'
 *      delete: // value for 'delete'
 *   },
 * });
 */
export function useDeleteDateSlotsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteDateSlotsMutation, DeleteDateSlotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteDateSlotsMutation, DeleteDateSlotsMutationVariables>(DeleteDateSlotsDocument, options);
      }
export type DeleteDateSlotsMutationHookResult = ReturnType<typeof useDeleteDateSlotsMutation>;
export type DeleteDateSlotsMutationResult = Apollo.MutationResult<DeleteDateSlotsMutation>;
export type DeleteDateSlotsMutationOptions = Apollo.BaseMutationOptions<DeleteDateSlotsMutation, DeleteDateSlotsMutationVariables>;
export const DeleteFacilityDocument = gql`
    mutation DeleteFacility($where: FacilityWhere) {
  deleteFacilities(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteFacilityMutationFn = Apollo.MutationFunction<DeleteFacilityMutation, DeleteFacilityMutationVariables>;

/**
 * __useDeleteFacilityMutation__
 *
 * To run a mutation, you first call `useDeleteFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFacilityMutation, { data, loading, error }] = useDeleteFacilityMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFacilityMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFacilityMutation, DeleteFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFacilityMutation, DeleteFacilityMutationVariables>(DeleteFacilityDocument, options);
      }
export type DeleteFacilityMutationHookResult = ReturnType<typeof useDeleteFacilityMutation>;
export type DeleteFacilityMutationResult = Apollo.MutationResult<DeleteFacilityMutation>;
export type DeleteFacilityMutationOptions = Apollo.BaseMutationOptions<DeleteFacilityMutation, DeleteFacilityMutationVariables>;
export const DeleteFacilityImagesDocument = gql`
    mutation DeleteFacilityImages($where: FacilityImageWhere) {
  deleteFacilityImages(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteFacilityImagesMutationFn = Apollo.MutationFunction<DeleteFacilityImagesMutation, DeleteFacilityImagesMutationVariables>;

/**
 * __useDeleteFacilityImagesMutation__
 *
 * To run a mutation, you first call `useDeleteFacilityImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteFacilityImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteFacilityImagesMutation, { data, loading, error }] = useDeleteFacilityImagesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteFacilityImagesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteFacilityImagesMutation, DeleteFacilityImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteFacilityImagesMutation, DeleteFacilityImagesMutationVariables>(DeleteFacilityImagesDocument, options);
      }
export type DeleteFacilityImagesMutationHookResult = ReturnType<typeof useDeleteFacilityImagesMutation>;
export type DeleteFacilityImagesMutationResult = Apollo.MutationResult<DeleteFacilityImagesMutation>;
export type DeleteFacilityImagesMutationOptions = Apollo.BaseMutationOptions<DeleteFacilityImagesMutation, DeleteFacilityImagesMutationVariables>;
export const DeleteHorsesDocument = gql`
    mutation DeleteHorses($where: HorseWhere) {
  deleteHorses(where: $where) {
    nodesDeleted
  }
}
    `;
export type DeleteHorsesMutationFn = Apollo.MutationFunction<DeleteHorsesMutation, DeleteHorsesMutationVariables>;

/**
 * __useDeleteHorsesMutation__
 *
 * To run a mutation, you first call `useDeleteHorsesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHorsesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHorsesMutation, { data, loading, error }] = useDeleteHorsesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteHorsesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHorsesMutation, DeleteHorsesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHorsesMutation, DeleteHorsesMutationVariables>(DeleteHorsesDocument, options);
      }
export type DeleteHorsesMutationHookResult = ReturnType<typeof useDeleteHorsesMutation>;
export type DeleteHorsesMutationResult = Apollo.MutationResult<DeleteHorsesMutation>;
export type DeleteHorsesMutationOptions = Apollo.BaseMutationOptions<DeleteHorsesMutation, DeleteHorsesMutationVariables>;
export const DeleteHorseImagesDocument = gql`
    mutation DeleteHorseImages($where: HorseImageWhere) {
  deleteHorseImages(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeleteHorseImagesMutationFn = Apollo.MutationFunction<DeleteHorseImagesMutation, DeleteHorseImagesMutationVariables>;

/**
 * __useDeleteHorseImagesMutation__
 *
 * To run a mutation, you first call `useDeleteHorseImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHorseImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHorseImagesMutation, { data, loading, error }] = useDeleteHorseImagesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteHorseImagesMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHorseImagesMutation, DeleteHorseImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHorseImagesMutation, DeleteHorseImagesMutationVariables>(DeleteHorseImagesDocument, options);
      }
export type DeleteHorseImagesMutationHookResult = ReturnType<typeof useDeleteHorseImagesMutation>;
export type DeleteHorseImagesMutationResult = Apollo.MutationResult<DeleteHorseImagesMutation>;
export type DeleteHorseImagesMutationOptions = Apollo.BaseMutationOptions<DeleteHorseImagesMutation, DeleteHorseImagesMutationVariables>;
export const DeletePartnerDocument = gql`
    mutation DeletePartner($where: PartnerWhere) {
  deletePartners(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeletePartnerMutationFn = Apollo.MutationFunction<DeletePartnerMutation, DeletePartnerMutationVariables>;

/**
 * __useDeletePartnerMutation__
 *
 * To run a mutation, you first call `useDeletePartnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePartnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePartnerMutation, { data, loading, error }] = useDeletePartnerMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePartnerMutation(baseOptions?: Apollo.MutationHookOptions<DeletePartnerMutation, DeletePartnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePartnerMutation, DeletePartnerMutationVariables>(DeletePartnerDocument, options);
      }
export type DeletePartnerMutationHookResult = ReturnType<typeof useDeletePartnerMutation>;
export type DeletePartnerMutationResult = Apollo.MutationResult<DeletePartnerMutation>;
export type DeletePartnerMutationOptions = Apollo.BaseMutationOptions<DeletePartnerMutation, DeletePartnerMutationVariables>;
export const DeletePartnerLogoDocument = gql`
    mutation DeletePartnerLogo($where: PartnerLogoWhere) {
  deletePartnerLogos(where: $where) {
    nodesDeleted
    relationshipsDeleted
  }
}
    `;
export type DeletePartnerLogoMutationFn = Apollo.MutationFunction<DeletePartnerLogoMutation, DeletePartnerLogoMutationVariables>;

/**
 * __useDeletePartnerLogoMutation__
 *
 * To run a mutation, you first call `useDeletePartnerLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeletePartnerLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deletePartnerLogoMutation, { data, loading, error }] = useDeletePartnerLogoMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeletePartnerLogoMutation(baseOptions?: Apollo.MutationHookOptions<DeletePartnerLogoMutation, DeletePartnerLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeletePartnerLogoMutation, DeletePartnerLogoMutationVariables>(DeletePartnerLogoDocument, options);
      }
export type DeletePartnerLogoMutationHookResult = ReturnType<typeof useDeletePartnerLogoMutation>;
export type DeletePartnerLogoMutationResult = Apollo.MutationResult<DeletePartnerLogoMutation>;
export type DeletePartnerLogoMutationOptions = Apollo.BaseMutationOptions<DeletePartnerLogoMutation, DeletePartnerLogoMutationVariables>;
export const DeleteTimeSlotsDocument = gql`
    mutation DeleteTimeSlots($where: TimeSlotWhere) {
  deleteTimeSlots(where: $where) {
    nodesDeleted
  }
}
    `;
export type DeleteTimeSlotsMutationFn = Apollo.MutationFunction<DeleteTimeSlotsMutation, DeleteTimeSlotsMutationVariables>;

/**
 * __useDeleteTimeSlotsMutation__
 *
 * To run a mutation, you first call `useDeleteTimeSlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTimeSlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTimeSlotsMutation, { data, loading, error }] = useDeleteTimeSlotsMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useDeleteTimeSlotsMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTimeSlotsMutation, DeleteTimeSlotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTimeSlotsMutation, DeleteTimeSlotsMutationVariables>(DeleteTimeSlotsDocument, options);
      }
export type DeleteTimeSlotsMutationHookResult = ReturnType<typeof useDeleteTimeSlotsMutation>;
export type DeleteTimeSlotsMutationResult = Apollo.MutationResult<DeleteTimeSlotsMutation>;
export type DeleteTimeSlotsMutationOptions = Apollo.BaseMutationOptions<DeleteTimeSlotsMutation, DeleteTimeSlotsMutationVariables>;
export const UpdateDateSlotsDocument = gql`
    mutation UpdateDateSlots($where: DateSlotWhere, $update: DateSlotUpdateInput) {
  updateDateSlots(where: $where, update: $update) {
    dateSlots {
      ...RegularDateSlot
    }
  }
}
    ${RegularDateSlotFragmentDoc}`;
export type UpdateDateSlotsMutationFn = Apollo.MutationFunction<UpdateDateSlotsMutation, UpdateDateSlotsMutationVariables>;

/**
 * __useUpdateDateSlotsMutation__
 *
 * To run a mutation, you first call `useUpdateDateSlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateDateSlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateDateSlotsMutation, { data, loading, error }] = useUpdateDateSlotsMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateDateSlotsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateDateSlotsMutation, UpdateDateSlotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateDateSlotsMutation, UpdateDateSlotsMutationVariables>(UpdateDateSlotsDocument, options);
      }
export type UpdateDateSlotsMutationHookResult = ReturnType<typeof useUpdateDateSlotsMutation>;
export type UpdateDateSlotsMutationResult = Apollo.MutationResult<UpdateDateSlotsMutation>;
export type UpdateDateSlotsMutationOptions = Apollo.BaseMutationOptions<UpdateDateSlotsMutation, UpdateDateSlotsMutationVariables>;
export const UpdateFacilityDocument = gql`
    mutation UpdateFacility($where: FacilityWhere, $update: FacilityUpdateInput) {
  updateFacilities(where: $where, update: $update) {
    facilities {
      ...RegularFacility
    }
  }
}
    ${RegularFacilityFragmentDoc}`;
export type UpdateFacilityMutationFn = Apollo.MutationFunction<UpdateFacilityMutation, UpdateFacilityMutationVariables>;

/**
 * __useUpdateFacilityMutation__
 *
 * To run a mutation, you first call `useUpdateFacilityMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFacilityMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFacilityMutation, { data, loading, error }] = useUpdateFacilityMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateFacilityMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFacilityMutation, UpdateFacilityMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFacilityMutation, UpdateFacilityMutationVariables>(UpdateFacilityDocument, options);
      }
export type UpdateFacilityMutationHookResult = ReturnType<typeof useUpdateFacilityMutation>;
export type UpdateFacilityMutationResult = Apollo.MutationResult<UpdateFacilityMutation>;
export type UpdateFacilityMutationOptions = Apollo.BaseMutationOptions<UpdateFacilityMutation, UpdateFacilityMutationVariables>;
export const UpdateFacilityImagesDocument = gql`
    mutation UpdateFacilityImages($where: FacilityImageWhere, $update: FacilityImageUpdateInput) {
  updateFacilityImages(where: $where, update: $update) {
    facilityImages {
      ...RegularFacilityImage
    }
  }
}
    ${RegularFacilityImageFragmentDoc}`;
export type UpdateFacilityImagesMutationFn = Apollo.MutationFunction<UpdateFacilityImagesMutation, UpdateFacilityImagesMutationVariables>;

/**
 * __useUpdateFacilityImagesMutation__
 *
 * To run a mutation, you first call `useUpdateFacilityImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateFacilityImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateFacilityImagesMutation, { data, loading, error }] = useUpdateFacilityImagesMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateFacilityImagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateFacilityImagesMutation, UpdateFacilityImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateFacilityImagesMutation, UpdateFacilityImagesMutationVariables>(UpdateFacilityImagesDocument, options);
      }
export type UpdateFacilityImagesMutationHookResult = ReturnType<typeof useUpdateFacilityImagesMutation>;
export type UpdateFacilityImagesMutationResult = Apollo.MutationResult<UpdateFacilityImagesMutation>;
export type UpdateFacilityImagesMutationOptions = Apollo.BaseMutationOptions<UpdateFacilityImagesMutation, UpdateFacilityImagesMutationVariables>;
export const UpdateHorsesDocument = gql`
    mutation UpdateHorses($where: HorseWhere, $update: HorseUpdateInput) {
  updateHorses(where: $where, update: $update) {
    horses {
      ...RegularHorse
    }
  }
}
    ${RegularHorseFragmentDoc}`;
export type UpdateHorsesMutationFn = Apollo.MutationFunction<UpdateHorsesMutation, UpdateHorsesMutationVariables>;

/**
 * __useUpdateHorsesMutation__
 *
 * To run a mutation, you first call `useUpdateHorsesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHorsesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHorsesMutation, { data, loading, error }] = useUpdateHorsesMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateHorsesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHorsesMutation, UpdateHorsesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHorsesMutation, UpdateHorsesMutationVariables>(UpdateHorsesDocument, options);
      }
export type UpdateHorsesMutationHookResult = ReturnType<typeof useUpdateHorsesMutation>;
export type UpdateHorsesMutationResult = Apollo.MutationResult<UpdateHorsesMutation>;
export type UpdateHorsesMutationOptions = Apollo.BaseMutationOptions<UpdateHorsesMutation, UpdateHorsesMutationVariables>;
export const UpdateHorseImagesDocument = gql`
    mutation UpdateHorseImages($where: HorseImageWhere, $update: HorseImageUpdateInput) {
  updateHorseImages(where: $where, update: $update) {
    horseImages {
      ...RegularHorseImage
    }
  }
}
    ${RegularHorseImageFragmentDoc}`;
export type UpdateHorseImagesMutationFn = Apollo.MutationFunction<UpdateHorseImagesMutation, UpdateHorseImagesMutationVariables>;

/**
 * __useUpdateHorseImagesMutation__
 *
 * To run a mutation, you first call `useUpdateHorseImagesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHorseImagesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHorseImagesMutation, { data, loading, error }] = useUpdateHorseImagesMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateHorseImagesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHorseImagesMutation, UpdateHorseImagesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHorseImagesMutation, UpdateHorseImagesMutationVariables>(UpdateHorseImagesDocument, options);
      }
export type UpdateHorseImagesMutationHookResult = ReturnType<typeof useUpdateHorseImagesMutation>;
export type UpdateHorseImagesMutationResult = Apollo.MutationResult<UpdateHorseImagesMutation>;
export type UpdateHorseImagesMutationOptions = Apollo.BaseMutationOptions<UpdateHorseImagesMutation, UpdateHorseImagesMutationVariables>;
export const UpdateLogoDocument = gql`
    mutation UpdateLogo($where: LogoWhere, $update: LogoUpdateInput) {
  updateLogos(where: $where, update: $update) {
    logos {
      image
    }
  }
}
    `;
export type UpdateLogoMutationFn = Apollo.MutationFunction<UpdateLogoMutation, UpdateLogoMutationVariables>;

/**
 * __useUpdateLogoMutation__
 *
 * To run a mutation, you first call `useUpdateLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateLogoMutation, { data, loading, error }] = useUpdateLogoMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateLogoMutation(baseOptions?: Apollo.MutationHookOptions<UpdateLogoMutation, UpdateLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateLogoMutation, UpdateLogoMutationVariables>(UpdateLogoDocument, options);
      }
export type UpdateLogoMutationHookResult = ReturnType<typeof useUpdateLogoMutation>;
export type UpdateLogoMutationResult = Apollo.MutationResult<UpdateLogoMutation>;
export type UpdateLogoMutationOptions = Apollo.BaseMutationOptions<UpdateLogoMutation, UpdateLogoMutationVariables>;
export const UpdatePartnerDocument = gql`
    mutation UpdatePartner($where: PartnerWhere, $update: PartnerUpdateInput) {
  updatePartners(where: $where, update: $update) {
    partners {
      ...RegularPartner
    }
  }
}
    ${RegularPartnerFragmentDoc}`;
export type UpdatePartnerMutationFn = Apollo.MutationFunction<UpdatePartnerMutation, UpdatePartnerMutationVariables>;

/**
 * __useUpdatePartnerMutation__
 *
 * To run a mutation, you first call `useUpdatePartnerMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePartnerMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePartnerMutation, { data, loading, error }] = useUpdatePartnerMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdatePartnerMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePartnerMutation, UpdatePartnerMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePartnerMutation, UpdatePartnerMutationVariables>(UpdatePartnerDocument, options);
      }
export type UpdatePartnerMutationHookResult = ReturnType<typeof useUpdatePartnerMutation>;
export type UpdatePartnerMutationResult = Apollo.MutationResult<UpdatePartnerMutation>;
export type UpdatePartnerMutationOptions = Apollo.BaseMutationOptions<UpdatePartnerMutation, UpdatePartnerMutationVariables>;
export const UpdatePartnerLogoDocument = gql`
    mutation UpdatePartnerLogo($where: PartnerLogoWhere) {
  updatePartnerLogos(where: $where) {
    partnerLogos {
      ...RegularPartnerLogo
    }
  }
}
    ${RegularPartnerLogoFragmentDoc}`;
export type UpdatePartnerLogoMutationFn = Apollo.MutationFunction<UpdatePartnerLogoMutation, UpdatePartnerLogoMutationVariables>;

/**
 * __useUpdatePartnerLogoMutation__
 *
 * To run a mutation, you first call `useUpdatePartnerLogoMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdatePartnerLogoMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updatePartnerLogoMutation, { data, loading, error }] = useUpdatePartnerLogoMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdatePartnerLogoMutation(baseOptions?: Apollo.MutationHookOptions<UpdatePartnerLogoMutation, UpdatePartnerLogoMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdatePartnerLogoMutation, UpdatePartnerLogoMutationVariables>(UpdatePartnerLogoDocument, options);
      }
export type UpdatePartnerLogoMutationHookResult = ReturnType<typeof useUpdatePartnerLogoMutation>;
export type UpdatePartnerLogoMutationResult = Apollo.MutationResult<UpdatePartnerLogoMutation>;
export type UpdatePartnerLogoMutationOptions = Apollo.BaseMutationOptions<UpdatePartnerLogoMutation, UpdatePartnerLogoMutationVariables>;
export const UpdateTimeSlotsDocument = gql`
    mutation UpdateTimeSlots($where: TimeSlotWhere, $update: TimeSlotUpdateInput) {
  updateTimeSlots(where: $where, update: $update) {
    timeSlots {
      ...RegularTimeSlot
    }
  }
}
    ${RegularTimeSlotFragmentDoc}`;
export type UpdateTimeSlotsMutationFn = Apollo.MutationFunction<UpdateTimeSlotsMutation, UpdateTimeSlotsMutationVariables>;

/**
 * __useUpdateTimeSlotsMutation__
 *
 * To run a mutation, you first call `useUpdateTimeSlotsMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimeSlotsMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimeSlotsMutation, { data, loading, error }] = useUpdateTimeSlotsMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateTimeSlotsMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTimeSlotsMutation, UpdateTimeSlotsMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTimeSlotsMutation, UpdateTimeSlotsMutationVariables>(UpdateTimeSlotsDocument, options);
      }
export type UpdateTimeSlotsMutationHookResult = ReturnType<typeof useUpdateTimeSlotsMutation>;
export type UpdateTimeSlotsMutationResult = Apollo.MutationResult<UpdateTimeSlotsMutation>;
export type UpdateTimeSlotsMutationOptions = Apollo.BaseMutationOptions<UpdateTimeSlotsMutation, UpdateTimeSlotsMutationVariables>;
export const UpdateTimeSlotTypesDocument = gql`
    mutation UpdateTimeSlotTypes($where: TimeSlotTypeWhere) {
  updateTimeSlotTypes(where: $where) {
    timeSlotTypes {
      type
    }
  }
}
    `;
export type UpdateTimeSlotTypesMutationFn = Apollo.MutationFunction<UpdateTimeSlotTypesMutation, UpdateTimeSlotTypesMutationVariables>;

/**
 * __useUpdateTimeSlotTypesMutation__
 *
 * To run a mutation, you first call `useUpdateTimeSlotTypesMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTimeSlotTypesMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTimeSlotTypesMutation, { data, loading, error }] = useUpdateTimeSlotTypesMutation({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useUpdateTimeSlotTypesMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTimeSlotTypesMutation, UpdateTimeSlotTypesMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTimeSlotTypesMutation, UpdateTimeSlotTypesMutationVariables>(UpdateTimeSlotTypesDocument, options);
      }
export type UpdateTimeSlotTypesMutationHookResult = ReturnType<typeof useUpdateTimeSlotTypesMutation>;
export type UpdateTimeSlotTypesMutationResult = Apollo.MutationResult<UpdateTimeSlotTypesMutation>;
export type UpdateTimeSlotTypesMutationOptions = Apollo.BaseMutationOptions<UpdateTimeSlotTypesMutation, UpdateTimeSlotTypesMutationVariables>;
export const UpdateUsersDocument = gql`
    mutation UpdateUsers($where: UserWhere, $update: UserUpdateInput) {
  updateUsers(where: $where, update: $update) {
    users {
      ...RegularUser
    }
  }
}
    ${RegularUserFragmentDoc}`;
export type UpdateUsersMutationFn = Apollo.MutationFunction<UpdateUsersMutation, UpdateUsersMutationVariables>;

/**
 * __useUpdateUsersMutation__
 *
 * To run a mutation, you first call `useUpdateUsersMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateUsersMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateUsersMutation, { data, loading, error }] = useUpdateUsersMutation({
 *   variables: {
 *      where: // value for 'where'
 *      update: // value for 'update'
 *   },
 * });
 */
export function useUpdateUsersMutation(baseOptions?: Apollo.MutationHookOptions<UpdateUsersMutation, UpdateUsersMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateUsersMutation, UpdateUsersMutationVariables>(UpdateUsersDocument, options);
      }
export type UpdateUsersMutationHookResult = ReturnType<typeof useUpdateUsersMutation>;
export type UpdateUsersMutationResult = Apollo.MutationResult<UpdateUsersMutation>;
export type UpdateUsersMutationOptions = Apollo.BaseMutationOptions<UpdateUsersMutation, UpdateUsersMutationVariables>;
export const AdminDocument = gql`
    query Admin($where: AdminWhere) {
  admins(where: $where) {
    ...RegularAdmin
  }
}
    ${RegularAdminFragmentDoc}`;

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
 *      where: // value for 'where'
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
export const AdminsDocument = gql`
    query Admins {
  admins {
    ...RegularAdmin
  }
}
    ${RegularAdminFragmentDoc}`;

/**
 * __useAdminsQuery__
 *
 * To run a query within a React component, call `useAdminsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAdminsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAdminsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAdminsQuery(baseOptions?: Apollo.QueryHookOptions<AdminsQuery, AdminsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AdminsQuery, AdminsQueryVariables>(AdminsDocument, options);
      }
export function useAdminsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AdminsQuery, AdminsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AdminsQuery, AdminsQueryVariables>(AdminsDocument, options);
        }
export type AdminsQueryHookResult = ReturnType<typeof useAdminsQuery>;
export type AdminsLazyQueryHookResult = ReturnType<typeof useAdminsLazyQuery>;
export type AdminsQueryResult = Apollo.QueryResult<AdminsQuery, AdminsQueryVariables>;
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
export const FacilitiesDocument = gql`
    query Facilities {
  facilities {
    ...RegularFacility
  }
}
    ${RegularFacilityFragmentDoc}`;

/**
 * __useFacilitiesQuery__
 *
 * To run a query within a React component, call `useFacilitiesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFacilitiesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFacilitiesQuery({
 *   variables: {
 *   },
 * });
 */
export function useFacilitiesQuery(baseOptions?: Apollo.QueryHookOptions<FacilitiesQuery, FacilitiesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FacilitiesQuery, FacilitiesQueryVariables>(FacilitiesDocument, options);
      }
export function useFacilitiesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FacilitiesQuery, FacilitiesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FacilitiesQuery, FacilitiesQueryVariables>(FacilitiesDocument, options);
        }
export type FacilitiesQueryHookResult = ReturnType<typeof useFacilitiesQuery>;
export type FacilitiesLazyQueryHookResult = ReturnType<typeof useFacilitiesLazyQuery>;
export type FacilitiesQueryResult = Apollo.QueryResult<FacilitiesQuery, FacilitiesQueryVariables>;
export const FacilityDocument = gql`
    query Facility($where: FacilityWhere) {
  facilities(where: $where) {
    ...RegularFacility
  }
}
    ${RegularFacilityFragmentDoc}`;

/**
 * __useFacilityQuery__
 *
 * To run a query within a React component, call `useFacilityQuery` and pass it any options that fit your needs.
 * When your component renders, `useFacilityQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFacilityQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFacilityQuery(baseOptions?: Apollo.QueryHookOptions<FacilityQuery, FacilityQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FacilityQuery, FacilityQueryVariables>(FacilityDocument, options);
      }
export function useFacilityLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FacilityQuery, FacilityQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FacilityQuery, FacilityQueryVariables>(FacilityDocument, options);
        }
export type FacilityQueryHookResult = ReturnType<typeof useFacilityQuery>;
export type FacilityLazyQueryHookResult = ReturnType<typeof useFacilityLazyQuery>;
export type FacilityQueryResult = Apollo.QueryResult<FacilityQuery, FacilityQueryVariables>;
export const FacilityImageDocument = gql`
    query FacilityImage {
  facilityImages {
    ...RegularFacilityImage
  }
}
    ${RegularFacilityImageFragmentDoc}`;

/**
 * __useFacilityImageQuery__
 *
 * To run a query within a React component, call `useFacilityImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useFacilityImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFacilityImageQuery({
 *   variables: {
 *   },
 * });
 */
export function useFacilityImageQuery(baseOptions?: Apollo.QueryHookOptions<FacilityImageQuery, FacilityImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FacilityImageQuery, FacilityImageQueryVariables>(FacilityImageDocument, options);
      }
export function useFacilityImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FacilityImageQuery, FacilityImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FacilityImageQuery, FacilityImageQueryVariables>(FacilityImageDocument, options);
        }
export type FacilityImageQueryHookResult = ReturnType<typeof useFacilityImageQuery>;
export type FacilityImageLazyQueryHookResult = ReturnType<typeof useFacilityImageLazyQuery>;
export type FacilityImageQueryResult = Apollo.QueryResult<FacilityImageQuery, FacilityImageQueryVariables>;
export const FacilityImagesDocument = gql`
    query FacilityImages($where: FacilityImageWhere) {
  facilityImages(where: $where) {
    ...RegularFacilityImage
  }
}
    ${RegularFacilityImageFragmentDoc}`;

/**
 * __useFacilityImagesQuery__
 *
 * To run a query within a React component, call `useFacilityImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useFacilityImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useFacilityImagesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useFacilityImagesQuery(baseOptions?: Apollo.QueryHookOptions<FacilityImagesQuery, FacilityImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<FacilityImagesQuery, FacilityImagesQueryVariables>(FacilityImagesDocument, options);
      }
export function useFacilityImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<FacilityImagesQuery, FacilityImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<FacilityImagesQuery, FacilityImagesQueryVariables>(FacilityImagesDocument, options);
        }
export type FacilityImagesQueryHookResult = ReturnType<typeof useFacilityImagesQuery>;
export type FacilityImagesLazyQueryHookResult = ReturnType<typeof useFacilityImagesLazyQuery>;
export type FacilityImagesQueryResult = Apollo.QueryResult<FacilityImagesQuery, FacilityImagesQueryVariables>;
export const HorseDocument = gql`
    query Horse($where: HorseWhere) {
  horses(where: $where) {
    ...RegularHorse
  }
}
    ${RegularHorseFragmentDoc}`;

/**
 * __useHorseQuery__
 *
 * To run a query within a React component, call `useHorseQuery` and pass it any options that fit your needs.
 * When your component renders, `useHorseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHorseQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useHorseQuery(baseOptions?: Apollo.QueryHookOptions<HorseQuery, HorseQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HorseQuery, HorseQueryVariables>(HorseDocument, options);
      }
export function useHorseLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HorseQuery, HorseQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HorseQuery, HorseQueryVariables>(HorseDocument, options);
        }
export type HorseQueryHookResult = ReturnType<typeof useHorseQuery>;
export type HorseLazyQueryHookResult = ReturnType<typeof useHorseLazyQuery>;
export type HorseQueryResult = Apollo.QueryResult<HorseQuery, HorseQueryVariables>;
export const HorseCategoriesDocument = gql`
    query HorseCategories {
  horseCategories {
    category
    image
    horses {
      ...RegularHorse
    }
  }
}
    ${RegularHorseFragmentDoc}`;

/**
 * __useHorseCategoriesQuery__
 *
 * To run a query within a React component, call `useHorseCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHorseCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHorseCategoriesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHorseCategoriesQuery(baseOptions?: Apollo.QueryHookOptions<HorseCategoriesQuery, HorseCategoriesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HorseCategoriesQuery, HorseCategoriesQueryVariables>(HorseCategoriesDocument, options);
      }
export function useHorseCategoriesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HorseCategoriesQuery, HorseCategoriesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HorseCategoriesQuery, HorseCategoriesQueryVariables>(HorseCategoriesDocument, options);
        }
export type HorseCategoriesQueryHookResult = ReturnType<typeof useHorseCategoriesQuery>;
export type HorseCategoriesLazyQueryHookResult = ReturnType<typeof useHorseCategoriesLazyQuery>;
export type HorseCategoriesQueryResult = Apollo.QueryResult<HorseCategoriesQuery, HorseCategoriesQueryVariables>;
export const HorseCategoryDocument = gql`
    query HorseCategory($where: HorseCategoryWhere) {
  horseCategories(where: $where) {
    category
    image
  }
}
    `;

/**
 * __useHorseCategoryQuery__
 *
 * To run a query within a React component, call `useHorseCategoryQuery` and pass it any options that fit your needs.
 * When your component renders, `useHorseCategoryQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHorseCategoryQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useHorseCategoryQuery(baseOptions?: Apollo.QueryHookOptions<HorseCategoryQuery, HorseCategoryQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HorseCategoryQuery, HorseCategoryQueryVariables>(HorseCategoryDocument, options);
      }
export function useHorseCategoryLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HorseCategoryQuery, HorseCategoryQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HorseCategoryQuery, HorseCategoryQueryVariables>(HorseCategoryDocument, options);
        }
export type HorseCategoryQueryHookResult = ReturnType<typeof useHorseCategoryQuery>;
export type HorseCategoryLazyQueryHookResult = ReturnType<typeof useHorseCategoryLazyQuery>;
export type HorseCategoryQueryResult = Apollo.QueryResult<HorseCategoryQuery, HorseCategoryQueryVariables>;
export const HorseImageDocument = gql`
    query HorseImage($where: HorseImageWhere) {
  horseImages(where: $where) {
    ...RegularHorseImage
  }
}
    ${RegularHorseImageFragmentDoc}`;

/**
 * __useHorseImageQuery__
 *
 * To run a query within a React component, call `useHorseImageQuery` and pass it any options that fit your needs.
 * When your component renders, `useHorseImageQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHorseImageQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useHorseImageQuery(baseOptions?: Apollo.QueryHookOptions<HorseImageQuery, HorseImageQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HorseImageQuery, HorseImageQueryVariables>(HorseImageDocument, options);
      }
export function useHorseImageLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HorseImageQuery, HorseImageQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HorseImageQuery, HorseImageQueryVariables>(HorseImageDocument, options);
        }
export type HorseImageQueryHookResult = ReturnType<typeof useHorseImageQuery>;
export type HorseImageLazyQueryHookResult = ReturnType<typeof useHorseImageLazyQuery>;
export type HorseImageQueryResult = Apollo.QueryResult<HorseImageQuery, HorseImageQueryVariables>;
export const HorseImagesDocument = gql`
    query HorseImages {
  horseImages {
    ...RegularHorseImage
  }
}
    ${RegularHorseImageFragmentDoc}`;

/**
 * __useHorseImagesQuery__
 *
 * To run a query within a React component, call `useHorseImagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHorseImagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHorseImagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useHorseImagesQuery(baseOptions?: Apollo.QueryHookOptions<HorseImagesQuery, HorseImagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HorseImagesQuery, HorseImagesQueryVariables>(HorseImagesDocument, options);
      }
export function useHorseImagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HorseImagesQuery, HorseImagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HorseImagesQuery, HorseImagesQueryVariables>(HorseImagesDocument, options);
        }
export type HorseImagesQueryHookResult = ReturnType<typeof useHorseImagesQuery>;
export type HorseImagesLazyQueryHookResult = ReturnType<typeof useHorseImagesLazyQuery>;
export type HorseImagesQueryResult = Apollo.QueryResult<HorseImagesQuery, HorseImagesQueryVariables>;
export const HorsesDocument = gql`
    query Horses($where: HorseWhere) {
  horses(where: $where) {
    ...RegularHorse
  }
}
    ${RegularHorseFragmentDoc}`;

/**
 * __useHorsesQuery__
 *
 * To run a query within a React component, call `useHorsesQuery` and pass it any options that fit your needs.
 * When your component renders, `useHorsesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHorsesQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useHorsesQuery(baseOptions?: Apollo.QueryHookOptions<HorsesQuery, HorsesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HorsesQuery, HorsesQueryVariables>(HorsesDocument, options);
      }
export function useHorsesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HorsesQuery, HorsesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HorsesQuery, HorsesQueryVariables>(HorsesDocument, options);
        }
export type HorsesQueryHookResult = ReturnType<typeof useHorsesQuery>;
export type HorsesLazyQueryHookResult = ReturnType<typeof useHorsesLazyQuery>;
export type HorsesQueryResult = Apollo.QueryResult<HorsesQuery, HorsesQueryVariables>;
export const LogoDocument = gql`
    query Logo {
  logos {
    image
  }
}
    `;

/**
 * __useLogoQuery__
 *
 * To run a query within a React component, call `useLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `useLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useLogoQuery({
 *   variables: {
 *   },
 * });
 */
export function useLogoQuery(baseOptions?: Apollo.QueryHookOptions<LogoQuery, LogoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<LogoQuery, LogoQueryVariables>(LogoDocument, options);
      }
export function useLogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<LogoQuery, LogoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<LogoQuery, LogoQueryVariables>(LogoDocument, options);
        }
export type LogoQueryHookResult = ReturnType<typeof useLogoQuery>;
export type LogoLazyQueryHookResult = ReturnType<typeof useLogoLazyQuery>;
export type LogoQueryResult = Apollo.QueryResult<LogoQuery, LogoQueryVariables>;
export const PartnerDocument = gql`
    query Partner($where: PartnerWhere) {
  partners(where: $where) {
    ...RegularPartner
  }
}
    ${RegularPartnerFragmentDoc}`;

/**
 * __usePartnerQuery__
 *
 * To run a query within a React component, call `usePartnerQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnerQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnerQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePartnerQuery(baseOptions?: Apollo.QueryHookOptions<PartnerQuery, PartnerQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PartnerQuery, PartnerQueryVariables>(PartnerDocument, options);
      }
export function usePartnerLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnerQuery, PartnerQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PartnerQuery, PartnerQueryVariables>(PartnerDocument, options);
        }
export type PartnerQueryHookResult = ReturnType<typeof usePartnerQuery>;
export type PartnerLazyQueryHookResult = ReturnType<typeof usePartnerLazyQuery>;
export type PartnerQueryResult = Apollo.QueryResult<PartnerQuery, PartnerQueryVariables>;
export const PartnerLogoDocument = gql`
    query PartnerLogo($where: PartnerLogoWhere) {
  partnerLogos(where: $where) {
    ...RegularPartnerLogo
  }
}
    ${RegularPartnerLogoFragmentDoc}`;

/**
 * __usePartnerLogoQuery__
 *
 * To run a query within a React component, call `usePartnerLogoQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnerLogoQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnerLogoQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function usePartnerLogoQuery(baseOptions?: Apollo.QueryHookOptions<PartnerLogoQuery, PartnerLogoQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PartnerLogoQuery, PartnerLogoQueryVariables>(PartnerLogoDocument, options);
      }
export function usePartnerLogoLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnerLogoQuery, PartnerLogoQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PartnerLogoQuery, PartnerLogoQueryVariables>(PartnerLogoDocument, options);
        }
export type PartnerLogoQueryHookResult = ReturnType<typeof usePartnerLogoQuery>;
export type PartnerLogoLazyQueryHookResult = ReturnType<typeof usePartnerLogoLazyQuery>;
export type PartnerLogoQueryResult = Apollo.QueryResult<PartnerLogoQuery, PartnerLogoQueryVariables>;
export const PartnerLogosDocument = gql`
    query PartnerLogos {
  partnerLogos {
    ...RegularPartnerLogo
  }
}
    ${RegularPartnerLogoFragmentDoc}`;

/**
 * __usePartnerLogosQuery__
 *
 * To run a query within a React component, call `usePartnerLogosQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnerLogosQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnerLogosQuery({
 *   variables: {
 *   },
 * });
 */
export function usePartnerLogosQuery(baseOptions?: Apollo.QueryHookOptions<PartnerLogosQuery, PartnerLogosQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PartnerLogosQuery, PartnerLogosQueryVariables>(PartnerLogosDocument, options);
      }
export function usePartnerLogosLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnerLogosQuery, PartnerLogosQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PartnerLogosQuery, PartnerLogosQueryVariables>(PartnerLogosDocument, options);
        }
export type PartnerLogosQueryHookResult = ReturnType<typeof usePartnerLogosQuery>;
export type PartnerLogosLazyQueryHookResult = ReturnType<typeof usePartnerLogosLazyQuery>;
export type PartnerLogosQueryResult = Apollo.QueryResult<PartnerLogosQuery, PartnerLogosQueryVariables>;
export const PartnersDocument = gql`
    query Partners {
  partners {
    ...RegularPartner
  }
}
    ${RegularPartnerFragmentDoc}`;

/**
 * __usePartnersQuery__
 *
 * To run a query within a React component, call `usePartnersQuery` and pass it any options that fit your needs.
 * When your component renders, `usePartnersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePartnersQuery({
 *   variables: {
 *   },
 * });
 */
export function usePartnersQuery(baseOptions?: Apollo.QueryHookOptions<PartnersQuery, PartnersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PartnersQuery, PartnersQueryVariables>(PartnersDocument, options);
      }
export function usePartnersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PartnersQuery, PartnersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PartnersQuery, PartnersQueryVariables>(PartnersDocument, options);
        }
export type PartnersQueryHookResult = ReturnType<typeof usePartnersQuery>;
export type PartnersLazyQueryHookResult = ReturnType<typeof usePartnersLazyQuery>;
export type PartnersQueryResult = Apollo.QueryResult<PartnersQuery, PartnersQueryVariables>;
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
export const TimeSlotTypeDocument = gql`
    query TimeSlotType($where: TimeSlotTypeWhere) {
  timeSlotTypes(where: $where) {
    type
    timeslot {
      ...RegularTimeSlot
    }
  }
}
    ${RegularTimeSlotFragmentDoc}`;

/**
 * __useTimeSlotTypeQuery__
 *
 * To run a query within a React component, call `useTimeSlotTypeQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeSlotTypeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeSlotTypeQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTimeSlotTypeQuery(baseOptions?: Apollo.QueryHookOptions<TimeSlotTypeQuery, TimeSlotTypeQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeSlotTypeQuery, TimeSlotTypeQueryVariables>(TimeSlotTypeDocument, options);
      }
export function useTimeSlotTypeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeSlotTypeQuery, TimeSlotTypeQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeSlotTypeQuery, TimeSlotTypeQueryVariables>(TimeSlotTypeDocument, options);
        }
export type TimeSlotTypeQueryHookResult = ReturnType<typeof useTimeSlotTypeQuery>;
export type TimeSlotTypeLazyQueryHookResult = ReturnType<typeof useTimeSlotTypeLazyQuery>;
export type TimeSlotTypeQueryResult = Apollo.QueryResult<TimeSlotTypeQuery, TimeSlotTypeQueryVariables>;
export const TimeSlotTypesDocument = gql`
    query TimeSlotTypes {
  timeSlotTypes {
    type
  }
}
    `;

/**
 * __useTimeSlotTypesQuery__
 *
 * To run a query within a React component, call `useTimeSlotTypesQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeSlotTypesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeSlotTypesQuery({
 *   variables: {
 *   },
 * });
 */
export function useTimeSlotTypesQuery(baseOptions?: Apollo.QueryHookOptions<TimeSlotTypesQuery, TimeSlotTypesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeSlotTypesQuery, TimeSlotTypesQueryVariables>(TimeSlotTypesDocument, options);
      }
export function useTimeSlotTypesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeSlotTypesQuery, TimeSlotTypesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeSlotTypesQuery, TimeSlotTypesQueryVariables>(TimeSlotTypesDocument, options);
        }
export type TimeSlotTypesQueryHookResult = ReturnType<typeof useTimeSlotTypesQuery>;
export type TimeSlotTypesLazyQueryHookResult = ReturnType<typeof useTimeSlotTypesLazyQuery>;
export type TimeSlotTypesQueryResult = Apollo.QueryResult<TimeSlotTypesQuery, TimeSlotTypesQueryVariables>;
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
export const TimeSlotsCountDocument = gql`
    query TimeSlotsCount($where: TimeSlotWhere) {
  timeSlotsCount(where: $where)
}
    `;

/**
 * __useTimeSlotsCountQuery__
 *
 * To run a query within a React component, call `useTimeSlotsCountQuery` and pass it any options that fit your needs.
 * When your component renders, `useTimeSlotsCountQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTimeSlotsCountQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useTimeSlotsCountQuery(baseOptions?: Apollo.QueryHookOptions<TimeSlotsCountQuery, TimeSlotsCountQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TimeSlotsCountQuery, TimeSlotsCountQueryVariables>(TimeSlotsCountDocument, options);
      }
export function useTimeSlotsCountLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TimeSlotsCountQuery, TimeSlotsCountQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TimeSlotsCountQuery, TimeSlotsCountQueryVariables>(TimeSlotsCountDocument, options);
        }
export type TimeSlotsCountQueryHookResult = ReturnType<typeof useTimeSlotsCountQuery>;
export type TimeSlotsCountLazyQueryHookResult = ReturnType<typeof useTimeSlotsCountLazyQuery>;
export type TimeSlotsCountQueryResult = Apollo.QueryResult<TimeSlotsCountQuery, TimeSlotsCountQueryVariables>;
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