import { QueryResolvers } from "../generated/graphqlgen";
import { getUserId } from "../utils";

export const Query: QueryResolvers.Type = {
  me: async (parent, args, ctx) => {
    const userId = await getUserId(ctx);
    return ctx.db.user({ id: userId });
  },
  publishedUserPolls: async (parent, args, ctx) => {
    const userId = await getUserId(ctx);
    return ctx.db.polls({
      where: { AND: [{ creator: { id: userId } }, { isPublished: true }] }
    });
  },
  unpublishedUserPolls: async (parent, args, ctx) => {
    const userId = await getUserId(ctx);
    return await ctx.db.polls({
      where: { AND: [{ creator: { id: userId } }, { isPublished: false }] }
    });
  },
  allPublicPolls: async (parent, args, ctx) => {
    return await ctx.db.polls({
      where: { AND: [{ access: "PUBLIC" }, { isPublished: true }] }
    });
  },
  allPrivatePolls: async (parent, args, ctx) => {
    const userId = await getUserId(ctx);
    const user = await ctx.db.user({ id: userId });
    return await ctx.db.polls({
      where: {
        AND: [
          { access: "PRIVATE" },
          { recipients_some: { email: user.email } },
          { isPublished: true }
        ]
      }
    });
  },
  poll: async (parent, { id }, ctx) => ctx.db.poll({ id })
};
