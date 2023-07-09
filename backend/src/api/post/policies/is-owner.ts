import { errors } from "@strapi/utils";
const { PolicyError } = errors

export default async (ctx, config, { strapi }) => {
  // Add your own logic here.
  strapi.log.info('In is-owner policy.');
  const isOwner = await strapi.service('api::post.post').checkIsOwner(ctx.params.id, ctx.state.user.id);
  if (!isOwner)
    throw new PolicyError("Not post owner!")
  return true;
};
