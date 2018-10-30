import { UserResolvers } from "../generated/graphqlgen";

export const User: UserResolvers.Type = {
  ...UserResolvers.defaultResolvers,
  polls: async (parent, args, ctx) => ctx.db.user({ id: parent.id }).polls(),
  voted: async (parent, args, ctx) => ctx.db.user({ id: parent.id }).voted(),
  votes: async (parent, args, ctx) => ctx.db.user({ id: parent.id }).votes()
};
