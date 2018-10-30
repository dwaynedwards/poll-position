// This resolver file was scaffolded by github.com/prisma/graphqlgen, DO NOT EDIT.
// Please do not import this file directly but copy & paste to your application code.

import { VoteResolvers } from "../generated/graphqlgen";

export const Vote: VoteResolvers.Type = {
  ...VoteResolvers.defaultResolvers,
  option: async (parent, args, ctx) => ctx.db.vote({ id: parent.id }).option(),
  poll: async (parent, args, ctx) => ctx.db.vote({ id: parent.id }).poll(),
  creator: async (parent, args, ctx) => ctx.db.vote({ id: parent.id }).creator()
};
