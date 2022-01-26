'use strict';

/**
 * candidate-response router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::candidate-response.candidate-response', {
  config: {
    create: {
      middlewares: [
        'api::candidate-response.send-mail',
      ]
    }
  }
});
