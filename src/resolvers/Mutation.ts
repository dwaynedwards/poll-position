import { hash, compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { MutationResolvers } from "../generated/graphqlgen";
import { APP_SECRET, getUserId } from "../utils";

export const Mutation: MutationResolvers.Type = {
  register: async (_parent, { password, firstName, lastName, email }, ctx) => {
    const hashedPassword = await hash(password, 10);
    const user = await ctx.db.createUser({
      firstName,
      lastName,
      email,
      password: hashedPassword
    });
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  login: async (_parent, { email, password }, ctx) => {
    const user = await ctx.db.user({ email });
    if (!user) {
      throw new Error(`No user found for email: ${email}`);
    }
    const valid = await compare(password, user.password);
    if (!valid) {
      throw new Error("Invalid password");
    }
    return {
      token: sign({ userId: user.id }, APP_SECRET),
      user
    };
  },
  createPoll: async (parent, { title, description, options }, ctx) => {
    const userId = await getUserId(ctx);
    const poll = await ctx.db.createPoll({
      title,
      description,
      creator: { connect: { id: userId } }
    });
    options.forEach(
      async o =>
        await ctx.db.createOption({
          description: o,
          poll: { connect: { id: poll.id } },
          creator: { connect: { id: userId } }
        })
    );
    return poll;
  },
  updatePollTitle: async (parent, { id, title }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { title }
    });
  },
  updatePollDescription: async (parent, { id, description }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { description }
    });
  },
  updatePollTitleAndDescription: async (
    parent,
    { id, title, description },
    ctx
  ) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { title, description }
    });
  },
  updatePollAccess: async (parent, { id, access }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { access }
    });
  },
  deletePoll: async (parent, { id }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { isActive: false }
    });
  },
  publishPoll: async (parent, { id }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { isPublished: true }
    });
  },
  unpublishPoll: async (parent, { id }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { isPublished: false }
    });
  },
  closePoll: async (parent, { id }, ctx) => {
    return await ctx.db.updatePoll({
      where: { id },
      data: { isClosed: true }
    });
  },
  addPollRecipients: async (parent, { id, recipients }, ctx) => {
    const currentRecipients = (await ctx.db.poll({ id }).recipients()).map(
      r => r.email
    );
    const emails = recipients.filter(r => !currentRecipients.includes(r));
    const newRecipients = emails.map(
      async email =>
        await ctx.db.createRecipient({
          email,
          poll: { connect: { id } }
        })
    );
    return Promise.all(newRecipients);
  },
  removePollRecipients: async (parent, { id, recipients }, ctx) => {
    await ctx.db.deleteManyRecipients({
      AND: [{ poll: { id } }, { email_in: recipients }]
    });
    return await ctx.db.recipients({ where: { poll: { id } } });
  },
  createPollOptions: async (parent, { pollId, descriptions }, ctx) => {
    const userId = await getUserId(ctx);
    const newOptions = descriptions.map(
      async description =>
        await ctx.db.createOption({
          description,
          poll: { connect: { id: pollId } },
          creator: { connect: { id: userId } }
        })
    );
    return Promise.all(newOptions);
  },
  updatePollOptionDescription: async (parent, { id, description }, ctx) => {
    return await ctx.db.updateOption({
      where: { id },
      data: { description }
    });
  },
  deletePollOption: async (parent, { id }, ctx) => {
    return await ctx.db.updateOption({
      where: { id },
      data: { isActive: false }
    });
  },
  createPollVote: async (parent, { optionId }, ctx) => {
    const userId = await getUserId(ctx);
    const pollId = await ctx.db
      .option({ id: optionId })
      .poll()
      .id();
    const vote = ctx.db.createVote({
      option: { connect: { id: optionId } },
      poll: { connect: { id: pollId } },
      creator: { connect: { id: userId } }
    });
    await ctx.db.updatePoll({
      where: { id: pollId },
      data: { voted: { connect: { id: userId } } }
    });
    return vote;
  },
  updatePollVote: async (parent, { id, optionId }, ctx) => {
    return await ctx.db.updateVote({
      where: { id },
      data: { option: { connect: { id: optionId } } }
    });
  }
};
