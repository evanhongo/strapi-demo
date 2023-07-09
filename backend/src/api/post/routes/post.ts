/**
 * post router
 */

import { factories } from '@strapi/strapi';

export default factories.createCoreRouter('api::post.post', {
  config: {
    delete: {
      policies: ["is-owner"],
    },
    update: {
      policies: ["is-owner"],
    },
  },
  only: null,
});
