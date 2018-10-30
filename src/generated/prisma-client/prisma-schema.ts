export const typeDefs = /* GraphQL */ `enum AccessType {
  PUBLIC
  PRIVATE
}

type AggregateOption {
  count: Int!
}

type AggregatePoll {
  count: Int!
}

type AggregateRecipient {
  count: Int!
}

type AggregateUser {
  count: Int!
}

type AggregateVote {
  count: Int!
}

type BatchPayload {
  count: Long!
}

scalar DateTime

scalar Long

type Mutation {
  createOption(data: OptionCreateInput!): Option!
  updateOption(data: OptionUpdateInput!, where: OptionWhereUniqueInput!): Option
  updateManyOptions(data: OptionUpdateInput!, where: OptionWhereInput): BatchPayload!
  upsertOption(where: OptionWhereUniqueInput!, create: OptionCreateInput!, update: OptionUpdateInput!): Option!
  deleteOption(where: OptionWhereUniqueInput!): Option
  deleteManyOptions(where: OptionWhereInput): BatchPayload!
  createPoll(data: PollCreateInput!): Poll!
  updatePoll(data: PollUpdateInput!, where: PollWhereUniqueInput!): Poll
  updateManyPolls(data: PollUpdateInput!, where: PollWhereInput): BatchPayload!
  upsertPoll(where: PollWhereUniqueInput!, create: PollCreateInput!, update: PollUpdateInput!): Poll!
  deletePoll(where: PollWhereUniqueInput!): Poll
  deleteManyPolls(where: PollWhereInput): BatchPayload!
  createRecipient(data: RecipientCreateInput!): Recipient!
  updateRecipient(data: RecipientUpdateInput!, where: RecipientWhereUniqueInput!): Recipient
  updateManyRecipients(data: RecipientUpdateInput!, where: RecipientWhereInput): BatchPayload!
  upsertRecipient(where: RecipientWhereUniqueInput!, create: RecipientCreateInput!, update: RecipientUpdateInput!): Recipient!
  deleteRecipient(where: RecipientWhereUniqueInput!): Recipient
  deleteManyRecipients(where: RecipientWhereInput): BatchPayload!
  createUser(data: UserCreateInput!): User!
  updateUser(data: UserUpdateInput!, where: UserWhereUniqueInput!): User
  updateManyUsers(data: UserUpdateInput!, where: UserWhereInput): BatchPayload!
  upsertUser(where: UserWhereUniqueInput!, create: UserCreateInput!, update: UserUpdateInput!): User!
  deleteUser(where: UserWhereUniqueInput!): User
  deleteManyUsers(where: UserWhereInput): BatchPayload!
  createVote(data: VoteCreateInput!): Vote!
  updateVote(data: VoteUpdateInput!, where: VoteWhereUniqueInput!): Vote
  updateManyVotes(data: VoteUpdateInput!, where: VoteWhereInput): BatchPayload!
  upsertVote(where: VoteWhereUniqueInput!, create: VoteCreateInput!, update: VoteUpdateInput!): Vote!
  deleteVote(where: VoteWhereUniqueInput!): Vote
  deleteManyVotes(where: VoteWhereInput): BatchPayload!
}

enum MutationType {
  CREATED
  UPDATED
  DELETED
}

interface Node {
  id: ID!
}

type Option {
  id: ID!
  description: String!
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  poll: Poll!
  creator: User!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OptionConnection {
  pageInfo: PageInfo!
  edges: [OptionEdge]!
  aggregate: AggregateOption!
}

input OptionCreateInput {
  description: String!
  votes: VoteCreateManyWithoutOptionInput
  poll: PollCreateOneWithoutOptionsInput!
  creator: UserCreateOneInput!
  isActive: Boolean
}

input OptionCreateManyWithoutPollInput {
  create: [OptionCreateWithoutPollInput!]
  connect: [OptionWhereUniqueInput!]
}

input OptionCreateOneWithoutVotesInput {
  create: OptionCreateWithoutVotesInput
  connect: OptionWhereUniqueInput
}

input OptionCreateWithoutPollInput {
  description: String!
  votes: VoteCreateManyWithoutOptionInput
  creator: UserCreateOneInput!
  isActive: Boolean
}

input OptionCreateWithoutVotesInput {
  description: String!
  poll: PollCreateOneWithoutOptionsInput!
  creator: UserCreateOneInput!
  isActive: Boolean
}

type OptionEdge {
  node: Option!
  cursor: String!
}

enum OptionOrderByInput {
  id_ASC
  id_DESC
  description_ASC
  description_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type OptionPreviousValues {
  id: ID!
  description: String!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type OptionSubscriptionPayload {
  mutation: MutationType!
  node: Option
  updatedFields: [String!]
  previousValues: OptionPreviousValues
}

input OptionSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: OptionWhereInput
  AND: [OptionSubscriptionWhereInput!]
  OR: [OptionSubscriptionWhereInput!]
  NOT: [OptionSubscriptionWhereInput!]
}

input OptionUpdateInput {
  description: String
  votes: VoteUpdateManyWithoutOptionInput
  poll: PollUpdateOneRequiredWithoutOptionsInput
  creator: UserUpdateOneRequiredInput
  isActive: Boolean
}

input OptionUpdateManyWithoutPollInput {
  create: [OptionCreateWithoutPollInput!]
  delete: [OptionWhereUniqueInput!]
  connect: [OptionWhereUniqueInput!]
  disconnect: [OptionWhereUniqueInput!]
  update: [OptionUpdateWithWhereUniqueWithoutPollInput!]
  upsert: [OptionUpsertWithWhereUniqueWithoutPollInput!]
}

input OptionUpdateOneRequiredWithoutVotesInput {
  create: OptionCreateWithoutVotesInput
  update: OptionUpdateWithoutVotesDataInput
  upsert: OptionUpsertWithoutVotesInput
  connect: OptionWhereUniqueInput
}

input OptionUpdateWithoutPollDataInput {
  description: String
  votes: VoteUpdateManyWithoutOptionInput
  creator: UserUpdateOneRequiredInput
  isActive: Boolean
}

input OptionUpdateWithoutVotesDataInput {
  description: String
  poll: PollUpdateOneRequiredWithoutOptionsInput
  creator: UserUpdateOneRequiredInput
  isActive: Boolean
}

input OptionUpdateWithWhereUniqueWithoutPollInput {
  where: OptionWhereUniqueInput!
  data: OptionUpdateWithoutPollDataInput!
}

input OptionUpsertWithoutVotesInput {
  update: OptionUpdateWithoutVotesDataInput!
  create: OptionCreateWithoutVotesInput!
}

input OptionUpsertWithWhereUniqueWithoutPollInput {
  where: OptionWhereUniqueInput!
  update: OptionUpdateWithoutPollDataInput!
  create: OptionCreateWithoutPollInput!
}

input OptionWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  poll: PollWhereInput
  creator: UserWhereInput
  isActive: Boolean
  isActive_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [OptionWhereInput!]
  OR: [OptionWhereInput!]
  NOT: [OptionWhereInput!]
}

input OptionWhereUniqueInput {
  id: ID
}

type PageInfo {
  hasNextPage: Boolean!
  hasPreviousPage: Boolean!
  startCursor: String
  endCursor: String
}

type Poll {
  id: ID!
  title: String!
  description: String!
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option!]
  recipients(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipient!]
  voted(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User!]
  creator: User!
  access: AccessType!
  isPublished: Boolean!
  isClosed: Boolean!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PollConnection {
  pageInfo: PageInfo!
  edges: [PollEdge]!
  aggregate: AggregatePoll!
}

input PollCreateInput {
  title: String!
  description: String!
  options: OptionCreateManyWithoutPollInput
  recipients: RecipientCreateManyWithoutPollInput
  voted: UserCreateManyWithoutVotedInput
  creator: UserCreateOneWithoutPollsInput!
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollCreateManyWithoutCreatorInput {
  create: [PollCreateWithoutCreatorInput!]
  connect: [PollWhereUniqueInput!]
}

input PollCreateManyWithoutVotedInput {
  create: [PollCreateWithoutVotedInput!]
  connect: [PollWhereUniqueInput!]
}

input PollCreateOneInput {
  create: PollCreateInput
  connect: PollWhereUniqueInput
}

input PollCreateOneWithoutOptionsInput {
  create: PollCreateWithoutOptionsInput
  connect: PollWhereUniqueInput
}

input PollCreateOneWithoutRecipientsInput {
  create: PollCreateWithoutRecipientsInput
  connect: PollWhereUniqueInput
}

input PollCreateWithoutCreatorInput {
  title: String!
  description: String!
  options: OptionCreateManyWithoutPollInput
  recipients: RecipientCreateManyWithoutPollInput
  voted: UserCreateManyWithoutVotedInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollCreateWithoutOptionsInput {
  title: String!
  description: String!
  recipients: RecipientCreateManyWithoutPollInput
  voted: UserCreateManyWithoutVotedInput
  creator: UserCreateOneWithoutPollsInput!
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollCreateWithoutRecipientsInput {
  title: String!
  description: String!
  options: OptionCreateManyWithoutPollInput
  voted: UserCreateManyWithoutVotedInput
  creator: UserCreateOneWithoutPollsInput!
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollCreateWithoutVotedInput {
  title: String!
  description: String!
  options: OptionCreateManyWithoutPollInput
  recipients: RecipientCreateManyWithoutPollInput
  creator: UserCreateOneWithoutPollsInput!
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

type PollEdge {
  node: Poll!
  cursor: String!
}

enum PollOrderByInput {
  id_ASC
  id_DESC
  title_ASC
  title_DESC
  description_ASC
  description_DESC
  access_ASC
  access_DESC
  isPublished_ASC
  isPublished_DESC
  isClosed_ASC
  isClosed_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type PollPreviousValues {
  id: ID!
  title: String!
  description: String!
  access: AccessType!
  isPublished: Boolean!
  isClosed: Boolean!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type PollSubscriptionPayload {
  mutation: MutationType!
  node: Poll
  updatedFields: [String!]
  previousValues: PollPreviousValues
}

input PollSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: PollWhereInput
  AND: [PollSubscriptionWhereInput!]
  OR: [PollSubscriptionWhereInput!]
  NOT: [PollSubscriptionWhereInput!]
}

input PollUpdateDataInput {
  title: String
  description: String
  options: OptionUpdateManyWithoutPollInput
  recipients: RecipientUpdateManyWithoutPollInput
  voted: UserUpdateManyWithoutVotedInput
  creator: UserUpdateOneRequiredWithoutPollsInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollUpdateInput {
  title: String
  description: String
  options: OptionUpdateManyWithoutPollInput
  recipients: RecipientUpdateManyWithoutPollInput
  voted: UserUpdateManyWithoutVotedInput
  creator: UserUpdateOneRequiredWithoutPollsInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollUpdateManyWithoutCreatorInput {
  create: [PollCreateWithoutCreatorInput!]
  delete: [PollWhereUniqueInput!]
  connect: [PollWhereUniqueInput!]
  disconnect: [PollWhereUniqueInput!]
  update: [PollUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [PollUpsertWithWhereUniqueWithoutCreatorInput!]
}

input PollUpdateManyWithoutVotedInput {
  create: [PollCreateWithoutVotedInput!]
  delete: [PollWhereUniqueInput!]
  connect: [PollWhereUniqueInput!]
  disconnect: [PollWhereUniqueInput!]
  update: [PollUpdateWithWhereUniqueWithoutVotedInput!]
  upsert: [PollUpsertWithWhereUniqueWithoutVotedInput!]
}

input PollUpdateOneRequiredInput {
  create: PollCreateInput
  update: PollUpdateDataInput
  upsert: PollUpsertNestedInput
  connect: PollWhereUniqueInput
}

input PollUpdateOneRequiredWithoutOptionsInput {
  create: PollCreateWithoutOptionsInput
  update: PollUpdateWithoutOptionsDataInput
  upsert: PollUpsertWithoutOptionsInput
  connect: PollWhereUniqueInput
}

input PollUpdateOneRequiredWithoutRecipientsInput {
  create: PollCreateWithoutRecipientsInput
  update: PollUpdateWithoutRecipientsDataInput
  upsert: PollUpsertWithoutRecipientsInput
  connect: PollWhereUniqueInput
}

input PollUpdateWithoutCreatorDataInput {
  title: String
  description: String
  options: OptionUpdateManyWithoutPollInput
  recipients: RecipientUpdateManyWithoutPollInput
  voted: UserUpdateManyWithoutVotedInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollUpdateWithoutOptionsDataInput {
  title: String
  description: String
  recipients: RecipientUpdateManyWithoutPollInput
  voted: UserUpdateManyWithoutVotedInput
  creator: UserUpdateOneRequiredWithoutPollsInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollUpdateWithoutRecipientsDataInput {
  title: String
  description: String
  options: OptionUpdateManyWithoutPollInput
  voted: UserUpdateManyWithoutVotedInput
  creator: UserUpdateOneRequiredWithoutPollsInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollUpdateWithoutVotedDataInput {
  title: String
  description: String
  options: OptionUpdateManyWithoutPollInput
  recipients: RecipientUpdateManyWithoutPollInput
  creator: UserUpdateOneRequiredWithoutPollsInput
  access: AccessType
  isPublished: Boolean
  isClosed: Boolean
  isActive: Boolean
}

input PollUpdateWithWhereUniqueWithoutCreatorInput {
  where: PollWhereUniqueInput!
  data: PollUpdateWithoutCreatorDataInput!
}

input PollUpdateWithWhereUniqueWithoutVotedInput {
  where: PollWhereUniqueInput!
  data: PollUpdateWithoutVotedDataInput!
}

input PollUpsertNestedInput {
  update: PollUpdateDataInput!
  create: PollCreateInput!
}

input PollUpsertWithoutOptionsInput {
  update: PollUpdateWithoutOptionsDataInput!
  create: PollCreateWithoutOptionsInput!
}

input PollUpsertWithoutRecipientsInput {
  update: PollUpdateWithoutRecipientsDataInput!
  create: PollCreateWithoutRecipientsInput!
}

input PollUpsertWithWhereUniqueWithoutCreatorInput {
  where: PollWhereUniqueInput!
  update: PollUpdateWithoutCreatorDataInput!
  create: PollCreateWithoutCreatorInput!
}

input PollUpsertWithWhereUniqueWithoutVotedInput {
  where: PollWhereUniqueInput!
  update: PollUpdateWithoutVotedDataInput!
  create: PollCreateWithoutVotedInput!
}

input PollWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  title: String
  title_not: String
  title_in: [String!]
  title_not_in: [String!]
  title_lt: String
  title_lte: String
  title_gt: String
  title_gte: String
  title_contains: String
  title_not_contains: String
  title_starts_with: String
  title_not_starts_with: String
  title_ends_with: String
  title_not_ends_with: String
  description: String
  description_not: String
  description_in: [String!]
  description_not_in: [String!]
  description_lt: String
  description_lte: String
  description_gt: String
  description_gte: String
  description_contains: String
  description_not_contains: String
  description_starts_with: String
  description_not_starts_with: String
  description_ends_with: String
  description_not_ends_with: String
  options_every: OptionWhereInput
  options_some: OptionWhereInput
  options_none: OptionWhereInput
  recipients_every: RecipientWhereInput
  recipients_some: RecipientWhereInput
  recipients_none: RecipientWhereInput
  voted_every: UserWhereInput
  voted_some: UserWhereInput
  voted_none: UserWhereInput
  creator: UserWhereInput
  access: AccessType
  access_not: AccessType
  access_in: [AccessType!]
  access_not_in: [AccessType!]
  isPublished: Boolean
  isPublished_not: Boolean
  isClosed: Boolean
  isClosed_not: Boolean
  isActive: Boolean
  isActive_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [PollWhereInput!]
  OR: [PollWhereInput!]
  NOT: [PollWhereInput!]
}

input PollWhereUniqueInput {
  id: ID
}

type Query {
  option(where: OptionWhereUniqueInput!): Option
  options(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Option]!
  optionsConnection(where: OptionWhereInput, orderBy: OptionOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): OptionConnection!
  poll(where: PollWhereUniqueInput!): Poll
  polls(where: PollWhereInput, orderBy: PollOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Poll]!
  pollsConnection(where: PollWhereInput, orderBy: PollOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): PollConnection!
  recipient(where: RecipientWhereUniqueInput!): Recipient
  recipients(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Recipient]!
  recipientsConnection(where: RecipientWhereInput, orderBy: RecipientOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): RecipientConnection!
  user(where: UserWhereUniqueInput!): User
  users(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [User]!
  usersConnection(where: UserWhereInput, orderBy: UserOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): UserConnection!
  vote(where: VoteWhereUniqueInput!): Vote
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote]!
  votesConnection(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): VoteConnection!
  node(id: ID!): Node
}

type Recipient {
  id: ID!
  email: String!
  poll: Poll!
  hasSentEmail: Boolean!
}

type RecipientConnection {
  pageInfo: PageInfo!
  edges: [RecipientEdge]!
  aggregate: AggregateRecipient!
}

input RecipientCreateInput {
  email: String!
  poll: PollCreateOneWithoutRecipientsInput!
  hasSentEmail: Boolean
}

input RecipientCreateManyWithoutPollInput {
  create: [RecipientCreateWithoutPollInput!]
  connect: [RecipientWhereUniqueInput!]
}

input RecipientCreateWithoutPollInput {
  email: String!
  hasSentEmail: Boolean
}

type RecipientEdge {
  node: Recipient!
  cursor: String!
}

enum RecipientOrderByInput {
  id_ASC
  id_DESC
  email_ASC
  email_DESC
  hasSentEmail_ASC
  hasSentEmail_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type RecipientPreviousValues {
  id: ID!
  email: String!
  hasSentEmail: Boolean!
}

type RecipientSubscriptionPayload {
  mutation: MutationType!
  node: Recipient
  updatedFields: [String!]
  previousValues: RecipientPreviousValues
}

input RecipientSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: RecipientWhereInput
  AND: [RecipientSubscriptionWhereInput!]
  OR: [RecipientSubscriptionWhereInput!]
  NOT: [RecipientSubscriptionWhereInput!]
}

input RecipientUpdateInput {
  email: String
  poll: PollUpdateOneRequiredWithoutRecipientsInput
  hasSentEmail: Boolean
}

input RecipientUpdateManyWithoutPollInput {
  create: [RecipientCreateWithoutPollInput!]
  delete: [RecipientWhereUniqueInput!]
  connect: [RecipientWhereUniqueInput!]
  disconnect: [RecipientWhereUniqueInput!]
  update: [RecipientUpdateWithWhereUniqueWithoutPollInput!]
  upsert: [RecipientUpsertWithWhereUniqueWithoutPollInput!]
}

input RecipientUpdateWithoutPollDataInput {
  email: String
  hasSentEmail: Boolean
}

input RecipientUpdateWithWhereUniqueWithoutPollInput {
  where: RecipientWhereUniqueInput!
  data: RecipientUpdateWithoutPollDataInput!
}

input RecipientUpsertWithWhereUniqueWithoutPollInput {
  where: RecipientWhereUniqueInput!
  update: RecipientUpdateWithoutPollDataInput!
  create: RecipientCreateWithoutPollInput!
}

input RecipientWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  poll: PollWhereInput
  hasSentEmail: Boolean
  hasSentEmail_not: Boolean
  AND: [RecipientWhereInput!]
  OR: [RecipientWhereInput!]
  NOT: [RecipientWhereInput!]
}

input RecipientWhereUniqueInput {
  id: ID
}

type Subscription {
  option(where: OptionSubscriptionWhereInput): OptionSubscriptionPayload
  poll(where: PollSubscriptionWhereInput): PollSubscriptionPayload
  recipient(where: RecipientSubscriptionWhereInput): RecipientSubscriptionPayload
  user(where: UserSubscriptionWhereInput): UserSubscriptionPayload
  vote(where: VoteSubscriptionWhereInput): VoteSubscriptionPayload
}

type User {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  polls(where: PollWhereInput, orderBy: PollOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Poll!]
  voted(where: PollWhereInput, orderBy: PollOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Poll!]
  votes(where: VoteWhereInput, orderBy: VoteOrderByInput, skip: Int, after: String, before: String, first: Int, last: Int): [Vote!]
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserConnection {
  pageInfo: PageInfo!
  edges: [UserEdge]!
  aggregate: AggregateUser!
}

input UserCreateInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  polls: PollCreateManyWithoutCreatorInput
  voted: PollCreateManyWithoutVotedInput
  votes: VoteCreateManyWithoutCreatorInput
  isActive: Boolean
}

input UserCreateManyWithoutVotedInput {
  create: [UserCreateWithoutVotedInput!]
  connect: [UserWhereUniqueInput!]
}

input UserCreateOneInput {
  create: UserCreateInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutPollsInput {
  create: UserCreateWithoutPollsInput
  connect: UserWhereUniqueInput
}

input UserCreateOneWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserCreateWithoutPollsInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  voted: PollCreateManyWithoutVotedInput
  votes: VoteCreateManyWithoutCreatorInput
  isActive: Boolean
}

input UserCreateWithoutVotedInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  polls: PollCreateManyWithoutCreatorInput
  votes: VoteCreateManyWithoutCreatorInput
  isActive: Boolean
}

input UserCreateWithoutVotesInput {
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  polls: PollCreateManyWithoutCreatorInput
  voted: PollCreateManyWithoutVotedInput
  isActive: Boolean
}

type UserEdge {
  node: User!
  cursor: String!
}

enum UserOrderByInput {
  id_ASC
  id_DESC
  firstName_ASC
  firstName_DESC
  lastName_ASC
  lastName_DESC
  email_ASC
  email_DESC
  password_ASC
  password_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type UserPreviousValues {
  id: ID!
  firstName: String!
  lastName: String!
  email: String!
  password: String!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type UserSubscriptionPayload {
  mutation: MutationType!
  node: User
  updatedFields: [String!]
  previousValues: UserPreviousValues
}

input UserSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: UserWhereInput
  AND: [UserSubscriptionWhereInput!]
  OR: [UserSubscriptionWhereInput!]
  NOT: [UserSubscriptionWhereInput!]
}

input UserUpdateDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  polls: PollUpdateManyWithoutCreatorInput
  voted: PollUpdateManyWithoutVotedInput
  votes: VoteUpdateManyWithoutCreatorInput
  isActive: Boolean
}

input UserUpdateInput {
  firstName: String
  lastName: String
  email: String
  password: String
  polls: PollUpdateManyWithoutCreatorInput
  voted: PollUpdateManyWithoutVotedInput
  votes: VoteUpdateManyWithoutCreatorInput
  isActive: Boolean
}

input UserUpdateManyWithoutVotedInput {
  create: [UserCreateWithoutVotedInput!]
  delete: [UserWhereUniqueInput!]
  connect: [UserWhereUniqueInput!]
  disconnect: [UserWhereUniqueInput!]
  update: [UserUpdateWithWhereUniqueWithoutVotedInput!]
  upsert: [UserUpsertWithWhereUniqueWithoutVotedInput!]
}

input UserUpdateOneRequiredInput {
  create: UserCreateInput
  update: UserUpdateDataInput
  upsert: UserUpsertNestedInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutPollsInput {
  create: UserCreateWithoutPollsInput
  update: UserUpdateWithoutPollsDataInput
  upsert: UserUpsertWithoutPollsInput
  connect: UserWhereUniqueInput
}

input UserUpdateOneRequiredWithoutVotesInput {
  create: UserCreateWithoutVotesInput
  update: UserUpdateWithoutVotesDataInput
  upsert: UserUpsertWithoutVotesInput
  connect: UserWhereUniqueInput
}

input UserUpdateWithoutPollsDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  voted: PollUpdateManyWithoutVotedInput
  votes: VoteUpdateManyWithoutCreatorInput
  isActive: Boolean
}

input UserUpdateWithoutVotedDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  polls: PollUpdateManyWithoutCreatorInput
  votes: VoteUpdateManyWithoutCreatorInput
  isActive: Boolean
}

input UserUpdateWithoutVotesDataInput {
  firstName: String
  lastName: String
  email: String
  password: String
  polls: PollUpdateManyWithoutCreatorInput
  voted: PollUpdateManyWithoutVotedInput
  isActive: Boolean
}

input UserUpdateWithWhereUniqueWithoutVotedInput {
  where: UserWhereUniqueInput!
  data: UserUpdateWithoutVotedDataInput!
}

input UserUpsertNestedInput {
  update: UserUpdateDataInput!
  create: UserCreateInput!
}

input UserUpsertWithoutPollsInput {
  update: UserUpdateWithoutPollsDataInput!
  create: UserCreateWithoutPollsInput!
}

input UserUpsertWithoutVotesInput {
  update: UserUpdateWithoutVotesDataInput!
  create: UserCreateWithoutVotesInput!
}

input UserUpsertWithWhereUniqueWithoutVotedInput {
  where: UserWhereUniqueInput!
  update: UserUpdateWithoutVotedDataInput!
  create: UserCreateWithoutVotedInput!
}

input UserWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  firstName: String
  firstName_not: String
  firstName_in: [String!]
  firstName_not_in: [String!]
  firstName_lt: String
  firstName_lte: String
  firstName_gt: String
  firstName_gte: String
  firstName_contains: String
  firstName_not_contains: String
  firstName_starts_with: String
  firstName_not_starts_with: String
  firstName_ends_with: String
  firstName_not_ends_with: String
  lastName: String
  lastName_not: String
  lastName_in: [String!]
  lastName_not_in: [String!]
  lastName_lt: String
  lastName_lte: String
  lastName_gt: String
  lastName_gte: String
  lastName_contains: String
  lastName_not_contains: String
  lastName_starts_with: String
  lastName_not_starts_with: String
  lastName_ends_with: String
  lastName_not_ends_with: String
  email: String
  email_not: String
  email_in: [String!]
  email_not_in: [String!]
  email_lt: String
  email_lte: String
  email_gt: String
  email_gte: String
  email_contains: String
  email_not_contains: String
  email_starts_with: String
  email_not_starts_with: String
  email_ends_with: String
  email_not_ends_with: String
  password: String
  password_not: String
  password_in: [String!]
  password_not_in: [String!]
  password_lt: String
  password_lte: String
  password_gt: String
  password_gte: String
  password_contains: String
  password_not_contains: String
  password_starts_with: String
  password_not_starts_with: String
  password_ends_with: String
  password_not_ends_with: String
  polls_every: PollWhereInput
  polls_some: PollWhereInput
  polls_none: PollWhereInput
  voted_every: PollWhereInput
  voted_some: PollWhereInput
  voted_none: PollWhereInput
  votes_every: VoteWhereInput
  votes_some: VoteWhereInput
  votes_none: VoteWhereInput
  isActive: Boolean
  isActive_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [UserWhereInput!]
  OR: [UserWhereInput!]
  NOT: [UserWhereInput!]
}

input UserWhereUniqueInput {
  id: ID
  email: String
}

type Vote {
  id: ID!
  option: Option!
  poll: Poll!
  creator: User!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VoteConnection {
  pageInfo: PageInfo!
  edges: [VoteEdge]!
  aggregate: AggregateVote!
}

input VoteCreateInput {
  option: OptionCreateOneWithoutVotesInput!
  poll: PollCreateOneInput!
  creator: UserCreateOneWithoutVotesInput!
  isActive: Boolean
}

input VoteCreateManyWithoutCreatorInput {
  create: [VoteCreateWithoutCreatorInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateManyWithoutOptionInput {
  create: [VoteCreateWithoutOptionInput!]
  connect: [VoteWhereUniqueInput!]
}

input VoteCreateWithoutCreatorInput {
  option: OptionCreateOneWithoutVotesInput!
  poll: PollCreateOneInput!
  isActive: Boolean
}

input VoteCreateWithoutOptionInput {
  poll: PollCreateOneInput!
  creator: UserCreateOneWithoutVotesInput!
  isActive: Boolean
}

type VoteEdge {
  node: Vote!
  cursor: String!
}

enum VoteOrderByInput {
  id_ASC
  id_DESC
  isActive_ASC
  isActive_DESC
  createdAt_ASC
  createdAt_DESC
  updatedAt_ASC
  updatedAt_DESC
}

type VotePreviousValues {
  id: ID!
  isActive: Boolean!
  createdAt: DateTime!
  updatedAt: DateTime!
}

type VoteSubscriptionPayload {
  mutation: MutationType!
  node: Vote
  updatedFields: [String!]
  previousValues: VotePreviousValues
}

input VoteSubscriptionWhereInput {
  mutation_in: [MutationType!]
  updatedFields_contains: String
  updatedFields_contains_every: [String!]
  updatedFields_contains_some: [String!]
  node: VoteWhereInput
  AND: [VoteSubscriptionWhereInput!]
  OR: [VoteSubscriptionWhereInput!]
  NOT: [VoteSubscriptionWhereInput!]
}

input VoteUpdateInput {
  option: OptionUpdateOneRequiredWithoutVotesInput
  poll: PollUpdateOneRequiredInput
  creator: UserUpdateOneRequiredWithoutVotesInput
  isActive: Boolean
}

input VoteUpdateManyWithoutCreatorInput {
  create: [VoteCreateWithoutCreatorInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutCreatorInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutCreatorInput!]
}

input VoteUpdateManyWithoutOptionInput {
  create: [VoteCreateWithoutOptionInput!]
  delete: [VoteWhereUniqueInput!]
  connect: [VoteWhereUniqueInput!]
  disconnect: [VoteWhereUniqueInput!]
  update: [VoteUpdateWithWhereUniqueWithoutOptionInput!]
  upsert: [VoteUpsertWithWhereUniqueWithoutOptionInput!]
}

input VoteUpdateWithoutCreatorDataInput {
  option: OptionUpdateOneRequiredWithoutVotesInput
  poll: PollUpdateOneRequiredInput
  isActive: Boolean
}

input VoteUpdateWithoutOptionDataInput {
  poll: PollUpdateOneRequiredInput
  creator: UserUpdateOneRequiredWithoutVotesInput
  isActive: Boolean
}

input VoteUpdateWithWhereUniqueWithoutCreatorInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutCreatorDataInput!
}

input VoteUpdateWithWhereUniqueWithoutOptionInput {
  where: VoteWhereUniqueInput!
  data: VoteUpdateWithoutOptionDataInput!
}

input VoteUpsertWithWhereUniqueWithoutCreatorInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutCreatorDataInput!
  create: VoteCreateWithoutCreatorInput!
}

input VoteUpsertWithWhereUniqueWithoutOptionInput {
  where: VoteWhereUniqueInput!
  update: VoteUpdateWithoutOptionDataInput!
  create: VoteCreateWithoutOptionInput!
}

input VoteWhereInput {
  id: ID
  id_not: ID
  id_in: [ID!]
  id_not_in: [ID!]
  id_lt: ID
  id_lte: ID
  id_gt: ID
  id_gte: ID
  id_contains: ID
  id_not_contains: ID
  id_starts_with: ID
  id_not_starts_with: ID
  id_ends_with: ID
  id_not_ends_with: ID
  option: OptionWhereInput
  poll: PollWhereInput
  creator: UserWhereInput
  isActive: Boolean
  isActive_not: Boolean
  createdAt: DateTime
  createdAt_not: DateTime
  createdAt_in: [DateTime!]
  createdAt_not_in: [DateTime!]
  createdAt_lt: DateTime
  createdAt_lte: DateTime
  createdAt_gt: DateTime
  createdAt_gte: DateTime
  updatedAt: DateTime
  updatedAt_not: DateTime
  updatedAt_in: [DateTime!]
  updatedAt_not_in: [DateTime!]
  updatedAt_lt: DateTime
  updatedAt_lte: DateTime
  updatedAt_gt: DateTime
  updatedAt_gte: DateTime
  AND: [VoteWhereInput!]
  OR: [VoteWhereInput!]
  NOT: [VoteWhereInput!]
}

input VoteWhereUniqueInput {
  id: ID
}
`