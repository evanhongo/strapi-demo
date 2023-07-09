/**
 * post service
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreService('api::post.post', ({ strapi }) => ({
  async checkIsOwner(postId: number, userId: number) {
    const post = await strapi.entityService.findOne('api::post.post', postId, {
      fields: ['id'],
      populate: { author: true }
    });
    return userId === post.author.id;
  },

}));
