'use strict';

/**
 * client-response router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::client-response.client-response');
