import { rule, and, or, shield } from "graphql-shield";
import { getUserId } from "../utils";

const rules = {
  isAuthorizedUser: rule()(async (_parent, args, ctx) => {
    const userId = await getUserId(ctx);
    return !!userId;
  }),
  isPollOwner: rule()(async (_parent, { id }, ctx) => {
    const userId = await getUserId(ctx);
    const creator = await ctx.db.poll({ id }).creator();
    return userId === creator.id;
  }),
  canUpdatePoll: rule()(async (_parent, { id }, ctx) => {
    const poll = await ctx.db.poll({ id });
    if (poll.isPublished) {
      return new Error("Poll must be unpublished to be updated");
    }
    return true;
  }),
  canAccessPoll: rule()(async (_parent, { id }, ctx) => {
    const userId = await getUserId(ctx);
    const user = await ctx.db.user({ id: userId });
    const recipients = await ctx.db
      .poll({ id })
      .recipients({ where: { email: user.email } });
    const poll = await ctx.db.poll({ id });
    const isPublic = (await poll.access) == "PUBLIC";
    const isAccessible =
      recipients.length > 0 &&
      poll.isPublished &&
      poll.isActive &&
      !poll.isClosed;
    if (!isPublic && isAccessible) {
      return new Error("Poll is not accessible");
    }
    return true;
  }),
  canVote: rule()(async (_parent, { optionId }, ctx) => {
    const userId = await getUserId(ctx);
    const user = await ctx.db.user({ id: userId });
    const pollId = await ctx.db
      .option({ id: optionId })
      .poll()
      .id();
    const poll = await ctx.db.poll({ id: pollId });
    const recipients = await ctx.db
      .poll({ pollId })
      .recipients({ where: { email: user.email } });
    const isPublic = (await poll.access) == "PUBLIC";
    const isAccessible =
      recipients.length > 0 &&
      poll.isPublished &&
      poll.isActive &&
      !poll.isClosed;
    if (!isPublic && isAccessible) {
      return new Error("Poll is not accessible");
    }
    if (
      (await ctx.db.user({ id: userId }).voted({ where: { id: pollId } }))
        .length != 0
    ) {
      return new Error("You have already voted on this poll");
    }
    return true;
  }),
  canUpdateVote: rule()(async (_parent, { id }, ctx) => {
    const userId = await getUserId(ctx);
    const user = await ctx.db.user({ id: userId });
    const pollId = await ctx.db
      .vote({ id })
      .poll()
      .id();
    const poll = await ctx.db.poll({ id: pollId });
    const recipients = await ctx.db
      .poll({ pollId })
      .recipients({ where: { email: user.email } });
    const isPublic = (await poll.access) == "PUBLIC";
    const isAccessible =
      recipients.length > 0 &&
      poll.isPublished &&
      poll.isActive &&
      !poll.isClosed;
    if (!isPublic && isAccessible) {
      return new Error("Poll is not accessible");
    }
    return true;
  })
};

export const permissions = shield({
  Query: {
    me: rules.isAuthorizedUser,
    publishedUserPolls: rules.isAuthorizedUser,
    unpublishedUserPolls: rules.isAuthorizedUser,
    allPublicPolls: rules.isAuthorizedUser,
    allPrivatePolls: rules.isAuthorizedUser,
    poll: or(
      rules.isPollOwner,
      and(rules.isAuthorizedUser, rules.canAccessPoll)
    )
  },
  Mutation: {
    createPoll: rules.isAuthorizedUser,
    updatePollTitle: and(rules.isPollOwner, rules.canUpdatePoll),
    updatePollDescription: and(rules.isPollOwner, rules.canUpdatePoll),
    updatePollTitleAndDescription: and(rules.isPollOwner, rules.canUpdatePoll),
    deletePoll: rules.isPollOwner,
    publishPoll: rules.isPollOwner,
    unpublishPoll: rules.isPollOwner,
    closePoll: rules.isPollOwner,
    addPollRecipients: rules.isPollOwner,
    removePollRecipients: rules.isPollOwner,
    updatePollAccess: rules.isPollOwner,
    createOption: and(rules.isPollOwner, rules.canUpdatePoll),
    updateOptionDescription: and(rules.isPollOwner, rules.canUpdatePoll),
    deleteOption: rules.isPollOwner,
    createPollVote: and(rules.isAuthorizedUser, rules.canVote),
    updatePollVote: and(rules.isAuthorizedUser, rules.canUpdateVote)
  }
});
