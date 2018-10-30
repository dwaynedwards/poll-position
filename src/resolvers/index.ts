import { Resolvers } from "../generated/graphqlgen";

import { Query } from "./Query";
import { Mutation } from "./Mutation";
import { AuthPayload } from "./AuthPayload";
import { User } from "./User";
import { Poll } from "./Poll";
import { Option } from "./Option";
import { Vote } from "./Vote";

export const resolvers: Resolvers = {
  Query,
  Mutation,
  AuthPayload,
  User,
  Poll,
  Option,
  Vote
};
