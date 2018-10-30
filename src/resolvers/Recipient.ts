import { RecipientResolvers } from "../generated/graphqlgen";

export const Recipient: RecipientResolvers.Type = {
  ...RecipientResolvers.defaultResolvers,
  poll: async (parent, args, ctx) => ctx.db.vote({ id: parent.id }).poll()
};
