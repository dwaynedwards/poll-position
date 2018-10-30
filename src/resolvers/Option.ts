import { OptionResolvers } from "../generated/graphqlgen";

export const Option: OptionResolvers.Type = {
  ...OptionResolvers.defaultResolvers,
  votes: async (parent, args, ctx) => ctx.db.option({ id: parent.id }).votes(),
  poll: async (parent, args, ctx) => ctx.db.option({ id: parent.id }).poll(),
  creator: async (parent, args, ctx) =>
    ctx.db.option({ id: parent.id }).creator()
};
