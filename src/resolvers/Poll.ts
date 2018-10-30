import { PollResolvers } from "../generated/graphqlgen";

export const Poll: PollResolvers.Type = {
  ...PollResolvers.defaultResolvers,
  options: async (parent, args, ctx) =>
    ctx.db.poll({ id: parent.id }).options(),
  recipients: async (parent, args, ctx) =>
    ctx.db.poll({ id: parent.id }).recipients(),
  voted: async (parent, args, ctx) => ctx.db.poll({ id: parent.id }).voted(),
  creator: async (parent, args, ctx) => ctx.db.poll({ id: parent.id }).creator()
};
